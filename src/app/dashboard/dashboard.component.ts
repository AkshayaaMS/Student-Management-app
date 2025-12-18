import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-dashboard',
  imports:[CommonModule],
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class Dashboard {
  stuImgPath="assets/images/studentImg.png";

  students = [
  { name: 'Aakash', img: this.stuImgPath },
  { name: 'Rahul', img: this.stuImgPath },
  { name: 'Sneha', img: this.stuImgPath },
  { name: 'Priya', img: this.stuImgPath },
  { name: 'Karthik', img: this.stuImgPath },
  { name: 'Ananya', img: this.stuImgPath }
];

}