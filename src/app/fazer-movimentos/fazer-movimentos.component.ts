import { Component } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MovsService } from '../services/movs.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-fazer-movimentos',
  templateUrl: './fazer-movimentos.component.html',
  styleUrls: ['./fazer-movimentos.component.css']
})
export class FazerMovimentosComponent {

constructor(private _fb: FormBuilder, private _movService: MovsService, private _dialogRef: MatDialogRef<FazerMovimentosComponent>){}
  movForm = new FormGroup({
    balanco: new FormControl("+"),
    montante: new FormControl("", {nonNullable: true}),
    descricao: new FormControl("", {nonNullable: true}),
    saldo: new FormControl("", {nonNullable: true})
    
})
onFormSubmit(){
  if(this.movForm.valid){
    this._movService.addMov(this.movForm.value).subscribe({
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
