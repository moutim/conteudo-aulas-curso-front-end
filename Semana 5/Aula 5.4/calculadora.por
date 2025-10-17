programa
{
	funcao inicio()
	{
		inteiro opcaoEscolhida = 0

		enquanto(opcaoEscolhida != 5) {
			escreva("\n--- MENU ---\n")
			escreva("1 - Somar \n")
			escreva("2 - Par ou Ímpar \n")
			escreva("3 - Tabuada \n")
			escreva("4 - Mensagem 10x \n")
			escreva("5 - Sair \n")
			escreva("Escolha uma opção: ")

			leia(opcaoEscolhida)

			escolha(opcaoEscolhida) {
				caso 1:
					escreva("\n--- Inicio da função de soma --- \n")
					
					real num1
					real num2

					escreva("Digite o primeiro número: ")
					leia(num1)

					escreva("Digite o segundo número: ")
					leia(num2)

					real soma = num1 + num2

					escreva("O Resultado da soma é: ", soma,"\n")

					escreva("--- FIM da função de soma --- \n")
					pare
				caso 2:
					escreva("\n--- Inicio da função de par ou ímpar --- \n")

					inteiro num
					
					escreva("Digite um número: ")
					leia(num)

					se ((num % 2) == 0) {
						escreva("O número ", num, " é par\n")	
					} senao {
						escreva("O número ", num, " é ímpar\n")	
					}

					escreva("--- FIM da função de par ou ímpar --- \n")
					pare
				caso 3:
					escreva("\n--- Inicio da função de tabuada --- \n")

					inteiro numeroTabuada = 5
					escreva("Digite o número da tabuada que você quer: ")
					leia(numeroTabuada)

					para (inteiro i = 1; i <= 10; i++) {
						inteiro total = numeroTabuada * i
						escreva(numeroTabuada, " x ", i, " = ", total, "\n")
					}
					escreva("--- FIM da função de tabuada --- \n")
					pare
				caso 4:
					escreva("\n--- Inicio da função de mensagem --- \n")

					cadeia mensagem
					escreva("Digite uma mensagem para mostrar ela 10x: ")
					leia(mensagem)

					para (inteiro i = 1; i <= 10; i++) {
						escreva(mensagem, "\n")
					}

					escreva("\n--- FIM da função de mensagem --- \n")
					pare
				caso 5:
					escreva("Obrigado por utilizar!!")
					pare
				caso contrario:
					escreva("Opção inválida! Digite uma opção de 1 a 4 \n")
			}
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1736; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */