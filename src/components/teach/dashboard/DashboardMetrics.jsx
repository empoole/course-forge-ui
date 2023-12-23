import MetricCard from "./MetricCard";

const DashboardMetrics = () => {
  const getMetrics = () => {
    return [
      { title: "Courses Created", value: 5 },
      { title: "Total Students Enrolled", value: 343, delta: 1 },
      { title: "Total Active Students", value: 126, delta: 1 },
      { title: "Average Grade", value: 82, delta: -1 },
      { title: "Average Completion Rate", value: 94 },
    ];
  };

  const colors = ["green", "pink", "yellow", "blue", "indigo", "red"];

  const metrics = getMetrics();

  return (
    <>
      {metrics.map((m, i) => {
        return (
          <div className="w-full md:w-1/2 xl:w-1/3 p-6" key={i}>
            <MetricCard
              title={m.title}
              value={m.value}
              delta={m.delta || 0}
              color={colors[i % colors.length]}
            />
          </div>
        );
      })}
    </>
  );
};

export default DashboardMetrics;
