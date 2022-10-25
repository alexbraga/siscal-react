import React from 'react'
import TextField from "@mui/material/TextField";

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
      <TextField
        sx={{ marginBottom: 2 }}
        label="Valor de Referência"
        name="referenceValue"
        onChange={props.handleChange}
        value={props.formData.referenceValue}
      />
    </div>
  );
}

export default BusinessDetailsForm