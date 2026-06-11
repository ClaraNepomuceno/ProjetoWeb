// Aguarda o DOM carregar completamente
document.addEventListener("DOMContentLoaded", function() {
    
    // ===== CÓDIGO PARA A PÁGINA DE RECUPERAÇÃO =====
    const form = document.getElementById("formRecuperacao");
    
    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            
            const email = document.getElementById("email").value;
            
            // Salva o email para usar na próxima página
            localStorage.setItem("emailRecuperacao", email);
            
            // Redireciona
            window.location.href = "email-enviado.html";
        });
    }
    
    // ===== CÓDIGO PARA A PÁGINA DE E-MAIL ENVIADO =====
    const emailSpan = document.getElementById("emailUsuario");
    
    if (emailSpan) {
        const emailRecuperado = localStorage.getItem("emailRecuperacao");
        if (emailRecuperado) {
            emailSpan.textContent = emailRecuperado;
        } else {
            emailSpan.textContent = "não informado";
        }
    }
    
});