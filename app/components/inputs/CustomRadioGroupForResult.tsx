import { useFormContext } from 'react-hook-form'
import { ErrorMessage } from '../../components'
import { CustomInputProps } from '../../types'

export const CustomRadioForResult = ({ validations, typeValue, value, name, label, options, ...props }: any) => {
    
    let responses = '';
    if (typeof window !== 'undefined') {
        let data = localStorage.getItem('result')
        if (data) {
            responses = JSON.parse(data);
        }
    }
    
    const isRightAlternative = (name: any, value: any) => {
        return Number(value) === Number(responses[name]);
    } 
    return (
        <div className='flex flex-col gap-1'>
            <label className='font-bold'>{label}</label>
                {options &&
                    options.map(({ desc, value, text }: any) => {
                    let rightAlternative = isRightAlternative(name, value);
                    return (
                        <label
                            key={desc}
                            
                            className={rightAlternative
                            ? 'flex flex-row gap-2 items-center text-green-600 border-solid border-2 p-2 rounded-md border-green-700' 
                            : 'flex flex-row gap-2 items-center'}
                        >
                            <div className="flex flex-col gap-2">
                                <div className="flex flex-row gap-2">
                                    <input {...props} checked={rightAlternative} disabled/>
                                    {desc}
                                </div>
                                {rightAlternative ? 
                                    <span>
                                        {text}
                                    </span>
                                    : ''}
                            </div>
                        </label>
                    )})}
                                    
        </div>
    )
}