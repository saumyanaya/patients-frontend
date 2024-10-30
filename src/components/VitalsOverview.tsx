import { FC } from 'react';

const vitals = [
    { id: 1, label: 'Heart Rate', value: '98 bpm', status: 'Normal', color: 'text-red-600', image: '/images/heart.png' },
    { id: 2, label: 'Temperature', value: '35°C', status: 'Normal', color: 'text-purple-600', image: '/images/temp.png' },
];

const Vitals: FC = () => (
    <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="font-bold text-lg mb-4">Vitals</h2>
        <div className="grid grid-cols-2 gap-4">
            {vitals.map((vital) => (
                <div key={vital.id} className="p-4 border rounded-lg flex flex-col items-start">

                    <h3 className="text-lg font-bold">{vital.label}</h3>
                    <p className={`text-2xl font-semibold ${vital.color}`}>{vital.value}</p>
                    <p className="text-gray-500">{vital.status}</p>
                    {/* <div className="flex items-center mb-10"> */}
                    <img src={vital.image} alt={vital.label} /> {/* Image */}

                </div>



                // </div>
            ))}
        </div>
    </div>
);

export default Vitals;

