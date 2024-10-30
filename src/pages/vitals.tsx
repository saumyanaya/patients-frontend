
import DashboardLayout from '../components/DashboardLayout';
import VitalsHeader from '../components/VitalsHeader';
import HeartRate from '../components/HeartRate';
import TemperatureCard from '../components/TemperatureCard';
// Import other cards...

const VitalsPage = () => {
    return (
        <DashboardLayout>
            {/* <VitalsHeader /> */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                <HeartRate />
                <TemperatureCard />
                {/* Add other cards here */}
            </div>
            {/* Add a section for the "Book an Appointment" card if needed */}
        </DashboardLayout>
    );
};

export default VitalsPage;
