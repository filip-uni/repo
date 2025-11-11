const button = document.getElementById("buton");
const nume = document.getElementById("nume");
const descriere = document.getElementById("student");
const educatie = document.getElementById("educatie");
const pasiuni = document.getElementById("pasiuni");
const poza = document.getElementById("poza");
const pagina = document.getElementById("pagina");

button.addEventListener("click", function ()
{
    nume.textContent = ("Dr. Ing. Acad. Alexandru Filip");
    descriere.textContent = ("Inginer Electronic");
    educatie.innerHTML = ("<h2>Realizari</h2> <p>absolvent ETTI</p>");
    pasiuni.innerHTML = ("<h2>Experiente: </h2> <p>tăt felu</p>");
    
    poza.src = "images/alta_poza.jpg";
    poza.alt = "alta poza foarte originala";
    poza.style.opacity = "0.5";
    poza.style.border = "5px solid black";

    pagina.style.backgroundColor = "#1a1a1aff";
    pagina.style.color = "#f1f1f1";
    pagina.style.fontFamily = "Arial, Helvetica, sans-serif";
});

const anNastere = document.getElementById("anNastere");
const anCurent = new Date().getFullYear();
const varsta = anCurent - parseInt(anNastere.textContent);
anNastere.onmouseover = function()
{
    anNastere.textContent
}

const submit = document.getElementById("submit");
submit.addEventListener("click", function(event)
{
    event.preventDefault();
    const email = document.getElementById("email").value;
    if (email.includes("@"))
    {
        console.log("adresa valida");
    }
    else
    {
        console.log("adresa inalida");
    }
});