import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/leaderboard/_layout/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='flex flex-col gap-4'>
      <h1 className='text-4xl font-bold'>WIP</h1>
      <h1 className='text-2xl font-bold'>Leaderboard section</h1>
    </div>
  )
}
