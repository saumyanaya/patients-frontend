
import DashboardLayout from '../components/DashboardLayout';
import DashboardHeader from '../components/DashboardHeader';
import TestResults from '../components/TestResults';
import Appointments from '../components/Appointment';
import Consultations from '../components/Consultations';
import VitalsOverview from '../components/VitalsOverview';

const Dashboard = () => {
    return (
        <DashboardLayout>
            <DashboardHeader />
            <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2">
                <TestResults className="col-span-1 w-full max-w-lg" />
                <Appointments className="col-span-1 w-full max-w-lg" />
                <Consultations className="col-span-1 w-full max-w-lg" />
                <VitalsOverview className="col-span-1 w-full max-w-lg" />
            </div>
        </DashboardLayout>
    );
};

export default Dashboard;
