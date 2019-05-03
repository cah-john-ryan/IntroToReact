import { Header } from './header.js';
import { Footer } from './footer.js';
import { CharacterListing } from './character-listing.js';
import { CharacterDetails } from './character-details.js';
import { characterDataListing } from '../data/marvel-character-data.js';

export class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCharacterName: undefined,
      selectedCharacter: undefined
    };

    // This binding is necessary to make `this` work in the callback
    this.handleSelectedCharacterChange = this.handleSelectedCharacterChange.bind(this);
  }

  handleSelectedCharacterChange(selectedCharacterName) {
    let selectedCharacter = characterDataListing[selectedCharacterName];
    this.setState({
      selectedCharacterName: selectedCharacterName,
      selectedCharacter: selectedCharacter
    });
  }

  render() {
    return (
      <div id="root">
        <header>
          <Header></Header>
        </header>
        <aside className="character-listing">
          <CharacterListing
            selectedCharacterName={this.state.selectedCharacterName}
            characterData={characterDataListing}
            onSelectedCharacterChange={this.handleSelectedCharacterChange}>
          </CharacterListing>
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

const rootDomContainer = document.querySelector('#react-root');
ReactDOM.render(React.createElement(Root), rootDomContainer);