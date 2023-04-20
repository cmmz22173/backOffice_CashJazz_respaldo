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
exports.MarcaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const marca_entity_1 = require("./marca.entity");
let MarcaService = class MarcaService {
    constructor(marcaRepository) {
        this.marcaRepository = marcaRepository;
    }
    async createMarca(marca) {
        const marcaFound = await this.marcaRepository.findOne({
            where: {
                nombreMarca: marca.nombreMarca
            }
        });
        if (marcaFound) {
            return new common_1.HttpException('Marca already exists', common_1.HttpStatus.CONFLICT);
        }
        const newMarca = this.marcaRepository.create(marca);
        return this.marcaRepository.save(newMarca);
    }
    async getMarcas() {
        const marcasFound = await this.marcaRepository.find();
        if (!marcasFound) {
            return new common_1.HttpException('Marcas not found', common_1.HttpStatus.NOT_FOUND);
        }
        return marcasFound;
    }
    async getMarca(id) {
        const marcaFound = await this.marcaRepository.findOne({
            where: {
                id
            }
        });
        if (!marcaFound) {
            return new common_1.HttpException('Marca not found', common_1.HttpStatus.NOT_FOUND);
        }
        return marcaFound;
    }
    async updateMarca(id, marca) {
        const marcaFound = await this.marcaRepository.findOne({
            where: {
                id
            }
        });
        if (!marcaFound) {
            return new common_1.HttpException('Marca not found', common_1.HttpStatus.NOT_FOUND);
        }
        const updateMarca = Object.assign(marcaFound, marca);
        return this.marcaRepository.save(updateMarca);
    }
};
MarcaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(marca_entity_1.marca)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MarcaService);
exports.MarcaService = MarcaService;
//# sourceMappingURL=marca.service.js.map