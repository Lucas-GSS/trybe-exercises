# para declarar uma função utiliza-se a palavra reservada def, seguida pelo
# nome da função e parâmetros entre paranteses


def soma(x, y):
    return x + y


# uma das formas de chamar funções que recebem parâmetros é seguindo a ordem
# dos parâmetros definido na declaração da função
print(soma(6, 1))


def subtracao(a, b):
    return a - b


# outra forma é usando parametros nomeados, sendo assim a ordem da declaração
# não precisa ser seguida
print(subtracao(b=10, a=9))


# é possível usar valores padrões para os parametros, caso a função seja
# chamada sem recebê-los seu retorno é baseado nesses valores
def multiplicacao(c=1, d=7):
    return c * d


# para receber um numero variável de parâmetros utiliza-se *args, assim os
# parametros recebido são armazenados em uma tupla
# o nome args é uma convenção entre devs de python, outro nome pode ser usado
def print_num(*args):
    print(args)
    for num in args:
        if num > 30:
            print(num)


print_num(10, 32, 24, 70, 89, 53)

# para um número variável de parâmetos nomeados utiliza-se **kwargs, os
# parâmetros serão armazenados em um dict
# kwargs também é uma convenção


def dados_pessoais(**kwargs):
    print(type(kwargs))
    print(kwargs.items())
    for chave, valor in kwargs.items():
        print(f"{chave}: {valor}")


dados_pessoais(nome="Lucas", idade=25, altura=1.85, habilitado=True)

# função de uma linha


def divisao(a, b):
    return a // b


print(divisao(9, 3))

# docstring no python são comentários que são utiliados em funções, classes,
# métodos que servem para documentar o bloco de
# código em que está. É acessível por meio do atributo __doc__


def quadrado(n):
    """Função que recebe n e retorna seu valor elevado ao quadrado"""
    return n**2


print(quadrado.__doc__)
print(print.__doc__)
