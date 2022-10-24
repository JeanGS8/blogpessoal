"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioService = void 0;
const decorators_1 = require("@nestjs/common/decorators");
const bcrypt_1 = require("../../auth/bcrypt/bcrypt");
const typeorm_1 = require("typeorm");
const usuario_entity_1 = require("../entities/usuario.entity");
const common_1 = require("@nestjs/common");
const typeorm_2 = require("@nestjs/typeorm");
let UsuarioService = class UsuarioService {
    constructor(usuarioRepository, bcrypt) {
        this.usuarioRepository = usuarioRepository;
        this.bcrypt = bcrypt;
    }
    async findByUsuario(usuario) {
        return await this.usuarioRepository.findOne({
            where: {
                usuario
            }
        });
    }
    async findAll() {
        return await this.usuarioRepository.find({
            relations: {
                postagem: true
            }
        });
    }
    async findById(id) {
        let buscaUsuario = await this.usuarioRepository.findOne({
            where: {
                id
            }
        });
        if (!buscaUsuario)
            throw new common_1.HttpException('Usuario não encontrado!', common_1.HttpStatus.NOT_FOUND);
        return buscaUsuario;
    }
    async create(usuario) {
        let buscaUsuario = await this.findByUsuario(usuario.usuario);
        if (!buscaUsuario) {
            usuario.senha = await this.bcrypt.criptografarSenha(usuario.senha);
            return await this.usuarioRepository.save(usuario);
        }
        throw new common_1.HttpException('Usuário já existe!', common_1.HttpStatus.BAD_REQUEST);
    }
    async update(usuario) {
        let updateUsuario = await this.findById(usuario.id);
        let buscaUsuario = await this.findByUsuario(usuario.usuario);
        if (!updateUsuario)
            throw new common_1.HttpException('Usuario não encontrado!', common_1.HttpStatus.NOT_FOUND);
        if (usuario && buscaUsuario.id !== usuario.id)
            throw new common_1.HttpException('usuario (e-mail) já cadastrado, digite outro!', common_1.HttpStatus.BAD_REQUEST);
        usuario.senha = await this.bcrypt.criptografarSenha(usuario.senha);
        return await this.usuarioRepository.save(usuario);
    }
};
UsuarioService = __decorate([
    (0, decorators_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(usuario_entity_1.Usuario)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        bcrypt_1.Bcrypt])
], UsuarioService);
exports.UsuarioService = UsuarioService;
//# sourceMappingURL=usuario.service.js.map