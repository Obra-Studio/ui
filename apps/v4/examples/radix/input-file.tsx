import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/styles/radix-vega/ui/field"
import { Input } from "@/styles/radix-vega/ui/input"

export function InputFile() {
  return (
    <Field>
      <FieldLabel htmlFor="picture">Picture</FieldLabel>
      <Input id="picture" type="file" />
      <FieldDescription>Select a picture to upload.</FieldDescription>
    </Field>
  )
}
