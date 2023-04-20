import { Producto } from "src/producto/producto.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('inventario')
export class Inventario{
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => Producto, producto => producto.id)
    producto: number;
    @Column()
    cantidad: number;
    
}