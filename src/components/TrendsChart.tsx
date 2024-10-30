
import { FC, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const TrendsChart: FC = () => {
    const [vitalType, setVitalType] = useState('Blood Pressure');
    const [timeRange, setTimeRange] = useState('This month');

    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: vitalType,
                data: [50, 60, 45, 80, 70, 60, 75, 50, 55, 65, 70, 60],
                backgroundColor: '#2563eb',
            },
        ],
    };

    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex justify-between mb-4">
                <select
                    className="border border-gray-300 p-2 rounded-md"
                    value={vitalType}
                    onChange={(e) => setVitalType(e.target.value)}
                >
                    <option>Blood Pressure</option>
                    <option>Heart Rate</option>
                    <option>Temperature</option>
                    {/* Add other options as needed */}
                </select>
                <select
                    className="border border-gray-300 p-2 rounded-md"
                    value={timeRange}
                    onChange={(e) => setTimeRange(e.target.value)}
                >
                    <option>This month</option>
                    <option>Last 3 months</option>
                    <option>Last 6 months</option>
                    {/* Add other options as needed */}
                </select>
            </div>
            <Bar data={data} options={{ responsive: true, plugins: { legend: { display: false } } }} />
        </div>
    );
};

export default TrendsChart;
