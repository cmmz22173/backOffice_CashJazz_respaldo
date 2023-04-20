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
exports.InventarioController = void 0;
const common_1 = require("@nestjs/common");
const create_inventario_dto_1 = require("./dto/create-inventario.dto");
const update_inventario_dto_1 = require("./dto/update-inventario.dto");
const inventario_service_1 = require("./inventario.service");
let InventarioController = class InventarioController {
    constructor(InventarioService) {
        this.InventarioService = InventarioService;
    }
    createInventario(newInventario) {
        return this.InventarioService.createInventario(newInventario);
    }
    getInventarios() {
        return this.InventarioService.getInventarios();
    }
    getInventario(id) {
        return this.InventarioService.getInventario(id);
    }
    updateInventario(id, Inventario) {
        return this.InventarioService.updateInventario(id, Inventario);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_inventario_dto_1.CreateInventarioDto]),
    __metadata("design:returntype", void 0)
], InventarioController.prototype, "createInventario", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], InventarioController.prototype, "getInventarios", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], InventarioController.prototype, "getInventario", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_inventario_dto_1.UpdateInventarioDto]),
    __metadata("design:returntype", void 0)
], InventarioController.prototype, "updateInventario", null);
InventarioController = __decorate([
    (0, common_1.Controller)('inventario'),
    __metadata("design:paramtypes", [inventario_service_1.InventarioService])
], InventarioController);
exports.InventarioController = InventarioController;
//# sourceMappingURL=inventario.controller.js.map