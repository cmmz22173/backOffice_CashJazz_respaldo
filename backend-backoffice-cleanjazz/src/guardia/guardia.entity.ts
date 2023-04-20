import { empleado } from "src/empleado/empleado.entity";
import { Puesto } from "src/puesto/puesto.entity";
import { TurnoGuardia } from "src/turno-guardia/turno-guardia.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("guardia")
export class guardia {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => empleado , empleado => empleado.id)
    empleado: empleado;

    @ManyToOne(type =>TurnoGuardia, turnoGuardia => turnoGuardia.id)
    turnoGuardia: TurnoGuardia;

    @ManyToOne(type => Puesto, puesto => puesto.id)
    puesto: Puesto;

    @Column()
    horaEntrada: Date;
    @Column()
    horaSalida: Date;
    
}