import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Project } from '../models/project.model';
import { ProjectService } from '../services/project.service';

@Injectable({ providedIn: 'root' })

export class ProjectResolver implements Resolve<Project> {
    
constructor( private projectService: ProjectService) { }


    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {

        const projectUrl = route.paramMap.get("projectUrl");
        console.log(projectUrl);
        

        return this.projectService.getProjectsDetails(projectUrl);
    }
}