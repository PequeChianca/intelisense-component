export interface IDictionary<T> {
  [Key: string]: T;
}

export const Tokens: IDictionary<string[]> = {
  empty: [
    "QtdLan",
    "QtdCad",
    "QtdMov",
    "TabLan",
    "TabCad",
    "Valor",
    "Numerador",
    "Denominador",
    "HorasDia",
    "Idade",
    "QtdDepIR",
    "SalMinNacional",
    "SalMinRegional",
    "AuxAlimentacao",
    "IndTransporte",
    "Limitador",
    "AuxCreche",
    "DedDep",
    "DedApo",
    "SomaGanhos",
    "SomaDescontos",
    "SomaRubricasComoGanhos",
    "SomaRubricasComoDescontos",
    "MaiorValorRubricas",
    "SomaRubricasPorIndicativo",
    "AplicaTabelaProgressiva",
    "AplicaTabelaSimplesAliquota",
    "AplicaTabelaSimplesValor",
    "AplicaTabelaPrevidencia",
    "IsentoIRRF",
    "Aposentado"
  ],
  numerico: [
    "QtdLan",
    "QtdCad",
    "QtdMov",
    "TabLan",
    "TabCad",
    "Valor",
    "Numerador",
    "Denominador",
    "HorasDia",
    "Idade",
    "QtdDepIR",
    "SalMinNacional",
    "SalMinRegional",
    "AuxAlimentacao",
    "IndTransporte",
    "Limitador",
    "AuxCreche",
    "DedDep",
    "DedApo",
    "SomaGanhos",
    "SomaDescontos",
    "SomaRubricasComoGanhos",
    "SomaRubricasComoDescontos",
    "MaiorValorRubricas",
    "SomaRubricasPorIndicativo",
    "AplicaTabelaProgressiva",
    "AplicaTabelaSimplesAliquota",
    "AplicaTabelaSimplesValor",
    "AplicaTabelaPrevidencia"
  ],
  logico: ["IsentoIRRF", "Aposentado"],
  cjInd: ["CjIndLan", "CjIndCad"],
  cjRub: ["CjRubLan[0..n]", "CjRubCad"],
  periodo: ["FOLHA", "MES", "ANO"],
  aritimeticos: ["+", "-", "*", "/", "%", "^", "\\", "#"],
  relacionais: ["==", ">", ">=", "<", "<=", "!="],
  logicos: ["&&", "!!", "!"],
  agrupadorCjRub: ["||"],
  agrupadorCjInd: ["||"]
};

export const VariaveisArray = [
  "QtdLan",
  "QtdCad",
  "QtdMov",
  "TabLan",
  "TabCad",
  "Valor"
];

export class OperConfig {
  name: string;
  right: string;
  left?: string;
  result: string;
}

export const Operadores: OperConfig[] = [
  {
    name: "aritmeticos",
    right: "numerico",
    left: "numerico",
    result: "numerico"
  },
  {
    name: "relacionais",
    right: "numerico",
    left: "numerico",
    result: "logico"
  },
  {
    name: "logicos",
    right: "logico",
    left: "logico",
    result: "logico"
  },
  {
    name: "agrupadorCjRub",
    right: "cjRub",
    left: "cjRub",
    result: "cjRub"
  },
  {
    name: "agrupadorCjInd",
    right: "cjInd",
    left: "cjInd",
    result: "cjInd"
  }
];

export const ParametrosInstrucoes = {
  DedDep: ["numerico"],
  DedApo: ["numerico"],
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
