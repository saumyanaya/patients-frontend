
import { FC } from 'react';
import { HomeIcon, ClipboardListIcon, CalendarIcon, LogoutIcon, ChatIcon } from '@heroicons/react/outline'; // import icons from Heroicons

const Sidebar: FC = () => {
    return (
        <aside className="bg-blue-900 text-white h-screen w-64 p-6">

            <div className="text-center text-xl font-bold mb-8">Quantum Doctor</div>
            <nav className="space-y-6">
                <a href="#" className="flex items-center space-x-4">
                    <HomeIcon className="w-6 h-6" />
                    <span>Dashboard</span>
                </a>
                <a href="#" className="flex items-center space-x-4">
                    <ClipboardListIcon className="w-6 h-6" />
                    <span>My Vitals</span>
                </a>
                <a href="#" className="flex items-center space-x-4">
                    <ClipboardListIcon className="w-6 h-6" />
                    <span>Consultations</span>
                </a>
                <a href="#" className="flex items-center space-x-4">
                    <ClipboardListIcon className="w-6 h-6" />
                    <span>My Reccommendations</span>
                </a>
                <a href="#" className="flex items-center space-x-4">
                    <ClipboardListIcon className="w-6 h-6" />
                    <span>My LabTest</span>
                </a>
                <a href="#" className="flex items-center space-x-4">
                    <CalendarIcon className="w-6 h-6" />
                    <span>Future Prediction</span>
                </a>
                <a href="#" className="flex items-center space-x-4">
                    <ChatIcon className="w-6 h-6" />
                    <span>ChatBot</span>
                </a>
                <a href="#" className="flex items-center space-x-4">
                    <LogoutIcon className="w-6 h-6" />
                    <span>Logout</span>
                </a>
            </nav>
        </aside>
    );
};

export default Sidebar;
