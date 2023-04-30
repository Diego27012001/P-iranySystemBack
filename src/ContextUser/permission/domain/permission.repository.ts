import { PermissionEntity } from "./permission.entity";

export interface PermissionRepository {

    // Metodos

    listPermission(): Promise<PermissionEntity[] | null>;
    
    insertPermission(permission:PermissionEntity): Promise<PermissionEntity | null>;
   
  
}
