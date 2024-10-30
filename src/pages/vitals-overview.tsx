
import DashboardLayout from '../components/DashboardLayout';
import VitalsHeader from '../components/VitalsHeader';
import HeartRate from '../components/HeartRate';
import TemperatureCard from '../components/TemperatureCard';
import BloodPressure from '../components/BloodPressure';
import BloodOxygen from '../components/BloodOxygen';
import BodyMassindex from '../components/BodyMassindex';
// Import other cards...

const VitalsPage = () => {
    return (
        <DashboardLayout>
            <VitalsHeader activeTab='Overview' />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 ">
                <HeartRate />
                <TemperatureCard />
                <BloodPressure />
                <BloodOxygen />
                <BodyMassindex />
            </div>
            {/* Add a section for the "Book an Appointment" card if needed */}
        </DashboardLayout>
    );
};

export default VitalsPage;
