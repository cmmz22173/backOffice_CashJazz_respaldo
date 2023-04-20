import { cliente } from 'src/cliente/cliente.entity'
import {Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn} from 'typeorm'
@Entity({name: 'usuario'}) // Este es el nombre de la tabla en la base de datos
export class user{

    @PrimaryGeneratedColumn()
    id:number
    @Column()
    username:string

    @Column()
    password:string

    @OneToOne(() => cliente)
    @JoinColumn()
    Cliente: number

    @Column({default: 'activo'})
    estado:string
}


