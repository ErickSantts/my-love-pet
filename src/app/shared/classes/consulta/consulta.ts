import { Pessoa } from "../pessoa/pessoa";
import { Pet } from "../pet/pet";

export interface Consulta {
        id?: number;
        pet: Pet;
        dono: Pessoa;
        raca: string;
        dataConsulta: Date;
        remedios: string;
        valor: number;
        detalhes: string;
        veterinarioId: Pessoa;
}
