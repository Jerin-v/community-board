import './App.css';
import Card from './components/Card';

const App = () => {

  return (
    <div className="container">
      <h1>World's Best Vacation Spots!</h1>
      <Card 
          img = 'src/assets/Borabora.jpeg'
          title = 'Cuba'
          desc = 'The small island of Bora Bora (just about 6 miles long and a little more than 2 miles wide) overflows with beauty. A dormant volcano rises up at its center and fans out into lush jungle before spilling into an aquamarine lagoon.'
          />
      
    </div>
  )
}

export default App