import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('turnoGuardia')
export class TurnoGuardia {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    turno: string;
    @Column()
    descripcion: string;
}