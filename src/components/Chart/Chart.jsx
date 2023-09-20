import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
  Legend,
} from "recharts";
const Chart = () => {
  const studentData = [
    {
      name: "Alice Johnson",
      mathScore: 95,
      physicsScore: 88,
      chemistryScore: 92,
    },
    {
      name: "Bob Smith",
      mathScore: 88,
      physicsScore: 78,
      chemistryScore: 85,
    },
    {
      name: "Charlie Davis",
      mathScore: 92,
      physicsScore: 75,
      chemistryScore: 89,
    },
    {
      name: "David Lee",
      mathScore: 78,
      physicsScore: 85,
      chemistryScore: 80,
    },
    {
      name: "Emily Wilson",
      mathScore: 55,
      physicsScore: 92,
      chemistryScore: 10,
    },
  ];

  return (
    <div className="flex flex-wrap">
      <LineChart width={1000} height={500} data={studentData}>
        <Line type={"monotone"} dataKey={"mathScore"} stroke="red"></Line>
        <Line type={"monotone"} dataKey={"physicsScore"} stroke="green"></Line>
        <Line type={"monotone"} dataKey={"chemistryScore"} stroke="blue"></Line>
        <CartesianGrid strokeDasharray={5.5} />
        <Tooltip />
        <Legend />

        <XAxis dataKey={"name"} />
        <YAxis dataKey={"mathScore"} />
      </LineChart>

      <BarChart width={800} height={500} data={studentData}>
        <CartesianGrid strokeDasharray={5.5} />

        <Legend />
        <Tooltip />
        <Bar dataKey={"mathScore"} fill="#0088FE" />
        <Bar dataKey={"physicsScore"} fill="#FFBB28" />
        <Bar dataKey={"chemistryScore"} fill="#FF0000" />
        <XAxis dataKey={"name"} />
        <YAxis />
      </BarChart>
    </div>
  );
};

export default Chart;
