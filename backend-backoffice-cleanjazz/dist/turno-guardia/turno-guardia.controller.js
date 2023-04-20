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
exports.TurnoGuardiaController = void 0;
const common_1 = require("@nestjs/common");
const turno_guardia_service_1 = require("./turno-guardia.service");
const createTurnoGuardia_dto_1 = require("./dto/createTurnoGuardia.dto");
const updateTurnoGuartia_dto_1 = require("./dto/updateTurnoGuartia.dto");
let TurnoGuardiaController = class TurnoGuardiaController {
    constructor(turnoGuardiaService) {
        this.turnoGuardiaService = turnoGuardiaService;
    }
    async createTurnoGuardia(turnoGuardia) {
        return await this.turnoGuardiaService.createTurnoGuardia(turnoGuardia);
    }
    async getTurnosGuardia() {
        return await this.turnoGuardiaService.getTurnosGuardia();
    }
    async getTurnoGuardia(id) {
        return await this.turnoGuardiaService.getTurnoGuardia(id);
    }
    async updateTurnoGuardia(id, turnoGuardia) {
        return await this.turnoGuardiaService.updateTurnoGuardia(id, turnoGuardia);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createTurnoGuardia_dto_1.createTurnoGuardiaDto]),
    __metadata("design:returntype", Promise)
], TurnoGuardiaController.prototype, "createTurnoGuardia", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TurnoGuardiaController.prototype, "getTurnosGuardia", null);
__decorate([
    (0, common_1.Get)("id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TurnoGuardiaController.prototype, "getTurnoGuardia", null);
__decorate([
    (0, common_1.Patch)("id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, updateTurnoGuartia_dto_1.updateTurnoGuardiaDto]),
    __metadata("design:returntype", Promise)
], TurnoGuardiaController.prototype, "updateTurnoGuardia", null);
TurnoGuardiaController = __decorate([
    (0, common_1.Controller)('turno-guardia'),
    __metadata("design:paramtypes", [turno_guardia_service_1.TurnoGuardiaService])
], TurnoGuardiaController);
exports.TurnoGuardiaController = TurnoGuardiaController;
//# sourceMappingURL=turno-guardia.controller.js.map