import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule, TabsModule  } from "carbon-components-angular";
import { AddModule, CopyModule, CarbonModule, FadeModule, BeeModule } from "@carbon/icons-angular";
import { UIShellModule } from 'carbon-components-angular';
import { WelcomeComponent } from './welcome/welcome.component';
import { ButtonComponent } from './button/button.component';
import { RouterModule } from "@angular/router";

import { TableComponent } from './table/table.component';
import { TabComponent } from './tab/tab.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ButtonComponent,
    
    TableComponent,
    
    TabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AddModule,
    CopyModule,
    ButtonModule,
    UIShellModule,
    CarbonModule,
    FadeModule,
    BeeModule,
    TabsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
