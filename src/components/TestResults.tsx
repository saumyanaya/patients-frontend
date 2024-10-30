
import { FC } from 'react';

const TestResults: FC = () => {
    return (
        <section className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="font-bold text-lg mb-4">Test Results</h2>
            <div className="space-y-2">
                <div className="flex justify-between">
                    <span>Blood Test Result</span>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded">View result</button>
                </div>
                <div className="flex justify-between">
                    <span>Malaria Test</span>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded">View result</button>
                </div>
            </div>
        </section>
    );
};

export default TestResults;
