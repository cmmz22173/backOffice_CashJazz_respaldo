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
exports.LavadorProductoController = void 0;
const common_1 = require("@nestjs/common");
const lavador_producto_service_1 = require("./lavador-producto.service");
const create_lavador_producto_dto_1 = require("./dto/create-lavador-producto.dto");
const update_lavador_producto_dto_1 = require("./dto/update-lavador-producto.dto");
let LavadorProductoController = class LavadorProductoController {
    constructor(lavadorProductoService) {
        this.lavadorProductoService = lavadorProductoService;
    }
    createlavadorProducto(newlavadorProducto) {
        return this.lavadorProductoService.create(newlavadorProducto);
    }
    getlavadorProducto() {
        return this.lavadorProductoService.findAll();
    }
    getOnelavadorProducto(productoId, lavadorId) {
        return this.lavadorProductoService.findOne(productoId, lavadorId);
    }
    updatelavadorProducto(productoId, lavadorId, lavadorProducto) {
        return this.lavadorProductoService.update(productoId, lavadorId, lavadorProducto);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_lavador_producto_dto_1.CreateLavadorProductoDto]),
    __metadata("design:returntype", void 0)
], LavadorProductoController.prototype, "createlavadorProducto", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LavadorProductoController.prototype, "getlavadorProducto", null);
__decorate([
    (0, common_1.Get)('/:productoId/:lavadorId'),
    __param(0, (0, common_1.Param)('productoId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('lavadorId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], LavadorProductoController.prototype, "getOnelavadorProducto", null);
__decorate([
    (0, common_1.Patch)('/:productoId/:lavadorId'),
    __param(0, (0, common_1.Param)('productoId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('lavadorId', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, update_lavador_producto_dto_1.UpdateLavadorProductoDto]),
    __metadata("design:returntype", void 0)
], LavadorProductoController.prototype, "updatelavadorProducto", null);
LavadorProductoController = __decorate([
    (0, common_1.Controller)('lavador-producto'),
    __metadata("design:paramtypes", [lavador_producto_service_1.LavadorProductoService])
], LavadorProductoController);
exports.LavadorProductoController = LavadorProductoController;
//# sourceMappingURL=lavador-producto.controller.js.map