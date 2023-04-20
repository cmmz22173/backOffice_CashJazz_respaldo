import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('empleado')
export class empleado {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    dni: number;

    @Column()
    primerNombre: string;

    @Column()
    segundoNombre: string;

    @Column()
    primerApellido: string;

    @Column()
    segundoApellido: string;

    @Column()
    genero: string;

    @Column()
    correo: string;

    @Column()
    celular: string;

    @Column({default: 'activo'})
    estado: string;
}