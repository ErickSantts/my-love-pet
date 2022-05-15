import { Pessoa } from "../pessoa/pessoa";
import { Pet } from "../pet/pet";

export interface Consulta {
        id?: number;
        petId: Pet;
        donoId: Pessoa;
        raca: string;
        dataConsulta: Date;
        remedios: string;
        valor: number;
        detalhes: string;
        veterinarioId: Pessoa;
}
