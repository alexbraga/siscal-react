import React from "react";
import Typography from "@mui/material/Typography";

// Solution found at https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-strings
function Report(props) {
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  function relFactorScore() {
    const sum =
      (props.scores.toFixed(3) * 1000 +
        props.radioScores[0].toFixed(3) * 1000 +
        props.radioScores[1].toFixed(3) * 1000) /
      1000;

    return sum;
  }

  function tempFactorScore() {
    return props.radioScores[2];
  }

  function coverFactorScore() {
    return props.radioScores[3];
  }

  function envCompensation() {
    const scoreSum =
      (relFactorScore().toFixed(3) * 1000 +
        tempFactorScore().toFixed(3) * 1000 +
        coverFactorScore().toFixed(3) * 1000) /
      1000;

    let factorIndex = 0;

    if (scoreSum > 0.5) {
      factorIndex = 0.005;
    } else {
      factorIndex = scoreSum * 0.01;
    }

    const compensationValue = props.formData.referenceValue * factorIndex;

    return compensationValue;
  }

  return (
    <div style={{ textAlign: "left" }}>
      {/* DADOS DO EMPREENDIMENTO */}
      <Typography variant="body2">
        <strong>Empreendimento:</strong> {props.formData.businessName}
      </Typography>

      <Typography variant="body2">
        <strong>CNPJ:</strong> {props.formData.cnpj}
      </Typography>

      <Typography variant="body2">
        <strong>Valor de Referência:</strong>{" "}
        {formatter.format(props.formData.referenceValue)}
      </Typography>

      {/* FATOR DE RELEVÂNCIA */}
      <Typography variant="body2" sx={{ mt: 2 }}>
        <strong>Fatores de Relevância:</strong>
      </Typography>
      {props.relevanceFactors.map((factor, index) => (
        <Typography variant="body2" key={index}>
          ● {factor}
        </Typography>
      ))}
      <Typography variant="body2">
        <strong>Índice FR:</strong> {relFactorScore()}
      </Typography>

      {/* FATOR DE TEMPORALIDADE */}
      <Typography variant="body2" sx={{ mt: 2 }}>
        <strong>Fator de Temporalidade:</strong>
      </Typography>
      <Typography variant="body2">● {props.temporalityFactor}</Typography>
      <Typography variant="body2">
        <strong>Índice FT:</strong> {tempFactorScore()}
      </Typography>

      {/* FATOR DE ABRANGÊNCIA */}
      <Typography variant="body2" sx={{ mt: 2 }}>
        <strong>Fator de Abrangência:</strong>
      </Typography>
      <Typography variant="body2">● {props.coverageFactor}</Typography>
      <Typography variant="body2">
        <strong>Índice FA:</strong> {coverFactorScore()}
      </Typography>
      <br />

      {/* VALOR FINAL */}
      <Typography variant="body2">
        <strong>
          Valor da Compensação Ambiental (CA = FR + (FT + FA) * VR):
        </strong>{" "}
        {formatter.format(envCompensation())}
      </Typography>
      <Typography variant="body2" sx={{ mt: 1 }}>
        <em>
          *Se a soma de FR + (FT + FA) &gt; 0,5, o índice a ser utilizado é
          0,005; caso contrário, considera-se o valor obtido multiplicado por
          0,01.
        </em>
      </Typography>
    </div>
  );
}

export default Report;
