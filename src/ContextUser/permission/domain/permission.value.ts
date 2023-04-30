import { PermissionEntity } from "./permission.entity";

export class PermissionValue implements PermissionEntity {

  day_permission: string;
  reason: string;
  employeeId: number;


  constructor({day_permission,reason,employeeId}:
    {day_permission:string,reason:string, employeeId: number}) {
        this.day_permission = day_permission;
        this.reason = reason ;
        this.employeeId = employeeId
    }
}