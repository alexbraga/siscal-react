import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  row: {
    alignItems: "center",
    flexDirection: "row",
    height: 24,
  },
  invisible_column: {
    color: "white",
    width: "60%",
  },
  border: {
    borderBottomColor: "#608f39",
    borderBottomWidth: 2,
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "40%",
  },
  description: {
    paddingRight: 8,
  },
  total: {
    fontFamily: "Helvetica-Bold",
    paddingRight: 8,
    textAlign: "right",
    width: "35%",
  },
});

const ReportTableFooter = (props) => {
  return (
    <View style={styles.row}>
      <Text style={styles.invisible_column}></Text>
      <View style={styles.border}>
        <Text style={styles.description}>COMPENSAÇÃO AMBIENTAL</Text>
        <Text style={styles.total}>{props.envCompensation}</Text>
      </View>
    </View>
  );
};

export default ReportTableFooter;
