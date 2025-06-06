
export default function Step({ advices }) {
  return (
    <>
      <ul>
        {advices.map(advice => (
          <li key={advice.id}>{advice.title}</li>
        ))}
      </ul>
    </>
  )
}
