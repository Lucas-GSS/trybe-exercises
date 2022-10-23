nome = input('Digite seu nome: ')
contador = 0
while contador < len(nome):
    if contador == 0:
        print(nome)
    else: 
        print(nome[:-contador])
    contador += 1