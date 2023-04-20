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
exports.ClienteService = void 0;
const common_1 = require("@nestjs/common");
const cliente_entity_1 = require("./cliente.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let ClienteService = class ClienteService {
    constructor(clienteRepository) {
        this.clienteRepository = clienteRepository;
    }
    async createCliente(cliente) {
        const clienteFound = await this.clienteRepository.findOne({
            where: {
                dni: cliente.dni
            }
        });
        if (clienteFound) {
            return new common_1.HttpException('User already exists', common_1.HttpStatus.CONFLICT);
        }
        const newCliente = this.clienteRepository.create(cliente);
        return this.clienteRepository.save(newCliente);
    }
    getClientes() {
        return this.clienteRepository.find({ where: { estado: 'activo' } });
    }
    async getCliente(id) {
        const clienteFound = await this.clienteRepository.findOne({
            where: {
                id
            }
        });
        if (!clienteFound) {
            return new common_1.HttpException('Cliente not found', common_1.HttpStatus.NOT_FOUND);
        }
        return clienteFound;
    }
    async updateCliente(id, cliente) {
        const clienteFound = await this.clienteRepository.findOne({
            where: {
                id
            }
        });
        if (!clienteFound) {
            return new common_1.HttpException('Cliente not found', common_1.HttpStatus.NOT_FOUND);
        }
        const updateCliente = Object.assign(clienteFound, cliente);
        return this.clienteRepository.save(updateCliente);
    }
    async deleteCliente(id) {
        const clienteFound = await this.clienteRepository.findOne({
            where: {
                id
            }
        });
        if (!clienteFound) {
            return new common_1.HttpException('Cliente not found', common_1.HttpStatus.NOT_FOUND);
        }
        const softDeleteCliente = Object.assign(clienteFound, { estado: 'inactivo' });
        return this.clienteRepository.save(softDeleteCliente);
    }
};
ClienteService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(cliente_entity_1.cliente)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ClienteService);
exports.ClienteService = ClienteService;
//# sourceMappingURL=cliente.service.js.map