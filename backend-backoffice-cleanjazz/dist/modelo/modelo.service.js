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
exports.ModeloService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const modelo_entity_1 = require("./modelo.entity");
const typeorm_2 = require("typeorm");
let ModeloService = class ModeloService {
    constructor(modeloRepository) {
        this.modeloRepository = modeloRepository;
    }
    async createModelo(modelo) {
        const modeloFound = await this.modeloRepository.findOne({
            where: {
                nombreModelo: modelo.nombreModelo
            }
        });
        if (modeloFound) {
            return new common_1.HttpException('Modelo already exists', common_1.HttpStatus.CONFLICT);
        }
        const newModelo = this.modeloRepository.create(modelo);
        return this.modeloRepository.save(newModelo);
    }
    async getModelo(id) {
        const modeloFound = await this.modeloRepository.findOne({
            where: {
                id
            }
        });
        if (!modeloFound) {
            return new common_1.HttpException('Modelo not found', common_1.HttpStatus.NOT_FOUND);
        }
        return modeloFound;
    }
    async getModelos() {
        const modelosFound = await this.modeloRepository.find();
        if (!modelosFound) {
            return new common_1.HttpException('Modelos not found', common_1.HttpStatus.NOT_FOUND);
        }
        return modelosFound;
    }
    async updateModelo(id, modelo) {
        const modeloFound = await this.modeloRepository.findOne({
            where: {
                id
            }
        });
        if (!modeloFound) {
            return new common_1.HttpException('Modelo not found', common_1.HttpStatus.NOT_FOUND);
        }
        const updateModelo = Object.assign(modeloFound, modelo);
        return this.modeloRepository.save(updateModelo);
    }
};
ModeloService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(modelo_entity_1.modelo)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ModeloService);
exports.ModeloService = ModeloService;
//# sourceMappingURL=modelo.service.js.map