import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  readonly image = '../../../assets/test.jpg';
  listOfUser = [
    { id: 0, image: '../../../assets/Carol-Hammal.png', title: 'Carol-Hammal' },
    { id: 1, image: '../../../assets/Farida-Ihab.png', title: 'Farida-Ihab' },
    { id: 2, image: '../../../assets/Reem-Hashem.png', title: 'Reem-Hashem' },
    { id: 3, image: '../../../assets/Sandra-El-Sabbagh.png', title: 'Sandra-El-Sabbagh' },
  ]
  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    //this.sanitizer.bypassSecurityTrustResourceUrl('https://youtu.be/IUN664s7N-c')
  }

}
