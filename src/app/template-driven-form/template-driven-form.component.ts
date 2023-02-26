import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { information } from '../models/information';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent {
 information!:information;
informationsValides: any;
 
 AddInfo(F:NgForm)
  {
    console.log(F) ;
    this.information= F.value
  }
}
