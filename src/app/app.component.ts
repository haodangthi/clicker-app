import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent {
  parentTitle='Hello from parent'
  age =15;
  inputValue='input'
  changeAge(){
    this.age=22;
    console.log(this.age)
  }

  ageChanged(event){
    console.log('Got child age',event)
  }

  changeTitle(event){
    this.parentTitle=event;
  }


}
