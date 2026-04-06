import { Button } from "@/styles/base-vega/ui/button"
import { Field } from "@/styles/base-vega/ui/field"
import { Input } from "@/styles/base-vega/ui/input"

export function InputInline() {
  return (
    <Field orientation="horizontal">
      <Input type="search" placeholder="Search..." />
      <Button>Search</Button>
    </Field>
  )
}
