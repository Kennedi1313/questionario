import { CustomRadio } from '../components'
import { InputProps } from '../types'

interface Props {
	labelButtonSubmit?: string
	titleForm?: string
	inputs: InputProps[]
}

export const Form = ({ ...props }: Props) => {
	const {
		inputs,
		titleForm,
	} = props

	return (
			<div>
				{titleForm && (
                    <h1 className='font-bold text-center p-10'>{titleForm}</h1>
				)}

				<section className='flex flex-col gap-4'>
                    {
                        inputs.map(({ validations, typeValue, value, ...inputProps }) => {
                            return <CustomRadio {...inputProps} key={inputProps.name} />
                        })
                    }
                </section>
			</div>	
	)
}
