import { TipoProducto } from "src/tipo-producto/tipo-producto.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('producto')
export class Producto{
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => TipoProducto, tipoProducto => tipoProducto.id)
    tipoProducto: number;
    
    @Column() 
    cantidad: number;
    @Column()
    caducidad: Date;
    @Column({default: 'activo'})
    estado: string;
}