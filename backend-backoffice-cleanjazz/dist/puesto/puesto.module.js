"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PuestoModule = void 0;
const common_1 = require("@nestjs/common");
const puesto_controller_1 = require("./puesto.controller");
const puesto_service_1 = require("./puesto.service");
const typeorm_1 = require("@nestjs/typeorm");
const puesto_entity_1 = require("./puesto.entity");
let PuestoModule = class PuestoModule {
};
PuestoModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([puesto_entity_1.Puesto])],
        controllers: [puesto_controller_1.PuestoController],
        providers: [puesto_service_1.PuestoService]
    })
], PuestoModule);
exports.PuestoModule = PuestoModule;
//# sourceMappingURL=puesto.module.js.map