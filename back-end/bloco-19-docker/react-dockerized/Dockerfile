#Cada instrução é uma camada da imagem
# Imagem base da aplicação. Sempre ao inciar uma imagem, devemos definir outra como base. Especificar a versão da img. Usar versoes leves, -slim ou apine
FROM node:14-alpine AS build

# Define o diretório de trabalho, onde a aplicação ficará e os comandos serão executados.
WORKDIR /app

# Para rodarmos a aplicação na imagem, precisamos do código fonte dela. Com COPY copiamos o arquivo com codigo para o diretorio definido acima
# Copia todos arquivos package para o diretório atual
# Sintaxe shell, também aceita exec
COPY package*.json ./

# Comandos a serem executados durante a criação da imagem
RUN npm install

# Um passo intermediário interessante é criar um dockerignore para colocar a node_modules lá, já que rodou npm install

# Cópia de todos os arquivos
COPY . .

# É preciso gerar um processo de build para a aplicação, que gera uma versão otimizada da nossa aplicação
# Isso varia de uma aplicação para outra. No caso do React é :
RUN npm run build

# É uma boa prática dividir o DockerFile em dois  ou mais estágios, multi-stage build
# A motivação é manter um arquivo fácil de manter e e com maior prevenção a erros, além de manter a imagem menor possível
# Uma parte para ambiente de desenvolvimento e outro para produção
# Usa nginx como servidor web para disponibilizar a aplicação para produção
FROM nginx:1.16.0-alpine AS prod

# Faz uma cópia do formato "build" da aplicação para o nginx
COPY --from=build /app/build /usr/share/nginx/html

# Define a porta em que o container da imagem rodará a aplicação
EXPOSE 80

# Comando ao ser executado junto com container
# Porém se um comando for passado no run, sobrescreverá o CMD, assim como se houver outro CMD depois deste
# CMD ["nginx", "-g", "daemon off;"]

# Já o ENTRYPOINT funciona diferente, ele nunca é sobescrito
# Inclusive pode ser usado em conjunto com CMD

# ENTRYPOINT [ "/bin/echo", "Hello" ]
# CMD [ "World" ]
# No caso acima ao executar o container seria exibido Hello World
# Mas se um comando for usado no run, por exemplo: docker conatiner run hello-world Lucas, será exibido 'Hello Lucas'
# Ou seja o CMD é sobescrito pelo comando

ENTRYPOINT [ "nginx", "-g", "daemon:off;" ]

# Serve para adicionar informações sobre a imagem que façam sentido, como contato, licenças, etc...
# Pode ser visualizada com docker inpect container-id
LABEL maintener="Lucas <lucas@gmail.com>"

# Definir variáveis de ambinete, q são variaveis disponiveis a todas aplicações instaladas no SO
ENV NODE_ENV=production

# Definir um usuário do SO para usar a aplicação, por padrão é o root
# Porém por segurança deve-se definir um genérico com permissões sufucientes para usar a aplicação
USER node


# É interssante levar em consideração a relação da memória cache e as camadas
# Sempre que houver alteração na aplicação, no código fonte por exemplo, as camadas que usam diretamente esse informação
# serão executadas novamente

# Por exemplo: 
# Step 1
# FROM node:10-alpine
# Step 2
# WORKDIR /usr/src/app
# Step 3
# COPY [".", "./"]
# Step 4
# RUN ["npm", "install"]
# Step 5
# ENTRYPOINT [ "npm", "start" ]

# Quando houver alteração no código fonte, será reexecutado desde o passo 3, pois ele usa diretamente o código
# Já nesse caso: 

# Step 1
# FROM node:10-alpine
# Step 2
# WORKDIR /usr/src/app
# Step 3
# COPY ["./package.json", "./package-lock.json", "./"]
# Step 4
# RUN ["npm", "install"]
# Step 5
# COPY ["./src", "./"]
# Step 6
# ENTRYPOINT [ "npm", "start" ]

# Somente a partir do passo 5 será reexecutado. Contém mais passos, porém é mais performática pois evita outro npm install
# o que seria reinstalação desnecessária de todas dependencias