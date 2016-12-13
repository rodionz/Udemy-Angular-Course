import { Component} from '@angular/core';

@Component({
  selector: 'fa-event-binding',
  template: `
   <button (click)="onClicked()"> Click Me! </button>
  `,
  styles: []
})
export class EventBindingComponent  {

onClicked(){

alert("It Works");
}

}
