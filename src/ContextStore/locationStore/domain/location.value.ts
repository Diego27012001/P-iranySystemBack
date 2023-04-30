import { LocationEntity } from "./location.entity";

export class LocationValue implements LocationEntity {
    
    id_location_store: number;
    length_store: number;
    latitude_store: number

  constructor({id_location_store, length_store, latitude_store}:
    {id_location_store: number, length_store:number, latitude_store:number}) {
   
        this.id_location_store = id_location_store;
        this.length_store = length_store;
        this.latitude_store = latitude_store
    }
}