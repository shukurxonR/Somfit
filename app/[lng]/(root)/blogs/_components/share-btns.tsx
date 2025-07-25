'use client'
import { Button } from '@/components/ui/button'
import {
	Facebook,
	Instagram,
	Link2,
	Linkedin,
	Send,
	Twitter,
} from 'lucide-react'
import { usePathname } from 'next/navigation'
import { toast } from 'sonner'
// NEXT_PUBLIC_BACE_NAME
function ShareBtns() {
	const pathname = usePathname()
	console.log(pathname)

	function onCopy() {
		const link = process.env.NEXT_PUBLIC_BASE_NAME + pathname

		navigator.clipboard.writeText(link).then(() => toast.success('Copied'))
	}
	return (
		<div className='flex flex-col max-md:flex-row md:space-y-3 max-md:space-x-3 mt-4'>
			<Button size={'icon'} variant={'outline'} className='cursor-pointer'>
				<Twitter />
			</Button>
			<Button size={'icon'} variant={'outline'} className='cursor-pointer'>
				<Facebook />
			</Button>
			<Button size={'icon'} variant={'outline'} className='cursor-pointer'>
				<Linkedin />
			</Button>
			<Button size={'icon'} variant={'outline'} className='cursor-pointer'>
				<Send />
			</Button>
			<Button size={'icon'} variant={'outline'} className='cursor-pointer'>
				<Instagram />
			</Button>
			<Button
				size={'icon'}
				variant={'outline'}
				onClick={onCopy}
				className='cursor-pointer'
			>
				<Link2 />
			</Button>
		</div>
	)
}

export default ShareBtns
