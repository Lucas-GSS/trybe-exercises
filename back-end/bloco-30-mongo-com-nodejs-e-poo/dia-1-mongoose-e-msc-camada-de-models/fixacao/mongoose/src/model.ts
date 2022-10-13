import { model } from "mongoose";
import { IMovie, movieSchema } from "./schema";

// após definir conexão e schema respectivamente, é hora de criar o model.
// o método model<Generic>('NomeDaColecao', schemaDaColecao)
// recebe um genérico, que é a interface do schema, e como parâmetro o nome e o schema da coleção
export const movieModel = model<IMovie>('Movies', movieSchema);

// movieModel.find({}); com isso já podemos acessar os métodos do mongo