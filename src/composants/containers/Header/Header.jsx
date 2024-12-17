import classes from "./Header.module.css";


export default function Header() {
  return (
    <header className={classes.container}>
      <h1 className={classes.titre}>Bienvenue</h1>
      <p style={{
        backgroundColor: "rgb(12, 12, 12)",
        fontSize: "1.2em",
        padding: "0.5em",
      }} >
        Lorem ipsum dolor sit, amet consectetur
      </p>
    </header>
  )
}