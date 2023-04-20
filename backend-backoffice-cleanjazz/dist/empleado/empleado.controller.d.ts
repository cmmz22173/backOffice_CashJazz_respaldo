import { EmpleadoService } from './empleado.service';
import { CreateEmpleadoDto } from './dto/create-empleado.dto';
import { UpdateEmpleadoDto } from './dto/update-empleado.dto';
export declare class EmpleadoController {
    private empleadoService;
    constructor(empleadoService: EmpleadoService);
    createEmpleado(empleado: CreateEmpleadoDto): Promise<import("@nestjs/common").HttpException | import("./empleado.entity").empleado>;
    getEmpleados(): Promise<import("@nestjs/common").HttpException | import("./empleado.entity").empleado[]>;
    getEmpleado(id: number): Promise<import("@nestjs/common").HttpException | import("./empleado.entity").empleado>;
    updateEmpleado(id: any, empleado: UpdateEmpleadoDto): Promise<import("@nestjs/common").HttpException | (import("./empleado.entity").empleado & UpdateEmpleadoDto)>;
}
