import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaReact, FaMobileAlt, FaPython, FaNodeJs, FaJs, FaBrain } from 'react-icons/fa';
import { SiFlutter, SiDart } from 'react-icons/si';

const projects = [
	{
		title: 'LeAI',
		description:
			'AI-Powered Learning Assistant. LeAI uses NLP and ML to help students study, summarize, and generate content for personalized learning.\nRole: AI Engineer (built the AI) & Backend Developer (Python).',
		tech: [<FaBrain title="AI/ML" />, <FaPython title="Python" />, <FaReact title="React" />],
		image: null,
		type: 'web',
		link: 'https://leai.live/',
	},
	{
		title: 'Ofriend',
		description:
			'E-learning platform connecting organizations and learners. Social, research, and aid features for a modern learning experience.\nRole: Backend Developer (Node.js, Express, Python).',
		tech: [<FaNodeJs title="Node.js" />, <FaJs title="JavaScript" />],
		image: null,
		type: 'web',
		link: 'https://ofriend.io/',
	},
	{
		title: 'Mangaru',
		description:
			'Manga Reader & Discovery Platform. Dynamic manga reader, offline support, genre filters, and anime-themed UI. (Full App)',
		tech: [<FaReact title="React" />, <FaMobileAlt title="Mobile" />],
		image: null,
		type: 'mobile',
		link: null,
	},
	{
		title: 'E-logBook',
		description:
			'Digital Logbook for Students & Interns. Daily logging, supervisor dashboard, PDF export, and cloud backup. (Full App)',
		tech: [ <FaReact title="React Native" />, <FaMobileAlt title="Mobile" />],
		image: null,
		type: 'mobile',
		link: null,
	},
	{
		title: 'AI Theory CBT',
		description:
			'AI-Based CBT Testing Platform. Upload theory questions, AI/human grading, bulk upload, and moderation for schools.',
		tech: [ <FaPython title="Python" />, <FaBrain title="AI/ML" />],
		image: null,
		type: 'web',
		link: '',
	},
	{
		title: 'HotelPass',
		description:
			'Smart Hotel Booking and Management System. Room management, booking calendar, QR check-ins, and admin panel.',
		tech: [<FaReact title="React" />, <FaNodeJs title="Node.js" />],
		image: null,
		type: 'web',
		link: '',
	},
];

const Projects = () => {
	return (
		<ProjectsSection id="projects">
			<Container>
				<SectionTitle>Projects</SectionTitle>
				<ProjectsGrid>
					{projects.map((project, idx) => (
						<motion.div
							key={project.title}
							whileHover={{
								scale: 1.05,
								boxShadow: '0 8px 32px rgba(0,230,118,0.18)',
							}}
							transition={{ duration: 0.3 }}
						>
							<ProjectCard>
								<ProjectTitle>{project.title}</ProjectTitle>
								<ProjectDescription>
									{project.description}
								</ProjectDescription>
								<TechList>
									{project.tech.map((icon, i) => (
										<TechIcon key={i}>{icon}</TechIcon>
									))}
								</TechList>
								{project.type === 'web' && project.link && (
									<ProjectLink
										href={project.link}
										target="_blank"
										rel="noopener noreferrer"
									>
										Visit Web App
									</ProjectLink>
								)}
							</ProjectCard>
						</motion.div>
					))}
				</ProjectsGrid>
			</Container>
		</ProjectsSection>
	);
};

const ProjectsSection = styled.section`
	background: var(--background);
`;

const Container = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 20px;
`;

const SectionTitle = styled.h2`
	font-size: 2.5rem;
	color: var(--text-primary);
	margin-bottom: 3rem;
	text-align: center;
`;

const ProjectsGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
	gap: 2rem;
`;

const ProjectCard = styled.div`
	background: var(--card-bg);
	border: 1px solid var(--card-border);
	border-radius: 12px;
	padding: 2rem 1.5rem 1.5rem 1.5rem;
	box-shadow: 0 2px 16px rgba(0, 0, 0, 0.12);
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	transition: transform 0.3s, box-shadow 0.3s;
	&:hover {
		transform: translateY(-6px) scale(1.02);
		box-shadow: 0 8px 32px rgba(0, 230, 118, 0.12);
		border-color: var(--accent);
	}
`;

const ProjectTitle = styled.h3`
	color: var(--text-primary);
	font-size: 1.3rem;
	margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
	color: var(--text-secondary);
	font-size: 1rem;
	margin-bottom: 1rem;
`;

const TechList = styled.div`
	display: flex;
	gap: 1rem;
`;

const TechIcon = styled.span`
	color: var(--icon-color);
	font-size: 1.7rem;
`;

const ProjectLink = styled.a`
	margin-top: 1.2rem;
	display: inline-block;
	background: var(--accent-mint);
	color: var(--card-bg);
	font-weight: 600;
	padding: 0.6rem 1.4rem;
	border-radius: 6px;
	font-size: 1rem;
	transition: background 0.2s, color 0.2s, box-shadow 0.2s;
	box-shadow: 0 2px 8px rgba(0, 230, 160, 0.08);
	&:hover {
		background: var(--accent-primary);
		color: var(--text-primary);
		box-shadow: 0 4px 16px var(--accent-primary);
	}
`;

export default Projects;
