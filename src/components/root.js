import { characterDataListing } from '../data/marvel-character-data.js';
import { Header } from './header.js';
import { Footer } from './footer.js';
import { CharacterListing } from './character-listing.js';
import { CharacterDetails } from './character-details.js';

export class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCharacterName: 'Groot',
      selectedCharacter: characterDataListing['Groot']
    };
  }

  render() {
    return (
      <div id="root">
        <header>
          <Header></Header>
        </header>
        <aside className="character-listing">
          <CharacterListing></CharacterListing>
        </aside>
        <main>
          <CharacterDetails
            characterName={this.state.selectedCharacterName}
            characterData={this.state.selectedCharacter}>
          </CharacterDetails>
        </main>
        <footer>
          <Footer></Footer>
        </footer>
      </div>
    );
  }
}

const reactRootDomContainer = document.querySelector('#react-root');
ReactDOM.render(React.createElement(Root), reactRootDomContainer);