
import './App.css';
import MensajeSecreto from './Mensaje';

//Estos Componentes siempre se crean Fuera
const Title = () => {
  return <h1>Alpha Flow Studio</h1>
}

const Description = () => {
  return <p>La mejor Filosofia de vida!!</p>
}


// Este es el Componente Principal
const App = () => {
  return (
    <div className="App">
      <Title />
      <Description />
      <MensajeSecreto color='green' message='Estamos trabajando' />
      <MensajeSecreto color='yellow' message='En un curso' />
      <MensajeSecreto color='red' message='de:' />
      <MensajeSecreto message='¡¡¡React!!' />
    </div>
  )
}

export default App;
