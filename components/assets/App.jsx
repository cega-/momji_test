import { useState } from 'react';
import PillList from './PillList'
import PillSelection from './PillSelection'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

function App() {
  const queryClient = new QueryClient()
  
  return (
    <div className="App">
    
      <PillList />
      
      <QueryClientProvider client={queryClient}>
        <PillSelection />
      </QueryClientProvider>
    </div>
)}

export default App
