import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/styles/radix-vega/ui/field"
import { Input } from "@/styles/radix-vega/ui/input"

export function InputInvalid() {
  return (
    <Field data-invalid>
      <FieldLabel htmlFor="input-invalid">Invalid Input</FieldLabel>
      <Input id="input-invalid" placeholder="Error" aria-invalid />
      <FieldDescription>
        This field contains validation errors.
      </FieldDescription>
    </Field>
  )
}
