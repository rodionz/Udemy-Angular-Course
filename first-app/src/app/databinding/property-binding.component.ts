import { Component, Input} from '@angular/core';

@Component({
  selector: 'fa-property-binding',
  template: `
    {{result}}
  `,
  styles: []
})
export class PropertyBindingComponent  {

 @Input() reslut: number = 0;

}
