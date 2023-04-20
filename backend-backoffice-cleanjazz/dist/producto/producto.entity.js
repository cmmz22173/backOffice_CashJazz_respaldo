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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Producto = void 0;
const tipo_producto_entity_1 = require("../tipo-producto/tipo-producto.entity");
const typeorm_1 = require("typeorm");
let Producto = class Producto {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Producto.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => tipo_producto_entity_1.TipoProducto, tipoProducto => tipoProducto.id),
    __metadata("design:type", Number)
], Producto.prototype, "tipoProducto", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Producto.prototype, "cantidad", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Producto.prototype, "caducidad", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 'activo' }),
    __metadata("design:type", String)
], Producto.prototype, "estado", void 0);
Producto = __decorate([
    (0, typeorm_1.Entity)('producto')
], Producto);
exports.Producto = Producto;
//# sourceMappingURL=producto.entity.js.map