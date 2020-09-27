import { Injectable } from '@angular/core';
import { Raiting } from './app.component';

@Injectable({
  providedIn: 'root',
})
export class JournalService {
  constructor() {}

  addLesson() {
    const lesson = JSON.parse(localStorage.getItem('lesson')) || [];
  }

  addRait(rait: number, student: Raiting) {
    student.addRaiting(rait);
    let i: number = 0;
    for (let index = 0; index < student.rait.length; index++) {
      let r: number = student.rait[index];
      i = i * 1 + r * 1;
    }
    student.score = Math.floor((i / student.rait.length) * 100) / 100;
    student.averageScore = Math.round(i / student.rait.length);
  }
}
