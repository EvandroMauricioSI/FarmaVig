import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css'],
  imports: [CommonModule]
  
})

export class PacienteComponent {
  listaMedicamentos = [
    { nome: 'Paracetamol', 
      descricao: 'Analgésico e antipirético usado para tratar dor e febre.' },
    { nome: 'Amoxicilina', 
      descricao: 'Antibiótico usado para tratar infecções bacterianas.' },
    { nome: 'Losartana', 
      descricao: 'Usado para tratar pressão alta e proteger os rins.' },
    {
      nome: 'Cimegripe',
      descricao: 'Cimegripe® é indicado no tratamento dos sintomas de gripes e resfriados.'
    },
    {
      nome: 'AAS Ácido Acetilsalicílico 100mg',
      descricao: 'O AAS Infantil está indicado para o alívio sintomático de dores de intensidade leve a moderada, como dor de cabeça, dor de dente, dor de garganta, dor menstrual, dor muscular, dor nas articulações, dor nas costas, dor da artrite; e alívio sintomático da dor e da febre nos resfriados ou gripes.'
    }
  ];
  constructor(private router: Router) {}

  informarEfeitoColateral(nomeMedicamento: string) {
    this.router.navigate(['/efeitos-colaterais'], { queryParams: { nome: nomeMedicamento } });
  }
}
