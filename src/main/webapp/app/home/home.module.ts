import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Sample1SharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [Sample1SharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent]
})
export class Sample1HomeModule {}
