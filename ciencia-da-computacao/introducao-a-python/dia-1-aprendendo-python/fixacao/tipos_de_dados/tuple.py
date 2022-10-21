# similares a listas, porém não podem ser alteradas após sua definição. além do mais é definida por ();
# semanticamente é usada para aramzenar dados diferentes sobre uma entidade. Ex: nome, idade, e profissão de uma pessoa;

eu = ("Lucas", "Silva", 25, "Back-end Developer")
print(eu)
print(eu[3])
eu[
    0
] = "João"  # lança um erro pois itens em uma tupla não podem ser alterados após sua definição
