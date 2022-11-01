export const Relevance = [
  {
    id: "rf01",
    text: "Ocorrência de espécies ameaçadas de extinção, raras, endêmicas, novas e vulneráveis e/ou interferência em áreas de reprodução, de pousio ou distúrbios de rotas migratórias.",
  },
  {
    id: "rf02",
    text: "Introdução ou facilitação de espécies alóctones (invasoras).",
  },
  {
    id: "rf03",
    text: "Interferência/supressão de vegetação, acarretando fragmentação:",
    options: ["Ecossistemas especialmente protegidos", "Outros biomas"],
  },
  {
    id: "rf04",
    text: "Interferência em cavernas, abrigos ou fenômenos cársticos e sítios paleontológicos.",
  },
  {
    id: "rf05",
    text: "Interferência em unidades de conservação de proteção integral, sua zona de amortecimento, observada a legislação aplicável.",
  },
  {
    id: "rf06",
    text: "Interferência em áreas prioritárias para a conservação, conforme 'Biodiversidade em Minas Gerais – Um Atlas para sua Conservação':",
    options: [
      "Importância Biológica Especial",
      "Importância Biológica Extrema",
      "Importância Biológica Muito Alta",
      "Importância Biológica Alta",
    ],
  },
  {
    id: "rf07",
    text: "Alteração da qualidade físico-química da água, do solo ou do ar.",
  },
  {
    id: "rf08",
    text: "Rebaixamento ou soerguimento de aqüíferos ou águas superficiais.",
  },
  {
    id: "rf09",
    text: "Transformação ambiente lótico em lêntico.",
  },
  {
    id: "rf10",
    text: "Interferência em paisagens notáveis.",
  },
  {
    id: "rf11",
    text: "Emissão de gases que contribuem efeito estufa.",
  },
  {
    id: "rf12",
    text: "Aumento da erodibilidade do solo.",
  },
  {
    id: "rf13",
    text: "Emissão de sons e ruídos residuais.",
  },
];

export const Temporality = {
  options: [
    "Duração IMEDIATA (empreendimento deve durar de 0 a cinco anos)",
    "Duração CURTA (empreendimento deve durar de cinco a dez anos)",
    "Duração MÉDIA (empreendimento deve durar de dez a vinte anos)",
    "Duração LONGA (empreendimento deve durar mais de 20 anos)",
  ],
};

export const Coverage = {
  options: [
    "Área de Interferência DIRETA do Empreendimento",
    "Área de interferência INDIRETA do Empreendimento",
  ],
};
