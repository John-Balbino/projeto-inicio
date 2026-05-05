
import { Atuacao } from './assets/components/atuacao'
import { Contato } from './assets/components/contato'
import { Footer } from './assets/components/footer'
import { Header } from './assets/components/header'
import { Home } from './assets/components/home'
import { Sobre } from './assets/components/sobre'
import './assets/css/App.css'

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Sobre/>
      <Atuacao/>
      <Contato/>
      <Footer/>    
    </div>
  )
}

export default App
