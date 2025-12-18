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
  { name: 'Ananya', img: this.stuImgPath },
  { name: 'Abi', img: this.stuImgPath },
  { name: 'Shakthi', img: this.stuImgPath },
  { name: 'Bharath', img: this.stuImgPath },
  { name: 'Soundariya', img: this.stuImgPath },
  { name: 'Kavya', img: this.stuImgPath },
  { name: 'Samyuktha', img: this.stuImgPath }
];


currentPage = 1;
cardsPerPage = 6;

get paginatedStudents() {
  const startIndex = (this.currentPage - 1) * this.cardsPerPage;
  const endIndex = startIndex + this.cardsPerPage;
  return this.students.slice(startIndex, endIndex);
}

get totalPages() {
  return Math.ceil(this.students.length / this.cardsPerPage);
}

nextPage() {
  if (this.currentPage < this.totalPages) {
    this.currentPage++;
  }
}

prevPage() {
  if (this.currentPage > 1) {
    this.currentPage--;
  }
}

}