# semelhante aos objetos em JavaScript, serve para agrupar dados no formato {"chave": valor}

vazio = {}
outra_forma_vazio = dict()
dados = {"nome": "Lucas", "idade": 25, "student": True}

print(dados["nome"])  # chaves são acessadas pelo bracket notation
del dados["student"]  # elementos podem ser removidos com `del`
print(dados.items())
dados["recorrente"] = "Sim"  # adiciona novo elemento
print(dados.items())
