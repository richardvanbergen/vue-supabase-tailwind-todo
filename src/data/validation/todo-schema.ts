import { string, object } from 'yup'

export default object().shape({
  title: string().required(),
  description: string().required(),
})
