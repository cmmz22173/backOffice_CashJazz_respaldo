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
exports.LavadorService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const lavador_entity_1 = require("./lavador.entity");
let LavadorService = class LavadorService {
    constructor(lavadorRepository) {
        this.lavadorRepository = lavadorRepository;
    }
    async createLavador(lavador) {
        const lavadorFound = await this.lavadorRepository.findOne({
            where: {
                empleado: lavador.empleadoId,
            }
        });
        if (lavadorFound) {
            return new common_1.HttpException('lavador already exists', common_1.HttpStatus.CONFLICT);
        }
        const newlavador = this.lavadorRepository.create(lavador);
        return this.lavadorRepository.save(newlavador);
    }
    async getLavador(id) {
        const lavadorFound = await this.lavadorRepository.findOne({
            where: {
                id
            }
        });
        if (!lavadorFound) {
            return new common_1.HttpException('lavador  not found', common_1.HttpStatus.NOT_FOUND);
        }
        return lavadorFound;
    }
    async getLavadors() {
        const lavadors = await this.lavadorRepository.find();
        if (!lavadors) {
            return new common_1.HttpException('lavadors  not found', common_1.HttpStatus.NOT_FOUND);
        }
        return lavadors;
    }
    async updateLavador(id, lavador) {
        const lavadorFound = await this.lavadorRepository.findOne({
            where: {
                id
            }
        });
        if (!lavadorFound) {
            return new common_1.HttpException('lavador not found', common_1.HttpStatus.NOT_FOUND);
        }
        const updatelavador = Object.assign(lavadorFound, lavador);
        return this.lavadorRepository.save(updatelavador);
    }
};
LavadorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(lavador_entity_1.Lavador)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], LavadorService);
exports.LavadorService = LavadorService;
//# sourceMappingURL=lavador.service.js.map