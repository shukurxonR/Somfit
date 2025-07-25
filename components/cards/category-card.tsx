import Image from 'next/image'
interface CategoryCardProps {
	icon: string
	label: string
}
function CategoryCard({ icon, label }: CategoryCardProps) {
	return (
		<div className='cursor-pointer'>
			<div className='flex h-44 max-md:h-36 w-full items-center justify-center rounded-md bg-secondary '>
				<Image src={icon} alt={label} width={100} height={100} />
			</div>
			<h2 className='font-space-grotesk mt-2 line-clamp-1 text-lg'>{label}</h2>
		</div>
	)
}

export default CategoryCard
