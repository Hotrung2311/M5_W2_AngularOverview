import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hieu-le',
  templateUrl: './hieu-le.component.html',
  styleUrls: ['./hieu-le.component.css']
})
export class HieuLeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  fontSize = 14;

  onChange(value) {
    this.fontSize = value;
  }
}
