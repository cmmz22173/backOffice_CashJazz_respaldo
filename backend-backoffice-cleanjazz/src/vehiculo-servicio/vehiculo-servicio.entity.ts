import { vehiculo } from "src/vehiculo/vehiculo.entity";
import { Servicio } from "src/servicio/servicio.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";

@Entity( { name: 'vehiculoServicio' })
export class VehiculoServico {

    @ManyToOne(() => vehiculo, (vehiculo) => vehiculo.id)
    @JoinColumn()
    @PrimaryColumn()
    vehiculo: number;
  
    @ManyToOne(() => Servicio, (servicio) => servicio.id)
    @JoinColumn()
    @PrimaryColumn()
    servicio: number;
  
    @Column()
    horaEntrada: Date;
  
    @Column()
    horaSalida: Date;
  
    @Column()
    comentarios: string;
}