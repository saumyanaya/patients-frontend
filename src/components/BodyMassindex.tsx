import { FC } from 'react';

const TemperatureCard: FC = () => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md w-full">
            <h3 className="text-lg font-semibold">BodyMassindex</h3>
            <p className="text-4xl font-bold mt-2">24.9 <span className="text-lg font-normal"> You are healthy</span></p>
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

export default TemperatureCard;
