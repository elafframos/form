const nome = document.querySelector('.nome')
const email = document.querySelector('.email')
const cpf = document.querySelector('.cpf')
const senha = document.querySelector('.senha')
const modal = document.getElementById("modal")
const mensagem = document.getElementById("mensagemModal")
const fechar = document.querySelector(".fechar")

document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    event.preventDefault()

    mensagem.innerHTML = `Cadastrado com sucesso!<br><br>NOME: ${nome.value}
                                                      <br>E-MAIL: ${email.value}
                                                      <br>CPF: ${cpf.value}
                                                      <br>SENHA: ${senha.value}`
    modal.style.display = "flex";
})

fechar.addEventListener("click", function() {
    modal.style.display = "none"
})

window.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
})