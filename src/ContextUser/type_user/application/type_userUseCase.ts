import { TypeRepository } from '../domain/type_user.repository';
import { TypeValue } from '../domain/type_user.value';

export class TypeUseCase {
    
  constructor(private readonly TypeRepository: TypeRepository) {}

  public listType = async () =>{
    const typeValue = await this.TypeRepository.listType();  
    return typeValue;
  }


  public insertType = async ({worth}
    :{worth:string}) =>{
      
    const typeUser = new TypeValue({worth});
    const typeUserCreate = await this.TypeRepository.insertType(typeUser);
    return typeUserCreate;
  }

  

}
