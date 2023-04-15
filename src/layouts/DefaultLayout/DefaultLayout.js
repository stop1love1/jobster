import { useState } from 'react';
import Header from '@/layouts/Header';
import Sidebar from '@/layouts/Sidebar';
import { Layout } from 'antd';

function DefaultLayout({ children }) {
    const [showSidebar, setShowSidebar] = useState(true);
    const handleShowSidebar = (data) => {
        setShowSidebar(data);
    };
    return (
        <div style={{ display: 'flex' }}>
            <Sidebar showSidebar={showSidebar} onSendShowSidebar={handleShowSidebar} />
            <Layout>
                <Header showSidebar={showSidebar} onSendShowSidebar={handleShowSidebar} />
                {children}
            </Layout>
        </div>
    );
}

export default DefaultLayout;
