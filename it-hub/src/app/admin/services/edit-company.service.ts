import { EventEmitter, Injectable } from "@angular/core";
import { Company } from "../models/company.model";

@Injectable({
    providedIn: 'root'
  })
  
export class EditCompanyService {
    
   static privateCompany:Company

    constructor(){
        
    }

    setEventData(data:any) {
        EditCompanyService.privateCompany=(data) as Company
    }

}