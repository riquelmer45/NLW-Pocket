export async function CreateGoalCompletion(goalId: string) {
  await fetch('http://localhost:3000/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      goalId,
    }),
  })
}
