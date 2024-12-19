import { createContext } from 'react';
import ContactForm from './composants/containers/ContactForm/ContactForm';
import Footer from './composants/containers/Footer/Footer';
import Header from './composants/containers/Header/Header';
import User from './composants/containers/User/User';
import "./index.css";
import GOT from './composants/containers/GOT/GOT';

export const UtilisateurContext = createContext();

// On utilise les Contexte Globaux:
// User, Langue, Theme, Configuration

function App() {
  const user = {
    prenom: "John",
    nom: "Doe",
    age: 35,
    hobbies: [
      { id: 'html', nom: "HTML" },
      { id: 'react', nom: "React" }]
  }


  return (
    <UtilisateurContext.Provider value={user}>
      <div id='container'>
        <Header />

        <GOT />

        <ContactForm />

        <User />
        <Footer />
      </div>
    </UtilisateurContext.Provider>
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

