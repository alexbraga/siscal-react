import React from "react";
import Typography from "@mui/material/Typography";

// Solution found at https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-strings
function Report(props) {
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  function envCompensation() {
    const radioScoreSum = props.radioScores.reduce((a, b) => {
      return (a.toFixed(3) * 1000 + b.toFixed(3) * 1000) / 1000;
    }, 0);

    const scoreSum =
      (props.scores.toFixed(3) * 1000 + radioScoreSum.toFixed(3) * 1000) / 1000;

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
    <div>
      <Typography>
        <strong>Empreendimento:</strong> {props.formData.businessName}
      </Typography>

      <Typography>
        <strong>CNPJ:</strong> {props.formData.cnpj}
      </Typography>

      <Typography>
        <strong>Valor de Referência:</strong>{" "}
        {formatter.format(props.formData.referenceValue)}
      </Typography>

      <Typography sx={{ mt: 2 }}>
        <strong>Fatores de Relevância:</strong>
      </Typography>
      {props.relevanceFactors.map((factor, index) => (
        <p key={index}>{factor}</p>
      ))}

      <Typography sx={{ mt: 2 }}>
        <strong>Fator de Temporalidade:</strong>
      </Typography>
      <p>{props.temporalityFactor}</p>

      <Typography sx={{ mt: 2 }}>
        <strong>Fator de Abrangência:</strong>
      </Typography>
      <p>{props.coverageFactor}</p>
      <br />

      <Typography>
        <strong>Valor da Compensação Ambiental:</strong>
      </Typography>
      <p>{formatter.format(envCompensation())}</p>
    </div>
  );
}

export default Report;
