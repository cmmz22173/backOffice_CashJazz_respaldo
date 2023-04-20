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
exports.TipoProductoController = void 0;
const common_1 = require("@nestjs/common");
const update_tipo_producto_dto_1 = require("./dto/update-tipo-producto.dto");
const tipo_producto_service_1 = require("./tipo-producto.service");
const create_tipo_producto_dto_1 = require("./dto/create-tipo-producto.dto");
let TipoProductoController = class TipoProductoController {
    constructor(tipoProductoService) {
        this.tipoProductoService = tipoProductoService;
    }
    createtipoProducto(newtipoProducto) {
        return this.tipoProductoService.createTipoProducto(newtipoProducto);
    }
    gettipoProductos() {
        return this.tipoProductoService.getTipoProductos();
    }
    gettipoProducto(id) {
        return this.tipoProductoService.getTipoProducto(id);
    }
    updatetipoProducto(id, tipoProducto) {
        return this.tipoProductoService.updateTipoProducto(id, tipoProducto);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tipo_producto_dto_1.CreateTipoProductoDto]),
    __metadata("design:returntype", void 0)
], TipoProductoController.prototype, "createtipoProducto", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TipoProductoController.prototype, "gettipoProductos", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TipoProductoController.prototype, "gettipoProducto", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_tipo_producto_dto_1.UpdateTipoProductoDto]),
    __metadata("design:returntype", void 0)
], TipoProductoController.prototype, "updatetipoProducto", null);
TipoProductoController = __decorate([
    (0, common_1.Controller)('tipo-producto'),
    __metadata("design:paramtypes", [tipo_producto_service_1.TipoProductoService])
], TipoProductoController);
exports.TipoProductoController = TipoProductoController;
//# sourceMappingURL=tipo-producto.controller.js.map