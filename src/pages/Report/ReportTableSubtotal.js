import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  row: {
    alignItems: "center",
    flexDirection: "row",
  },
  invisible_column: {
    color: "white",
    width: "60%",
  },
  factors_container: {
    borderBottomColor: "lightgrey",
    borderBottomWidth: 1,
    flexDirection: "column",
    marginVertical: 15,
    width: "40%",
    paddingBottom: 10,
  },
  factor: {
    flexDirection: "row",
    height: 20,
    justifyContent: "flex-end",
  },
  description: {
    paddingRight: 8,
  },
  total: {
    paddingRight: 8,
    textAlign: "right",
    width: "35%",
  },
});

const ReportTableSubtotal = (props) => {
  const scoreSum =
    (props.relevanceIndex().toFixed(3) * 1000 +
      props.temporalityIndex().toFixed(3) * 1000 +
      props.coverageIndex().toFixed(3) * 1000) /
    1000;

  return (
    <View style={styles.row}>
      <Text style={styles.invisible_column}></Text>

      <View style={styles.factors_container}>
        <View style={styles.factor}>
          <Text style={styles.description}>Índice FR</Text>
          <Text style={styles.total}>{props.relevanceIndex()}</Text>
        </View>

        <View style={styles.factor}>
          <Text style={styles.description}>Índice FT</Text>
          <Text style={styles.total}>{props.temporalityIndex()}</Text>
        </View>

        <View style={styles.factor}>
          <Text style={styles.description}>Índice FA</Text>
          <Text style={styles.total}>{props.coverageIndex()}</Text>
        </View>

        <View style={styles.factor}>
          <Text style={styles.description}>FR + FT + FA</Text>
          <Text style={styles.total}>{scoreSum}</Text>
        </View>

        <View style={styles.factor}>
          <Text style={styles.description}>Índice utilizado*</Text>
          <Text style={styles.total}>
            {scoreSum > 0.5 ? 0.005 : scoreSum * 0.01}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ReportTableSubtotal;
