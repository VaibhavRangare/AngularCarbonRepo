import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngcarbontemplate1';
  
  public active= false;
  public secondAction = false;
  public hasActiveChild = false;
  public hasHamburger = true;
  public sideNavDisp = "none";

  dispNav(){
    //alert("One");
    if(this.active){
      this.sideNavDisp = "";
    }
    else{
      this.sideNavDisp = "none";
    }
    
  }
}
