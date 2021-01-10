import { Egreso } from "./egreso.model";

export class EgresoServicio {
  egresos: Egreso[]=[
    new Egreso("Alquiler", 11500),
    new Egreso("Expensas", 500)
  ]
}
