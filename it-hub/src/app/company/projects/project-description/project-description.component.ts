import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-project-description',
  templateUrl: './project-description.component.html',
  styleUrls: ['./project-description.component.scss']
})
export class ProjectDescriptionComponent implements OnInit {

  project: Project;

  constructor( private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.project = this.route.snapshot.data["project"];
    console.log(this.project); 
  }

}
