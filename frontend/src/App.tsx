import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProtectedRoute from './components/ProtectedRoute';
import HistoryPage from './pages/HistoryPage';
import WorkoutPage from './pages/WorkoutPage';
import ProfilePage from './pages/ProfilePage';
import { Box, Center } from '@chakra-ui/react';

function App() {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/history"
          element={<HistoryPage />}
        />
        <Route
          path="/workout"
          element={<WorkoutPage />}
        />
        <Route
          path="/profile"
          element={<ProfilePage />}
        />
      </Route>

      <Route
        path="/login"
        element={<LoginPage />}
      />
    </Routes>
  );
}

export default App;
