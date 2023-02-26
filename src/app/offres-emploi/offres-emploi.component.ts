import { Component, OnInit } from '@angular/core';
import { Emploi } from '../models/emploi';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-offres-emploi',
  templateUrl: './offres-emploi.component.html',
  styleUrls: ['./offres-emploi.component.css']
})


export class OffresEmploiComponent {
 

  listeEmploi: Emploi[] = [
    { reference:'A',title: 'Développeur web', entreprise: 'Acme Inc.', etat:'true',postulant:12 },
    { reference:'B',title: 'Designer UX', entreprise: 'XYZ Corp.', etat: 'true',postulant:0 },
    { reference:'C',title: 'Chef de projet', entreprise: 'Big Company', etat: 'false',postulant:3 }
  ];

  postuler(E: Emploi) {
    E.postulant++;
    }

    bilan(){
      let i=0;
      for (const e in this.listeEmploi){
        if (this.listeEmploi[e].etat=="true"){i++; continue}
      }
      alert(i);
    }

}
