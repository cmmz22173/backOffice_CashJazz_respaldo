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
exports.LavadorController = void 0;
const common_1 = require("@nestjs/common");
const update_lavador_dto_1 = require("./dto/update-lavador.dto");
const create_lavador_dto_1 = require("./dto/create-lavador.dto");
const lavador_service_1 = require("./lavador.service");
let LavadorController = class LavadorController {
    constructor(lavadorService) {
        this.lavadorService = lavadorService;
    }
    async createlavador(lavador) {
        return await this.lavadorService.createLavador(lavador);
    }
    async getlavadors() {
        return await this.lavadorService.getLavadors();
    }
    async getlavador(id) {
        return await this.lavadorService.getLavador(id);
    }
    async updatelavador(id, lavador) {
        return await this.lavadorService.updateLavador(id, lavador);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_lavador_dto_1.CreateLavadorDto]),
    __metadata("design:returntype", Promise)
], LavadorController.prototype, "createlavador", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LavadorController.prototype, "getlavadors", null);
__decorate([
    (0, common_1.Get)("id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], LavadorController.prototype, "getlavador", null);
__decorate([
    (0, common_1.Patch)("id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_lavador_dto_1.UpdateLavadorDto]),
    __metadata("design:returntype", Promise)
], LavadorController.prototype, "updatelavador", null);
LavadorController = __decorate([
    (0, common_1.Controller)('lavador'),
    __metadata("design:paramtypes", [lavador_service_1.LavadorService])
], LavadorController);
exports.LavadorController = LavadorController;
//# sourceMappingURL=lavador.controller.js.map