'use client'

import { z } from 'zod'

export const ContactSchema = z.object({
	message: z.string().min(20),
	email: z.string().email(),
	name: z.string().min(3),
})

export const courseSchema = z.object({
	title: z.string().min(3),
	description: z.string().min(10),
	learning: z.string(),
	requirements: z.string(),
	level: z.string(),
	language: z.string(),
	category: z.string(),
	oldPrice: z.string().min(0),
	currentPrice: z.string().min(0),
})

export const courseFieldsSchema = z.object({
	title: z.string().min(3),
	slug: z.string().min(3),
})

export const descriptionSchema = z.object({
	description: z.string().min(10),
})

export const informationSchema = z.object({
	learning: z.string(),
	requirements: z.string(),
	tags: z.string(),
})

export const selectFieldsSchema = z.object({
	level: z.string(),
	language: z.string(),
	category: z.string(),
})

export const priceSchema = z.object({
	oldPrice: z.string(),
	currentPrice: z.string(),
})
export const imageSchema = z.object({
	prewimage: z.string(),
})
export const sectionSchema = z.object({
	title: z.string().min(3),
})
export const lessonSchema = z.object({
	title: z.string().min(3),
	videoUrl: z.string().url(),
	content: z.string().optional(),
	hours: z.string(),
	minutes: z.string(),
	seconds: z.string(),
	free: z.boolean().optional(),
})
export const profileSchema = z.object({
	bio: z.string().min(10).optional(),
	phone: z.string().optional(),
	job: z.string().min(3).optional(),
	website: z.string().url().optional(),
	linkedin: z.string().url().optional(),
	github: z.string().url().optional(),
	youtube: z.string().url().optional(),
})
