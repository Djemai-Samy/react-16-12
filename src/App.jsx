import ContactForm from './composants/containers/ContactForm/ContactForm';
import Footer from './composants/containers/Footer/Footer';
import Header from './composants/containers/Header/Header';
import User from './composants/containers/User/User';
import "./index.css";

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
    <>
      <div>
        <Header />
        
        <ContactForm />

        <User utilisateur={user} />
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

