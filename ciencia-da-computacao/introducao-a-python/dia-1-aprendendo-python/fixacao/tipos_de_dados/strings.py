nome = 'Lucas Gabriel'

# fatiamento de string, [inicio, fim]
print(nome[0:5])

frase = "Are you in legal trouble? You better call Saul"


def contar_quantidade_de_cade_letra(frase: str) -> dict:
    resultado = {}
    for letra in frase:
        if letra in resultado:
            resultado[letra] += 1
        else:
            resultado[letra] = 1
    return resultado


print(contar_quantidade_de_cade_letra(frase))
