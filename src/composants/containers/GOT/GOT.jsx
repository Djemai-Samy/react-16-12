import { useEffect, useState } from "react";

const RECUPERER_PERSOS = "https://thronesapi.com/api/v2/Characters";

async function getPersonnages() {
  // Faire une requete vers un API en HTTP
  const reponse = await fetch(RECUPERER_PERSOS);

  // Transformer le json en donnée Javascript
  try {
    const data = await reponse.json();
    return data;
  } catch (e) {
    console.log(e);
    return []
  }
}

export default function GOT() {

  const [persos, setPersos] = useState([]);
  useEffect(() => {
    getPersonnages().then((personnages) => {
      setPersos(personnages)
    })
  }, []);

  return (
    <div>
      <h2>Personnage de Game of Thrones</h2>
      {
        persos.map((personnage) => {
          return (
            <div key={personnage.id} className="border p-4 flex flex-col m-2">
              <h3 className="text">{personnage.fullName}</h3>
              <img src={personnage.imageUrl} />
              <p>{personnage.title}</p>
            </div>
          )
        })
      }
    </div>
  )
}
// One Tread Non Blocking

// Thread: Process sur la machine qui prend un cor
