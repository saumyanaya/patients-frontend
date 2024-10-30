
import DashboardLayout from '../components/DashboardLayout';
import VitalsHeader from '../components/VitalsHeader';
import HealthInsightCard from '../components/HealthInsightsCard';


const insights = [
    {
        id: 1,
        title: 'Blood Pressure Insight',
        description: 'Your blood pressure readings have been consistently above the normal range for the past 2 weeks. Consider scheduling a consultation with a cardiologist to discuss medication adjustments or lifestyle changes.',
        color: 'bg-red-400',
        buttonText: 'Book a Consultation',
    },
    {
        id: 2,
        title: 'Consistent Blood Pressure',
        description: 'Your blood pressure readings have remained steady at 120/80 mmHg for the last two weeks. Great job managing your stress and diet!',
        color: 'bg-green-400',
    },
    {
        id: 3,
        title: 'Healthy Heart Rate',
        description: 'Your resting heart rate has improved and is now within a healthy range (60-70 bpm). Keep maintaining your regular exercise routine to sustain this progress.',
        color: 'bg-green-500',
    },
    {
        id: 4,
        title: 'Rapid Weight Gain',
        description: 'You’ve gained 6 lbs in the past month. This may indicate water retention or other underlying issues. A consultation with your doctor may help identify the cause.',
        color: 'bg-orange-400',
        buttonText: 'Book an Appointment',
    },
];

const AIInsightsPage = () => {
    return (
        <DashboardLayout>
            <VitalsHeader activeTab="AI Insights" />
            <VitalsHeader activeTab="View personalized health insights based on your vitals." />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                {insights.map((insight) => (
                    <HealthInsightCard key={insight.id} insight={insight} />
                ))}
            </div>
        </DashboardLayout>
    );
};

export default AIInsightsPage;
