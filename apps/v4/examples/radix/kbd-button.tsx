import { Button } from "@/styles/radix-vega/ui/button"
import { Kbd } from "@/styles/radix-vega/ui/kbd"

export default function KbdButton() {
  return (
    <Button variant="outline">
      Accept{" "}
      <Kbd data-icon="inline-end" className="translate-x-0.5">
        ⏎
      </Kbd>
    </Button>
  )
}
