import React from 'react'
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
    const navigate = useNavigate();

  return (
    <div>
        <h1> Welcome to Firebase CRUD Application</h1>
        <h2>/results for result page</h2>
        <h2>/customer for user page</h2>
        <h2>/manager for the manager page</h2>
        <h2>/ to come back home</h2>
        <button onClick={() => navigate('/customer')}>
            User Home
        </button>
        <button onClick={() => navigate('/manager')}>
            Manager Home 
        </button>
        <button onClick={() => navigate('/results')}>
            Results Page 
        </button>
    </div>
  )
}

export default Homepage