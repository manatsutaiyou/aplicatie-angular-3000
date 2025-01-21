import { TelBasic } from "./tel-basic";
import { ReteleEnum } from "./retele-enum.enum";

export class TelefonClass implements TelBasic {
    image: any;
    ID: number;
    name: string;
    SellExc: number;
    type: string;
    pret: number | null;
    Anmodel: number | null;
    procesor: string;
    memorie: string;
    display: string;
    baterie: string;
    retele: string[] ;
  
    constructor() {
      this.image = null;
      this.ID = 0;
      this.name = '';
      this.SellExc = 0;
      this.type = '';
      this.pret = null;
      this.Anmodel = null;
      this.procesor = '';
      this.memorie = '';
      this.display = '';
      this.baterie = '';
      this.retele = [];
    }

  //   addRetea(retea: ReteleEnum): void {
  //     if (!this.retele.includes(retea)) {
  //       this.retele.push(retea);
  //     }
  // }
}