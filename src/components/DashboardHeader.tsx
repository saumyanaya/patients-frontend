import { FC } from 'react';


const DashboardHeader: FC = () => {
    return (
        <header className="mb-6">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <p className="text-gray-600">A snapshot of the essentials - consultations, vitals, upcoming appointments, and test results.</p>
        </header>
    );
};

export default DashboardHeader;
