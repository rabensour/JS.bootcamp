import React from 'react'

import Jumbo from '../components/Jumbo';
import Carousel from '../components/Carousel';

export default function HomePage(props) {
    return (
        <div>
            <Jumbo title={props.title} subTitle={props.subTitle} text={props.text} />
            <Carousel/>
        </div>
    )
}
