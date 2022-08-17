import Conteiner from './components/container';
import Socialmedia from './components/sosmed'
import profile_pic from "./images/profile.jpg";

import './App.css';

function App() {
  return (
    <div className="App">
      <Conteiner
      name="Jovan Haliem &#128075;&#127995;"
      desc="Junior Front-End Web Developer & Web Designer"
      desc2="Connect with me:"
      photo={profile_pic}
      />

      <Socialmedia/>
    </div>
  );
}

export default App;