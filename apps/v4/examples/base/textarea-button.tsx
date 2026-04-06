import { Button } from "@/styles/base-vega/ui/button"
import { Textarea } from "@/styles/base-vega/ui/textarea"

export function TextareaButton() {
  return (
    <div className="grid w-full gap-2">
      <Textarea placeholder="Type your message here." />
      <Button>Send message</Button>
    </div>
  )
}
