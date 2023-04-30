import { SnackEntity} from "./snack.entity";

export interface SnackRepository {

    // Metodos

    listSnack(): Promise<SnackEntity[] | null>;

    insertSnack(snack:SnackEntity): Promise<SnackEntity | null>;
    
   
   
  
}
