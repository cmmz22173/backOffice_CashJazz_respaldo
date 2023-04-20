import { Lavador } from "src/lavador/lavador.entity";
import { Producto } from "src/producto/producto.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";

@Entity( {name:'lavadorProducto'})
export class lavadorProducto{

    @ManyToOne(() => Producto, (producto) => producto.id)
    @JoinColumn()
    @PrimaryColumn()
    producto: number;

    @ManyToOne(() => Lavador, (lavador) => lavador.id)
    @JoinColumn()
    @PrimaryColumn()
    lavador: number;

    @Column()
    descripcion: string;

    @Column()
    fechaEntrega: Date;
    
}