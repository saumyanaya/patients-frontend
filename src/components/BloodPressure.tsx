import { FC } from 'react';

const BloodPressure: FC = () => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md w-full">
            <h3 className="text-lg font-semibold">BloodPressure</h3>
            <p className="text-4xl font-bold mt-2">102<span className="text-lg font-normal">/72 mmHg</span></p>
            <span className="text-sm text-green-600">Normal</span>
            <div className="mt-4">
                <svg className="w-full h-12" fill="none">
                    {/* Replace with an actual SVG chart */}
                    <rect width="100%" height="100%" fill="url(#gradient)" />
                </svg>
            </div>
        </div>
    );
};

export default BloodPressure;
