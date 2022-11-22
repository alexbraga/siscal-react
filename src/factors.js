export const Relevance = [
  {
    id: "rf01",
    text: "Ocorrência de espécies ameaçadas de extinção, raras, endêmicas, novas e vulneráveis e/ou interferência em áreas de reprodução, de pousio ou distúrbios de rotas migratórias.",
    score: 0.075,
    info: [
      {
        text: "- A lista de espécies identificados nos estudos ambientais deve ser comparada com os anexos das portarias indicadas a seguir, com a redação dada pela Portaria MMA nº 148, de 07 de junho de 2022:",
      },
      { text: "a) Portaria MMA nº 443/2014 (Flora Brasileira)" },
      { text: "b) Portaria MMA nº 444/2014 (Fauna Brasileira)" },
      { text: "c) Portaria MMA nº 445/2014 (Peixes e invertebrados)" },
      {
        text: "d) Deliberação Normativa COPAM/MG nº 147, de 2010 (consultar site abaixo):",
      },
      { url: "http://www.siam.mg.gov.br/sla/download.pdf?idNorma=13192" },
      {
        text: "- Em alguns pareceres, o órgão ambiental utiliza a Lista Vermelha IUCN 2011.",
      },
    ],
  },
  {
    id: "rf02",
    text: "Introdução ou facilitação de espécies alóctones (invasoras).",
    score: 0.01,
    info: [
      {
        text: "- Os pareceres técnicos do órgão ambiental consideram não somente as introduções deliberadas de espécies invasoras, mas também a probabilidade de introduções acidentais, por fatores diversos, tais como o trânsito de veículos, criação de animais, barramentos, entre outros.",
      },
    ],
  },
  {
    id: "rf03",
    text: "Interferência/supressão de vegetação, acarretando fragmentação:",
    options: [
      {
        value: "Ecossistemas especialmente protegidos",
        score: 0.05,
      },
      {
        value: "Outros biomas",
        score: 0.045,
      },
      {
        value: "Não há interferência",
        score: 0,
      },
    ],
    info: [
      {
        text: "- Com base na localização do empreendimento, consultar mapeamento florestal do Estado no site abaixo:",
      },
      { url: "https://idesisema.meioambiente.mg.gov.br/webgis" },
    ],
  },
  {
    id: "rf04",
    text: "Interferência em cavernas, abrigos ou fenômenos cársticos e sítios paleontológicos.",
    score: 0.025,
    info: [
      {
        text: "- Considerar o raio de 250 metros a partir da área diretamente afetada pelo empreendimento (ADA), consultando no site abaixo as áreas de influência de cavidades:",
      },
      { url: "https://idesisema.meioambiente.mg.gov.br/webgis" },
    ],
  },
  {
    id: "rf05",
    text: "Interferência em unidades de conservação de proteção integral, sua zona de amortecimento, observada a legislação aplicável.",
    score: 0.1,
    info: [
      {
        text: `- De acordo com o Plano Operativo Anual (POA) versão 2022, “considera-se Unidade de Conservação Afetada aquela que abrigue o empreendimento, total ou parcialmente, em seu interior ou em sua zona de amortecimento ou que esteja localizada em um raio de 03 km do mesmo, salvo nos casos em que o órgão ambiental, após aprovação da CPB, entenda de forma diferente.”`,
      },
      {
        text: "- Considerar a Área Diretamente Afetada (ADA), Área de Influência Direta (AID) e Área de Influência Indireta (AII) do empreendimento.",
      },
    ],
  },
  {
    id: "rf06",
    text: "Interferência em áreas prioritárias para a conservação, conforme 'Biodiversidade em Minas Gerais – Um Atlas para sua Conservação':",
    options: [
      {
        value: "Importância Biológica Especial",
        score: 0.05,
      },
      {
        value: "Importância Biológica Extrema",
        score: 0.045,
      },
      {
        value: "Importância Biológica Muito Alta",
        score: 0.04,
      },
      {
        value: "Importância Biológica Alta",
        score: 0.035,
      },
      {
        value: "Não há interferência",
        score: 0,
      },
    ],
    info: [
      {
        text: "- Considerar as áreas prioritárias para a conservação da biodiversidade, que podem ser consultadas abaixo:",
      },
      { url: "https://idesisema.meioambiente.mg.gov.br/webgis" },
      {
        text: "- Considerar a Área Diretamente Afetada (ADA), Área de Influência Direta (AID) e Área de Influência Indireta (AII) do empreendimento.",
      },
    ],
  },
  {
    id: "rf07",
    text: "Alteração da qualidade físico-química da água, do solo ou do ar.",
    score: 0.025,
    info: [
      {
        text: "- Utilizar como referência os estudos elaborados no processo de licenciamento ambiental",
      },
    ],
  },
  {
    id: "rf08",
    text: "Rebaixamento ou soerguimento de aqüíferos ou águas superficiais.",
    score: 0.025,
    info: [
      {
        text: "- O órgão ambiental considera todas as modificações no regime hidrológico, independentemente da magnitude de tais modificações.",
      },
    ],
  },
  {
    id: "rf09",
    text: "Transformação ambiente lótico em lêntico.",
    score: 0.045,
    info: [
      {
        text: "- De acordo com a Resolução CONAMA 357, de 2005, o ambiente lótico é definido como sendo aquele relativo a águas continentais moventes; e o ambiente lêntico se refere à água parada, com movimento lento ou estagnado. Exemplo: construção de barramentos.",
      },
    ],
  },
  {
    id: "rf10",
    text: "Interferência em paisagens notáveis.",
    score: 0.03,
    info: [
      {
        text: "- Entende-se por paisagem notável região, área ou porção natural da superfície terrestre provida de limite, cujo conjunto forma um ambiente de elevada beleza cênica, de valor científico, histórico, cultural e de turismo e lazer.",
      },
    ],
  },
  {
    id: "rf11",
    text: "Emissão de gases que contribuem efeito estufa.",
    score: 0.025,
    info: [
      {
        text: "- Os gases de efeito estufa são aqueles que absorvem parte da radiação infravermelha emitida pelo Sol e refletida pela superfície terrestre, dificultando o escape desta radiação para o espaço. Os gases reconhecidos como de efeito estufa, de acordo com o Protocolo de Kioto, são: Dióxido de Carbono (CO2), Metano (CH4), Óxido Nitroso (N2O), Hexafluoreto de Enxofre (SF6) e duas famílias de gases, Hidrofluorcarbono (HFC) e Perfluorcarbono (PFC).",
      },
    ],
  },
  {
    id: "rf12",
    text: "Aumento da erodibilidade do solo.",
    score: 0.03,
    info: [
      {
        text: "- O text deve ser marcado mesmo quando há a possibilidade de que o empreendimento possa causar erosão do solo, ainda que não tenha sido constatada erosão.",
      },
    ],
  },
  {
    id: "rf13",
    text: "Emissão de sons e ruídos residuais.",
    score: 0.01,
    info: [
      {
        text: "- O text não exige que as emissões sejam superiores aos limites estabelecidos e não considera as medidas mitigadoras que possam ser adotadas. A simples constatação da geração de ruídos acarreta a marcação do text.",
      },
    ],
  },
];

export const Temporality = {
  options: [
    {
      value: "Duração IMEDIATA (empreendimento deve durar de 0 a cinco anos)",
      score: 0.05,
    },
    {
      value: "Duração CURTA (empreendimento deve durar de cinco a dez anos)",
      score: 0.065,
    },
    {
      value: "Duração MÉDIA (empreendimento deve durar de dez a vinte anos)",
      score: 0.085,
    },
    {
      value: "Duração LONGA (empreendimento deve durar mais de 20 anos)",
      score: 0.1,
    },
  ],
};

export const Coverage = {
  options: [
    {
      value: "Área de Interferência DIRETA do Empreendimento",
      score: 0.03,
    },
    {
      value: "Área de interferência INDIRETA do Empreendimento",
      score: 0.05,
    },
  ],
};
