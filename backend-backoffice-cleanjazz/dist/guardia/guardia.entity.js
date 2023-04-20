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
exports.guardia = void 0;
const empleado_entity_1 = require("../empleado/empleado.entity");
const puesto_entity_1 = require("../puesto/puesto.entity");
const turno_guardia_entity_1 = require("../turno-guardia/turno-guardia.entity");
const typeorm_1 = require("typeorm");
let guardia = class guardia {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], guardia.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => empleado_entity_1.empleado, empleado => empleado.id),
    __metadata("design:type", empleado_entity_1.empleado)
], guardia.prototype, "empleado", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => turno_guardia_entity_1.TurnoGuardia, turnoGuardia => turnoGuardia.id),
    __metadata("design:type", turno_guardia_entity_1.TurnoGuardia)
], guardia.prototype, "turnoGuardia", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => puesto_entity_1.Puesto, puesto => puesto.id),
    __metadata("design:type", puesto_entity_1.Puesto)
], guardia.prototype, "puesto", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], guardia.prototype, "horaEntrada", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], guardia.prototype, "horaSalida", void 0);
guardia = __decorate([
    (0, typeorm_1.Entity)("guardia")
], guardia);
exports.guardia = guardia;
//# sourceMappingURL=guardia.entity.js.map