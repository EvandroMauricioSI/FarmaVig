import { Routes } from '@angular/router';

import { FarmaVigComponent } from './farma-vig/farma-vig.component';
import { MedicoComponent } from './medico/medico.component';
import { FarmaciaComponent } from './farmacia/farmacia.component';

import { PacienteComponent } from './paciente/paciente.component';
import { EfeitosColateraisComponent } from './paciente/efeitos-colaterais/efeitos-colaterais.component';


export const routes: Routes = [
  { path: '', component: FarmaVigComponent },
  { path: 'medico', component: MedicoComponent },
  { path: 'farmacia', component: FarmaciaComponent },

  { path: 'paciente', component: PacienteComponent },
  { path: '', redirectTo: 'paciente', pathMatch: 'full' },
  { path: 'efeitos-colaterais', component: EfeitosColateraisComponent },
];


  