import { useEffect } from "react";
import PropTypes from "prop-types";

import { Chart } from "chart.js";

function ChartLeave(props) {
  const { elementID, context } = props;
  useEffect(() => {
    var config = {
      type: "doughnut",
      data: {
        labels: ["ลากิจ", "ลาป่วย", "ลาพักร้อน"],
        datasets: [
          {
            label: "My First Dataset",
            data: [2000, 1500, 500],
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 205, 86)",
            ],
            hoverOffset: 4,
          },
        ],
      },
      options: {
        plugins: {
          labels: {
            render: "percentage",
            fontColor: ["black", "black", "black"],
            precision: 2,
          },
        },
        responsive: true,
      },
    };
    var ctx = document.getElementById(elementID).getContext(context);
    Chart.defaults.global.legend.position = "left";
    window.myLine = new Chart(ctx, config);
  }, []);
  return <canvas id={elementID}></canvas>;
}

ChartLeave.propTypes = {
  elementID: PropTypes.string.isRequired,
  context: PropTypes.string.isRequired,
};

export default ChartLeave;
