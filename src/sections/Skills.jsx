import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaReact, FaVuejs, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaPython, FaJava, FaGitAlt, FaDocker, FaAws, FaRobot, FaCogs, FaVial, FaProjectDiagram } from 'react-icons/fa';
import { SiTypescript, SiStyledcomponents, SiMongodb, SiFlutter, SiDart, SiGraphql, SiPostman } from 'react-icons/si';

const skillCategories = [
	{
		title: 'Frontend',
		skills: [
			{ name: 'React', icon: <FaReact color="#61dafb" /> },
			{ name: 'Vue.js', icon: <FaVuejs color="#42b883" /> },
			{ name: 'JavaScript', icon: <FaJs color="#f7df1e" /> },
			{ name: 'TypeScript', icon: <SiTypescript color="#3178c6" /> },
			{ name: 'HTML5', icon: <FaHtml5 color="#e34c26" /> },
			{ name: 'CSS3', icon: <FaCss3Alt color="#1572b6" /> },
			{ name: 'Styled Components', icon: <SiStyledcomponents color="#db7093" /> },
			{ name: 'Flutter', icon: <SiFlutter color="#02569B" /> },
			{ name: 'Dart', icon: <SiDart color="#0175C2" /> },
		],
	},
	{
		title: 'Backend',
		skills: [
			{ name: 'Node.js', icon: <FaNodeJs color="#3c873a" /> },
			{ name: 'Python', icon: <FaPython color="#3776ab" /> },
			{ name: 'Java', icon: <FaJava color="#007396" /> },
			{ name: 'RESTful APIs', icon: <SiPostman color="#ff6c37" /> },
			{ name: 'GraphQL', icon: <SiGraphql color="#e535ab" /> },
			{ name: 'MongoDB', icon: <SiMongodb color="#47a248" /> },
			{ name: 'AI Engineer (Python, ML, NLP)', icon: <FaRobot color="#00e676" /> },
		],
	},
	{
		title: 'Tools & Others',
		skills: [
			{ name: 'Git', icon: <FaGitAlt color="#f34f29" /> },
			{ name: 'Docker', icon: <FaDocker color="#2496ed" /> },
			{ name: 'AWS', icon: <FaAws color="#ff9900" /> },
			{ name: 'CI/CD', icon: <FaCogs color="#00e676" /> },
			{ name: 'Agile/Scrum', icon: <FaCogs color="#00e676" /> },
			{ name: 'Testing', icon: <FaVial color="#00e676" /> },
			{ name: 'Project Management', icon: <FaProjectDiagram color="#00e676" /> },
		],
	},
];

const Skills = () => {
	return (
		<SkillsSection id="skills">
			<Container>
				<SectionTitle>Skills</SectionTitle>
				<SkillsGrid>
					{skillCategories.map((category, index) => (
						<motion.div
							key={category.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.2 }}
							viewport={{ once: true }}
						>
							<SkillCategory>
								<CategoryTitle>{category.title}</CategoryTitle>
								<SkillsList>
									{category.skills.map((skill) => (
										<SkillItem key={skill.name}>
											<SkillIcon>{skill.icon}</SkillIcon>
											{skill.name}
										</SkillItem>
									))}
								</SkillsList>
							</SkillCategory>
						</motion.div>
					))}
				</SkillsGrid>
			</Container>
		</SkillsSection>
	);
};

const SkillsSection = styled.section`
	background-color: var(--primary);
`;

const Container = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 20px;
`;

const SectionTitle = styled.h2`
	font-size: 2.5rem;
	color: var(--secondary);
	margin-bottom: 3rem;
	text-align: center;

	&:after {
		content: '';
		display: block;
		width: 100px;
		height: 4px;
		background-color: var(--accent);
		margin: 20px auto 0;
	}
`;

const SkillsGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	gap: 2rem;
`;

const SkillCategory = styled.div`
	background-color: rgba(255, 255, 255, 0.05);
	border-radius: 8px;
	padding: 2rem;
	transition: transform 0.3s ease;

	&:hover {
		transform: translateY(-5px);
	}
`;

const CategoryTitle = styled.h3`
	color: var(--accent);
	font-size: 1.5rem;
	margin-bottom: 1.5rem;
`;

const SkillsList = styled.ul`
	list-style: none;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 1rem;
`;

const SkillItem = styled.li`
	color: var(--text-light);
	font-size: 1rem;
	display: flex;
	align-items: center;

	&:before {
		content: '▹';
		color: var(--accent);
		margin-right: 8px;
	}
`;

const SkillIcon = styled.span`
	margin-right: 0.7rem;
	font-size: 1.3rem;
	vertical-align: middle;
`;

export default Skills;
