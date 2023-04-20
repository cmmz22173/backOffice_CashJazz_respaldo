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
exports.LavadorProductoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const lavador_producto_entity_1 = require("./lavador-producto.entity");
let LavadorProductoService = class LavadorProductoService {
    constructor(lavadorProductoRepository) {
        this.lavadorProductoRepository = lavadorProductoRepository;
    }
    async create(createLavadorProductoDto) {
        try {
            const LavadorProducto = this.lavadorProductoRepository.create(createLavadorProductoDto);
            return await this.lavadorProductoRepository.save(LavadorProducto);
        }
        catch (error) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.BAD_REQUEST,
                error: error.message,
            }, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async findAll() {
        try {
            return await this.lavadorProductoRepository.find();
        }
        catch (error) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.BAD_REQUEST,
                error: error.message,
            }, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async findOne(lavadorId, productoId) {
        try {
            return await this.lavadorProductoRepository.findOneOrFail({ where: { lavador: lavadorId, producto: productoId } });
        }
        catch (error) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.NOT_FOUND,
                error: error.message,
            }, common_1.HttpStatus.NOT_FOUND);
        }
    }
    async update(lavadorId, productoId, updateLavadorProductoDto) {
        try {
            const LavadorProducto = await this.lavadorProductoRepository.findOneOrFail({ where: { lavador: lavadorId, producto: productoId } });
            const updateLavadorProducto = Object.assign(LavadorProducto, updateLavadorProductoDto);
            return await this.lavadorProductoRepository.save(updateLavadorProducto);
        }
        catch (error) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.NOT_FOUND,
                error: error.message,
            }, common_1.HttpStatus.NOT_FOUND);
        }
    }
};
LavadorProductoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(lavador_producto_entity_1.lavadorProducto)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], LavadorProductoService);
exports.LavadorProductoService = LavadorProductoService;
//# sourceMappingURL=lavador-producto.service.js.map