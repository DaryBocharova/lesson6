import { Component, OnInit } from '@angular/core';

export class Lesson {
  constructor(
    public id: number,
    public number: number,
    public date: string,
    public topic: string,
    public homework: string,
    public note: string
  ) {}
}

export class Rait {
  constructor(public idLesson: number, public raiting: number) {}
}

export class Student {
  public name: string;
  public rait: Array<Rait> = [];
  public raiting: number;
  public avrg: number;

  constructor(value: string) {
    this.name = value;
  }

  setName(value: string) {
    this.name = value;
  }
}

@Component({
  selector: 'app-journal',
  template: ''
})
export class JournalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
