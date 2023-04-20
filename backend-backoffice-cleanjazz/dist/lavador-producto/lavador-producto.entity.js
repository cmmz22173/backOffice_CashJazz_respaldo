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
exports.lavadorProducto = void 0;
const lavador_entity_1 = require("../lavador/lavador.entity");
const producto_entity_1 = require("../producto/producto.entity");
const typeorm_1 = require("typeorm");
let lavadorProducto = class lavadorProducto {
};
__decorate([
    (0, typeorm_1.ManyToOne)(() => producto_entity_1.Producto, (producto) => producto.id),
    (0, typeorm_1.JoinColumn)(),
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], lavadorProducto.prototype, "producto", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => lavador_entity_1.Lavador, (lavador) => lavador.id),
    (0, typeorm_1.JoinColumn)(),
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], lavadorProducto.prototype, "lavador", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], lavadorProducto.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], lavadorProducto.prototype, "fechaEntrega", void 0);
lavadorProducto = __decorate([
    (0, typeorm_1.Entity)({ name: 'lavadorProducto' })
], lavadorProducto);
exports.lavadorProducto = lavadorProducto;
//# sourceMappingURL=lavador-producto.entity.js.map