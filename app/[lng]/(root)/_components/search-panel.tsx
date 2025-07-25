import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'

function SearchPanel() {
	return (
		<Button size={'icon'} variant={'ghost'}>
			<Search className='!w-5 !h-5' />
		</Button>
	)
}

export default SearchPanel
