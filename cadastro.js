const form = document.getElementById("formCadastro");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", function(event){

    event.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("confirmarSenha").value;

    if(senha !== confirmarSenha){

        mensagem.textContent = "As senhas não coincidem.";
        mensagem.style.color = "red";

        return;
    }

    localStorage.setItem("email", email);
    localStorage.setItem("senha", senha);

    mensagem.textContent = "Cadastro realizado com sucesso!";
    mensagem.style.color = "green";

    setTimeout(() => {
        window.location.href = "index-login.html";
    }, 2000);

});