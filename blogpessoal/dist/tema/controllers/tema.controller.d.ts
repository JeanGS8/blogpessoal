import { Tema } from "../entities/tema.entity";
import { TemaService } from "../services/tema.service";
export declare class TemaController {
    private readonly temaService;
    constructor(temaService: TemaService);
    findAll(): Promise<Tema[]>;
    findById(id: number): Promise<Tema>;
    findByDescricao(descricao: string): Promise<Tema[]>;
    create(tema: Tema): Promise<Tema>;
    update(Tema: Tema): Promise<Tema>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
