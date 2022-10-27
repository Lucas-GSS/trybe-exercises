# Para que não seja executado em outro módulo caso a função não tenha sido chamada la explicitamente


def is_odd(number):
    "Retorna True se o número é ímpar, senão False."
    return number % 2 != 0

def sum(num1, num2):
        return num1 + num2


def divide(num1, num2):
    return num1 / num2