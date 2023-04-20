import { Entity, PrimaryGeneratedColumn, Column} from "typeorm"

@Entity('tipoServicio')
export class TipoServicio {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nombreServicio: string;
    @Column()
    descripcion: string;
    @Column()
    precio: number;

}