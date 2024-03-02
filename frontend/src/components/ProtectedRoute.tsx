import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import Navbar from './Navbar';
import { Box, Center } from '@chakra-ui/react';

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();

  console.log(isAuthenticated);

  return isAuthenticated() ? (
    <Center>
      <Box maxW={{ base: '100%', md: '2xl' }}>
        <Outlet />
        <Navbar />
      </Box>
    </Center>
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedRoute;
