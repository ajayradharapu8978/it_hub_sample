import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { first } from 'rxjs/operators';
import { ProjectService } from "../../services/project.service";


@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {
  projectForm: FormGroup;
  id;

  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private projectService: ProjectService
    ) { }

  ngOnInit(): void {
    this.id = window.localStorage.getItem("id");
    this.projectForm = this.formBuilder.group({ 
      Name: ['', Validators.required],
      company: [this.id, Validators.required],
      Technology: ['', Validators.required],
      Description: ['', Validators.required]
    })
  }

  onSubmit() {
    if (this.projectForm.invalid) {
      return;
    }
    this.projectService.postProject(this.projectForm.value).pipe(first()).subscribe((res) => {
      this.snackBar.open("Project added Successfilly", 'Ok', {
        duration: 3000
      });
    });
  }

}
