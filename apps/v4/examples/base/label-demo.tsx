import { Checkbox } from "@/styles/base-vega/ui/checkbox"
import { Label } from "@/styles/base-vega/ui/label"

export default function LabelDemo() {
  return (
    <div className="flex gap-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  )
}
