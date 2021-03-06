export interface IDictionary<T> {
  [Key: string]: T;
}

export const Tokens: IDictionary<string[]> = {
  numerico: [
    'QtdLan',
    'QtdCad',
    'QtdMov',
    'TabLan',
    'TabCad',
    'Valor',
    'Numerador',
    'Denominador',
    'HorasDia',
    'Idade',
    'QtdDepIR',
    'SalMinNacional',
    'SalMinRegional',
    'AuxAlimentacao',
    'IndTransporte',
    'Limitador',
    'AuxCreche',
    'DedDep',
    'DedApo',
    'SomaGanhos',
    'SomaDescontos',
    'SomaRubricasComoGanhos',
    'SomaRubricasComoDescontos',
    'MaiorValorRubricas',
    'SomaRubricasPorIndicativo',
    'AplicaTabelaProgressiva',
    'AplicaTabelaSimplesAliquota',
    'AplicaTabelaSimplesValor',
    'AplicaTabelaPrevidencia'
  ],
  logico: ['IsentoIRRF', 'Aposentado'],
  cjInd: ['CjIndLan', 'CjIndCad'],
  cjRub: ['CjRubLan[0..n]', 'CjRubCad'],
  periodo: ['FOLHA', 'MES', 'ANO'],
  aritmeticos: ['+', '-', '*', '/', '%', '^', '\\', '#'],
  relacionais: ['==', '>', '>=', '<', '<=', '!='],
  logicos: ['&&', '!!'],
  negacao: ['!'],
  agrupadorCjRub: ['||'],
  agrupadorCjInd: ['||'],
  se: ['?'],
  senao: [':']
};

export const IsArray = [
  'QtdLan',
  'QtdCad',
  'QtdMov',
  'TabLan',
  'TabCad',
  'Valor'
];

export class RelationConfig {
  name: string;
  right: string;
  left?: string;
  result: string;
}

export const Relacoes: RelationConfig[] = [
  {
    name: 'negacao',
    right: 'logico',
    result: 'logico'
  },
  {
    name: 'senao',
    right: 'numerico',
    left: 'numerico',
    result: 'numerico'
  },
  {
    name: 'se',
    right: 'numerico',
    left: 'logico',
    result: 'numerico'
  },
  {
    name: 'aritmeticos',
    right: 'numerico',
    left: 'numerico',
    result: 'numerico'
  },
  {
    name: 'relacionais',
    right: 'numerico',
    left: 'numerico',
    result: 'logico'
  },
  {
    name: 'logicos',
    right: 'logico',
    left: 'logico',
    result: 'logico'
  },
  {
    name: 'agrupadorCjRub',
    right: 'cjRub',
    left: 'cjRub',
    result: 'cjRub'
  },
  {
    name: 'agrupadorCjInd',
    right: 'cjInd',
    left: 'cjInd',
    result: 'cjInd'
  }
];

export const ParametrosInstrucoes = {
  DedDep: ['numerico'],
  DedApo: ['numerico'],
  SomaGanhos: [],
  SomaDescontos: [],
  SomaRubricasComoGanhos: [],
  SomaRubricasComoDescontos: [],
  MaiorValorRubricas: [],
  SomaRubricasPorIndicativo: [],
  AplicaTabelaProgressiva: [],
  AplicaTabelaSimplesAliquota: [],
  AplicaTabelaSimplesValor: [],
  AplicaTabelaPrevidencia: []
};
