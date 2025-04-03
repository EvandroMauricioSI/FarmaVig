import { Routes } from '@angular/router';
import { FarmaVigComponent } from './farma-vig/farma-vig.component';
import { PacienteComponent } from './paciente/paciente.component';
import { MedicoComponent } from './medico/medico.component';
import { FarmaciaComponent } from './farmacia/farmacia.component';

export const routes: Routes = [
  { path: '', component: FarmaVigComponent },
  { path: 'paciente', component: PacienteComponent },
  { path: 'medico', component: MedicoComponent },
  { path: 'farmacia', component: FarmaciaComponent }
];