"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const users_module_1 = require("./users/users.module");
const typeorm_1 = require("@nestjs/typeorm");
const cliente_module_1 = require("./cliente/cliente.module");
const grupo_module_1 = require("./grupo/grupo.module");
const marca_module_1 = require("./marca/marca.module");
const modelo_module_1 = require("./modelo/modelo.module");
const vehiculo_module_1 = require("./vehiculo/vehiculo.module");
const empleado_module_1 = require("./empleado/empleado.module");
const puesto_module_1 = require("./puesto/puesto.module");
const guardia_module_1 = require("./guardia/guardia.module");
const administrativo_module_1 = require("./administrativo/administrativo.module");
const lavador_module_1 = require("./lavador/lavador.module");
const servicio_module_1 = require("./servicio/servicio.module");
const producto_module_1 = require("./producto/producto.module");
const inventario_module_1 = require("./inventario/inventario.module");
const turno_guardia_module_1 = require("./turno-guardia/turno-guardia.module");
const lavador_producto_module_1 = require("./lavador-producto/lavador-producto.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'carwash-database-1.c4wwmskpgbep.us-east-1.rds.amazonaws.com',
                username: 'tigre',
                password: 'trestristestigrestragabantrigoen1trigal',
                database: 'backoffice',
                port: 3306,
                entities: [__dirname + '/**/*.entity{.ts,.js}'],
                synchronize: true,
                migrations: ['dist/migrations/*{.ts,.js}'],
                migrationsRun: true,
            }),
            users_module_1.UsersModule,
            cliente_module_1.ClienteModule,
            grupo_module_1.GrupoModule,
            marca_module_1.MarcaModule,
            modelo_module_1.ModeloModule,
            vehiculo_module_1.VehiculoModule,
            empleado_module_1.EmpleadoModule,
            puesto_module_1.PuestoModule,
            guardia_module_1.GuardiaModule,
            administrativo_module_1.AdministrativoModule,
            lavador_module_1.LavadorModule,
            servicio_module_1.ServicioModule,
            producto_module_1.ProductoModule,
            inventario_module_1.InventarioModule,
            lavador_producto_module_1.LavadorProductoModule,
            turno_guardia_module_1.TurnoGuardiaModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map