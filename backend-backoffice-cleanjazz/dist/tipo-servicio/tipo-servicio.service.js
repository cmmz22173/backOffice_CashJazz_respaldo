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
exports.TipoServicioService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const tipo_servicio_entity_1 = require("./tipo-servicio.entity");
let TipoServicioService = class TipoServicioService {
    constructor(tipoServicioRepository) {
        this.tipoServicioRepository = tipoServicioRepository;
    }
    async createTipoServicio(tipoServicio) {
        const tipoServicioFound = await this.tipoServicioRepository.findOne({
            where: {
                nombreServicio: tipoServicio.nombreServicio
            }
        });
        if (tipoServicioFound) {
            return new common_1.HttpException('tipoServicio already exists', common_1.HttpStatus.CONFLICT);
        }
        const newtipoServicio = this.tipoServicioRepository.create(tipoServicio);
        return this.tipoServicioRepository.save(newtipoServicio);
    }
    getTipoServicios() {
        return this.tipoServicioRepository.find();
    }
    async getTipoServicio(id) {
        const tipoServicioFound = await this.tipoServicioRepository.findOne({
            where: {
                id
            }
        });
        if (!tipoServicioFound) {
            return new common_1.HttpException('tipoServicio not found', common_1.HttpStatus.NOT_FOUND);
        }
        return tipoServicioFound;
    }
    async deleteTipoServicio(id) {
        const tipoServicioFound = await this.tipoServicioRepository.findOne({
            where: {
                id
            }
        });
        if (!tipoServicioFound) {
            return new common_1.HttpException('tipoServicio not found', common_1.HttpStatus.NOT_FOUND);
        }
        return this.tipoServicioRepository.delete(id);
    }
    async updateTipoServicio(id, tipoServicio) {
        const tipoServicioFound = await this.tipoServicioRepository.findOne({
            where: {
                id
            }
        });
        if (!tipoServicioFound) {
            return new common_1.HttpException('tipoServicio not found', common_1.HttpStatus.NOT_FOUND);
        }
        const updateTipoServicio = Object.assign(tipoServicioFound, tipoServicio);
        return this.tipoServicioRepository.save(updateTipoServicio);
    }
};
TipoServicioService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tipo_servicio_entity_1.TipoServicio)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TipoServicioService);
exports.TipoServicioService = TipoServicioService;
//# sourceMappingURL=tipo-servicio.service.js.map