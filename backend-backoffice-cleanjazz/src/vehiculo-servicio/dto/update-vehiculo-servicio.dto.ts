export class UpdateVehiculoServicioDto {
  vehiculoId?: number;
  servicioId?: number;
  horaEntrada?: Date;
  horaSalida?: Date;
  comentarios?: string;
}