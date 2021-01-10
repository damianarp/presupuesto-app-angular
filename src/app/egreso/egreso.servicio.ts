import { Egreso } from "./egreso.model";

export class EgresoServicio {
  egresos: Egreso[]=[
    new Egreso("Alquiler", 11500),
    new Egreso("Expensas", 500)
  ]

  eliminar(egreso: Egreso) {
    const indice: number = this.egresos.indexOf(egreso);
    this.egresos.splice(indice,1);
  }
}
