import React, { useEffect, useState } from 'react';  // Remove the duplicate import of useEffect
import JoListing from './JoListing'; // Ensure the file/component name is correct
import Spinner from './Spinner';
const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = isHome ? 'https://422ece93-64b3-498f-8c76-a91877e5b1df-00-15r6s36zbqq7z.worf.replit.dev/jobs?_limit=3' : 'https://422ece93-64b3-498f-8c76-a91877e5b1df-00-15r6s36zbqq7z.worf.replit.dev/jobs';
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log('Error fetching data', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();  
  }, []);  


  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? 'Recent Jobs' : 'Browse Jobs'}
        </h2>
          {loading? <Spinner loading={loading}/> : (
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((job) => (
            <JoListing key={job.id} job={job} />
          ))}
          </div>
          )}
        </div>
    </section>
  );
};

export default JobListings;
