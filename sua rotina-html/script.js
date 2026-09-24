const form = document.getElementById("loginForm");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    // Login de exemplo
    if (email === "admin@gmail.com" && senha === "123456") {
        mensagem.textContent = "Login realizado com sucesso!";
        mensagem.style.color = "green";
         window.location.href = "index.html";

    } else {
        mensagem.textContent = "E-mail ou senha incorretos.";
        mensagem.style.color = "red";
    }
});