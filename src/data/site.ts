import { profile } from './profile.ts';

export const siteInfo = {
	name: profile.name,
	role: profile.identityLine,
	affiliation: 'University of Tennessee, Knoxville',
	location: profile.location,
	email: profile.email,
	cvPath: profile.cvPath,
	siteUrlPlaceholder: 'https://example.com',
	bio: profile.intro,
	researchInterests: profile.researchInterests,
};

export const navigation = profile.navigation;

export const homeHighlights = [
	'Single-page academic homepage with anchored navigation and a direct CV link.',
	'Classic academic layout with a left profile rail and right reading column.',
	'Structured to support later additions such as publications and profile links.',
];
