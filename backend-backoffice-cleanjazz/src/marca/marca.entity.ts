import { grupo } from "src/grupo/grupo.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"marca"})
export class marca {

    @PrimaryGeneratedColumn()
    id:number

    @Column()
    nombreMarca:string
    
    @ManyToOne (type => grupo , grupo => grupo.id)
    grupo:grupo
}