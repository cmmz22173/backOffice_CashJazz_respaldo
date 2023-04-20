import { Lavador } from "src/lavador/lavador.entity";
import { TipoServicio } from "src/tipo-servicio/tipo-servicio.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity( {name: 'servicio'})
export class Servicio{

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne( type => TipoServicio, tipoServicio => tipoServicio.id)
    tipoServicio: TipoServicio;
    
    @ManyToOne( type => Lavador, lavador => lavador.id)
    lavador: Lavador;

    @Column()
    fecha: Date;
    @Column()
    hora: Date;
    @Column()
    detalles: string;
}