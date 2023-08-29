import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import BrandPage from './Pages/BrandPage';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrandPage />
    </QueryClientProvider>
  );
};

export default App;
