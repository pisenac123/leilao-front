import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { LeilaoService } from 'src/app/services/LeilaoService';
import { ModalLanceComponent } from 'src/app/shared/modal-lance/modal-lance.component';
import { ConstantesUtil } from 'src/app/util/ConstantesUtil';
import { DateUtil } from 'src/app/util/DateUtil';
import { SnackBarUtil } from 'src/app/util/SnackBarUtil';

export interface LeilaoItem {
  nome: string;
  dataAbertura: string;
  usuario: string;
  valorInicial:string;
  id: string;
}

@Component({
  selector: 'app-consulta-leilao',
  templateUrl: './consulta-leilao.component.html',
  styleUrls: ['./consulta-leilao.component.scss']
})
export class ConsultaLeilaoComponent implements OnInit  {
  
  displayedColumns = [ 'Nome', 'Data da abertura', 'Usuário', 'Valor inicial', 'Ações'];
  dataSource!: MatTableDataSource<LeilaoItem>;
  listaLeiloes: LeilaoItem[]=[];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort)sort!: MatSort;
  
  constructor( private leilaoService: LeilaoService, 
               private snackBar: MatSnackBar, 
               private router: Router,
               public dialog: MatDialog, 
               ) {}

  public async ngOnInit() {
   await this.leilaoService.listar().then((element)=> this.listaLeiloes = element);
   this.listaLeiloes.sort((a, b) => a.nome > b.nome ? 1 : b.nome > a.nome ? -1 : 0);
   this.listaLeiloes.forEach(element => {
     element.dataAbertura = DateUtil.dateFormatterBrazil(element.dataAbertura);
   });
   this.dataSource = new MatTableDataSource(this.listaLeiloes);
   this.dataSource.paginator = this.paginator;
   this.dataSource.sort = this.sort;
  }

  public async darLance(row:any) {  
    const dialogRef = this.dialog.open(ModalLanceComponent, {
      width: '250px',
      data: {nome: row.nome, valorInicial: row.valorInicial, dataAbertura: row.dataAbertura},
    });

    dialogRef.afterClosed().subscribe(async result => {
      let lance  = result;
      if(lance.usuario && lance.valor) { 
        lance.valor = lance.valor.replace(',', '.');
         if(Number(lance.valor) < Number(row.valorInicial)){
           SnackBarUtil.exibirSnackBar(this.snackBar, 'O valor para lance não pode ser menor que o valor inicial.', ConstantesUtil.ERRO);
         }

         else{
          let resultado = await this.leilaoService.darLance({idLeilao: row.id, usuario: lance.usuario, valorLance: lance.valor});
          
          if(resultado.error) {
            SnackBarUtil.exibirSnackBar(this.snackBar, resultado.mensagem, ConstantesUtil.ERRO);
          }
          else{
            SnackBarUtil.exibirSnackBar(this.snackBar, resultado.mensagem, ConstantesUtil.SUCESSO);
          }
         }         
        }
    });
  }

  public editarLeilao(leilao:any){
      if(leilao){
        this.router.navigate(['/leilao'], { state: { leilao: leilao }})
      }
  }

  public async excluirLeilao(idLeilao: any) {
    if(idLeilao){
      let resultado = await this.leilaoService.deletar(idLeilao);
      if(resultado.error) {
        SnackBarUtil.exibirSnackBar(this.snackBar, resultado.mensagem, ConstantesUtil.ERRO);
      }
      else{
        SnackBarUtil.exibirSnackBar(this.snackBar, resultado.mensagem, ConstantesUtil.SUCESSO);
        this.ngOnInit();
      }
    }
  }
  
}
