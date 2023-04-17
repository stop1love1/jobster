import { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthContext } from '@/context/AuthContext';
import { privateRoutes, publicRoutes } from '@/routes';
import PrivateRoute from './routes/PrivateRoute';
import DefaultLayout from '@/layouts/DefaultLayout';

function App() {
    const { isAuthenticated } = useContext(AuthContext);
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    {privateRoutes.map((route, key) => {
                        const Page = route.component;
                        return (
                            <Route key={key} element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
                                <Route
                                    path={route.path}
                                    element={
                                        <DefaultLayout>
                                            <Page />
                                        </DefaultLayout>
                                    }
                                />
                            </Route>
                        );
                    })}
                    {publicRoutes.map((route, key) => {
                        const Page = route.component;
                        return <Route key={key} path={route.path} element={<Page />} />;
                    })}
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
