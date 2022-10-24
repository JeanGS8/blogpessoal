import { Tema } from "src/tema/entities/tema.entity";
import { Usuario } from "src/usuario/entities/usuario.entity";
export declare class Postagem {
    id: number;
    titulo: String;
    texto: String;
    data: Date;
    tema: Tema;
    usuario: Usuario;
}
