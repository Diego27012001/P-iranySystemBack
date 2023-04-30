import { TypeEntity } from "./type_user.entity";

export interface TypeRepository {

    // Metodos

    listType(): Promise<TypeEntity[] | null>;
    insertType(type:TypeEntity): Promise<TypeEntity | null>;
    
   
   
  
}
