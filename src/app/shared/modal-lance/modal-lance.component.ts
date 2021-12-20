import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConstantesUtil } from 'src/app/util/ConstantesUtil';
import { SnackBarUtil } from 'src/app/util/SnackBarUtil';

export interface DialogData {
  nome: string;
  dataAbertura: string;
  usuario: string;
  valor:string;
  valorInicial: string;
}

@Component({
  selector: 'app-modal-lance',
  templateUrl: './modal-lance.component.html',
  styleUrls: ['./modal-lance.component.scss'],
})
export class ModalLanceComponent implements OnInit {
  constructor( private snackBar: MatSnackBar, 
    public dialogRef: MatDialogRef<ModalLanceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
