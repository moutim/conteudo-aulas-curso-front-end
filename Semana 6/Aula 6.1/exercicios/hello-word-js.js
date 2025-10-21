const nome = "Vitor"
const sobrenome = "Moutim"
const moradorDoGrajau = true

console.log("Meu nome completo é", nome, " ", sobrenome)
console.log(`Meu nome completo é ${nome} ${sobrenome}`)

const numero1 = 10
const numero2 = 20
const soma = numero1 + numero2
console.log(`O resultado é ${soma}`);
console.log(typeof moradorDoGrajau);

const notas = [5, 10, 5, 9]
let somaDasNotas = 0
for (let index = 0; index < notas.length; index++) {
  somaDasNotas += notas[index]
}
const media = somaDasNotas / notas.length;
console.log(somaDasNotas);
console.log(`A média das notas é ${media}`)
