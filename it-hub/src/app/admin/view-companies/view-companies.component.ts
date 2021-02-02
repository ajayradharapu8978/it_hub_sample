import { Component, OnInit } from '@angular/core';
import { CompanyService } from "../services/company.service";
import { Company } from "../models/company.model";
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddCompaniesComponent } from '../add-companies/add-companies.component';
import { EditCompanyService } from '../services/edit-company.service';


@Component({
  selector: 'app-view-companies',
  templateUrl: './view-companies.component.html',
  styleUrls: ['./view-companies.component.scss'],
  providers: [CompanyService]
})
export class ViewCompaniesComponent implements OnInit {

  simpleDialog: MatDialogRef<AddCompaniesComponent>;

  dataSource;

  isLoading = false;


  displayedColumns: string[] = ['company', 'Category', 'email', "_id"];

  constructor(
    private companyservice: CompanyService,
    private snackBar: MatSnackBar,
    private editCompanyService: EditCompanyService,
    private dialogModel: MatDialog) { }

  ngOnInit() {
    this.refreshCompaniesList();
  }

  dialog() {
    this.simpleDialog = this.dialogModel.open(AddCompaniesComponent);
  }


  refreshCompaniesList() {
    this.isLoading = true;
    this.companyservice.getCompaniesList().subscribe(data => {
      setTimeout(() => {
        this.isLoading = false;
        this.companyservice.companies = data as Company[];
        this.dataSource = this.companyservice.companies
        this.dataSource = this.dataSource.docs
      }, 1000 / 2);
    });
  }

  editCompany(id: any) {
    this.companyservice.getEditCompanyList(id).subscribe(data => {
      this.editCompanyService.setEventData(data);
      this.dialog();
    },
      err => this.errorHandler(err, "Ooops something went Wrong!")
    )
  }

  deleteCompany(id: any) {
    this.companyservice.getDeleteCompanyList(id).subscribe(data => {
      this.snackBar.open("Deleted Successfully", 'Ok', {
        duration: 3000
      });
      this.refreshCompaniesList();
    },
      err => this.errorHandler(err, "Ooops something went Wrong!")
    )
  }


  private errorHandler(error, message) {
    console.error(error);
    this.snackBar.open(message, 'Error', {
      duration: 2000
    });
  }

}