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
exports.GuardiaController = void 0;
const common_1 = require("@nestjs/common");
const guardia_service_1 = require("./guardia.service");
const create_guardia_dto_1 = require("./dto/create-guardia.dto");
let GuardiaController = class GuardiaController {
    constructor(guardiaService) {
        this.guardiaService = guardiaService;
    }
    async createGuardia(turnoGuardia) {
        return await this.guardiaService.createGuardia(turnoGuardia);
    }
    async getGuardias() {
        return await this.guardiaService.getGuardias();
    }
    async getGuardia(id) {
        return await this.guardiaService.getGuardia(id);
    }
    async updateGuardia(id, guardia) {
        return await this.guardiaService.updateGuardia(id, guardia);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_guardia_dto_1.CreateGuardiaDto]),
    __metadata("design:returntype", Promise)
], GuardiaController.prototype, "createGuardia", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GuardiaController.prototype, "getGuardias", null);
__decorate([
    (0, common_1.Get)("id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], GuardiaController.prototype, "getGuardia", null);
__decorate([
    (0, common_1.Patch)("id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_guardia_dto_1.CreateGuardiaDto]),
    __metadata("design:returntype", Promise)
], GuardiaController.prototype, "updateGuardia", null);
GuardiaController = __decorate([
    (0, common_1.Controller)('guardia'),
    __metadata("design:paramtypes", [guardia_service_1.GuardiaService])
], GuardiaController);
exports.GuardiaController = GuardiaController;
//# sourceMappingURL=guardia.controller.js.map