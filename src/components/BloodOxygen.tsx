import { FC } from 'react';

const BloodOxygen: FC = () => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md w-full">
            <h3 className="text-lg font-semibold">BloodOxygen</h3>
            <p className="text-4xl font-bold mt-2">90% <span className="text-lg font-normal"></span></p>
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

export default BloodOxygen;
