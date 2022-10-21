# Estruturas de dados que armazenam elementos de forma sequencial. Ela é mutável, aceita diferentes tipos e dados
# semanticamente serve para armazenar dados distintos relacionados de alguma forma. Ex: lista de compras ou de ingredientes

trybe_course = ["Introdução", "Front-end", "Back-end"]
trybe_course.append("Ciência da computação")
print(trybe_course)
trybe_course[0] = "Fundamentos"
print(trybe_course.__len__())
print(trybe_course)
