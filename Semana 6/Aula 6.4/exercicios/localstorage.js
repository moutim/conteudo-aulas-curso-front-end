localStorage.setItem('nome', 'Vitor')

const nome = localStorage.getItem('nome')
console.log(nome)

localStorage.removeItem('nome')

const nome2 = localStorage.getItem('nome')
console.log(nome2)

localStorage.clear()

const informacoes = {
  nome: "Vitor",
  sobrenome: "Moutim"
}
const json = JSON.stringify(informacoes)
localStorage.setItem('informacoes', json)
console.log(informacoes.nome);


const informacoesLocalStorage = localStorage.getItem('informacoes')
console.log(typeof informacoesLocalStorage);
console.log('JSON retornado pelo localstorage', informacoesLocalStorage);

const informacoesParse = JSON.parse(informacoesLocalStorage)
console.log(typeof informacoesParse)
console.log('JSON convertido para objeto', informacoesParse)

