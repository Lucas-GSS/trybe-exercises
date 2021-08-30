const sum = (a, b) => a + b;

test('sums two values', () => {
  expect(sum(2, 3)).toEqual(5);
});

// Antes de iniciar o repositório, criar o package.json, que guarda informações sobre o projeto (dependencias, url, versão...), depois instala o Jest, e move a pasta node_modules(guarda todos guarda todos os arquivos baixados das dependências instaladas) para o .gitignore, pois torna o push e o clone mais lentos por conter muitos arquivos, o package-lock.json guarda as info necessárias para instalar as dependencias em clones.  