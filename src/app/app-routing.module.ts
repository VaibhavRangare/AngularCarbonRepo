import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ButtonComponent } from './button/button.component';
import { TabComponent } from './tab/tab.component';
import { TableComponent } from './table/table.component';

import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  
  { path: 'home', component: WelcomeComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'button', component: ButtonComponent },
  
  { path: 'table', component: TableComponent },
  { path: 'tab', component: TabComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
