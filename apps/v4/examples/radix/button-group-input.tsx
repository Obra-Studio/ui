import { SearchIcon } from "lucide-react"

import { Button } from "@/styles/radix-vega/ui/button"
import { ButtonGroup } from "@/styles/radix-vega/ui/button-group"
import { Input } from "@/styles/radix-vega/ui/input"

export default function ButtonGroupInput() {
  return (
    <ButtonGroup>
      <Input placeholder="Search..." />
      <Button variant="outline" aria-label="Search">
        <SearchIcon />
      </Button>
    </ButtonGroup>
  )
}
