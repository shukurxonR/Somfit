'use server'

import Lesson from '@/database/lesson-model'
import Section from '@/database/section-model'
import { connectToDatabase } from '@/lib/mongoose'
import { revalidatePath } from 'next/cache'
import { ICreateLesson, ILessonFields, IUpdatePosition } from './types'

export const createLesson = async ({
	lesson,
	section,
	path,
}: ICreateLesson) => {
	try {
		await connectToDatabase()
		const duration = {
			hours: Number(lesson.hours),
			minutes: Number(lesson.minutes),
			seconds: Number(lesson.seconds),
		}
		const existSection = await Section.findById(section)
		const position = existSection.lessons.length
		const newLesson = await Lesson.create({
			...lesson,
			position,
			duration,
			section,
		})
		existSection.lessons.push(newLesson._id)
		existSection.save()
		revalidatePath(path)
	} catch (error) {
		throw new Error(`Something went wrong! ${error}`)
	}
}

export const getLesson = async (section: string) => {
	try {
		await connectToDatabase()
		const lesson = await Lesson.find({ section }).sort({ position: 1 })
		return lesson
	} catch (err) {
		throw new Error(`xmmmxmx ${err}`)
	}
}
export const deleteLessonById = async (id: string, path: string) => {
	try {
		await connectToDatabase()
		const lesson = await Lesson.findById(id)
		const section = await Section.findById(lesson.section)
		section.lessons.pull(id)
		section.save()
		await Lesson.findByIdAndDelete(id)
		revalidatePath(path)
	} catch (error) {
		throw new Error(`Somthing went wrong ${error}`)
	}
}
export async function editLesson(
	lesson: ILessonFields,
	lessonId: string,
	path: string
) {
	try {
		await connectToDatabase()
		const duration = {
			hours: Number(lesson.hours),
			minutes: Number(lesson.minutes),
			seconds: Number(lesson.seconds),
		}
		await Lesson.findByIdAndUpdate(lessonId, { ...lesson, duration })
		revalidatePath(path)
	} catch (err) {
		throw new Error(`Something went  wrong ${err}`)
	}
}
export const editLessonPosition = async (params: IUpdatePosition) => {
	try {
		await connectToDatabase()
		const { lists, path } = params
		for (const item of lists) {
			await Lesson.findByIdAndUpdate(item._id, { position: item.position })
		}

		revalidatePath(path)
	} catch (error) {
		throw new Error(`Something went wrong! ${error}`)
	}
}
