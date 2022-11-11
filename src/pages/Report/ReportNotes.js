import React, { Fragment } from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

function ReportNotes() {
  const styles = StyleSheet.create({
    section: {
      marginTop: 20,
    },
    text: {
      lineHeight: 1.5,
    },
  });

  return (
    <Fragment>
      <View style={styles.section}>
        <Text
          style={[
            styles.text,
            { color: "#608f39", fontFamily: "Helvetica-Bold" },
          ]}
        >
          Notas
        </Text>
        <Text style={styles.text}>
          A fórmula utilizada para o cálculo da compensação ambiental é CA = (FR
          + FT + FA) x VR.
        </Text>
        <Text style={styles.text}>
          *Se a soma de FR + FT + FA for maior que 0,5, o índice a ser utilizado
          é 0,005;{"\n"}caso contrário, considera-se o valor obtido na soma
          multiplicado por 0,01.
        </Text>
      </View>
    </Fragment>
  );
}

export default ReportNotes;
