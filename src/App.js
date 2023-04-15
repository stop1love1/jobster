import { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '@/routes';
import DefaultLayout from '@/layouts/DefaultLayout';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, key) => {
                        const Page = route.component;
                        let Layout = null;
                        Layout = route.layout ? DefaultLayout : Fragment;
                        return (
                            <Route
                                key={key}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
