// import { getBlogBySlug } from '@/service/blog-service'
import { format } from 'date-fns'
import parse from 'html-react-parser'
import {
	ArrowUpRight,
	CalendarDays,
	Clock,
	Dot,
	Home,
	Minus,
} from 'lucide-react'

import { getBlogBySlug } from '@/service/blogs-service'
import Image from 'next/image'
import Link from 'next/link'
import ShareBtns from '../_components/share-btns'
// import ShareBtns from '../../_components/share-btns'

async function BlogsSlugPage({ params }: { params: { slug: string } }) {
	const blog = await getBlogBySlug(params.slug)

	return (
		<div className='max-w-6xl mx-auto px-4'>
			<div className='flex flex-col items-center justify-center relative mt-32 mb-12	'>
				<h2 className='font-space-grotesk text-2xl '>
					<span>About this blog</span>
				</h2>

				<div className='flex mt-4 items-center gap-1'>
					<Home className='h-4 w-4' />
					<Link
						href={'/'}
						className='opacity-90 hover:underline hover:opacity-100 text-gray-500'
					>
						Home
					</Link>
					<Dot />
					<p className='text-muted-foreground'>
						Full information about this blog
					</p>
				</div>
			</div>

			<div className='flex flex-col gap-5'>
				<div className='max-md:grid max-md:grid-cols-2 flex items-center gap-7 '>
					<div className='flex gap-3 items-center col-span-2'>
						<Image
							width={650}
							height={335}
							src={blog.author.image.url}
							alt={'sd'}
							className='w-8 h-8 rounded-sm'
						/>
						<span className='font-crete max-md:text-sm'>
							{blog.author.name}
						</span>
					</div>
					<Minus className='max-md:hidden' />
					<div className='flex items-center gap-3'>
						<CalendarDays />
						<span className='font-serif  max-md:text-sm'>
							{format(new Date(blog.createdAt), 'MMM dd, yyyy')}
						</span>
					</div>
					<Minus className='max-md:hidden' />
					<div className='flex items-center gap-3'>
						<Clock />
						<span className='font-serif max-md:text-sm '>01 min, red</span>
					</div>
				</div>
				<Image
					width={650}
					height={335}
					src={blog.image.url}
					alt={'sd'}
					className='w-full rounded-sm'
				/>
			</div>

			<div className='flex md:gap-10  max-md:flex-col-reverse mt-12 relative'>
				<div className='flex flex-col space-y-3'>
					<div className=' sticky top-40 '>
						<p className='text-lg uppercase'>share</p>
						<ShareBtns />
					</div>
				</div>
				<div className='prose max-w-none dark:prose-invert max-md:text-sm'>
					{/* prose */}
					{parse(blog.content.html)}
				</div>
			</div>
			{/*  */}
			<span className='block w-full border-b-2 mt-6'></span>
			<div className='flex mt-12 gap-6 items-center max-md:flex-col'>
				<Image
					src={blog.author.image.url}
					alt='author'
					width='155'
					height='155'
					className='rounded-md max-md:self-start'
				/>
				<div className='flex-1 flex flex-col space-y-4'>
					<h2 className='text-3xl font-creteRound'>{blog.author.name}</h2>
					<p className='line-clamp-2 text-muted-foreground'>
						{blog.author.bio}
					</p>
					<Link
						href={`/users/${blog.author.slug}`}
						className='flex items-center gap-2 hover:text-blue-500 underline transition-colors'
					>
						<span>See all posts by this author</span>
						<ArrowUpRight />
					</Link>
				</div>
			</div>
		</div>
	)
}

export default BlogsSlugPage
