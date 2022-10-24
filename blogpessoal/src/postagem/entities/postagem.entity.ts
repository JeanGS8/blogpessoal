import { IsNotEmpty } from "class-validator";
import { Tema } from "src/tema/entities/tema.entity";
import { Usuario } from "src/usuario/entities/usuario.entity";
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn, TableForeignKey, UpdateDateColumn } from "typeorm";
import { ForeignKeyMetadata } from "typeorm/metadata/ForeignKeyMetadata";

@Entity({name: 'tb_postagens'}) // Criando a entidade tb_postagem
export class Postagem{
    @PrimaryGeneratedColumn() // Define o atributo como chave primaria e já adiciona o auto increment
    id: number;

    @IsNotEmpty() // Verifica se a informação não está vazia
    @Column ({length: 100, nullable: false}) // Definindo o tamanho do atributo e se ele pode ser nulo
    titulo: String;

    @IsNotEmpty() // Verifica se a informação não está vazia
    @Column ({length: 1000, nullable: false}) // Definindo se o atributo pode ser nulo e o tamanho do atributo passado
    texto: String;

    @UpdateDateColumn() // Atualiza a data do ultimo acesso
    data: Date;

    @ManyToOne(() => Tema, (tema) => tema.postagem, { // Chave estrangeira
        onDelete: "CASCADE"
    })
    tema: Tema;

    @ManyToOne(() => Usuario, (usuario) => usuario.postagem, {
        onDelete: "CASCADE"
    })
    usuario: Usuario;
}