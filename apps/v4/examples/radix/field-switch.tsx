import { Field, FieldLabel } from "@/styles/radix-vega/ui/field"
import { Switch } from "@/styles/radix-vega/ui/switch"

export default function FieldSwitch() {
  return (
    <Field orientation="horizontal" className="w-fit">
      <FieldLabel htmlFor="2fa">Multi-factor authentication</FieldLabel>
      <Switch id="2fa" />
    </Field>
  )
}
