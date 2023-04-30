import { StoreEntity } from "./store.entity";

export class StoreValue implements StoreEntity {
    
  name_store:string;
  ruc:string;
  length_store:number;
  latitude_store:number;
  scheduleId:number

  constructor({name_store,ruc,length_store,latitude_store,scheduleId}:
    {name_store:string,ruc:string,length_store:number,latitude_store:number,scheduleId:number}) {
   
        this.name_store = name_store;
        this.ruc = ruc;
        this.length_store = length_store;
        this.latitude_store = latitude_store;
        this.scheduleId = scheduleId;
    }
}