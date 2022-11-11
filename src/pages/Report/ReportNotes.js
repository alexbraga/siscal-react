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
          Nota
        </Text>
        <Text style={styles.text}>
          Os cálculos efetuados dependem diretamente da marcação dos itens
          indicados nos fatores de relevância, temporalidade e abrangência. O
          valor calculado é estimativo e referencial para a análise e
          planejamento da compensação ambiental, podendo existir diferenças nos
          cálculos elaborados pelo órgão ambiental responsável, caso ocorram
          divergências na marcação dos itens.
        </Text>
      </View>
    </Fragment>
  );
}

export default ReportNotes;
