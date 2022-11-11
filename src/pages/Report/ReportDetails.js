import React, { Fragment } from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

function ReportDetails(props) {
  const styles = StyleSheet.create({
    section: {
      marginTop: 20,
    },
    info: {
      marginBottom: 15,
    },
    text: {
      height: 15,
    },
    referece_value: {
      flexDirection: "row",
    },
  });

  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <Fragment>
      <View style={styles.section}>
        <View style={styles.info}>
          <Text style={styles.text}>{props.formData.businessName}</Text>
          <Text style={styles.text}>{props.formData.cnpj}</Text>
          <Text style={styles.text}>
            Data: {new Date(Date.now()).toLocaleDateString("pt-BR")}
          </Text>
        </View>

        <View style={styles.referece_value}>
          <Text style={{ fontFamily: "Helvetica-Bold" }}>
            Valor de Referência:{" "}
          </Text>
          <Text>{formatter.format(props.formData.referenceValue)}</Text>
        </View>
      </View>
    </Fragment>
  );
}

export default ReportDetails;
