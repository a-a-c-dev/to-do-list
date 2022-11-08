import React  from 'react';
import {BackgroundContainer} from '../BackgroundContainer';
import {ContentContainer} from './ContentContainer';


export const MainContainer = () => {

    return (
        <div className='main-container'>
            <BackgroundContainer/>
            <ContentContainer/>
        </div>
    )
}
