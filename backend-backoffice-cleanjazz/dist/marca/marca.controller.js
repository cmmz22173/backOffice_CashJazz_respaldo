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
exports.MarcaController = void 0;
const common_1 = require("@nestjs/common");
const marca_service_1 = require("./marca.service");
const create_marca_dto_1 = require("./dto/create_marca.dto");
const update_marca_dto_1 = require("./dto/update_marca.dto");
let MarcaController = class MarcaController {
    constructor(marcaService) {
        this.marcaService = marcaService;
    }
    createMarca(newMarca) {
        return this.marcaService.createMarca(newMarca);
    }
    updateMarca(id, marca) {
        return this.marcaService.updateMarca(id, marca);
    }
    getMarca(id) {
        return this.marcaService.getMarca(id);
    }
    getMarcas() {
        return this.marcaService.getMarcas();
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_marca_dto_1.CreateMarcaDto]),
    __metadata("design:returntype", void 0)
], MarcaController.prototype, "createMarca", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_marca_dto_1.UpdateMarcaDto]),
    __metadata("design:returntype", void 0)
], MarcaController.prototype, "updateMarca", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MarcaController.prototype, "getMarca", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MarcaController.prototype, "getMarcas", null);
MarcaController = __decorate([
    (0, common_1.Controller)('marcas'),
    __metadata("design:paramtypes", [marca_service_1.MarcaService])
], MarcaController);
exports.MarcaController = MarcaController;
//# sourceMappingURL=marca.controller.js.map