import { SnackRepository } from '../domain/snack.repository';
import { SnackValue } from '../domain/snack.value';


export class SnackUseCase {
    
  constructor(private readonly SnackRepository: SnackRepository) {}

  public listSnack = async () =>{
    const snackValue = await this.SnackRepository.listSnack();  
    return snackValue;
  }

  public insertSnack = async ({entry_time,departure_time}:{entry_time:string,departure_time:string}) =>{
    const snack = new SnackValue({entry_time,departure_time})
    const snackCreate = await this.SnackRepository.insertSnack(snack);  
    return snackCreate;
  }

}
