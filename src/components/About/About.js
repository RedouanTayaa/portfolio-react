import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Container, Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Fade from 'react-reveal';
import Header from '../Header/Header';
import endpoints from '../../constants/endpoints';
import FallbackSpinner from '../FallbackSpinner/FallbackSpinner';
import './about.css'

function About(props) {
    const { header } = props;
    const [data, setData] = useState(null);

    const parseIntro = (text) => (
        <ReactMarkdown
            children={text}
        />
    );

    useEffect(() => {
        fetch(endpoints.about, {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((res) => setData(res))
            .catch((err) => err);
    }, []);

    return (
        <>
            <Header title={header} />
            <div className="section-content-container">
                <Container>
                    {data
                        ? (
                            <Fade>
                                <Row className="about-align-items">
                                    <Col className="about-intro-text-container">
                                        {parseIntro(data.about)}
                                    </Col>
                                    <Col className="about-intro-image-container">
                                        <img src={data?.imageSource} alt="profile" />
                                    </Col>
                                </Row>
                            </Fade>
                        )
                        : <FallbackSpinner />}
                </Container>
            </div>
        </>
    );
}

About.propTypes = {
    header: PropTypes.string.isRequired,
};

export default About;