import { Consulta } from "../consulta/consulta";
import { Pet } from "../pet/pet";

export interface Pessoa {
  id?: number;
  name: string;
  email: string;
  contato: string;
  dataNascimento: Date;
  senha: string;
  perfil: string;
  pets?: Pet[];
  consulta?: Consulta[];
  consultaVet?: Consulta[];

}
