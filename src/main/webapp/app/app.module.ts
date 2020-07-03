import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { Sample1SharedModule } from 'app/shared/shared.module';
import { Sample1CoreModule } from 'app/core/core.module';
import { Sample1AppRoutingModule } from './app-routing.module';
import { Sample1HomeModule } from './home/home.module';
import { Sample1EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { JhiMainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    Sample1SharedModule,
    Sample1CoreModule,
    Sample1HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    Sample1EntityModule,
    Sample1AppRoutingModule
  ],
  declarations: [JhiMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [JhiMainComponent]
})
export class Sample1AppModule {}
