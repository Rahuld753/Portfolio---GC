import React from 'react'
import './Outlets.css'
import { data } from '../../constants'
import Outlet from '../../components/Outlet/Outlet'

const Outlets = () => {
    return (
        <div id='outlets' className='app__bg section__padding'>
            <h1 className='headtext__cormorant' style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Outlets</h1>
            <div className='app__outlets-container'>
                {data.outlets.map((outlet) =>
                    <Outlet title={outlet.title} image={outlet.image} url={outlet.url} />
                )}
            </div>
        </div>
    )
}

export default Outlets
