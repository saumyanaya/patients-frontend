
import { FC, ReactNode } from 'react';
import Sidebar from './Sidebar';

interface DashboardLayoutProps {
    children: ReactNode;
}

const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
    return (
        <div className="flex">
            <Sidebar />
            <main className="flex-1 p-8 bg-gray-100">{children}</main>
        </div>
    );
};

export default DashboardLayout;
