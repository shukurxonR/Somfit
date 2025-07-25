import { cn } from '@/lib/utils'
// import { IBlog } from '@/types/types'
import { IBlog } from '@/types'
import { format } from 'date-fns'
import { CalendarDays, Clock, Minus } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '../ui/badge'

interface BlogCardProps {
	blog: IBlog
	isblogsX?: boolean
}

function BlogCard({ blog, isblogsX }: BlogCardProps) {
	console.log(blog.createdAt)
	return (
		<div
			className={cn(
				'grid group gap-4 px-4',
				isblogsX ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'
			)}
		>
			<Link href={`/blogs/${blog.slug}`}>
				<div className='relative bg-secondary '>
					<Image
						width={650}
						height={335}
						src={blog.image.url}
						alt={blog.title}
						className='rounded-2xl px-2 md:px-7 group-hover:-translate-y-7 -translate-y-6 transition-all object-cover grayscale group-hover:grayscale-0 max-md:-translate-y-2  max-md:group-hover:-translate-y-3 '
					/>
				</div>
			</Link>
			{/*  */}
			<div className='flex flex-col gap-4'>
				<Link href={`/blogs/${blog.slug}`} className='flex flex-col gap-4'>
					<div className='flex items-center gap-4'>
						<div className='flex items-center gap-2 '>
							<CalendarDays />
							<span>{format(new Date(blog.createdAt), 'MMM dd, yyyy')}</span>
						</div>
						<Minus />
						<div className='flex items-center gap-2 '>
							<Clock />
							<span>01 min read</span>
						</div>
						<div></div>
					</div>

					<h2 className='text-3xl max:md:text-2xl font-crete hover:text-blue-500  transition-colors'>
						{blog.title}
					</h2>

					<p className='line-clamp-6 '>{blog.description}</p>
				</Link>
				{/* Author */}
				<div className='flex items-center gap-4'>
					<Link href={`/users/${blog.author.slug}`}>
						<div className='flex items-center gap-2 cursor-pointer'>
							<Image
								src={blog.author.image.url}
								alt='author'
								width={30}
								height={30}
								className='object-cover rounded-md'
							/>
							<p> {blog.author.name}</p>
						</div>
					</Link>
					<Minus />
					<div className='flex items-center gap-3'>
						<div className='flex items-center gap-2 '>
							<Link href={`/tag/${blog.tag.slug}`}>
								<Badge
									variant={'secondary'}
									className='cursor-pointer h-7 text-[13px]'
								>
									{blog.tag.name}
								</Badge>
							</Link>
						</div>
						<div className='flex items-center gap-2 '>
							<Link href={`/category/${blog.category.slug}`}>
								<Badge
									variant={'secondary'}
									className='cursor-pointer h-7 text-[13px] flex items-center'
								>
									{blog.category.name}
								</Badge>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BlogCard
