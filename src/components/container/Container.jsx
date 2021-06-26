import React from 'react';

function Container({ children }) {
    return (
        <div className="container mx-auto px-5 py-9 mt-14 font-roboto relative">
            { children }
        </div>
    )
}

export default Container;
