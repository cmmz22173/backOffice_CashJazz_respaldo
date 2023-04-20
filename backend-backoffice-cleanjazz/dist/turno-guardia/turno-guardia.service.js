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
exports.TurnoGuardiaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const turno_guardia_entity_1 = require("./turno-guardia.entity");
let TurnoGuardiaService = class TurnoGuardiaService {
    constructor(turnoGuardiaRepository) {
        this.turnoGuardiaRepository = turnoGuardiaRepository;
    }
    async createTurnoGuardia(turnoGuardia) {
        const turnoGuardiaFound = await this.turnoGuardiaRepository.findOne({
            where: {
                turno: turnoGuardia.turno
            }
        });
        if (turnoGuardiaFound) {
            return new common_1.HttpException('Turno Guardia already exists', common_1.HttpStatus.CONFLICT);
        }
        const newTurno = this.turnoGuardiaRepository.create(turnoGuardia);
        return this.turnoGuardiaRepository.save(newTurno);
    }
    async getTurnoGuardia(id) {
        const turnoGuardiaFound = await this.turnoGuardiaRepository.findOne({
            where: {
                id
            }
        });
        if (!turnoGuardiaFound) {
            return new common_1.HttpException('Turno Guardia not found', common_1.HttpStatus.NOT_FOUND);
        }
        return turnoGuardiaFound;
    }
    async getTurnosGuardia() {
        const turnosGuardia = await this.turnoGuardiaRepository.find();
        if (!turnosGuardia) {
            return new common_1.HttpException('Turnos Guardia not found', common_1.HttpStatus.NOT_FOUND);
        }
        return turnosGuardia;
    }
    async updateTurnoGuardia(id, turnoGuardia) {
        const turnoGuardiaFound = await this.turnoGuardiaRepository.findOne({
            where: {
                id
            }
        });
        if (!turnoGuardiaFound) {
            return new common_1.HttpException('Turno Guardia not found', common_1.HttpStatus.NOT_FOUND);
        }
        const updateTurnoGuardia = Object.assign(turnoGuardiaFound, turnoGuardia);
        return this.turnoGuardiaRepository.save(updateTurnoGuardia);
    }
};
TurnoGuardiaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(turno_guardia_entity_1.TurnoGuardia)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TurnoGuardiaService);
exports.TurnoGuardiaService = TurnoGuardiaService;
//# sourceMappingURL=turno-guardia.service.js.map