// Change this to your own WhatsApp number (country code, no + or spaces)
const WHATSAPP = "923000000000";

const fabrics = [
  {n:"Printed cotton lawn",c:"Summer",p:1200,t:"p-dots",a:"#B8323F",b:"#F3C9CD",d:"Light, breathable, soft after washing"},
  {n:"Cambric",c:"Summer",p:950,t:"p-stripe",a:"#23306B",b:"#F3F5F7",d:"Smooth and cool for everyday wear"},
  {n:"Linen blend",c:"Summer",p:2200,t:"p-plain",a:"#C9B79C",b:"",d:"Textured, airy, holds its shape"},
  {n:"Wash and wear",c:"Summer",p:800,t:"p-check",a:"#1F5B4A",b:"#CFE3DA",d:"Needs no ironing, good for daily use"},
  {n:"Khaddar",c:"Winter",p:1500,t:"p-stripe",a:"#1F5B4A",b:"#E3EEE8",d:"Thick cotton with a warm hand feel"},
  {n:"Karandi",c:"Winter",p:2000,t:"p-check",a:"#B8323F",b:"#F3C9CD",d:"Heavy weave, warm without bulk"},
  {n:"Wool shawl cloth",c:"Winter",p:2600,t:"p-plain",a:"#6B4A3A",b:"",d:"Soft wool for shawls and coats"},
  {n:"Chiffon",c:"Formal",p:1800,t:"p-dots",a:"#E9A920",b:"#FBE7B0",d:"Sheer and flowing, for dupattas and party wear"},
  {n:"Boski",c:"Formal",p:3200,t:"p-plain",a:"#23306B",b:"",d:"Silky finish, a classic for men's suits"}
];

const grid = document.getElementById("grid");
const wa = (text) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;

function render(filter) {
  grid.innerHTML = fabrics
    .filter(f => filter === "all" || f.c === filter)
    .map(f => `
      <article class="card">
        <i class="sw ${f.t}" style="--a:${f.a};--b:${f.b}"></i>
        <div class="body">
          <h3>${f.n}</h3>
          <p class="meta">${f.d}</p>
          <p class="price">Rs ${f.p.toLocaleString()} per meter</p>
          <a class="btn" href="${wa("Hello, I want to order " + f.n + " (Rs " + f.p + "/meter). Quantity: ")}">Order on WhatsApp</a>
        </div>
      </article>`).join("");
}

document.querySelectorAll(".filters button").forEach(b => {
  b.addEventListener("click", () => {
    document.querySelectorAll(".filters button").forEach(x => x.classList.remove("on"));
    b.classList.add("on");
    render(b.dataset.f);
  });
});

document.getElementById("wa-general").href = wa("Hello, I have a question about your fabrics.");
document.getElementById("yr").textContent = new Date().getFullYear();
render("all");
