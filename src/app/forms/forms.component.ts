import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Emploi } from '../models/emploi';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
  E!: Emploi

  AddEmploi(F:NgForm)
  {
    console.log(F) ;
    this.E= F.value
  }

}
