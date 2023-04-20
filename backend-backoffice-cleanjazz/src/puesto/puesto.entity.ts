import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("puesto")
export class Puesto {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombrePuesto: string;

    @Column()
    descripcion: string;

}