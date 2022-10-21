# Conjunto ou set é uma coleção de elementos ÚNICOS e não ordenados fornecem operações como união, intersecção, etc...
# semanticamente são usados para agrupar dados por categorias.

conjunto_vazio = set()

admins = {"Lucas", "Bryan", "Brad", "Quentin"}
users = {"Lucas", "Gabriel", "João", "Mateus"}

print(admins.intersection(users))  # printa os nomes que além de admins são usuários
print(
 admins.difference(users)
)  # printa as diferenças entre os set, neste caso os admins que não são usuários
print(users.union(admins))  # printa a união dos usuários com adm
print(users)
print(admins)

var = set()
var.add("Lucas")
print(var)

imutavel = frozenset(
    ["ola", "pessoas"]
)  # uma variação do set que não pode ser alterado durante a execução do programa
print(
    imutavel.union({"belê?"})
)  # mas novos conjuntos imutaveis podem ser criados a partir dele
