import { empleado } from "src/empleado/empleado.entity";
import { Puesto } from "src/puesto/puesto.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('lavador')
export class Lavador {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(type => empleado)
    @JoinColumn()
    empleado: number;

    @OneToOne(type => Puesto)
    @JoinColumn()
    puesto: number;

    @Column()
    horaEntrada: Date;
    @Column()
    horaSalida: Date;
}