import React, {useState} from 'react';
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

function MainLayout({children}) {
    return (
        <React.Fragment>
            <Header/>
            {children}
            <Footer/>
        </React.Fragment>
    );
}

export default MainLayout;