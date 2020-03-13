import React, {useState} from 'react';
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import './scss/MainLayout.scss'

function MainLayout({children}) {
    return (
        <React.Fragment>
            <div className="container">
                <Header/>
                {children}
                <Footer/>
            </div>
        </React.Fragment>
    );
}

export default MainLayout;