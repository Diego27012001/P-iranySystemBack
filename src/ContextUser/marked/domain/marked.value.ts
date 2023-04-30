import { MarkedEntity } from "./marked.entity";

export class MarkedValue implements MarkedEntity {

  employeeId: number;
  date: string;
  entry_time: string;
  departure_time: string;
  status_marked: string;
  late_time: string;
  extraTime: string;


  constructor({ date, entry_time, departure_time, status_marked, employeeId , late_time , extraTime}:
    { date: string, entry_time: string, departure_time: string, status_marked: string, employeeId: number,late_time: string , extraTime:string }) {

    this.date = date;
    this.entry_time = entry_time;
    this.departure_time = departure_time;
    this.status_marked = status_marked;
    this.late_time = late_time;
    this.extraTime = extraTime;
    this.employeeId = employeeId
  }

}