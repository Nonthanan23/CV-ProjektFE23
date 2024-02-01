import React from 'react'
import Profile from '../../assets/image0.jpg'
import { Link } from 'react-router-dom'
import {FaArrowRight} from 'react-icons/fa';
import "./home.css"
/********* homepage for introdduction ***********/
const Home = () => {
	return (
	<section className="home section grid">
		<img src={Profile} alt="" className="home__img" />

		<div className="home__content">
			<div className="home__data">
				<h1 className="home__title">
					<span>I'm Nonthanan Wanpen.</span> A Front-End Developer
				</h1>

				<p className="home__description">
					I am front-end developer student at KYH Stockholm. I am passionate about web development and design. I am currently looking for an internship or a job as a front-end developer.
				</p>

				<Link to='/about' className='button'>
					More About Me {' '}
					<span className='button__icon'>
						<FaArrowRight />
					</span>
				</Link>
			</div>
		</div>

		<div className="color__block"></div>
	</section>
	)
}

export default Home