import { marca } from "src/marca/marca.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"modelo"})
export class modelo {
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    nombreModelo:string
    @ManyToOne(type => marca, marca => marca.id)
    marca:marca
}