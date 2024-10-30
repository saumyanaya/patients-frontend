
import { FC } from 'react';

const vitals = [
    { id: 1, label: 'Heart Rate', value: '98 bpm', status: 'Normal', color: 'text-red-600' },
    { id: 2, label: 'Temp', value: '35°C', status: 'Normal', color: 'text-purple-600' },
    // { id: 3, label: 'Blood Pressure', value: '102/72 mmHg', status: 'Normal', color: 'text-blue-600' },
    // { id: 4, label: 'Blood Oxygen', value: '90%', status: 'Normal', color: 'text-orange-600' },
];

const Vitals: FC = () => (
    <div className="grid grid-cols-2 gap-4 bg-white p-4 rounded-lg shadow-md">
        {vitals.map((vital) => (
            <div key={vital.id} className="p-4 border rounded-lg">
                <h3 className="text-lg font-bold">{vital.label}</h3>
                <p className={`text-2xl font-semibold ${vital.color}`}>{vital.value}</p>
                <p className="text-gray-500">{vital.status}</p>
            </div>
        ))}
    </div>
);

export default Vitals;
