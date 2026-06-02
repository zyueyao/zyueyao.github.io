import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

import { profile } from '../src/data/profile.ts';
import { navigation } from '../src/data/site.ts';

test('profile exposes the single-page homepage content', () => {
	assert.equal(profile.name, 'Yueyao Zhang');
	assert.equal(profile.identityLine, 'PhD Student, University of Tennessee, Knoxville');
	assert.match(profile.identityLine, /University of Tennessee, Knoxville/);
	assert.equal(profile.email, 'yzhan297@vols.utk.edu');
	assert.equal(profile.location, 'Knoxville, TN');
	assert.ok(profile.researchInterests.length >= 4);
	assert.ok(profile.researchExperience.length >= 3);
	assert.equal(profile.internshipExperience.length, 2);
	assert.equal(profile.researchExperience[0].period, 'Sep 2025 - Apr 2026');
	assert.equal(profile.internshipExperience[0].title, 'Course Operation Fellow');
	assert.equal(profile.internshipExperience[0].period, 'Mar 2025 - Apr 2026');
	assert.equal(profile.internshipExperience[1].title, 'Co-Coordinator for Spark Festival of Learning');
	assert.ok(profile.education.length >= 3);
	assert.equal(profile.education[0].school, 'University of Tennessee, Knoxville');
	assert.equal(profile.education[0].period, 'Aug 2026 - Present');
	assert.equal(profile.education[1].school, 'University of Michigan, Ann Arbor');
	assert.equal(profile.awards.length, 4);
	assert.equal(
		profile.awards[0],
		'2026-2027 Carolyn R. Hodges Graduate Fellowship ($15,000), University of Tennessee',
	);
	assert.equal(
		profile.awards[1],
		'2025 Rackham International Students Fellowship ($14,596), University of Michigan',
	);
});

test('navigation uses in-page anchors for the single-page site', () => {
	assert.ok(navigation.length >= 4);
	assert.ok(navigation.every((item) => item.href.startsWith('#')));
	assert.ok(navigation.some((item) => item.href === '#about'));
	assert.ok(navigation.some((item) => item.href === '#research-interests'));
	assert.ok(navigation.some((item) => item.href === '#research-experience'));
	assert.ok(navigation.some((item) => item.href === '#internship-experience'));
	assert.ok(navigation.some((item) => item.href === '#awards'));
});

test('profile matches the approved academic homepage structure', () => {
	assert.deepEqual(
		navigation.map((item) => item.label),
		[
			'About',
			'Research Interests',
			'Education',
			'Research Experience',
			'Internship Experience',
			'Awards',
		],
	);
	assert.deepEqual(
		profile.contactLinks.map((item) => item.label),
		['Email', 'Twitter', 'LinkedIn', 'Github'],
	);
	assert.equal(
		profile.contactLinks.find((item) => item.label === 'LinkedIn')?.href,
		'https://www.linkedin.com/in/yueyao-zhang-6641b3325',
	);
	assert.match(profile.headshot.src, /^\/headshot\./);
	assert.ok(profile.intro.length >= 2);
});

test('homepage includes the approved section anchors', () => {
	const page = fs.readFileSync(new URL('../src/pages/index.astro', import.meta.url), 'utf8');

	for (const id of [
		'about',
		'research-interests',
		'education',
		'research-experience',
		'internship-experience',
		'awards',
	]) {
		assert.match(page, new RegExp(`id="${id}"`));
	}

	assert.doesNotMatch(page, /id="selected-experience"/);
	assert.doesNotMatch(page, /id="project-experience"/);
	assert.doesNotMatch(page, /Project Experience/);
	assert.doesNotMatch(page, /Toothopia/);
	assert.doesNotMatch(page, /id="contact"/);
	assert.doesNotMatch(page, /id="cv"/);
	assert.doesNotMatch(page, /class="rail-links"/);
	assert.doesNotMatch(page, /class="rail-link"/);
	assert.doesNotMatch(page, /title="About Me"/);
	assert.doesNotMatch(page, /title="Current areas of focus"/);
	assert.doesNotMatch(page, /title="Academic preparation"/);
	assert.doesNotMatch(page, /title="Research, evaluation, and design work"/);
	assert.doesNotMatch(page, /title="Selected recognitions"/);
	assert.doesNotMatch(page, /\{item\.context\}/);
	assert.doesNotMatch(page, /\{item\.description\}/);
	assert.doesNotMatch(page, /Research project \| Supervisor: Dr\. Angela Calabrese Barton/);
	assert.doesNotMatch(page, /Qualitative research on how transnational youth make sense of climate change/);
});

test('global styles define the academic layout primitives', () => {
	const css = fs.readFileSync(new URL('../src/styles/global.css', import.meta.url), 'utf8');

	for (const selector of ['.academic-layout', '.profile-rail', '.content-column', '.headshot-frame', '.location-icon']) {
		assert.match(css, new RegExp(selector.replace('.', '\\.')));
	}
});

test('legacy standalone content routes are removed', () => {
	for (const route of ['research.astro', 'projects.astro', 'contact.astro', 'cv.astro']) {
		assert.equal(fs.existsSync(new URL(`../src/pages/${route}`, import.meta.url)), false);
	}
});
