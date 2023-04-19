import { useState } from 'react';
import { Layout } from 'antd';
import Header from '@/layouts/Header';
import Sidebar from '@/layouts/Sidebar';
import { JobProvider } from '@/context/JobContext';

function DefaultLayout({ children }) {
    const [showSidebar, setShowSidebar] = useState(true);
    const handleShowSidebar = (data) => {
        setShowSidebar(data);
    };
    return (
        <JobProvider>
            <div style={{ display: 'flex' }}>
                <Sidebar showSidebar={showSidebar} onSendShowSidebar={handleShowSidebar} />
                <Layout>
                    <Header showSidebar={showSidebar} onSendShowSidebar={handleShowSidebar} />
                    {children}
                </Layout>
            </div>
        </JobProvider>
    );
}

export default DefaultLayout;
