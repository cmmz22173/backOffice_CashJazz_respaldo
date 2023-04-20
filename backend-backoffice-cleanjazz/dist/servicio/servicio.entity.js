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
exports.Servicio = void 0;
const lavador_entity_1 = require("../lavador/lavador.entity");
const tipo_servicio_entity_1 = require("../tipo-servicio/tipo-servicio.entity");
const typeorm_1 = require("typeorm");
let Servicio = class Servicio {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Servicio.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => tipo_servicio_entity_1.TipoServicio, tipoServicio => tipoServicio.id),
    __metadata("design:type", tipo_servicio_entity_1.TipoServicio)
], Servicio.prototype, "tipoServicio", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => lavador_entity_1.Lavador, lavador => lavador.id),
    __metadata("design:type", lavador_entity_1.Lavador)
], Servicio.prototype, "lavador", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Servicio.prototype, "fecha", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Servicio.prototype, "hora", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Servicio.prototype, "detalles", void 0);
Servicio = __decorate([
    (0, typeorm_1.Entity)({ name: 'servicio' })
], Servicio);
exports.Servicio = Servicio;
//# sourceMappingURL=servicio.entity.js.map