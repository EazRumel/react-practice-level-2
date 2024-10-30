import React from 'react';
import { LineChart as LChart, Line,XAxis,YAxis} from 'recharts';

const LineChart = () => {
  const MathStudents = [
    { id: 1, name: "Alice", Math: 78,Physics:86 },
    { id: 2, name: "Bob", Math: 85 ,Physics:77},
    { id: 3, name: "Charlie", Math: 92 ,Physics:72},
    { id: 4, name: "David", Math: 67 ,Physics:56},
    { id: 5, name: "Eva", Math: 74 ,Physics:90},
    { id: 6, name: "Frank", Math: 88 ,Physics:84},
    { id: 7, name: "Grace", Math: 90 ,Physics:82},
    { id: 8, name: "Hannah", Math: 95 ,Physics:96},
    { id: 9, name: "Ian", Math: 82 ,Physics:83},
    { id: 10, name: "Jack", Math: 76 ,Physics:62}
  ];
  
  
  return (
    <div className="mt-10">
      <LChart width={800} height={600} data={MathStudents}>
      <XAxis dataKey="name"></XAxis>
      <YAxis></YAxis>
        <Line dataKey='Math' stroke='red'></Line>
        <Line dataKey='Physics' stroke='green'></Line>
      </LChart>
    </div>
  );
};

export default LineChart;