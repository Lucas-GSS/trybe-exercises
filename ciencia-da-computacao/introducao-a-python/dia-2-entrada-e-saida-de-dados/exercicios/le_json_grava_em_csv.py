import json
import csv

def read_json_file(json_file):
    '''Ler arquivo json'''
    return json.load(json_file)


def create_categories_dict(books):
    '''Criar dicionário com categorias e nº de livros associados a ela'''
    categories = {}
    for book in books:
        for category in book["categories"]:
            if category not in categories:
                categories[category] = 1
            else:
                categories[category] += 1
    return categories


def calculate_percentage_by_category(categories, total_books):
    '''Calcular porcentagem do total de livros em cada categoria'''
    percentage = {
        category_name: round((books_count * 100) / total_books, 2)
          for category_name, books_count in categories.items()
      }
    return percentage


with open('./exercicios/books.json', 'r') as file:
    books = read_json_file(file)


categories_dict = create_categories_dict(books)
percentage = calculate_percentage_by_category(categories_dict, len(books))

def configurate_csv_writer(csv_file):
    '''Configurar o escritor de arquivos csv'''
    writer = csv.writer(csv_file, delimiter=',')
    return writer


def write_in_csv_file(writer, header, datas):
    '''Escreve o cabeçalho e os dados em um arquivo csv'''
    writer.writerow(header)
    writer.writerows(datas)


with open('./exercicios/category_by_percentage.csv', 'w') as csv_file:
  writer_csv = configurate_csv_writer(csv_file)
  write_in_csv_file(writer_csv, ["Categoria", "Porcentagem"], percentage.items())
