import React, { useContext } from 'react'
import { AllStateConext } from '../Context/AllStatue';

const Footer = () => {
    const { loading } = useContext(AllStateConext);

    return (
        <footer>
            {
                loading ? '' : <h4 className='copy-right'>Copyright 2022 | create by: <a href='https://www.linkedin.com/in/majd-salameh-baa27a210'>Majd Salameh</a></h4>
            }


        </footer>
    )
}

export default Footer