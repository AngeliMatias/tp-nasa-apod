import React, { Fragment, useEffect, useState } from 'react';
import Navbar from './Navbar';
import Spinner from './Spinners/SpinnerAPOD';


export default function NasaAPOD(){

    const[photoData, setPhotoData] = useState(null);

    useEffect(() => {
        fetchPhoto();

        async function fetchPhoto() {
            const res = await fetch(
                `https://api.nasa.gov/planetary/apod?api_key=OpM62yerNrYbNeTCLIoRgQftFj2UHeGSuPqNmngl`
            );
            const data = await res.json();     
            setPhotoData(data);
            console.log(data);
        }
    }, []);

    if(!photoData) return <Spinner/>;

    return(
        <Fragment>
            <div className="bg-blue-space bg-cover max-h-full">
                <Navbar />
                <div className="flex p-2.5 m-0">
                    {photoData.media_type === "image" ? (
                        <img src={photoData.url} alt="photoData.title" 
                        className="border-4 border-black border-opacity-30 mr-3 w-1/2 object-contain max-h-screen"
                        />) : (
                            <iframe
                            title="space-video"
                            src={photoData.url}
                            frameBorder="0"
                            allow="autoplay"
                            allowFullScreen
                            className="border-4 border-black border-opacity-30 mr-3 w-1/2 object-contain max-h-screen"
                            />
                        )}

                    <div className="text-white p-10 mt-0 mb-auto">
                        <h1 className="font-serif my-0 text-3xl ">{photoData.title}</h1>
                        <p className="font-serif mt-0 mb-7">{photoData.date}</p>
                        <p className="font-sans text-xl">{photoData.explanation}</p>
                        <p className="font-serif mt-2">Author: {photoData.copyright}</p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}