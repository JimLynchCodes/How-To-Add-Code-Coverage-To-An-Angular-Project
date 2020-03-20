import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cool-comp',
  templateUrl: './cool-comp.component.html',
  styleUrls: ['./cool-comp.component.scss']
})
export class CoolCompComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  foo (input: boolean) {
    return input ? 42 : 0
  }

}
