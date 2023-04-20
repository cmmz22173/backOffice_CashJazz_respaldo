import { empleado } from "src/empleado/empleado.entity";
import { Puesto } from "src/puesto/puesto.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity('administrativo')
export class Administrativo {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(type => empleado)
    @JoinColumn()
    empleado: number;

    @OneToOne(type => Puesto)
    @JoinColumn()
    puesto: number;

    @Column()
    clave: string;
    @Column()
    usuario: string;
}
