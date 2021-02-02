import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from "../models/project.model";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  Projects: Project[];

  readonly baseURL = 'http://localhost:5680/company';

  constructor(private http: HttpClient) { }

  postProject(Project: Project) {
    return this.http.post(this.baseURL + `/addProject`, Project);
  }

  getProjectsList(id: any) {
    return this.http.get(this.baseURL + `/showProjectsListData/${id}`);
  }

  getProjectsDetails(projectUrl: string) {
    return this.http.get(this.baseURL + `/projectDetails/${projectUrl}`);
  }
}
