'use client'
import ReactStars from 'react-rating-stars-component'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

function ReviewCard() {
	return (
		<div className='mt-6 border-t border-t-secondary'>
			<div className='mt-8 flex gap-2'>
				<Avatar>
					<AvatarImage src={'/author/elon-musk.jpg'} />
					<AvatarFallback className='uppercase'>SB</AvatarFallback>
				</Avatar>

				<div className='flex flex-col'>
					<div>Ilon Musk</div>
					<div className='flex items-center gap-1'>
						<ReactStars
							count={5}
							value={4.2}
							isHalf={true}
							edit={false}
							size={24}
							activeColor='#facc15'
						/>
						<p className='text-sm opacity-50'>5 minut oldin</p>
					</div>
				</div>
			</div>

			<div className='mt-2'>Kurs prosta bomba 🔥</div>
		</div>
	)
}

export default ReviewCard
