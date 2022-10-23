with open('./fixacao/alunos.txt', mode='r') as file:
    conteudo = file.readlines()
    for linha in conteudo:
        if int(linha.split()[1]) < 6:
            print(linha.split()[0])
