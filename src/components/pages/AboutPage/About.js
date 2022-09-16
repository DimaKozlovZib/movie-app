import React from 'react';
import Torch from '../../Torch/Torch';
import Layout from '../Layout';
import './About.css';

const About = () => {
    return (
        <Layout>
            <Torch >
                <div>
                    <h1>Movie app</h1>
                    <h2>Easy movie search</h2>
                </div>
            </Torch>
            <section className='About__contant'>
                <div className='container'>
                    <h2>О проэкте</h2>
                    <p>
                        Приложение создал Козлов Дмитрий. В качестве API был использован
                        kinopoiskapiunofficial.tech.
                    </p>
                    <h3>Применяемый стэк</h3>
                    <ul>
                        <li>React</li>
                        <li>JavaScript</li>
                        <li>gh-pages</li>
                        <li>react-router-dom</li>
                        <li>CSS, SCSS</li>
                    </ul>

                </div>
            </section>
        </Layout>
    );
}
export default About;
