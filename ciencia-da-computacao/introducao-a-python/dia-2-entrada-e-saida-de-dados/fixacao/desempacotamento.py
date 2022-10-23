# desempacotar valores que possuem length 2 é só declarar as variáveis e atribuir python vai seguir a ordem da esq p dir
a, b = "LG"
print(a)
print(b)

nome, sobrenome = {"Bryan", "Johnson"}
print(f"Nome: {nome}; Sobrenome: {sobrenome}")
# o asterisco faz com que os elementos sejam atribuídos à variável em forma de lista
head, *tail = (1, 2, 3, 4, 5)

print(head)
print(tail)

c, *d = "Lucas Gabriel"
print(c)
print(d)