import json # necessário importar o módulo embutido json

with open("./fixacao/pokemons.json", "r") as file: # with é um controle de contexto, usando ele não precisa file.close()
    content = file.read() # faz a leitura do arquivo json
    pokemons = json.loads(content)["results"] # loads desserializa uma string JSON para um objeto python, no caso um dict
    print(pokemons[0]["name"]) # exibe o nome do primeiro pokemon

with open("fixacao/pokemons.json", "r") as file:
    pokemons = json.load(file)["results"] # load desserializa JSON para um objeto Python
    grass_pokemons = [pokemon for pokemon in pokemons if "Grass" in pokemon["type"]] # cria lista de pokes do tipo grama

with open("fixacao/grass_pokemons.json", "w") as file:
    json.dump(grass_pokemons, file) # escreve a lista de pokes de grama no arquivo grass_pokemon.json

# método dump serializa objeto python(lista, dicionario, tuplas, etc...) em json, para em seguida gravá-lo em um arquivo
# ele recebe como argumento os dados a serem serealizados, o arquivo onde será gravado, e parametros opcionais como por exemplo o ident
# para definir a identação dos dados no arquivo de gravação

# já o dumps pega o objeto python e o transforma em uma string. Simplesmente isso
# ela recebe o objeto a ser serealizado e opcionais como identantion

