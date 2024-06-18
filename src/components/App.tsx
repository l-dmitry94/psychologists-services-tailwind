import { Route, Routes } from 'react-router-dom';

import AppBar from 'components/AppBar';
import HomePage from 'pages/HomePage';
import PsychologistsPage from 'pages/PsychologistsPage';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<AppBar />}>
                <Route index element={<HomePage />} />
                <Route path="psychologists" element={<PsychologistsPage />} />
            </Route>
        </Routes>
    );
};

export default App;
