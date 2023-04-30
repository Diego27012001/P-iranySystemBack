import { TypeEntity } from "./type_user.entity";

export class TypeValue implements TypeEntity {
    

    worth: string

  constructor({worth}:
    { worth:string}) {

        this.worth = worth
    }
}