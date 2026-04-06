import { Button } from "@/styles/radix-vega/ui/button"
import { Field } from "@/styles/radix-vega/ui/field"
import { Input } from "@/styles/radix-vega/ui/input"

export function InputInline() {
  return (
    <Field orientation="horizontal">
      <Input type="search" placeholder="Search..." />
      <Button>Search</Button>
    </Field>
  )
}
