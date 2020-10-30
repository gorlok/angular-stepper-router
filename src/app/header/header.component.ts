import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  ngVersion: string = VERSION.full;
  matVersion: string = '5.2.0'
  constructor() { }

  ngOnInit() {
  }

}