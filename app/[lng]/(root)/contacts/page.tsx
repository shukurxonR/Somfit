import ContactForm from '@/components/forms/contact-form'
import TopBar from '@/components/shared/top-bar'
import { translation } from '@/i18n/server'
import { LngParams } from '@/types'
import { Mail, Phone } from 'lucide-react'

async function Page({ params: { lng } }: LngParams) {
	const { t } = await translation(lng)

	return (
		<>
			<TopBar label='blogs' />
			<iframe
				src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3035.0621687498624!2d71.71012780841006!3d40.47388963288062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb77e9b40020d5%3A0xcb88b21755ac1c8a!2slocal%20adras%20factory!5e0!3m2!1sru!2s!4v1752561707378!5m2!1sru!2s'
				loading='lazy'
				className='w-full h-96'
			></iframe>

			<div className='container mx-auto max-w-6xl px-4'>
				<div className='mt-10 grid grid-cols-2 gap-4 max-md:grid-cols-1'>
					<div className='flex flex-col max-md:mb-4'>
						<h1 className='font-space-grotesk max-md:text-3xl text-4xl font-bold'>
							{t('contactTitle')}
						</h1>
						<p className='mt-2 text-muted-foreground'>
							{t('contactDescription')}
						</p>

						<div className='mt-12 flex items-center gap-3'>
							<Mail className='size-4' />
							<p className='text-sm'>info@sammi.ac</p>
						</div>
						<div className='mt-2 flex items-center gap-3'>
							<Phone className='size-4' />
							<p className='text-sm'>+98 02 296 4902</p>
						</div>
					</div>

					<div>
						<h1 className='mb-4 font-space-grotesk max-md:text-3xl text-4xl font-bold '>
							@ {t('contactForm')}
						</h1>
						<ContactForm />
					</div>
				</div>
			</div>
		</>
	)
}

export default Page
