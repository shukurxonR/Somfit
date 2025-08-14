'use client'
import { formUrlQuery } from '@/lib/utils'
import { useRouter, useSearchParams } from 'next/navigation'

import { Button } from '../ui/button'

interface Props {
	pageNumber: number
	isNext: boolean
}
function Pagination({ pageNumber, isNext }: Props) {
	const router = useRouter()
	const searchParams = useSearchParams()

	if (!isNext && pageNumber === 1) return null

	function onNavigate(direction: 'prev' | 'next') {
		const nextPageNumber =
			direction === 'prev' ? pageNumber - 1 : pageNumber + 1

		const newUrl = formUrlQuery({
			params: searchParams.toString(),
			key: 'page',
			value: nextPageNumber.toString(),
		})

		router.push(newUrl)
	}

	return (
		<div className='w-full flex items-center justify-center gap-2 my-4'>
			<Button onClick={() => onNavigate('prev')} disabled={pageNumber === 1}>
				Prev
			</Button>
			<div className='flex items-center justify-center'>{pageNumber}</div>
			<Button onClick={() => onNavigate('next')} disabled={!isNext}>
				Next
			</Button>
		</div>
	)
}

export default Pagination
