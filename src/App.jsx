import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import { Button } from './components/ui/button'
import AppLayout from './layouts/AppLayout';
import LandingPage from './pages/LandingPage';
import OnboardingPage from './pages/OnboardingPage';
import Job from './pages/Job';
import JobListing from './pages/JobListing';
import PostJobs from './pages/PostJobs';
import SaveJobs from './pages/SaveJobs';
import MyJobs from './pages/MyJobs';

import { ThemeProvider } from "@/components/theme-provider"
import ProtectedRoute from './components/ProtectedRoute';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <LandingPage />
      },
      {
        path: '/onboarding',
        element: (
          <ProtectedRoute>
            <OnboardingPage />
          </ProtectedRoute>
        ),
      },
      {
        path: '/job/:id',
        element: (
          <ProtectedRoute>
            <Job />
          </ProtectedRoute>
        ),
      },
      {
        path: '/jobListing',
        element: (
          <ProtectedRoute>
            <JobListing />
          </ProtectedRoute>
        ),
      },
      {
        path: '/postJobs',
        element: (
          <ProtectedRoute>
            <PostJobs />
          </ProtectedRoute>
        ),
      },
      {
        path: '/saveJobs',
        element: (
          <ProtectedRoute>
            <SaveJobs />
          </ProtectedRoute>
        ),
      },
      {
        path: '/myJobs',
        element: (
          <ProtectedRoute>
            <MyJobs />
          </ProtectedRoute>
        ),
      },
    ]
  }
])

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router = {router} />
    </ThemeProvider>
  );
}

export default App
