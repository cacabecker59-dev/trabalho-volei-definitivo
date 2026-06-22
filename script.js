const darkBtn = document.getElementById("darkMode");

darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

const form = document.getElementById("formContato");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    alert("Mensagem enviada com sucesso!");
    form.reset();
});