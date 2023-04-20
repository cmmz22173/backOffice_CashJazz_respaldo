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
exports.EmpleadoController = void 0;
const common_1 = require("@nestjs/common");
const empleado_service_1 = require("./empleado.service");
const create_empleado_dto_1 = require("./dto/create-empleado.dto");
const update_empleado_dto_1 = require("./dto/update-empleado.dto");
let EmpleadoController = class EmpleadoController {
    constructor(empleadoService) {
        this.empleadoService = empleadoService;
    }
    async createEmpleado(empleado) {
        return this.empleadoService.createEmpleado(empleado);
    }
    async getEmpleados() {
        return this.empleadoService.getEmpleados();
    }
    async getEmpleado(id) {
        return this.empleadoService.getEmpleado(id);
    }
    async updateEmpleado(id, empleado) {
        return this.empleadoService.updateEmpleado(id, empleado);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_empleado_dto_1.CreateEmpleadoDto]),
    __metadata("design:returntype", Promise)
], EmpleadoController.prototype, "createEmpleado", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EmpleadoController.prototype, "getEmpleados", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], EmpleadoController.prototype, "getEmpleado", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_empleado_dto_1.UpdateEmpleadoDto]),
    __metadata("design:returntype", Promise)
], EmpleadoController.prototype, "updateEmpleado", null);
EmpleadoController = __decorate([
    (0, common_1.Controller)('empleados'),
    __metadata("design:paramtypes", [empleado_service_1.EmpleadoService])
], EmpleadoController);
exports.EmpleadoController = EmpleadoController;
//# sourceMappingURL=empleado.controller.js.map