
import DashboardLayout from '../components/DashboardLayout';

import DashboardHeader from '../components/DashboardHeader';
import TestResults from '../components/TestResults';
import Appointments from '../components/Appointment';
import Consultations from '../components/Consultations';
import Vitals from '../components/Vitals';

const Dashboard = () => {
    return (
        <DashboardLayout>
            <DashboardHeader />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <TestResults />
                <Appointments />
                <Consultations />
                <Vitals />
            </div>
        </DashboardLayout>
    );
};

export default Dashboard;
