import * as React from 'react'
import { cn } from '../utils/cn'

interface FormErrorProps extends React.HTMLAttributes<HTMLParagraphElement> {
  error?: string | Error
}

const FormError = React.forwardRef<HTMLParagraphElement, FormErrorProps>(
  ({ className, error, ...props }, ref) => {
    if (!error) return null

    const errorMessage = typeof error === 'string' ? error : error.message

    return (
      <p
        ref={ref}
        className={cn('text-sm font-medium text-destructive', className)}
        {...props}
      >
        {errorMessage}
      </p>
    )
  }
)
FormError.displayName = 'FormError'

export { FormError }