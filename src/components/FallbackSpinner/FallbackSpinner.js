import React from 'react';
import { Spinner } from 'react-bootstrap';
import './fallback.css';

function FallbackSpinner() {
    return (
        <div className="spinner-container-style">
            <Spinner animation="grow" />
        </div>
    );
}

export default FallbackSpinner;