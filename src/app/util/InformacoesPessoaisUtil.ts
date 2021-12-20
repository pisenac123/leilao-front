export class InformacoesPessoaisUtil {

    public static escolaridade() {
    return [
      { id: 1, valor: 'NÃO ALFABETIZADO' },
      { id: 2, valor: 'ENSINO FUNDAMENTAL COMPLETO' },
      { id: 3, valor: 'ENSINO FUNDAMENTAL INCOMPLETO' },
      { id: 4, valor: 'ENSINO MÉDIO COMPLETO' },
      { id: 5, valor: 'ENSINO MÉDIO INCOMPLETO' },
      { id: 6, valor: 'ENSINO SUPERIOR COMPLETO' },
      { id: 7, valor: 'ENSINO SUPERIOR INCOMPLETO' },
      { id: 8, valor: 'PÓS-GRADUANDO' },
      { id: 9, valor: 'PÓS-GRADUADO' },
      { id: 10, valor: 'MESTRE' },
      { id: 11, valor: 'DOUTOR' },
      { id: 12, valor: 'PÓS-DOUTOR' },
    ];
  }

  public static estadoCivil() {
    return [
      { id: 1, valor: 'SOLTEIRO' },
      { id: 2, valor: 'CASADO' },
      { id: 3, valor: 'DIVORCIADO' },
      { id: 4, valor: 'VIÚVO' },
    ];
  }
}
