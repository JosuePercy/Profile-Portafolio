import React, { useEffect, useState } from 'react';

const Preloader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000); // aumenta el tiempo aquí, en milisegundos

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {loading ? (
                <div id="preloader">
                    <div id="loader"></div>
                </div>
            ) : (
                <></>
            )}
        </>
    );
};

export default Preloader;