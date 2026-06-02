import { z } from 'astro:content';

const researchSchema = z.object({
	title: z.string(),
	period: z.string(),
	supervisor: z.string(),
	summary: z.string(),
	methods: z.array(z.string()),
	role: z.string(),
	status: z.string(),
});

const projectSchema = z.object({
	title: z.string(),
	period: z.string(),
	summary: z.string(),
	tools: z.array(z.string()),
	outcomes: z.array(z.string()),
	link: z.string().optional(),
});

const newsSchema = z.object({
	date: z.string(),
	label: z.string(),
	description: z.string(),
	link: z.string().optional(),
});

const publicationSchema = z.object({
	authors: z.string(),
	year: z.string(),
	title: z.string(),
	venue: z.string(),
	status: z.string(),
	link: z.string().optional(),
});

export const researchItems = z
	.array(researchSchema)
	.parse([
		{
			title: 'FamJam and Green Energy Technologies in the City',
			period: 'Sep 2025 to Present',
			supervisor: 'Dr. Angela Calabrese Barton',
			summary:
				'This project examines how transnational youth make sense of climate change and community impacts through interviews, mapping activities, and collaborative after-school learning design.',
			methods: ['Thematic coding', 'Dedoose', 'Analytical memoing', 'Design collaboration'],
			role:
				'I analyze interview and map-based data, develop analytical memos, draft report sections, and co-design digital and hands-on STEM materials with teachers, families, and youth.',
			status: 'Ongoing',
		},
		{
			title: 'NOAA B-WET Sustainability Teacher Fellowship Evaluation Project',
			period: 'Oct 2025 to Present',
			supervisor: 'Dr. Victoria J. Milazzo Bigelow',
			summary:
				'This evaluation project studies how K-12 educators describe their fellowship experiences, program alignment, and professional learning through open-ended responses.',
			methods: ['Constant comparative analysis', 'Dedoose', 'Evaluation memo writing', 'Survey response coding'],
			role:
				'I conduct qualitative analysis of de-identified survey responses, synthesize emerging patterns, and prepare structured evaluation memos to support reporting and program improvement.',
			status: 'Ongoing',
		},
		{
			title: 'The Role of Short-Form Video in the Acquisition of Chinese as a Foreign Language',
			period: 'Feb 2024 to Apr 2024',
			supervisor: 'Dr. Yifang Ai',
			summary:
				'This independent study explored how short-form video habits relate to learner motivation, engagement, and attitudes in Chinese as a foreign language.',
			methods: ['Literature review', 'Questionnaire design', 'Quantitative analysis', 'Cross-variable analysis'],
			role:
				'I identified a research gap, designed a 25-item questionnaire, collected 74 valid responses, and analyzed the relationships between viewing habits, motivation, and learner attitudes.',
			status: 'Completed',
		},
	]);

export const projectItems = z
	.array(projectSchema)
	.parse([
		{
			title: 'Toothopia: Educational Application Design',
			period: 'Jan 2025 to Apr 2025',
			summary:
				'Toothopia is a research-informed educational game concept about oral health habit development, designed through literature review, needs analysis, user personas, and formative playtesting.',
			tools: ['Figma', 'Interaction design', 'Usability evaluation', 'Learning motivation design'],
			outcomes: [
				'Prototyped four mini games with progress tracking, avatar customization, and reflection prompts.',
				'Integrated positive reinforcement and storytelling to support learner motivation.',
				'Produced a report and demo with formative playtesting and feasibility analysis.',
			],
		},
		{
			title: 'Michigan Online Course Operations and Learner Experience Support',
			period: 'Mar 2025 to Present',
			summary:
				'At the Center for Academic Innovation, I contribute to course quality improvement across online offerings by reviewing pedagogical flow, usability, accessibility, and learner engagement patterns.',
			tools: ['Canvas', 'Course evaluation rubric', 'Accessibility editing', 'Behavioral analytics'],
			outcomes: [
				'Conducted beta testing for more than 25 online courses and translated findings into faculty-facing reports.',
				'Edited modules, assessments, captions, visuals, and discussion prompts to improve clarity and usability.',
				'Analyzed more than 100 learner interactions to suggest redesign strategies for low-engagement areas.',
			],
		},
		{
			title: 'Spark Festival of Learning Experience Design',
			period: 'Jan 2025 to Apr 2025',
			summary:
				'I co-designed and facilitated a public learning festival grounded in the learning sciences, translating pedagogical goals into interactive demonstrations, workshops, and self-directed materials.',
			tools: ['Experience design', 'Facilitation', 'Observation protocol', 'Activity book design'],
			outcomes: [
				'Helped shape 19 demonstrations and workshops for cross-disciplinary audiences.',
				'Created an activity book with experiential tasks for self-directed learning.',
				'Used on-site observation to evaluate engagement and identify strengths in activity and spatial design.',
			],
		},
	]);

export const newsItems = z
	.array(newsSchema)
	.parse([
		{
			date: 'Oct 2025',
			label: 'Joined the NOAA B-WET Sustainability Teacher Fellowship evaluation project',
			description:
				'Started a new qualitative evaluation role focused on coding educator responses and writing structured reporting memos.',
		},
		{
			date: 'Sep 2025',
			label: 'Began research on FamJam and Green Energy Technologies in the City',
			description:
				'Contributed to interview analysis, map-based sensemaking analysis, and collaborative design for youth environmental learning.',
		},
		{
			date: 'Mar 2025',
			label: 'Became a Course Operation Fellow at the Center for Academic Innovation',
			description:
				'Supported Michigan Online course review, accessibility edits, and learner experience improvements across online courses.',
		},
	]);

export const publications = z.array(publicationSchema).parse([]);
