import BlogCard from '@/components/cards/blogs-card'
import TopBar from '@/components/shared/top-bar'
import { getBlog } from '@/service/blogs-service'
// import { getBlog } from '@/service/blogs-service'

async function BlogsPage() {
	const blogs = await getBlog()
	return (
		<div>
			<TopBar label='blogs' description='blogsDescription' />
			<div className='max-w-6xl mx-auto'>
				<div className='grid grid-cols-2 mt-20 max-md:grid-cols-1 gap-y-20 gap-x-4'>
					{blogs.map(blog => (
						<BlogCard key={blog.slug} blog={blog} isblogsX={true} />
					))}
				</div>
			</div>
		</div>
	)
}

export default BlogsPage
