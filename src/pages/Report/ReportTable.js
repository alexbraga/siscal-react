import React from "react";
import { View, StyleSheet } from "@react-pdf/renderer";
import ReportTableHeader from "./ReportTableHeader";
import ReportTableRows from "./ReportTableRows";
import ReportTableBlankSpace from "./ReportTableBlankSpace";
import ReportTableSubtotal from "./ReportTableSubtotal";
import ReportTableFooter from "./ReportTableFooter";

const tableRowsCount = 13;

const styles = StyleSheet.create({
  tableContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
  },
});

const ReportTable = (props) => {
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  function relFactorScore() {
    const sum =
      (props.scores.toFixed(3) * 1000 +
        props.radioScores[0].toFixed(3) * 1000 +
        props.radioScores[1].toFixed(3) * 1000) /
      1000;

    return sum;
  }

  function tempFactorScore() {
    return props.radioScores[2];
  }

  function coverFactorScore() {
    return props.radioScores[3];
  }

  function envCompensation() {
    const scoreSum =
      (relFactorScore().toFixed(3) * 1000 +
        tempFactorScore().toFixed(3) * 1000 +
        coverFactorScore().toFixed(3) * 1000) /
      1000;

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
    <View style={styles.tableContainer}>
      <ReportTableHeader title={"FATORES DE RELEVÂNCIA"} />
      <ReportTableRows items={props.relevanceFactors} />
      <ReportTableBlankSpace
        rowsCount={tableRowsCount - props.relevanceFactors.length}
      />
      <ReportTableHeader title={"FATOR DE TEMPORALIDADE"} />
      <ReportTableRows items={props.temporalityFactor} />
      <ReportTableHeader title={"FATOR DE ABRANGÊNCIA"} />
      <ReportTableRows items={props.coverageFactor} />
      <ReportTableSubtotal
        relevanceIndex={relFactorScore}
        temporalityIndex={tempFactorScore}
        coverageIndex={coverFactorScore}
      />
      <ReportTableFooter
        envCompensation={formatter.format(envCompensation())}
      />
    </View>
  );
};

export default ReportTable;
