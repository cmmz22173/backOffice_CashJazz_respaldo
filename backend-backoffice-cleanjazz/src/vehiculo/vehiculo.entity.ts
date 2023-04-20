import { type } from "os";
import { cliente } from "src/cliente/cliente.entity";
import { modelo } from "src/modelo/modelo.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'vehiculo'})
export class vehiculo{
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    placa:  string;
    @Column()
    año: number;
    @Column(   )
    color: string;
    @Column()
    descripcion: string;
    @Column({default: 'activo'})
    estado: string;

    //relacion 1 cliente muchos vehiculos
    @ManyToOne(type => cliente, cliente => cliente.id)
    cliente:cliente

    //relacion 1 modelo muchos vehiculos
    @ManyToOne(type => modelo, modelo => modelo.id)
    modelo:modelo


}