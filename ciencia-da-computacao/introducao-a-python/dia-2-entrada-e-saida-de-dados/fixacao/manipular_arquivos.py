# a função open permite abrir arquivos para minapular. O tipo de ação no arquivo é definido pelo param mode
# após a manipulação o arquivo deve ser fechado, senão ficará abrindo arquivos até o SO não permitir mais
# o modo de escrita cria um novo arquivo a cada alteração que sobrescreve o antigo
file = open('./fixacao/bcs.txt', mode='w')

file.write('Saul Goodman\n')
file.write('Kim Wexler\n')
print('Nacho Gonzalez', file=file) # por meio do print também é possível escrever em um arquivo
file.close()


content = open('./fixacao/bcs.txt', mode='r') # modo de leitura
print(content.read())
file.close()

#escrever elementos de uma lista
words = ['Better\n', 'Call\n', 'Saul\n']
file2 = open('./fixacao/frase.txt', mode='w')
file2.writelines(words)
file2.close()

frase = open('./fixacao/frase.txt', mode='r')
for line in frase:
    print(line)
frase.close()