import { Badge } from "@/styles/radix-vega/ui/badge"
import { Field, FieldLabel } from "@/styles/radix-vega/ui/field"
import { Input } from "@/styles/radix-vega/ui/input"

export function InputBadge() {
  return (
    <Field>
      <FieldLabel htmlFor="input-badge">
        Webhook URL{" "}
        <Badge variant="secondary" className="ml-auto">
          Beta
        </Badge>
      </FieldLabel>
      <Input
        id="input-badge"
        type="url"
        placeholder="https://api.example.com/webhook"
      />
    </Field>
  )
}
