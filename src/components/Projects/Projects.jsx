import React from 'react';
import { motion } from 'framer-motion';
import ProjectsSlider from './ProjectsSlider/ProjectsSlider';
import { web, game, design } from './Projects.constants';
import { projectsAnim } from './Projects.anim';
import { useChangeDocumentTitle } from '../../helpers/useChangeDocumentTitle';

export default function Projects({ pageTitle }) {
	useChangeDocumentTitle(pageTitle);

	return (
		<motion.section className='projects' variants={projectsAnim} initial='init' animate='anim' exit='end'>
			<ProjectsSlider category='Backend Dev' data={web} />
			<ProjectsSlider category='Frontend Dev' data={game} />
			<ProjectsSlider category='Web Service' data={design} />
		</motion.section>
	);
}
