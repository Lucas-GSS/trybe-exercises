try:
    int(input("Digite um número: "))
except ValueError:
    print('É pra digitar número, não letra. Burro!')


try:
  open('naoExiste.txt', mode='r')
except OSError:
    print('Deu ruim')
finally:
    print('Tentando manipular arquivo')


with open('./fixacao/bcs.txt') as file:
    print(file.read())