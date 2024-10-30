
import { FC } from 'react';
import { HomeIcon, ClipboardListIcon, DocumentReportIcon, LightBulbIcon, CalendarIcon, LogoutIcon, ChatIcon } from '@heroicons/react/outline'; // import icons from Heroicons

const Sidebar: FC = () => {
    return (


        <aside className="bg-blue-900 text-white h-full w-64 p-6 ">

            <img src="/images/dashboard.png" className=" mb-8 h-6 bg-white my-6" alt="Workflow logo" />

            <nav className="flex-grow space-y-6">
                <a href="#" className="flex items-center space-x-4">
                    <HomeIcon className="w-6 h-6" />
                    <span>Dashboard</span>
                </a>
                <a href="#" className="flex items-center space-x-4">
                    <DocumentReportIcon className="w-6 h-6" />
                    <span>My Vitals</span>
                </a>
                <a href="#" className="flex items-center space-x-4">
                    <ChatIcon className="w-6 h-6" />
                    <span>Consultations</span>
                </a>
                <a href="#" className="flex items-center space-x-4">
                    <LightBulbIcon className="w-6 h-6" />
                    <span>Reccommendations</span>
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
            </nav>

            <a href="#" className="flex items-center space-x-4 block mt-20">
                <LogoutIcon className="w-6 h-40" />
                <span>Logout</span>
            </a>
        </aside>


    );
};

export default Sidebar;
