import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-farma-vig',
  standalone: true,
  imports: [],
  templateUrl: './farma-vig.component.html',
  styleUrls: ['./farma-vig.component.css']
})
export class FarmaVigComponent {
  constructor(private router: Router) {}

  goToPaciente() {
    this.router.navigate(['/paciente']);
  }

  goToMedico() {
    this.router.navigate(['/medico']);
  }

  goToFarmacia() {
    this.router.navigate(['/farmacia']);
  }
}