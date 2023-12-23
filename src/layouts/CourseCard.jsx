const GraphCard = () => {
  // new Chart(document.getElementById("chartjs-1"), {
  //   type: "bar",
  //   data: {
  //     labels: ["January", "February", "March", "April", "May", "June", "July"],
  //     datasets: [
  //       {
  //         label: "Likes",
  //         data: [65, 59, 80, 81, 56, 55, 40],
  //         fill: false,
  //         backgroundColor: [
  //           "rgba(255, 99, 132, 0.2)",
  //           "rgba(255, 159, 64, 0.2)",
  //           "rgba(255, 205, 86, 0.2)",
  //           "rgba(75, 192, 192, 0.2)",
  //           "rgba(54, 162, 235, 0.2)",
  //           "rgba(153, 102, 255, 0.2)",
  //           "rgba(201, 203, 207, 0.2)",
  //         ],
  //         borderColor: [
  //           "rgb(255, 99, 132)",
  //           "rgb(255, 159, 64)",
  //           "rgb(255, 205, 86)",
  //           "rgb(75, 192, 192)",
  //           "rgb(54, 162, 235)",
  //           "rgb(153, 102, 255)",
  //           "rgb(201, 203, 207)",
  //         ],
  //         borderWidth: 1,
  //       },
  //     ],
  //   },
  //   options: {
  //     scales: {
  //       yAxes: [
  //         {
  //           ticks: {
  //             beginAtZero: true,
  //           },
  //         },
  //       ],
  //     },
  //   },
  // });

  return (
    <div className="bg-white border-transparent rounded-lg shadow-xl">
      <div className="bg-gradient-to-b from-gray-300 to-gray-100 uppercase text-gray-800 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2">
        <h2 className="font-bold uppercase text-gray-600">Graph</h2>
      </div>
      <div className="p-5">
        <canvas
          id="chartjs-1"
          className="chartjs"
          width="undefined"
          height="undefined"
        ></canvas>
      </div>
    </div>
  );
};

export default GraphCard;
