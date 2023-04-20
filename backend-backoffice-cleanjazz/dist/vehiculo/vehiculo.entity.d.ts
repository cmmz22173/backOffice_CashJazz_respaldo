import { cliente } from "src/cliente/cliente.entity";
import { modelo } from "src/modelo/modelo.entity";
export declare class vehiculo {
    id: number;
    placa: string;
    año: number;
    color: string;
    descripcion: string;
    estado: string;
    cliente: cliente;
    modelo: modelo;
}
