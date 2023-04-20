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
exports.GrupoController = void 0;
const common_1 = require("@nestjs/common");
const grupo_service_1 = require("./grupo.service");
const update_grupo_dto_1 = require("./dto/update-grupo.dto");
const create_grupo_dto_1 = require("./dto/create-grupo.dto");
let GrupoController = class GrupoController {
    constructor(grupoService) {
        this.grupoService = grupoService;
    }
    getGrupos() {
        return this.grupoService.getGrupos();
    }
    updateGrupo(id, grupo) {
        return this.grupoService.updateGrupo(id, grupo);
    }
    getGrupo(id) {
        return this.grupoService.getGrupo(id);
    }
    createGrupo(newGrupo) {
        return this.grupoService.createGrupo(newGrupo);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GrupoController.prototype, "getGrupos", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_grupo_dto_1.UpdateGrupoDto]),
    __metadata("design:returntype", void 0)
], GrupoController.prototype, "updateGrupo", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], GrupoController.prototype, "getGrupo", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_grupo_dto_1.CreateGrupoDto]),
    __metadata("design:returntype", void 0)
], GrupoController.prototype, "createGrupo", null);
GrupoController = __decorate([
    (0, common_1.Controller)('grupos'),
    __metadata("design:paramtypes", [grupo_service_1.GrupoService])
], GrupoController);
exports.GrupoController = GrupoController;
//# sourceMappingURL=grupo.controller.js.map