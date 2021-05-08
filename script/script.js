const dadosForm = document.getElementById('dadosFormulario')

dadosForm.addEventListener('submit', function (naoF5){
  naoF5.preventDefault()

let nome = document.getElementById('nome').value;
let email = document.getElementById('email').value;
let mensagem = document.getElementById('mensagem').value;


fetch('https://webhook.site/0909fa15-e854-4a8a-b599-cbfb3bec4dc6', {
    method: 'POST',
    body: JSON.stringify({
        name: nome,
        email: email,
        mensagem: mensagem
    })
}).then( response => {
    alert('Mensagem enviada')
})
})