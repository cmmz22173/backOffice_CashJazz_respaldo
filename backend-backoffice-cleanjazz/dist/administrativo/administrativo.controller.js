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
exports.AdministrativoController = void 0;
const common_1 = require("@nestjs/common");
const create_administrativo_dto_1 = require("./dto/create-administrativo.dto");
const update_administrativo_dto_1 = require("./dto/update-administrativo.dto");
const administrativo_service_1 = require("./administrativo.service");
const jwt_1 = require("@nestjs/jwt");
const common_2 = require("@nestjs/common");
let AdministrativoController = class AdministrativoController {
    constructor(administrativoService, jwtService) {
        this.administrativoService = administrativoService;
        this.jwtService = jwtService;
    }
    async createadministrativo(administrativo) {
        return await this.administrativoService.createadministrativo(administrativo);
    }
    async getTurnosGuardia() {
        return await this.administrativoService.getTurnosGuardia();
    }
    async getadministrativo(id) {
        return await this.administrativoService.getadministrativo(id);
    }
    async updateadministrativo(id, administrativo) {
        return await this.administrativoService.updateadministrativo(id, administrativo);
    }
    async login(credentials) {
        const { username, password } = credentials;
        const administrativo = await this.administrativoService.findOne(username);
        if (administrativo) {
            const isValidPassword = await password === administrativo.clave ? true : false;
            if (isValidPassword) {
                const payload = { username: administrativo.usuario, sub: administrativo.id };
                const accessToken = this.jwtService.sign(payload, { expiresIn: '30m' });
                return { accessToken };
            }
        }
        throw new common_2.UnauthorizedException('Credenciales inválidas');
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_administrativo_dto_1.CreateAdministrativoDto]),
    __metadata("design:returntype", Promise)
], AdministrativoController.prototype, "createadministrativo", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdministrativoController.prototype, "getTurnosGuardia", null);
__decorate([
    (0, common_1.Get)("id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AdministrativoController.prototype, "getadministrativo", null);
__decorate([
    (0, common_1.Patch)("id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_administrativo_dto_1.UpdateAdministrativoDto]),
    __metadata("design:returntype", Promise)
], AdministrativoController.prototype, "updateadministrativo", null);
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdministrativoController.prototype, "login", null);
AdministrativoController = __decorate([
    (0, common_1.Injectable)(),
    (0, common_1.Controller)('administrativo'),
    __metadata("design:paramtypes", [administrativo_service_1.AdministrativoService, jwt_1.JwtService])
], AdministrativoController);
exports.AdministrativoController = AdministrativoController;
//# sourceMappingURL=administrativo.controller.js.map