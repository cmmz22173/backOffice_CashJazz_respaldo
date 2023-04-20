import { empleado } from "src/empleado/empleado.entity";
import { Puesto } from "src/puesto/puesto.entity";
import { TurnoGuardia } from "src/turno-guardia/turno-guardia.entity";
export declare class guardia {
    id: number;
    empleado: empleado;
    turnoGuardia: TurnoGuardia;
    puesto: Puesto;
    horaEntrada: Date;
    horaSalida: Date;
}
