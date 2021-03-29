import { Component, OnInit, OnDestroy, VERSION  } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor() { }
  public version = VERSION.full;

  ngOnInit(): void {
    document.querySelector(".sb-show-main").classList.add("full-page");
  }
  ngOnDestroy() {
		document.querySelector(".sb-show-main").classList.remove("full-page");
	}

}
