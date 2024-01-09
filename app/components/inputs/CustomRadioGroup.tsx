import { useFormContext } from 'react-hook-form'
import { ErrorMessage } from '../../components'
import { CustomInputProps } from '../../types'

export const CustomRadio = ({ name, label, options, ...props }: CustomInputProps) => {
	const {
		register,
		formState: { errors }
	} = useFormContext()

	let error = errors[name]?.message as string | undefined
	if (error?.includes('must be a `string` type, but the final value was: `null`.'))
		error = '* Pergunta obrigatória!'
	return (
		<div className='flex flex-col gap-1 justify-start mb-4'>
			<label className='font-bold'>{label} {name != 'q12' && name != 'q14' ? (<span><span className='text-red-500 text-xl'>*</span><span className='text-red-500 text-xs font-bold'> Obrigatória</span></span>) : ''}</label>
			<section className='flex flex-col gap-2'>
				{options &&
					options.map(({ desc, value }) => (
						<label
							key={desc}
							className='flex flex-row gap-3 items-center'
						>
							<input {...register(name)} {...props} value={value} type='radio' />
							{desc}
						</label>
					))}
				</section>
			<ErrorMessage error={error} />
		</div>
	)
}
