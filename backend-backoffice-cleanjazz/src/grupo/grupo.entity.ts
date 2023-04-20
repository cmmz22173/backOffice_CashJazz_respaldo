import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"grupo"})
export class grupo {
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    nombreGrupo:string
}