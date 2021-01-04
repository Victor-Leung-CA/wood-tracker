import ReactFrappeChart from "react-frappe-charts";
import React from "react";
import "./css/Graph.css"

export default function MyChart(props) {
  return (
    <div className="graph">
      <ReactFrappeChart
        title="Wood Quanitity"
        type="line"
        colors={["#b36b00"]}
        axisOptions={{ xAxisMode: "tick", yAxisMode: "tick", xIsSeries: 1 }}
        height={400}
        data={{
          labels: props.tableInfo.woodLog.map(info => info.createdAt.substring(0,10)),
          datasets: [{ values: props.tableInfo.woodLog.map(info => info.updatedAmount) }],
        }}
      />
    </div>
  );
}