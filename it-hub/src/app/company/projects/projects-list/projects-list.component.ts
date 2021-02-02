import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {

  projects;
  id;

  constructor( private projectService: ProjectService) { }

  ngOnInit(): void {
    this.id = window.localStorage.getItem("id")
    this.projectService.getProjectsList(this.id).subscribe(data =>{
      this.projects = data;
    })
  }

}
