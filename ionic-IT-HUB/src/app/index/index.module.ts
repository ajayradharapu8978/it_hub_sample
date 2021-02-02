import { StartComponent } from './start/start.component';
import { SlidesComponent } from './slides/slides.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndexPageRoutingModule } from './index-routing.module';

import { IndexPage } from './index.page';
import { LogoComponent } from './logo/logo.component';
import { LoginPage } from './login/login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndexPageRoutingModule
  ],
  declarations: [
    IndexPage,
    SlidesComponent,
    StartComponent,
    LogoComponent,
    LoginPage
  ],
  exports: [
    SlidesComponent,
    StartComponent,
    LogoComponent,
    LoginPage
  ]
})
export class IndexPageModule { }
