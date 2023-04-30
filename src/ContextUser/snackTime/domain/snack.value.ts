import { SnackEntity } from "./snack.entity";

export class SnackValue implements SnackEntity {

    entry_time: string;
    departure_time: string

  constructor({entry_time,departure_time}:
    {entry_time:string,departure_time:string}) {
   
        this.entry_time = entry_time;
        this.departure_time = departure_time;
    }
}