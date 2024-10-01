import { Component, EventEmitter, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent {
  @Output() serverElement = new Subject<{ name: string }>();
  enabledServerInput: boolean = true;
  addServer(serverInput: any) {
    this.serverElement.next(serverInput.value);
  }

  onInputServer(value: string) {
    //console.log(value);
    this.enabledServerInput = value == '';
  }

  ngOnInit() {
    this.test();
  }

  test() {
    var dd: string = 'test';
    let templatedString: string = `Hello ${10 + 20} - ${dd}`;
    if (1) {
      let dd = 'test2';
    }
    console.log(dd);

    let aa: number[] = [1, 2, 3];

    for (let i of aa) {
      console.log(i);
      let input: number[] = [1, 2, 3];

      let [first, second, third] = input;

      console.log(first, second, third);
    }

    let person = new Person('Mark', 'Zuckerberg');
    console.log(person.fullName);

    person.setFirstName = 'Md Abdul';
    person.setLastName = 'Alim';
    console.log(person.fullName);
    
  }
}

class Person {
  constructor(private firstName: string, private lastName: string) {}

  greet() {
    console.log(`Hello ${this.firstName} ${this.lastName}, how are you?`);
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set setFirstName(fNam: string) {
    this.firstName = fNam;
  }

  set setLastName(lNam: string) {
    this.lastName = lNam;
  }
}
