import { Component, OnInit } from '@angular/core';
import {Hero} from "../Hero";
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor() { }

  hero: Hero = {
    id : 1,
    name :'Trung'
  }

  heroes = HEROES;

  ngOnInit(): void {
  }


}
