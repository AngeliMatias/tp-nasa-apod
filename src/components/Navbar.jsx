import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    
    return(
        <div className="flex justify-center bg-black bg-opacity-40">
            <ul>
                <Link 
                className="inline-block text-white font-mono"
                to="/">Get back to earth</Link>
            </ul>
        </div>
    )
}