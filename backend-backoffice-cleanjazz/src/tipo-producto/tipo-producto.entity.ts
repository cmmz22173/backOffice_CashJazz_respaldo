import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('tipoProducto')
export class TipoProducto {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nombreProducto: string;
    @Column()
    descripcion: string;
    @Column()
    precio: number;
}