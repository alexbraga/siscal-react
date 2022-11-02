import React from 'react'
import TextField from "@mui/material/TextField";
import CurrencyInput from "@ericblade/react-currency-input";
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

      <span className="currencyinput">
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
    </div>
  );
}

export default BusinessDetailsForm