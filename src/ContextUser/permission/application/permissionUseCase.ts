import { PermissionRepository } from '../domain/permission.repository';
import { PermissionValue } from '../domain/permission.value';

export class PermissionUseCase {
    
  constructor(private readonly PermissionRepository: PermissionRepository) {}

  public listPermission = async () =>{
    const permissionValue = await this.PermissionRepository.listPermission();  
    return permissionValue;
  }

  public insertPermission = async ({day_permission,reason,employeeId}:{day_permission:string,reason:string,employeeId:number}) =>{
    const permission = new PermissionValue({day_permission,reason,employeeId})
    const permissionCreate = await this.PermissionRepository.insertPermission(permission);  
    return permissionCreate;
  }


}
