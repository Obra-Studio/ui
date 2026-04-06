import { Checkbox } from "@/styles/radix-vega/ui/checkbox"
import { Label } from "@/styles/radix-vega/ui/label"

export default function LabelDemo() {
  return (
    <div className="flex gap-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  )
}
