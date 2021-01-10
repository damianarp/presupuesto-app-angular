import { Ingreso } from "./ingreso.model";

export class IngresoServicio {
  ingresos: Ingreso[]=[
    new Ingreso("Salario", 50000),
    new Ingreso("Venta de ropa", 4000)
  ];

  eliminar(ingreso: Ingreso) {
    const indice: number = this.ingresos.indexOf(ingreso);
    this.ingresos.splice(indice,1);
  }
}
