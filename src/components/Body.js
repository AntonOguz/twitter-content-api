import React from 'react';
import SideBar from "./SideBar";
import Content from "./Content";

const Body = () => {
    return (
        <div className={'body'}>
            <SideBar/>
            <Content/>
            Hello, world!
            Print
        </div>
    );
};

export default Body;
