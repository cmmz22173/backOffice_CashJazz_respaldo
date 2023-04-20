"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuardiaModule = void 0;
const common_1 = require("@nestjs/common");
const guardia_controller_1 = require("./guardia.controller");
const guardia_service_1 = require("./guardia.service");
const typeorm_1 = require("@nestjs/typeorm");
const guardia_entity_1 = require("./guardia.entity");
let GuardiaModule = class GuardiaModule {
};
GuardiaModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([guardia_entity_1.guardia])],
        controllers: [guardia_controller_1.GuardiaController],
        providers: [guardia_service_1.GuardiaService]
    })
], GuardiaModule);
exports.GuardiaModule = GuardiaModule;
//# sourceMappingURL=guardia.module.js.map