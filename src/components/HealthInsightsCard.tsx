// components/HealthInsightCard.tsx
import { FC } from 'react';

interface Insight {
    title: string;
    description: string;
    color: string;
    buttonText?: string;
}

interface HealthInsightCardProps {
    insight: Insight;
}

const HealthInsightCard: FC<HealthInsightCardProps> = ({ insight }) => (
    <div className={`${insight.color} p-4 rounded-lg shadow-md text-white`}>
        <h3 className="text-lg font-semibold mb-2">{insight.title}</h3>
        <p className="text-sm mb-4">{insight.description}</p>
        {insight.buttonText && (
            <button className="bg-white text-black py-1 px-3 rounded-md font-semibold hover:bg-gray-200">
                {insight.buttonText}
            </button>
        )}
    </div>
);

export default HealthInsightCard;
