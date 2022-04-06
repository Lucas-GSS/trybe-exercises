const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const Authors = require('./author');
const Books = require('./books')

app.use(bodyParser.json());

app.get('/authors', async (req, res) => {
  const authors = await Authors.getAll();
  return res.status(200).json(authors)
});

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;
  const author = await Authors.findById(id);
  return res.status(200).json(author)
})

app.get('/books', async(req, res) => {
  const { authorId } = req.query;
  const book = authorId
  ? await Books.getByAuthorId(Number(authorId))
  : await Books.getAll();
  return res.status(200).json(book)
})

app.get('/books/:bookId', async (req, res) => {
  const { bookId } = req.params;
  const book = await Books.findById(bookId);
  if (!book) return res.status(404).json({ message: 'Not found' });
  return res.status(200).json(book);
})

app.post('/authors', async (req, res) => {
  const { firstName, middleName, lastName } = req.body;
  if (!Authors.validateName(firstName, middleName, lastName)) {
    return res.status(500).json({ message: 'Dados inválidos' });
  }
  await Authors.createAuthor(firstName, middleName, lastName)
  return res.status(201).json({ message: `O autor ${firstName} foi adicionado com sucesso!` })
});

app.post('/books', async(req, res) => {
  const { title, authorId } = req.body;
  const isValid = await Books.validateBook(title, authorId);
  if (!isValid) return res.status(400).json({ message: 'Dados inválidos' });
  await Books.createBook(title, authorId);
  return res.status(201).json({ message: `O livro ${title} foi adicionado com sucesso!` });
})

app.listen(3000, () => console.log('Online na 3000'));
