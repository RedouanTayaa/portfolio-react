import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import Fade from 'react-reveal';
import endpoints from '../../constants/endpoints';
import Social from '../Social/Social';
import FallbackSpinner from '../FallbackSpinner/FallbackSpinner';
import './home.css'

function Home() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(endpoints.home, {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((res) => setData(res))
            .catch((err) => err);
    }, []);

    return data ? (
        <Fade>
            <div className="main-container">
                <h1 className="name-style">{data?.name}</h1>
                <div className="introduction">
                    <h2 className="inline-child">Je suis&nbsp;</h2>
                    <Typewriter
                        options={{
                            loop: true,
                            autoStart: true,
                            strings: data?.roles,
                        }}
                    />
                </div>
                <Social />
            </div>
        </Fade>
    ) : <FallbackSpinner />;
}

export default Home;