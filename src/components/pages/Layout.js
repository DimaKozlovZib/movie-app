import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/header';

const Layout = ({ children }) => {
    return (
        <div className='App'>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
}

export default Layout;
