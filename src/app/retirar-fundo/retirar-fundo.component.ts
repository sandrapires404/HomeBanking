import { Component } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MovsService } from '../services/movs.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-retirar-fundo',
  templateUrl: './retirar-fundo.component.html',
  styleUrls: ['./retirar-fundo.component.css']
})
export class RetirarFundoComponent {
  constructor(private _fb: FormBuilder, private _movService: MovsService, private _dialogRef: MatDialogRef<RetirarFundoComponent>){}
  delForm = new FormGroup({
    balanco: new FormControl("-"),
    montante: new FormControl("", {nonNullable: true}),
    descricao: new FormControl("", {nonNullable: true}),
    saldo: new FormControl("", {nonNullable: true})
    
})
onDelFormSubmit(){
  if(this.delForm.valid){
    this._movService.addMov(this.delForm.value).subscribe({
      next: (val: any) => {
        alert('Movimento efetuado com Sucesso');
        this._dialogRef.close(true);
      },
      error: (err: any) => {
        console.error(err)
      }
    })
  }
}


}

