import { Schema } from "mongoose";

// Para acessar os dados é necessário construir uma interface e um schema para a coleção a ser acessada
// a interface deve possuir os atributos e seus tipos dos documentos que iremos acessar

export interface IMovie {
  name: string,
  rating: number,
  directedBy: string, // suponhamos que essa chave não exista em todos os docs. olha o schema
}

// O Schema é um método que usamos para definir a estrutura dos documentos da coleção a ser acesada. Isso diz pro mongoose
//que temos uma coleção que segue a estrtura definida na interface

// new Schema<DocType, Model, TInstanceMethods> -> recebe até 3 tipos genéricos. O 1º diz respeito à estrutura da coleção;
//o 2º do Model, que se não for passado é o mesmo do DocType; o 3º interface q contenha os métodos do schema

// além do Genérico, recebe um objeto com estrutura da coleção e verifica se é exatamente igual a interface, se não for
// lança um erro na compilação

export const movieSchema = new Schema<IMovie>({
  name: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
});

// se houvesse um campo a mais na interface e não fosse passado para o Schema({}) não geraria erro pois o mongoose
// passaria esse campo por baixo dos panos. Lança erro quando não existe na interface