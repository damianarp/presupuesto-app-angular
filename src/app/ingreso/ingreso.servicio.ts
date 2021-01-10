import { Ingreso } from "./ingreso.model";

export class IngresoServicio {
  ingresos: Ingreso[]=[
    new Ingreso("Salario", 50000),
    new Ingreso("Venta de ropa", 4000)
  ];
}
