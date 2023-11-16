import React from "react";
import PropTypes from "prop-types";
import { Chart } from "chart.js";
import "chartjs-plugin-labels";
import { LeaveDashboardContext } from "@/context/LeaveDashboardContext";

const ChartLeave = (props) => {
  const { elementID, context, label, data, backgroundColor } = props;
  const { chartData } = React.useContext(LeaveDashboardContext);

  React.useEffect(() => {
    var config = {
      type: "doughnut",
      data: {
        labels: label,
        datasets: [
          {
            label: "My First Dataset",
            data: data,
            backgroundColor: backgroundColor,
            hoverOffset: 4,
          },
        ],
      },
      options: {
        tooltips: {
          // callbacks: {
          //   label: function (tooltipItem, data) {
          //     var label = data.datasets[tooltipItem.datasetIndex].label || "";
          //     if (label) {
          //       label += ": ";
          //     }
          //     if (!isEmpty(tooltipItem.value)) {
          //       label += tooltipItem.value + " req";
          //     } else {
          //       label += tooltipItem.yLabel + " req";
          //     }
          //     return label;
          //   },
          // },
        },
        plugins: {
          labels: {
            render: function (args) {
              const value = new Intl.NumberFormat("th-th", {
                maximumSignificantDigits: 10,
              }).format(args.value);
              return args.percentage < 2 ? "" : value;
            },
            fontSize: 12,
            fontStyle: "bold",
            fontColor: "rgba(0, 0, 0, 0.6)",
          },
        },
        responsive: true,
      },
    };

    var ctx = document.getElementById(elementID).getContext(context);

    Chart.defaults.global.legend.position = "left";
    window.myLine = new Chart(ctx, config);
  }, [chartData]);
  return <canvas id={elementID}></canvas>;
};

ChartLeave.propTypes = {
  elementID: PropTypes.string.isRequired,
  context: PropTypes.string.isRequired,
  label: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  backgroundColor: PropTypes.array.isRequired,
};

export default ChartLeave;
