import React from 'react';

function Footer() {
    return (
        <div className="bg-light p-3">
            Copyright &copy; {(new Date()).getFullYear()} Takumi Stryder
        </div>
    );
}

export default Footer;
