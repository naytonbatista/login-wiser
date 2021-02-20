import React from 'react'

type MyType = {
  [email: string]: {
    regex: RegExp
    message: string
  }
}

const types: MyType = {
  email: {
    regex: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    message: 'Digite um e-mail válido;'
  }
}

const useForm = (type?: string) => {
  const [value, setValue] = React.useState('')
  const [error, setError] = React.useState('')

  function onChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    if (error) validate(target.value)
    setValue(target.value)
  }

  function validate(value: string) {
    if (!type) return true
    if (value.length === 0) {
      setError('Campo obrigatório.')
      return false
    }
    if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message)
      return false
    }

    setError('')
    return true
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value)
  }
}

export default useForm
