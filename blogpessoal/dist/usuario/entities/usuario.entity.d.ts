import { Postagem } from "src/postagem/entities/postagem.entity";
export declare class Usuario {
    id: number;
    nome: string;
    usuario: string;
    senha: string;
    foto: string;
    postagem: Postagem[];
}
