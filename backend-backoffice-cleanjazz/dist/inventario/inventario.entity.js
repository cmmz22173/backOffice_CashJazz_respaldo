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
exports.Inventario = void 0;
const producto_entity_1 = require("../producto/producto.entity");
const typeorm_1 = require("typeorm");
let Inventario = class Inventario {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Inventario.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => producto_entity_1.Producto, producto => producto.id),
    __metadata("design:type", Number)
], Inventario.prototype, "producto", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Inventario.prototype, "cantidad", void 0);
Inventario = __decorate([
    (0, typeorm_1.Entity)('inventario')
], Inventario);
exports.Inventario = Inventario;
//# sourceMappingURL=inventario.entity.js.map