import Dashboard from './pages/Dashboard.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
    return (
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route
                        path="/"
                        element={<Dashboard />}
                        />
                    </Routes>
                </BrowserRouter>
            </div>
        )
}

export default App
