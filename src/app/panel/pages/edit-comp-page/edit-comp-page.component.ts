import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-comp-page',
  templateUrl: './edit-comp-page.component.html',
  styles: [],
})
export class EditCompPageComponent {
  public compForm = new FormControl({

    id:           new FormControl(''),
    name:         new FormControl(''),
    direction:    new FormControl(''),
    phone:        new FormControl(''),
    postalCodes:  new FormControl(0),

  });
}
