import { Pessoa } from "../pessoa/pessoa";

export interface Pet {
  id?: string;
  nome: string;
  raca: string;
  dono: Pessoa;
  idade: string;
}
