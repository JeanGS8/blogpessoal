import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { Postagem } from './postagem/entities/postagem.entity';
import { PostagemModules } from './postagem/postagem.module';
import { Tema } from './tema/entities/tema.entity';
import { TemaModule } from './tema/tema.module';
import { Usuario } from './usuario/entities/usuario.entity';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
	imports: [
    	/*
		TypeOrmModule.forRoot({
			type: 'mysql',
			host: 'localhost',
			port: 3306,
			username: 'root',
			password: 'root',
			database: 'db_blogpessoal',
			entities: [Postagem, Tema, Usuario], // são as entidades do banco de dados
			synchronize: true // ele sincroniza com o banco dedos automaticamente
		}),
    	*/ // importei o ORM
		TypeOrmModule.forRoot({
			type: 'postgres',
			url: process.env.DATABASE_URL,
			logging: false,
			dropSchema: false,
			ssl:{
				rejectUnauthorized: false
			},
			synchronize: true,
			autoLoadEntities: true
		}),
		PostagemModules,
		TemaModule,
		AuthModule,
		UsuarioModule
  	],
	controllers: [AppController],
	providers: [],
})
export class AppModule {}
