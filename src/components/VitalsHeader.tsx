
import { FC } from 'react';

interface VitalsHeaderProps {
    activeTab: string;

}

const VitalsHeader: FC<VitalsHeaderProps> = ({ activeTab }) => {
    return (
        <header className="mb-6 flex items-center justify-between">
            <div>
                <h1 className="text-2xl font-bold">My Vitals</h1>
                <p className="text-gray-600">This tab serves as the entry point for managing and tracking vitals</p>
                <div className="flex space-x-6 mt-4">
                    <button className={`${activeTab === 'Overview' ? 'border-b-2 border-blue-600 font-medium text-blue-600' : ''} hover:text-blue-600`}>
                        Overview
                    </button>
                    <button className={`${activeTab === 'History and Trends' ? 'border-b-2 border-blue-600 font-medium text-blue-600' : ''} hover:text-blue-600`}>
                        History and Trends
                    </button>
                    <button className={`${activeTab === 'AI Insights' ? 'border-b-2 border-blue-600 font-medium text-blue-600' : ''} hover:text-blue-600`}>
                        AI Insights
                    </button>
                </div>
            </div>
        </header>
    );
};

export default VitalsHeader;
