import * as moment from 'moment';
 
export class DateUtil {
  constructor() {
    moment.locale('pt-br');
  }

  public static isDataDoisMaiorDataUm(dataUm: any, dataDois: any): boolean {
    return moment(this.dateFormatterAmerica(dataDois)).isBefore(
      this.dateFormatterAmerica(dataUm)
    );
  }

  public static isDataFutura(data: any): boolean {
    return moment(this.dateFormatterAmerica(data)).isAfter(
      this.dateFormatterAmerica(new Date().toLocaleDateString())
    );
  }

  public static isDatasIguais(dataUm: any, dataDois: any): boolean {
    return moment(this.dateFormatterAmerica(dataDois)).isSame(
      this.dateFormatterAmerica(dataUm)
    );
  }

  public static dateFormatterAmerica(data: any): any {
    return data.split('/').reverse().join('-');
  }

  public static dateFormatterBrazil(data: string): any {
    return moment(data).format('DD/MM/YYYY');
  }

  public static numeroDiasEntreDuasDatas(dataUm: any, dataDois: any) {
    const dataInicio = moment(dataUm);
    const dataFim = moment(dataDois);
    const numeroDias = moment.duration(dataFim.diff(dataInicio));
    return numeroDias.asDays();
  }

  public static verificarIsDataValida(data: any): boolean {
    const dataValida = moment(this.dateFormatterAmerica(data));
    return dataValida.isValid();
  }

  public static calcularData(data : any, dias:number) {
    return moment(data).add(dias, 'year').subtract(1, 'days').format('YYYY-MM-DD');
  }

  public static verificarIntervaloHora(horaI:any, horaF:any) : boolean{
    let horaInicial = Number(horaI.substring(0,2)) < 12 ? moment(horaI.concat('am') , 'hh:mma') : moment(horaI.concat('pm') , 'hh:mmp');
    let horaFinal = Number(horaF.substring(0,2)) < 12 ? moment(horaF.concat('am') , 'hh:mma') : moment(horaF.concat('pm') , 'hh:mmp');
    return horaInicial.isBefore(horaFinal);
  }

  public static idadeMaiorIgualDezesseisAnos(dataNasc: string): boolean {
    let idade = moment().diff(this.dateFormatterAmerica(dataNasc), 'years');
      return idade >= 16;
 }
  
}
