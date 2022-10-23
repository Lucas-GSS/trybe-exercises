from inspect import _void


def imprime_nome_na_vertical(nome: str):
    for letra in nome:
        print(letra.upper())


nome = input("Digite seu nome: ")

imprime_nome_na_vertical(nome)