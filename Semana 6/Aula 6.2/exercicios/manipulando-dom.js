const h1 = document.getElementById('h1-html')
console.log(h1)

const h2 = document.querySelector('.h2-html')
console.log(h2);

const p = document.querySelectorAll('p')
console.log(p);

const botao = document.querySelector('.botao-click')
console.log(botao);
botao.addEventListener('click', function() {
  h1.innerText = "Semana 6 - Manipulando o DOM"

  const caixaTexto = document.querySelector('.caixa-textos')
  const h4 = document.createElement('h4')
  h4.innerText = "Eu sou um H4"
  caixaTexto.appendChild(h4)

  const body = document.querySelector('body')
  body.classList.remove('modo-claro')
  body.classList.add('modo-escuro')
})

