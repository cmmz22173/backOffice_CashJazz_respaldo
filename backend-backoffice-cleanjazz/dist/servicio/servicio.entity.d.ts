import { Lavador } from "src/lavador/lavador.entity";
import { TipoServicio } from "src/tipo-servicio/tipo-servicio.entity";
export declare class Servicio {
    id: number;
    tipoServicio: TipoServicio;
    lavador: Lavador;
    fecha: Date;
    hora: Date;
    detalles: string;
}
