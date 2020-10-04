import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { JournalService } from './journal.service';
import { Lesson, Student } from './journal/journal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [],
})
export class AppComponent {
  lessonss: Lesson[] = [];
  studentss: Student[] = [
    new Student('name1'),
    new Student('name2'),
    new Student('name3'),
  ];
  raitinggs: number[] = [1, 2, 3, 4, 5];
  constructor(public service:JournalService, private datePipe: DatePipe) {}
  lesson: FormGroup = new FormGroup({
    number: new FormControl(1, Validators.required),
    date: new FormControl(new Date(), [Validators.required]),
    topic: new FormControl('Наименование', Validators.required),
    homework: new FormControl('Дз', Validators.required),
    note: new FormControl('Примечание'),
  });

  student: FormGroup = new FormGroup({
    student: new FormControl('ФИО', Validators.required),
    rait: new FormControl(1, Validators.required),
    avScr: new FormControl(1, Validators.required),
    score: new FormControl(1, Validators.required),
  });

  addLesson() {
    var lesson = new Lesson(
      this.lessonss.length,
      this.lesson.controls["number"].value,
     this.lesson.controls["date"].value,
      this.lesson.controls["topic"].value,
      this.lesson.controls["homework"].value,
      this.lesson.controls["note"].value);
    this.lessonss.push(lesson);
  }
}
