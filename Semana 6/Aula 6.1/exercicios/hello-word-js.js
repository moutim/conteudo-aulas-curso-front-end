function mostrarMenuEescolherOpcao() {
  const opcaoEscolhida = prompt(
    "---- Menu ---- \n" +
    "1 - Somar dois números \n" +
    "2 - Par ou Ímpar \n" +
    "3 - Tabuada \n" +
    "4 - Mensagem 10x \n" +
    "5 - Sair \n" +
    "Escolha uma opção"
  )

  return opcaoEscolhida
}

function somaDoisNumeros() {
  const numero1 = Number(prompt("Digite o primeiro número: "))
  const numero2 = Number(prompt("Digite o segundo número: "))

  const soma = numero1 + numero2

  alert(`A soma dos dois números é ${soma}`)

  return soma
}

function inicioCalculadora() {
  let opcaoEscolhida = 0

  while(opcaoEscolhida != 5) {
    opcaoEscolhida = Number(mostrarMenuEescolherOpcao())

    switch (opcaoEscolhida) {
      case 1:
        somaDoisNumeros()
        break;
      default:
        break;
    }
  }
}

inicioCalculadora()