import Footer from './composants/containers/Footer/Footer';
import Header from './composants/containers/Header/Header';
import Player from './composants/containers/Player/Player';
import User from './composants/containers/User/User';
import Bouton from './composants/ui/Bouton/Bouton';
import "./index.css";

function App() {
  return (
    <>
      <div>
        <Header />
        <Bouton />

        <User />

        <Player />
        <Footer />
      </div>
    </>
  )
}

export default App;

// Exercice 2: Enoncé envoyé en PDF sur Discord
// Créer un branche: exo/user
// Travailler dessus.
// Fair un Push
// Sur Github créer un Pull Request
// Ajouter Djemai-Samy en reviewer
// Me notifier
