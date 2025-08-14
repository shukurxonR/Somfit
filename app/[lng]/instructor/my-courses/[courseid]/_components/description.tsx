'use client'
import { updateCourse } from '@/actions/course-action'
import { ICourses } from '@/app.types'
import FillLoading from '@/components/shared/fill-loading'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from '@/components/ui/form'
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'
import useToggleEdit from '@/hooks/use-toggle-edit'
import { descriptionSchema } from '@/lib/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { Edit2, X } from 'lucide-react'
import { usePathname } from 'next/navigation'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'

export function CourseFields(course: ICourses) {
	const { isEdit, onToggle } = useToggleEdit()

	return (
		<Card>
			<CardContent className='relative p-6'>
				<div className='flex items-center justify-between'>
					<span className='text-lg font-medium'>Description</span>
					<Button size='icon' variant='ghost' onClick={onToggle}>
						{isEdit ? <X size={20} /> : <Edit2 size={20} />}
					</Button>
				</div>

				<Separator className='my-3' />

				{isEdit ? (
					<Forms course={course} onToggle={onToggle} />
				) : (
					<div className='flex items-center gap-2'>
						<span className='self-start font-space-grotesk font-bold text-muted-foreground '>
							Description:
						</span>
						<span className='line-clamp-3 font-medium '>
							{course.description}
						</span>
					</div>
				)}
			</CardContent>
		</Card>
	)
}

export default CourseFields

interface FormsProps {
	course: ICourses
	onToggle: () => void
}
function Forms({ course, onToggle }: FormsProps) {
	const [isLoading, setIsLoading] = useState(false)
	const pathname = usePathname()

	const form = useForm<z.infer<typeof descriptionSchema>>({
		resolver: zodResolver(descriptionSchema),
		defaultValues: {
			description: course.description,
		},
	})
	const onSubmit = (value: z.infer<typeof descriptionSchema>) => {
		setIsLoading(false)
		const promise = updateCourse(course._id, value, pathname)
			.then(() => onToggle())
			.finally(() => setIsLoading(true))
		toast.promise(promise, {
			loading: 'Loading...',
			success: 'Successfully updated!',
			error: 'Something went wrong!',
		})
	}
	return (
		<>
			{isLoading && <FillLoading />}
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-3'>
					<FormField
						control={form.control}
						name='description'
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Textarea disabled={isLoading} {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button type='submit' disabled={isLoading}>
						Save
					</Button>
				</form>
			</Form>
		</>
	)
}
