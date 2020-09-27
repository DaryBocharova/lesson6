import { Component } from '@angular/core';
import { JournalService } from './journal.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

export class Lesson {
  constructor(
    public number: number,
    public dateLesson: Date,
    public topic: string,
    public homework: string,
    public note: string
  ) {}
}

export class Raiting {
  public student: string;
  public rait: Array<number> = [];
  public averageScore: number;
  public score: number;
  constructor(value: string) {
    this.student = value;
  }

  addRaiting(raiting: number) {
    this.rait.push(raiting);
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [JournalService],
})
export class AppComponent {
  lessons: Lesson[] = [];
  student: Raiting[] = [
    new Raiting('name1'),
    new Raiting('name2'),
    new Raiting('name3'),
  ];

  raits: number[] = [1, 2, 3, 4, 5];
  raitNumber: number;

  lesson: FormGroup = new FormGroup({
    number: new FormControl(1, Validators.required),
    dateLesson: new FormControl(new Date(), [Validators.required]),
    topic: new FormControl('Наименование', Validators.required),
    homework: new FormControl('Дз', Validators.required),
    note: new FormControl('Примечание'),
  });

  raiting: FormGroup = new FormGroup({
    student: new FormControl('ФИО', Validators.required),
    rait: new FormControl(1, Validators.required),
    averageScore: new FormControl(1, Validators.required),
    score: new FormControl(1, Validators.required),
  });

  constructor(private journal: JournalService) {}
  addLesson() {
    this.journal.addLesson();
  }

  // addRait() {
  //   this.journal.addRait(this.raitNumber, );
  // }
}
