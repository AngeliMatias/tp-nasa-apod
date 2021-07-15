import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return(
        <div className="flex justify-center items-center h-screen bg-blue-space bg-cover">
            <div>
                <Link 
                className="text-center uppercase text-xl text-white inline-block bg-blue-800 p-8 shadow-2xl 
                rounded-lg border-4 border-blue-900 hover:border-blue-300 font-mono" 
                to="/nasaAPOD">Show me the Astronomy Photo of the Day!</Link>
            </div>
        </div>
    )
}