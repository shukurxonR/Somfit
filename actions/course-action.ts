'use server'
import { ICourses } from '@/app.types'
import Course from '@/database/course-model'
import { connectToDatabase } from '@/lib/mongoose'
import { revalidatePath } from 'next/cache'
import { ICreateCourse } from './types'

export const createCourse = async (data: ICreateCourse) => {
	try {
		console.log('📦 Connecting to DB...')
		await connectToDatabase()
		console.log('📥 Creating course:', data)
		await Course.create(data)
		revalidatePath('/en/instructor/my-courses')
	} catch (e) {
		console.error('❌ Course creation error:', e)
		throw new Error(`Something went wrong while creating course! ${e}`)
	}
}
export const getCourses = async () => {
	try {
		await connectToDatabase()
		const courses = await Course.find()
		return courses as ICourses[]
	} catch {
		throw new Error('HAtooooooooooo!')
	}
}
