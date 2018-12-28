import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-material',
  templateUrl: './demo-material.component.html',
  styleUrls: ['./demo-material.component.scss']
})
export class DemoMaterialComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onButtonClicked() {
    alert('hey!!');
  }

}
