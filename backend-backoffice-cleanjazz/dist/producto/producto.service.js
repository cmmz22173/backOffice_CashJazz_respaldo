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
exports.ProductoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const producto_entity_1 = require("./producto.entity");
let ProductoService = class ProductoService {
    constructor(productoRepository) {
        this.productoRepository = productoRepository;
    }
    async createProducto(Producto) {
        const productoFound = await this.productoRepository.findOne({
            where: {
                tipoProducto: Producto.tipoProductoId,
            }
        });
        if (productoFound) {
            return new common_1.HttpException('producto already exists', common_1.HttpStatus.CONFLICT);
        }
        const newProducto = this.productoRepository.create(Producto);
        return this.productoRepository.save(newProducto);
    }
    getProductos() {
        return this.productoRepository.find({ where: { estado: 'activo' } });
    }
    async getproducto(id) {
        const productoFound = await this.productoRepository.findOne({
            where: {
                id
            }
        });
        if (!productoFound) {
            return new common_1.HttpException('producto not found', common_1.HttpStatus.NOT_FOUND);
        }
        return productoFound;
    }
    async deleteproducto(id) {
        const productoFound = await this.productoRepository.findOne({
            where: {
                id
            }
        });
        if (!productoFound) {
            return new common_1.HttpException('producto not found', common_1.HttpStatus.NOT_FOUND);
        }
        const updateProducto = Object.assign(productoFound, { estado: 'inactivo' });
        return this.productoRepository.save(updateProducto);
    }
    async updateProducto(id, producto) {
        const productoFound = await this.productoRepository.findOne({
            where: {
                id
            }
        });
        if (!productoFound) {
            return new common_1.HttpException('producto not found', common_1.HttpStatus.NOT_FOUND);
        }
        const updateproducto = Object.assign(productoFound, producto);
        return this.productoRepository.save(updateproducto);
    }
};
ProductoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(producto_entity_1.Producto)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProductoService);
exports.ProductoService = ProductoService;
//# sourceMappingURL=producto.service.js.map