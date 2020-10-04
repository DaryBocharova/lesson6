import { Injectable } from '@angular/core';
import { Student, Lesson, Rait } from './journal/journal.component';

@Injectable({
  providedIn: 'root',
})
export class JournalService {
  constructor() {}

  addRait(ra: number, student: Student, lesson: Lesson) {
    var id = lesson.id;
    var newRait = true;
    let i: number = 0;
    for (let index = 0; index < student.rait.length; index++) {
      var r = student.rait[index];
      if (r.idLesson == id) {
        newRait = false;
        r.raiting = ra;
      }
      i = i * 1 + r.raiting * 1;
    }
    if (newRait) {
      student.rait.push(new Rait(id, ra));
      i = i * 1 + ra * 1;
    }
    student.avrg = Math.floor((i / student.rait.length) * 100) / 100;
    student.raiting = Math.round(i / student.rait.length);
  }
}
