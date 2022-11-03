export const Relevance = [
  {
    id: "rf01",
    text: "Ocorrência de espécies ameaçadas de extinção, raras, endêmicas, novas e vulneráveis e/ou interferência em áreas de reprodução, de pousio ou distúrbios de rotas migratórias.",
    score: 0.075,
  },
  {
    id: "rf02",
    text: "Introdução ou facilitação de espécies alóctones (invasoras).",
    score: 0.01,
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
  },
  {
    id: "rf04",
    text: "Interferência em cavernas, abrigos ou fenômenos cársticos e sítios paleontológicos.",
    score: 0.025,
  },
  {
    id: "rf05",
    text: "Interferência em unidades de conservação de proteção integral, sua zona de amortecimento, observada a legislação aplicável.",
    score: 0.1,
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
  },
  {
    id: "rf07",
    text: "Alteração da qualidade físico-química da água, do solo ou do ar.",
    score: 0.025,
  },
  {
    id: "rf08",
    text: "Rebaixamento ou soerguimento de aqüíferos ou águas superficiais.",
    score: 0.025,
  },
  {
    id: "rf09",
    text: "Transformação ambiente lótico em lêntico.",
    score: 0.045,
  },
  {
    id: "rf10",
    text: "Interferência em paisagens notáveis.",
    score: 0.03,
  },
  {
    id: "rf11",
    text: "Emissão de gases que contribuem efeito estufa.",
    score: 0.025,
  },
  {
    id: "rf12",
    text: "Aumento da erodibilidade do solo.",
    score: 0.03,
  },
  {
    id: "rf13",
    text: "Emissão de sons e ruídos residuais.",
    score: 0.01,
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
      score: 0.05
    },
    {
      value: "Área de interferência INDIRETA do Empreendimento",
      score: 0.065
    },
  ],
};
