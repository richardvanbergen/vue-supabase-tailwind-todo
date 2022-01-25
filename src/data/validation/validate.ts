import { AnySchema, ValidationError } from 'yup'

export type ValidationPathErrorMap = { [key: string]: ValidationError }

export async function validateSchema(
  schema: AnySchema,
  data: unknown
): Promise<ValidationPathErrorMap | true> {
  try {
    await schema.validate(data, {
      abortEarly: false,
    })

    return true
  } catch (error) {
    if (error instanceof ValidationError) {
      return error.inner.reduce((errorObj, innerError) => {
        if (typeof innerError.path === 'string') {
          return { [innerError.path]: innerError, ...errorObj }
        }

        return errorObj
      }, {})
    } else {
      throw error
    }
  }
}
