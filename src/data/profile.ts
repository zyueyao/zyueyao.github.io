export interface SectionLink {
	id: string;
	label: string;
	href: string;
}

export interface ResearchItem {
	title: string;
	period: string;
	context: string;
	description: string;
	highlights: string[];
}

export interface ExperienceItem {
	title: string;
	period: string;
	context: string;
	description: string;
	highlights: string[];
}

export interface EducationItem {
	school: string;
	degree: string;
	period: string;
	detail?: string;
	gpa?: string;
}

export interface ContactLink {
	label: 'Email' | 'Twitter' | 'LinkedIn' | 'Github' | 'Scholar';
	value: string;
	href: string;
}

export interface Headshot {
	src: string;
	alt: string;
}

export const profile = {
	name: 'Yueyao Zhang',
	identityLine: 'Incoming Ph.D. Student, University of Tennessee, Knoxville',
	location: 'Knoxville, TN',
	email: 'yzhan297@vols.utk.edu',
	siteTitle: 'Academic Homepage',
	cvPath: '/YueyaoZhang_CV.pdf',
	headshot: {
		src: '/headshot.jpg',
		alt: 'Portrait of Yueyao Zhang',
	} satisfies Headshot,
	intro: [
		'I am an incoming Ph.D. student in Learning, Design, and Technology at the University of Tennessee, Knoxville.',
		'My research examines how artificial intelligence and emerging technologies are reshaping learning environments. Grounded in the learning sciences, I study the design of educational technologies across STEM education, online learning, and community-based and informal settings, with particular attention to how these environments can support meaningful participation, engagement, and equitable access for diverse learners.',
		'Methodologically, my work draws on qualitative and design-based approaches, with experience spanning program evaluation, learning experience design, and course operations.',
	],
	researchInterests: [
		'AI for education',
		'Educational technology',
		'Online learning',
		'STEM education',
		'Community-based and informal learning',
		'Learning sciences',
		'Learning design',
	],
	navigation: [
		{ id: 'about', label: 'About', href: '#about' },
		{ id: 'research-interests', label: 'Research Interests', href: '#research-interests' },
		{ id: 'education', label: 'Education', href: '#education' },
		{ id: 'research-experience', label: 'Research Experience', href: '#research-experience' },
		{ id: 'internship-experience', label: 'Internship Experience', href: '#internship-experience' },
		{ id: 'awards', label: 'Awards', href: '#awards' },
	] satisfies SectionLink[],
	researchExperience: [
		{
			title: 'FamJam and Green Energy Technologies in the City',
			period: 'Sep 2025 - Apr 2026',
			context: 'Research project | Supervisor: Dr. Angela Calabrese Barton',
			description:
				'Qualitative research on how transnational youth make sense of climate change and community impacts through interviews, mapping, and after-school learning design.',
			highlights: [
				'Analyze interview and map-based data using thematic coding in Dedoose.',
				'Develop analytical memos and report sections on youth climate sensemaking.',
				'Co-design digital and hands-on STEM materials with teachers, families, and youth.',
			],
		},
		{
			title: 'NOAA B-WET Sustainability Teacher Fellowship Evaluation Project',
			period: 'Oct 2025 - Dec 2025',
			context: 'Evaluation project | Supervisor: Dr. Victoria J. Milazzo Bigelow',
			description:
				'Qualitative evaluation work focused on educator experiences, program goals, and patterns in open-ended survey responses.',
			highlights: [
				'Conducted constant comparative analysis of 100 de-identified survey responses.',
				'Produced coding summaries and structured evaluation memos.',
				'Supported program reporting for improvement and funder accountability.',
			],
		},
		{
			title: 'The Role of Short-Form Video in the Acquisition of Chinese as a Foreign Language',
			period: 'Feb 2024 - Apr 2024',
			context: 'Independent study | Supervisor: Dr. Yifang Ai',
			description:
				'Designed a study on the relationship between short-form video use, learner engagement, and motivation in Chinese language learning.',
			highlights: [
				'Reviewed literature and identified a gap in empirical research.',
				'Designed and administered a 25-item questionnaire.',
				'Analyzed 74 valid responses using quantitative cross-variable analysis.',
			],
		},
	] satisfies ResearchItem[],
	internshipExperience: [
		{
			title: 'Course Operation Fellow',
			period: 'Mar 2025 - Apr 2026',
			context: 'Center for Academic Innovation, University of Michigan',
			description:
				'Course operations, evaluation, and learner experience support across Michigan Online courses and LMS environments.',
			highlights: [
				'Developed an evaluation rubric and beta tested 20+ online courses to inform faculty-facing improvements.',
				'Edited course modules, assessments, captions, visual elements, and discussion prompts in Canvas.',
				'Applied thematic coding and learner interaction analysis to identify low-engagement patterns.',
			],
		},
		{
			title: 'Co-Coordinator for Spark Festival of Learning',
			period: 'Jan 2025 - Apr 2025',
			context: 'Eileen Lappin Weiser Center for the Learning Sciences, University of Michigan | Ann Arbor, MI',
			description:
				'Learning festival coordination grounded in learning sciences, translating pedagogical goals into public-facing interactive experiences.',
			highlights: [
				'Co-designed and facilitated a learning festival grounded in learning sciences, translating pedagogical goals into 19 interactive demonstrations and workshops.',
				'Designed a cross-disciplinary activity book in experiential, hands-on tasks for self-directed learning, promoting inclusive, learner-centered engagement across different age groups.',
				'Applied on-site observation methods to assess activity engagement using indicators such as time spent, affective expressions, and attendee-facilitator interactions.',
			],
		},
	] satisfies ExperienceItem[],
	education: [
		{
			school: 'University of Tennessee, Knoxville',
			degree: 'Ph.D. in Learning, Design, and Technology',
			period: 'Starting Aug 2026',
			detail: 'Advisor: Dr. Yukyeong Song',
		},
		{
			school: 'University of Michigan, Ann Arbor',
			degree: 'Master of Arts in Educational Studies',
			period: 'Aug 2024 - May 2026',
			detail: 'Designing for Innovation: Learning, Instruction, and Technologies',
			gpa: '4.00/4.00',
		},
		{
			school: 'Macao Polytechnic University',
			degree: 'Bachelor of Arts in International Chinese Language Education',
			period: 'Sep 2020 - Jul 2024',
			gpa: '3.92/4.00',
		},
	] satisfies EducationItem[],
	awards: [
		'2026-2027 Carolyn R. Hodges Graduate Fellowship ($15,000), University of Tennessee',
		'2025 Rackham International Students Fellowship ($14,596), University of Michigan',
		'2024 Marsal Family School of Education Incoming Student Scholarship, University of Michigan',
		'2021 Stanley Ho Foundation Scholarship, Macao Polytechnic University',
	],
	contactLinks: [
		{ label: 'Email', value: 'yzhan297@vols.utk.edu', href: 'mailto:yzhan297@vols.utk.edu' },
		{ label: 'LinkedIn', value: 'yueyao-zhang', href: 'https://www.linkedin.com/in/yueyao-zhang-6641b3325' },
		// Google Scholar — add when a profile exists:
		// { label: 'Scholar', value: 'Google Scholar', href: 'https://scholar.google.com/citations?user=YOUR_ID' },
	] satisfies ContactLink[],
};
