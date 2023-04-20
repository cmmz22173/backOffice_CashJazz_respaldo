import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({name:"cliente"})
export class cliente{
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    dni: number
    @Column()
    primerNombre:string
    @Column()
    segundoNombre:string
    @Column()
    primerApellido:string
    @Column()
    segundoApellido:string
    @Column()
    genero:string
    @Column()
    correo:string
    @Column()
    celular:string
    @Column({default: 'activo'})
    estado:string
}
 