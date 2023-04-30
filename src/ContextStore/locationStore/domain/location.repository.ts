import { LocationEntity } from "./location.entity";

export interface LocationRepository {

    // Metodos

    listLocation(): Promise<LocationEntity[] | null>;
    
   
   
  
}
