
import { FC } from 'react';

const appointments = [
    { id: 1, description: 'Consultation with Dr. Ahmed Khan on Oct 20th at 10:00 AM' },
    { id: 2, description: 'Follow-up with Dr. Mark Wilson on Oct 22nd at 11:30 AM' },
];

const Appointment: FC = () => (
    <div className="bg-white p-4 rounded-lg shadow-md space-y-4">
        <h1 className="font-bold text-lg mb-4">Upcoming Appointments</h1>
        {appointments.map((appointment) => (
            <div key={appointment.id} className="border-b pb-2">
                {appointment.description}

            </div>
        ))}
    </div>
);

export default Appointment;

