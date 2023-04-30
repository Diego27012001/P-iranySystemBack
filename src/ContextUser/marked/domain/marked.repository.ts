import { MarkedEntity } from "./marked.entity";

export interface MarkedRepository {

    // Metodos

    listMarked(): Promise<MarkedEntity[] | null>;
    insertMarked(marked:MarkedEntity): Promise<MarkedEntity | null>;
    
   
   
  
}
