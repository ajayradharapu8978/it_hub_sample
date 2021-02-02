import { LoginStatus } from './models/employeeLoginStatus.model';
import { Component } from '@angular/core';
import { StatusService } from './services/status.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  providers: [StatusService]
})
export class Tab2Page {

  id = "600832b2c2fcc841ac720129";

  LoginStatus;

  constructor(
    private statusService: StatusService,
    private loadingController: LoadingController
    ) { }

  
  ngOnInit() {
    this.presentLoading();
  }

  async presentLoading() {
    // const loading = await this.loadingController.create({
    //   cssClass: 'my-custom-class',
    //   message: 'Please wait...',
    //   duration: 1000
    // });
    // await loading.present();  

    this.statusService.getLoginStatusList(this.id).subscribe(resp =>{
      // setTimeout(data =>{
        this.LoginStatus = resp;
      // },1000)
    })
    // const { role, data } = await loading.onDidDismiss();
  }

  doRefresh(event) {
    this.presentLoading();
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }


}
