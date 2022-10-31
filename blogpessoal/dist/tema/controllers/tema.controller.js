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
exports.TemaController = void 0;
const common_1 = require("@nestjs/common");
const decorators_1 = require("@nestjs/common/decorators");
const common_2 = require("@nestjs/common");
const enums_1 = require("@nestjs/common/enums");
const pipes_1 = require("@nestjs/common/pipes");
const jwt_auth_guard_1 = require("../../auth/guard/jwt-auth.guard");
const tema_entity_1 = require("../entities/tema.entity");
const tema_service_1 = require("../services/tema.service");
const decorators_2 = require("@nestjs/swagger/dist/decorators");
let TemaController = class TemaController {
    constructor(temaService) {
        this.temaService = temaService;
    }
    findAll() {
        return this.temaService.findAll();
    }
    findByAll(id) {
        return this.temaService.findById(id);
    }
    findByDescricao(descricao) {
        return this.temaService.findByDescricao(descricao);
    }
    create(tema) {
        return this.temaService.create(tema);
    }
    update(tema) {
        return this.temaService.update(tema);
    }
    delete(id) {
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, decorators_1.HttpCode)(enums_1.HttpStatus.OK),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TemaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/:id'),
    (0, decorators_1.HttpCode)(enums_1.HttpStatus.OK),
    __param(0, (0, decorators_1.Param)('id', pipes_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TemaController.prototype, "findByAll", null);
__decorate([
    (0, common_1.Get)('/descricao/:descricao'),
    (0, decorators_1.HttpCode)(enums_1.HttpStatus.OK),
    __param(0, (0, decorators_1.Param)('descricao')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TemaController.prototype, "findByDescricao", null);
__decorate([
    (0, decorators_1.Post)(),
    (0, decorators_1.HttpCode)(enums_1.HttpStatus.CREATED),
    __param(0, (0, decorators_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [tema_entity_1.Tema]),
    __metadata("design:returntype", Promise)
], TemaController.prototype, "create", null);
__decorate([
    (0, decorators_1.Put)(),
    (0, decorators_1.HttpCode)(enums_1.HttpStatus.OK),
    __param(0, (0, decorators_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [tema_entity_1.Tema]),
    __metadata("design:returntype", Promise)
], TemaController.prototype, "update", null);
__decorate([
    (0, decorators_1.Delete)('/:id'),
    (0, decorators_1.HttpCode)(enums_1.HttpStatus.NO_CONTENT),
    __param(0, (0, decorators_1.Param)('id', pipes_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TemaController.prototype, "delete", null);
TemaController = __decorate([
    (0, decorators_2.ApiTags)('Tema'),
    (0, common_2.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('/tema'),
    (0, decorators_2.ApiBearerAuth)(),
    __metadata("design:paramtypes", [tema_service_1.TemaService])
], TemaController);
exports.TemaController = TemaController;
//# sourceMappingURL=tema.controller.js.map