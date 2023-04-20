import { HttpException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { empleado } from './empleado.entity';
import { CreateEmpleadoDto } from './dto/create-empleado.dto';
import { UpdateEmpleadoDto } from './dto/update-empleado.dto';
export declare class EmpleadoService {
    private empleadoRepository;
    constructor(empleadoRepository: Repository<empleado>);
    createEmpleado(empleado: CreateEmpleadoDto): Promise<HttpException | empleado>;
    getEmpleados(): Promise<HttpException | empleado[]>;
    getEmpleado(id: number): Promise<HttpException | empleado>;
    updateEmpleado(id: number, empleado: UpdateEmpleadoDto): Promise<HttpException | (empleado & UpdateEmpleadoDto)>;
}
