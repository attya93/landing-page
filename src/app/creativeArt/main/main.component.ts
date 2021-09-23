import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  readonly image = '../../../assets/test.jpg';
  readonly man = '../../../assets/man.jpg';
  constructor() { }

  ngOnInit(): void {
  }

}
