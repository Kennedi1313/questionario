interface Props {
	error?: string
}

export const ErrorMessage = ({ error }: Props) => {
	if (!error) return null

	return (
		<div className='w-full grid place-content-start font-bold'>
			<p className='text-red-500 text-sm'>{error}</p>
		</div>
	)
}