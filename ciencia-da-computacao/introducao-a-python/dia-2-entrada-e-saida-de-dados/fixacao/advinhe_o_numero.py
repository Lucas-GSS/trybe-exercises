from random import random

import random


print("Olá! Teste sua sorte e digite um número:")
chute = int(input())
numero_aleatorio = random.randint(1, 10)

while chute != numero_aleatorio:
    print("Errou! Tente novamente:")
    chute = int(input())

print(f"Parabéns! O número da sorte foi: {numero_aleatorio}")