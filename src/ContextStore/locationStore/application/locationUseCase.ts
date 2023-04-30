import { LocationRepository } from '../domain/location.repository';

export class LocationUseCase {
    
  constructor(private readonly LocationRepository: LocationRepository) {}

  public listLocation = async () =>{
    const locationValue = await this.LocationRepository.listLocation();  
  }

}
