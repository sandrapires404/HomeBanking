import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { FazerMovimentosComponent } from '../fazer-movimentos/fazer-movimentos.component';
import { MovsService } from '../services/movs.service';
import { MatTableDataSource, MatTableModule, _MatTableDataSource } from '@angular/material/table';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { RetirarFundoComponent } from '../retirar-fundo/retirar-fundo.component';






@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatTableModule, MatSortModule, MatPaginatorModule, MatInputModule],
})


export class HomeComponent implements OnInit {

  constructor(private _dialog: MatDialog, private _movService: MovsService,) { }



  displayedColumns: string[] = ['id', 'balanco', 'montante', 'descricao',];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;

  ngOnInit(): void {
    this.getMovList();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  addForm() {
    //cria um movimento de depósito
    const dialogRef = this._dialog.open(FazerMovimentosComponent);
    dialogRef.afterClosed().subscribe({ //atualizar a página de movimentos automaticamente
      next: (val) => {
        if (val) {
          this.getMovList();
        }
      }
    })
  }

  delForm() {
    //cria um movimento de retirada de fundo
    const dialogRef = this._dialog.open(RetirarFundoComponent);
    dialogRef.afterClosed().subscribe({ //atualizar a página de movimentos automaticamente
      next: (val) => {
        if (val) {
          this.getMovList();
        }
      }
    })


  }

  getMovList() { 
    //insere os dados na tabela
    this._movService.getMovList().subscribe({
      next: (res) => {
        console.log(res);
        let total: number = 0;
        for (var i = 0; i < res.length; i++) {
          if (res[i].balanco == "+") {
            total = total + res[i].montante;

          }
          if (res[i].balanco == "-") {
            total = total - res[i].montante;
          }

        }
        alert("Valor atual: "+total+" €");
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        setTimeout(() => this.dataSource.paginator = this.paginator);

      },
      error: (err) => {
        console.error(err);
      }
    })
  }
  

}

