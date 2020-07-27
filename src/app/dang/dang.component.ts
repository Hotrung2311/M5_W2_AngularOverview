import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dang',
  templateUrl: './dang.component.html',
  styleUrls: ['./dang.component.css']
})
export class DangComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  fontSize = 14;

  onChange(value) {
    this.fontSize = value;
  }

}
