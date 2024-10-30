
import DashboardLayout from '../components/DashboardLayout';
import VitalsHeader from '../components/VitalsHeader';
import TrendsChart from '../components/TrendsChart';

const HistoryAndTrendsPage = () => {
    return (
        <DashboardLayout>
            <VitalsHeader activeTab="History and Trends" />
            <TrendsChart />
            <div className="mt-4 bg-gray-100 p-2 rounded-lg text-gray-700">
                Blood pressure dropped by 5mmhg since last month
            </div>
        </DashboardLayout>
    );
};

export default HistoryAndTrendsPage;
