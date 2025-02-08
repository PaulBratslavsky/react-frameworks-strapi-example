import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
// adding shadcn ui buttons npx shadcn@canary add button


export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="p-2">
      <h3>Welcome Home!!!</h3>
      <Button>Click me</Button>
    </div>
  )
}
