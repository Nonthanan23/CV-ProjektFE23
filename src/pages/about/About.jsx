import React from 'react'
import Info from '../../components/Info'
import Stats from '../../components/Stats'
import './about.css'
import Skills from '../../components/Skills'

/********* about page that include stat and what i learn so far and little bit about myself *************/
const About = () => {
	return (
		<main className="section container">
			<section className="about">
				<h2 className="section__title">
					About <span>Me</span>
				</h2>

				<div className="about__container grid">
					<div className="about__info">
						<h3 className="section__subtitle">Personal Infos</h3>
						<ul className="info__list grid">
							<Info />
						</ul>
					</div>

					<div className="stats grid">
						<Stats />
					</div>
				</div>
			</section>

			<div className="separator"></div>

			<section className='skills'>
				<h3 className="section__subtitle subtitle__center">My Skills</h3>

				<div className="skills__container grid">
					<Skills />
				</div>
			</section>

			<div className="separator"></div>

			<section className="resume">
				<h3 className="section__subtitle subtitle__center">Get to Know Me</h3>
				<p className="aboutme__description">
					I am Front-End Developer student at KYH Stockholm currently. I am passionate about web development and design. I am asian living in Sweden. I have been self learning web development for 2 year. before i was a Bygg och anläggning student. Personality i am a introvert person i like to learn new things and in my free time i like to play video games and watch movies.
				</p>
			</section>
		</main>
	)
}

export default About