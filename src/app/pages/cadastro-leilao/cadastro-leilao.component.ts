import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LeilaoService } from 'src/app/services/LeilaoService';
import { ConstantesUtil } from 'src/app/util/ConstantesUtil';
import { SnackBarUtil } from 'src/app/util/SnackBarUtil';

@Component({
  selector: 'app-cadastro-leilao',
  templateUrl: './cadastro-leilao.component.html',
  styleUrls: ['./cadastro-leilao.component.scss'],
})
export class CadastroLeilaoComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  titulo: string = 'Novo Leilão';
  leilao: any;

  constructor(
    private leilaoService: LeilaoService,
    private snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.leilao = this.router.getCurrentNavigation()?.extras?.state?.leilao;
  }

  ngOnInit(): void {
    if (this.leilao) this.titulo = 'Editar Leilão';
    this.criarForm();
  }

  public async salvarLeilao() {
    if (this.form.valid && this.leilao) {
      this.conversaoValorMonetario();
      this.editarLeilao();
    } else if (this.form.valid) {
      this.conversaoValorMonetario();
      this.novoLeilao();
    } else {
      SnackBarUtil.exibirSnackBar(this.snackBar, 'Por favor, preencha todos os campos obrigatórios.', ConstantesUtil.ERRO);
    }
  }

  public async novoLeilao() {
    let resultado = await this.leilaoService.cadastrar(this.form.value);
    if (resultado.error) {
      SnackBarUtil.exibirSnackBar(this.snackBar, resultado.mensagem,  ConstantesUtil.ERRO);
    } else {
      SnackBarUtil.exibirSnackBar(this.snackBar, resultado.mensagem,  ConstantesUtil.SUCESSO);
      this.limparForm();
    }
  }

  public async editarLeilao() {
    let resultado = await this.leilaoService.editar(this.getEditarLeilao());
    if (resultado.error) {
      SnackBarUtil.exibirSnackBar(this.snackBar, resultado.mensagem, ConstantesUtil.ERRO);
    } else {
      SnackBarUtil.exibirSnackBar(this.snackBar, 'Leilão atualizado com sucesso.', ConstantesUtil.SUCESSO);
    }
  }

  public limparForm() {
    this.form.reset();
    Object.keys(this.form.controls).forEach((key) => { this.form.controls[key].setErrors(null)});
  }

  private criarForm(): void {
    this.form = this.formBuilder.group({
      nome: [this.leilao?.nome ? this.leilao?.nome : '', Validators.required],
      valorInicial: [this.leilao?.valorInicial ? this.leilao?.valorInicial : '',  Validators.required,],
      usuario: [ this.leilao?.usuario ? this.leilao?.usuario : '', Validators.required],
    });
  }

  private getEditarLeilao() {
    return {
      id: this.leilao.id,
      dataAbertura: this.leilao.dataAbertura,
      nome: this.form.get('nome')?.value,
      valorInicial: this.form.get('valorInicial')?.value,
      usuario: this.form.get('usuario')?.value,
      lances: this.leilao.lances
    };
  }

  private conversaoValorMonetario (){
    this.form.get('valorInicial')?.setValue(this.form.get('valorInicial')?.value.toString().replace(',', '.'));
  }
}
