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
      <Card 
          img = 'src/assets/Glacierpark.jpeg'
          title = 'Glacier National Park'
          desc = 'Named for the remnants of glaciers from the ice age, Glacier National Park is located on the border of Canada and Montana. It is often called the "Crown of the Continent," because of its dizzying array of natural beauty.'
          />
      <Card 
          img = 'src/assets/Rome.jpeg'
          title = 'Rome'
          desc = 'Rome, the city of seven hills, enjoyed a mythic beginning. Romulus and Remus – twin brothers who were nursed by a she-wolf and fathered by a war god – reportedly founded the Eternal City.'
          />
      <Card 
          img = 'src/assets/swissAlps.jpeg'
          title = 'Swiss Alps'
          desc = 'Visit in the winter for world-class skiing (and après-ski fondue and drinks) in locales such as the exclusive St. Moritz and the picturesque Zermatt, home of the craggy Matterhorn. Opt for warmer months to hike through the verdant valleys of Swiss National Park'
          />
      <Card 
          img = 'src/assets/Maui.jpeg'
          title = 'Maui'
          desc = "Whether you're driving along the Road to Hana, enjoying a bird's-eye view of Maui's lush coastline from a helicopter, snorkeling with sea turtles or simply relaxing on white or black sand beaches, you'll find that this Hawaiian island is unlike any other tropical destination"
          />
      <Card 
          img = 'src/assets/London.jpeg'
          title = 'London'
          desc = 'London is a world unto itself. The eclectic neighborhoods, which are home to a blend of historical landmarks and modern-day attractions, can keep you occupied for days'
          />
      <Card 
          img = 'src/assets/Maldives.jpeg'
          title = 'Maldives'
          desc = 'It is not cheap or easy to reach, but this isolated Indian Ocean vacation spot located southwest of India is the personification of a dreamy tropical retreat.'
          />
      <Card 
          img = 'src/assets/Turks.jpeg'
          title = 'Turks'
          desc = 'With sparkling white sand, crystal-clear water and nearly 350 miles of colorful coral reef, the Turks and Caicos Islands are truly a sight to behold.'
          />
      <Card 
          img = 'src/assets/Tokyo.jpeg'
          title = 'Tokyo'
          desc = "Simply setting foot in Japan's frenetic capital city is an experience. Known for its bustling streets and flashing neon signs, Tokyo has an electric energy and ample top attractions to discover."
          />
      <Card 
          img = 'src/assets/Phuket.jpeg'
          title = 'Phuket'
          desc = 'Activities like spa treatments and boat tours come with low price tags, as do accommodations, making this a cheap tropical vacation option.'
          />
      
      
    </div>
  )
}

export default App