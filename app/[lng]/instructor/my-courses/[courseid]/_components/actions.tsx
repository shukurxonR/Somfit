'use client'
import { daliteCourseById, updateCourse } from '@/actions/course-action'
import { ICourses } from '@/app.types'
import ConfirmDeliteModal from '@/components/modals/confirm-delite-modal'
import { Button } from '@/components/ui/button'
import { usePathname, useRouter } from 'next/navigation'

import { toast } from 'sonner'

function Actions(course: ICourses) {
	const pathname = usePathname()
	const router = useRouter()

	function updateStatus() {
		let promise
		if (course.published) {
			promise = updateCourse(course._id, { published: false }, pathname)
		} else {
			promise = updateCourse(course._id, { published: true }, pathname)
		}
		toast.promise(promise, {
			loading: 'Loading...',
			success: 'Succsessfulliy updated!',
			error: 'Somthing went wrong',
		})
	}
	function onDalite() {
		const promise = daliteCourseById(
			course._id,
			'/en/instructor/my-courses'
		).then(() => router.push('/en/instructor/my-courses'))

		toast.promise(promise, {
			loading: 'Loading...',
			success: 'Succsessfulliy dalited!',
			error: 'Somthing went wrong',
		})
	}
	return (
		<div className='flex self-end gap-2'>
			<Button onClick={updateStatus} size={'lg'}>
				{course.published ? 'Daraf' : 'Publish'}
			</Button>
			<ConfirmDeliteModal onConfirm={onDalite}>
				<Button size={'lg'} variant={'destructive'}>
					Dalite
				</Button>
			</ConfirmDeliteModal>
		</div>
	)
}

export default Actions
