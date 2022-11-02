import React from "react";
import TextField from "@mui/material/TextField";
import CurrencyInput from "@ericblade/react-currency-input";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
import "./styles.css";

function BusinessDetailsForm(props) {
  return (
    <div>
      <TextField
        sx={{ marginBottom: 2 }}
        label="Nome do Empreendimento"
        name="businessName"
        onChange={props.handleChange}
        value={props.formData.businessName}
      />
      <br />
      <TextField
        sx={{ marginBottom: 2 }}
        label="CNPJ"
        name="cnpj"
        onChange={props.handleChange}
        value={props.formData.cnpj}
      />
      <br />

      <p>Valor de Referência</p>
      <span className="currencyinput" style={{ marginBottom: "20px" }}>
        R${" "}
        <CurrencyInput
          name="referenceValue"
          decimalSeparator=","
          thousandSeparator="."
          required
          onChangeEvent={props.handleChange}
          value={props.formData.referenceValue}
        />
      </span>

      <Stack className="alert-stack" sx={{ margin: "auto" }} spacing={2}>
        <div className="alert">
          <Alert severity="warning">
            <AlertTitle>IMPORTANTE</AlertTitle>O Valor de Referência do
            empreendimento deverá ser informado por profissional legalmente
            habilitado e estará sujeito à revisão, por parte do órgão
            competente, impondo-se ao profissional responsável e ao empreendedor
            as sanções administrativas, civis e penais, nos termos da lei, pela
            falsidade da informação.
          </Alert>
        </div>
        <div>
          <Alert severity="info">
            De acordo com o Decreto Estadual nº 45.175, de 2009 (art. 1º, IV) o
            Valor de Referência é o somatório dos investimentos inerentes à
            implantação do empreendimento, excluindo-se os investimentos
            referentes aos planos, projetos, programas e condicionantes exigidos
            no procedimento de licenciamento ambiental para mitigação de
            impactos, os custos de análise do licenciamento ambiental,
            investimentos que possibilitem alcançar níveis de qualidade
            ambiental superiores aos exigidos, bem como os encargos e custos
            incidentes sobre o financiamento do empreendimento, inclusive os
            relativos às garantias, e os custos com apólices e prêmios de
            seguros pessoais e reais.
          </Alert>
        </div>
      </Stack>
    </div>
  );
}

export default BusinessDetailsForm;
