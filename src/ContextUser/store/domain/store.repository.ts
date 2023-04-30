import { StoreEntity } from "./store.entity";

export interface StoreRepository {

    // Metodos

    listStore(): Promise<StoreEntity[] | null>;
    
    insertStore(store:StoreEntity): Promise<StoreEntity | null>;
    
   
   
  
}
