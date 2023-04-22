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
exports.AdministrativoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const administrativo_entity_1 = require("./administrativo.entity");
let AdministrativoService = class AdministrativoService {
    constructor(administrativoRepository) {
        this.administrativoRepository = administrativoRepository;
    }
    async createadministrativo(administrativo) {
        const administrativoFound = await this.administrativoRepository.findOne({
            where: {
                usuario: administrativo.usuario
            }
        });
        if (administrativoFound) {
            return new common_1.HttpException('administratrivo Guardia already exists', common_1.HttpStatus.CONFLICT);
        }
        const newTurno = this.administrativoRepository.create(administrativo);
        return this.administrativoRepository.save(newTurno);
    }
    async getadministrativo(id) {
        const administrativoFound = await this.administrativoRepository.findOne({
            where: {
                id
            }
        });
        if (!administrativoFound) {
            return new common_1.HttpException('administratrivo Guardia not found', common_1.HttpStatus.NOT_FOUND);
        }
        return administrativoFound;
    }
    async getTurnosGuardia() {
        const turnosGuardia = await this.administrativoRepository.find();
        if (!turnosGuardia) {
            return new common_1.HttpException('Turnos Guardia not found', common_1.HttpStatus.NOT_FOUND);
        }
        return turnosGuardia;
    }
    async updateadministrativo(id, administrativo) {
        const administrativoFound = await this.administrativoRepository.findOne({
            where: {
                id
            }
        });
        if (!administrativoFound) {
            return new common_1.HttpException('administratrivo Guardia not found', common_1.HttpStatus.NOT_FOUND);
        }
        const updateadministrativo = Object.assign(administrativoFound, administrativo);
        return this.administrativoRepository.save(updateadministrativo);
    }
    async findOne(usuario) {
        return await this.administrativoRepository.findOne({ where: { usuario } });
    }
};
AdministrativoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(administrativo_entity_1.Administrativo)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AdministrativoService);
exports.AdministrativoService = AdministrativoService;
//# sourceMappingURL=administrativo.service.js.map