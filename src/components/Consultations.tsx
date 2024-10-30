// components/TestResults.tsx
import { FC } from 'react';

const consultations = [
    { id: 1, note: 'Consultation with Dr. Sarah Lee went well! Review the notes for next steps.' },
    { id: 2, note: 'Scheduled follow-up with Dr. John Smith for tomorrow at 10:00 AM.' },
    { id: 3, note: 'You’ve got a new consultation with Dr. John Smith tomorrow at 10:00 AM. Make sure you’re ready!' }
];

const Consultations: FC = () => (
    <div className="bg-white p-4 rounded-lg shadow-md space-y-4">
        <h1 className="font-bold text-lg mb-4">Consultations <span className='ml-20 mt-4 p-2 bg-blue-600 text-white rounded-lg'>
            +</span></h1>

        {consultations.map((consultation) => (
            <div key={consultation.id} className="border-b pb-2">
                {consultation.note}
            </div>
        ))}

    </div>

);

export default Consultations;
