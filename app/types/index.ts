import { OptionalObjectSchema, TypeOfShape } from 'yup/lib/object'
import { AnyObject } from 'yup/lib/types';

export type FormSection = 'geral' | 'contexto' | 'conteudo' | 'usuarios'

export interface InputProps {
    type: 'text' | 'radio' | 'email' | 'password' | 'select' | 'checkbox'
    name: string
    value: string | number | boolean
    placeholder?: string
    label?: string

    typeValue?: 'boolean' | 'number'
    validations?: Validation[]
    options?: Opt[]
}

export interface Opt {
    value: string | number
    pont: string,
    desc: string
    text: string
}

export interface Validation {
    type: 'required' | 'isEmail' | 'minLength' | 'isTrue' | 'oneOf'
    value?: string | number | boolean | null
    message: string
    ref?: string
}

export type SchemaForm = OptionalObjectSchema<{
    [x: string]: any|null;
}, AnyObject, TypeOfShape<{
    [x: string]: any|null;
}>>

export type CustomInputProps = Omit<InputProps, 'validations' | 'typeValue' | 'value'>