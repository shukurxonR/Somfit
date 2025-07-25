'use client'
import { Button } from '@/components/ui/button'
import { instructorNavLinks } from '@/constants/const'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function Sidebar() {
	const pathname = usePathname()
	return (
		<div className='fixed inset-0 mt-[10vh] w-[300px] h-[90vh]'>
			<div className='mt-6 container'>
				<div className='flex flex-col gap-3'>
					{instructorNavLinks.map(page => (
						<Link href={page.route} key={page.route} className='px-6'>
							<Button
								className='w-full justify-start gap-2 py-2'
								variant={
									pathname.slice(3) === page.route ? 'secondary' : 'ghost'
								}
							>
								<page.icon className='!size-5 text-muted-foreground' />
								<span>{page.label}</span>
							</Button>
						</Link>
					))}
				</div>
			</div>
		</div>
	)
}

export default Sidebar
