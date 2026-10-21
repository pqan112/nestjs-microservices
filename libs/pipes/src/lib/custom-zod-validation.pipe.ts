import { UnprocessableEntityException } from '@nestjs/common'
import { createZodValidationPipe } from 'nestjs-zod'
import { ZodError } from 'zod'

export const CustomZodValidationPipe = createZodValidationPipe({
  createValidationException: (error: unknown) =>
    new UnprocessableEntityException(
      (error as ZodError).issues.map((issue) => ({
        ...issue,
        path: issue.path.join('.'),
      }))
    ),
})
