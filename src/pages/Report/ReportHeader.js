import React, { Fragment } from "react";
import { Text, View, Image, StyleSheet } from "@react-pdf/renderer";
import Logo_VieiraCastro from "../../assets/img/Logo_VieiraCastro.jpg";

function ReportHeader() {
  const styles = StyleSheet.create({
    header_title: {
      color: "grey",
      fontSize: 9,
      marginBottom: 20,
      textAlign: "center",
    },
    section: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 10,
    },
    image: {
      marginBottom: 15,
      width: 120,
    },
    info: {
      alignItems: "flex-end",
      color: "#818181",
      display: "flex",
      flexDirection: "column",
      fontSize: 9,
    },
  });

  return (
    <Fragment>
      <Text style={styles.header_title}>
        SISCAL - Sistema para Cálculo de Compensação
      </Text>

      <View style={styles.section}>
        <Image style={styles.image} src={Logo_VieiraCastro} />

        <View style={styles.info}>
          <Text>Claudio Castro</Text>
          <Text style={{ marginBottom: 5 }}>Registro OAB</Text>
          <Text>Rua X, 123. Bairro Z</Text>
          <Text style={{ marginBottom: 5 }}>Belo Horizonte, MG</Text>
          <Text>(31) 99589-3029</Text>
          <Text>claudio@vieiracastro.com.br</Text>
        </View>
      </View>
    </Fragment>
  );
}

export default ReportHeader;
