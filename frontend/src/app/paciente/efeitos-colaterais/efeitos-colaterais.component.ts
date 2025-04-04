import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // <== necessário para *ngIf, *ngFor

@Component({
  selector: 'app-efeitos-colaterais',
  standalone: true,
  templateUrl: './efeitos-colaterais.component.html',
  styleUrls: ['./efeitos-colaterais.component.css'],
  imports: [CommonModule, ReactiveFormsModule] // <== aqui adiciona os módulos necessários
})





export class EfeitosColateraisComponent implements OnInit {
  efeitosForm: FormGroup;
  sintomas = ['Diarreia', 'Vômito', 'Alteração de batimentos', 'Manchas na pele', 'Outros'];
  outrosSelecionado = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.efeitosForm = this.fb.group({
      nomeMedicamento: [''],
      doses: [''],
      sintomas: [[]],
      outros: ['']
    });
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['nome']) {
        this.efeitosForm.patchValue({ nomeMedicamento: params['nome'] });
      }
    });
  }

  selecionarSintoma(event: any) {
    const selecionados = this.efeitosForm.value.sintomas;
    if (event.target.checked) {
      selecionados.push(event.target.value);
    } else {
      const index = selecionados.indexOf(event.target.value);
      if (index > -1) {
        selecionados.splice(index, 1);
      }
    }
    this.efeitosForm.patchValue({ sintomas: selecionados });

    // Verifica se "Outros" foi selecionado
    this.outrosSelecionado = selecionados.includes('Outros');
  }

  onSubmit() {
    console.log('Dados enviados:', this.efeitosForm.value);
    alert('Relato enviado com sucesso!');
    this.router.navigate(['/paciente']);
  }
}
