import './App.css'
import { BrowserRouter  } from 'react-router'
import Router from './Routes/Router'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
     <Router />
    </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App


