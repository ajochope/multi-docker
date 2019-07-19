import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <div>
            Esta pagina es OtherPage.js
            <Link to="/">Volver a Inicio</Link>
        </div>
    );
};