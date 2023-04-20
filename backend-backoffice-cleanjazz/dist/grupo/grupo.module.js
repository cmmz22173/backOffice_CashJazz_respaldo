"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrupoModule = void 0;
const common_1 = require("@nestjs/common");
const grupo_controller_1 = require("./grupo.controller");
const grupo_service_1 = require("./grupo.service");
const typeorm_1 = require("@nestjs/typeorm");
const grupo_entity_1 = require("./grupo.entity");
let GrupoModule = class GrupoModule {
};
GrupoModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([grupo_entity_1.grupo])],
        controllers: [grupo_controller_1.GrupoController],
        providers: [grupo_service_1.GrupoService]
    })
], GrupoModule);
exports.GrupoModule = GrupoModule;
//# sourceMappingURL=grupo.module.js.map