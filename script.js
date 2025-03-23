const nome = document.querySelector('.nome')
const email = document.querySelector('.email')
const cpf = document.querySelector('.cpf')
const senha = document.querySelector('.senha')
const modal = document.getElementById("modal")
const mensagem = document.getElementById("mensagemModal")
const fechar = document.getElementById("fechar")

document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    event.preventDefault()

    let formData = new FormData()
    formData.append("nome", nome.value)
    formData.append("email", email.value)
    formData.append("cpf", cpf.value)
    formData.append("senha", senha.value)

    fetch('validar.php', {
        method: "POST",
        body: formData
    })
    .then(res => {
        if (!res.ok) {
            throw new Error('Não foi possivel fazer o cadastro')
        }
        return res.json()
    })
    .then(data => {
        if (data.erros.length > 0) {
            mensagem.innerHTML = `<p style="color:red;">${data.erros.join("<br>")}</p>`
        } else {
            mensagem.innerHTML = `<p style="color:green;">Cadastrado com sucesso!</p>
                                  <br><strong>Nome:</strong> ${data.nome}
                                  <br><strong>E-mail:</strong> ${data.email}
                                  <br><strong>CPF:</strong> ${data.cpf}`
        }
        modal.style.display = "flex"
    })
    .catch(error => {
        mensagem.innerHTML = `<p style="color:red;">Erro: ${error.message}</p>`
        modal.style.display = "flex"
    })
})

fechar.addEventListener("click", function() {
    modal.style.display = "none"
})

window.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none"
    }
})
