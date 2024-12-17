export default function Hobbies() {
  const hobbiesFromDB = [
    {
      id: "aze121s2df21",
      nom: "HTML"
    },
    {
      id: "lmfkgh41fgh45fgh",
      nom: "CSS"
    }
  ];
  return (
    <ul>
      {hobbiesFromDB.map((hobby) => {
        return (
          <li
            key={hobby.id}
            style={{
              padding: "10px",
              border: "1px solid white",
              margin: "0.5em"
            }}>
            {hobby.nom}
          </li>)
      })}
    </ul>
  )
}
