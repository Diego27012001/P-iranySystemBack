
import { StoreRepository } from '../domain/store.repository';
import { StoreValue } from '../domain/store.value';

export class StoreUseCase {
    
  constructor(private readonly StoreRepository: StoreRepository) {}

  public listStore = async () =>{
    const storeValue = await this.StoreRepository.listStore();  
    return storeValue;
  }


  public insertStore = async ({name_store,ruc,length_store,latitude_store,scheduleId}:
    {name_store:string,ruc:string,length_store:number,latitude_store:number,scheduleId:number}) =>{

      const store = new StoreValue({name_store,ruc,length_store,latitude_store,scheduleId});
      const storeCreate = await this.StoreRepository.insertStore(store);    
      return storeCreate;
  }

}
