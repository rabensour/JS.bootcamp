import React from 'react'
import Jumbo from '../components/Jumbo';
import Content from '../components/Content';

export default function AboutPage(props) {
    return (
        <div>
            <Jumbo title={props.title} />
            <Content>
            <p>Hello, my name is Raphael. I'm a Web Developer with skills in HTML, CSS, JavaScript, PostgreSQL, Node.js and React.</p>
            <p>My dream is to one day start my own business and become an entrepreneur (currently working on some ideas).</p>
            <p>I'm constantly learning new things. Currently those things include gaining more experience in Front-End development before starting to learn about Back-End. </p>
            <p>I have other passions in life like writing. One day I hope I could combine this passion with my Web passion ! </p>
            <p>You can check all my works and projects on my <a href="https://github.com/rabensour/JS.bootcamp" target="_blank" rel="noopener noreferrer">GitHub</a> page.</p>
            <p>You can also check my LinkedIn <a href="https://www.linkedin.com/in/shay-abensour-2080bb176" target="_blank" rel="noopener noreferrer">here</a>.</p>
            </Content>
        </div>
    );
}
