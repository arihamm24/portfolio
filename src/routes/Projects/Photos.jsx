import React from 'react'
import {Link} from 'react-router-dom'
import './Photos.css'
import biker from '../../assets/projects/Photography/blurbiker.jpg'
import construct from '../../assets/projects/Photography/construction.jpg'
import walker from '../../assets/projects/Photography/culc_walker.png'
import can from '../../assets/projects/Photography/faygocan.jpg'
import chicken from '../../assets/projects/Photography/hattiebs.jpg'
import salads from '../../assets/projects/Photography/salads.jpg'
import shrooms from '../../assets/projects/Photography/shrooms.jpg'
import rock from '../../assets/projects/Photography/you matter.jpg'

const Photos = () => {
    return (
        <div className="photos">
            <div className="photosTitle">
                <h1>Photography</h1>
            </div>
            <div className="redirect">
                <Link to="/projects" className="redirectLink">Back to Projects Menu</Link>
            </div>
            <div className='photosContainer'>
                <div className="photoBlurb">
                    <p>My main camera is a Lumix GF7 with a 12-32mm f3.5-5.6 lens. I edit my photos in RawTherapee</p>
                </div>
                <div className="photosGrid">
                    <img src={biker} alt="" className="photoFeat" />
                    <img src={walker} alt="" className="photoFeat" />
                    <img src={chicken} alt="" className="photoFeat" />
                    <img src={rock} alt="" className="photoFeat" />
                    <img src={shrooms} alt="" className="photoFeat" />
                    <img src={salads} alt="" className="photoFeat" />
                    <img src={can} alt="" className="photoFeat" />
                    <img src={construct} alt="" className="photoFeat" />

                </div>
            </div>
            <div className="redirect">
                <Link to="/projects" className="redirectLink">Back to Projects Menu</Link>
            </div>
        </div>
    )
}
export default Photos