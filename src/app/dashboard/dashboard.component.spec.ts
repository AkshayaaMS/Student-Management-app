import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class Dashboard {

  stuImgPath = 'assets/images/studentImg.png';

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
    return this.students.slice(startIndex, startIndex + this.cardsPerPage);
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

  isModalOpen = false;
  selectedStudent: any = null;

  openDeleteModal(student: any) {
    this.selectedStudent = student;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedStudent = null;
  }

  confirmDelete() {
    this.students = this.students.filter(
      student => student !== this.selectedStudent
    );

    this.closeModal();

    if (this.currentPage > this.totalPages) {
      this.currentPage = this.totalPages || 1;
    }
  }
}
