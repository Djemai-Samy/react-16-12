
const WIN_SCORE = 1000;

export default function Player() {
  const score = 1200;

  const estGagnant = score >= WIN_SCORE
  return (

    <section style={{ padding: "0.7em", border: "1px solid white" }}>
      <h2>Player Score</h2>
      <p style={{ color: estGagnant ? "green" : "red" }}
      >
        {estGagnant ? "Gagnant" : "Perdant"} - {score}
      </p>
    </section>
  )
}
