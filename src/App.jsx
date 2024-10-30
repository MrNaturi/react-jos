import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage'; // Ensure this path is correct
import MainLayout from './layouts/MainLayout'
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage, {jobLoader} from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';


const App = () => {
  const addJob = async (newJob) => {
    const res = await fetch ("https://422ece93-64b3-498f-8c76-a91877e5b1df-00-15r6s36zbqq7z.worf.replit.dev/jobs", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob)
    })
    return;
  }
  const deleteJob = async (id) => {
    const res = await fetch (`https://422ece93-64b3-498f-8c76-a91877e5b1df-00-15r6s36zbqq7z.worf.replit.dev/jobs/${id}`, {
      method: "DELETE",
      })
    return;
  }
  const updateJob = async (job) => {
    const res = await fetch (`https://422ece93-64b3-498f-8c76-a91877e5b1df-00-15r6s36zbqq7z.worf.replit.dev/jobs/${job.id}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(job)
    })
    return;
  }
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/'  element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/jobs' element={<JobsPage />} />
       <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob} />}loader={jobLoader} />
        <Route path='/*' element={<NotFoundPage />} />
        <Route path='/add-job' element={<AddJobPage  addJobSubmit={addJob}/>} />
        <Route path='/edit-job/:id' element={<EditJobPage updateJobSubmit={updateJob}/>}loader={jobLoader} />

  
        </Route>
     
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
