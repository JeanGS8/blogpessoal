import { Tema } from "../../tema/entities/tema.entity";
import { Usuario } from "../../usuario/entities/usuario.entity";
export declare class Postagem {
    id: number;
    titulo: String;
    texto: String;
    data: Date;
    tema: Tema;
    usuario: Usuario;
}
