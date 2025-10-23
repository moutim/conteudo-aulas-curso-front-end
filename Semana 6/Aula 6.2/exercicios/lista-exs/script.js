const botaoEx1 = document.querySelector('.ex-1')
botaoEx1.addEventListener('click', function() {
  const titulo = document.getElementById('titulo')
  titulo.innerText = "Título modificado pelo JS"
})

function trocaCorParagrafo() {
  const paragrafo = document.querySelector('.paragrafo')
  paragrafo.style.color = "#e80170"
}

const botaoEx2 = document.querySelector('.ex-2')
botaoEx2.addEventListener('click', trocaCorParagrafo)

const botaoEx3 = document.querySelector('.ex-3')
botaoEx3.addEventListener('click', function() {
  alert('Exercicio 3 feito!')
})