import { Header } from './header.js';
import { Footer } from './footer.js';
import { CharacterListing } from './character-listing.js';
import { CharacterDetails } from './character-details.js';

export class Root extends React.Component {
  render() {
    return (
      <div id="root">
        <header>
          <Header></Header>
        </header>
        <aside className="character-listing">
          <CharacterListing></CharacterListing>
        </aside>
        <main className="character-details no-selection-details">
          <div>(No selection has been made)</div>
        </main>
        <main className="character-details-hidden bruce-banner-details">
          <CharacterDetails></CharacterDetails>
        </main>
        <main className="character-details-hidden hawkeye-details">
          <h2>Clint Barton / Hawkeye</h2>
          <p>A master archer allied with Rogers;[6][7] a retired Avenger and S.H.I.E.L.D. agent.[13][33] On Barton's reasons
            for joining Rogers' side, Renner said, "Cap was the first guy who called. Let's just get the job done so I can
            get home to the family,"[30] along with feeling an obligation to side with Scarlet Witch, since her brother,
            Pietro Maximoff / Quicksilver, sacrificed himself to save Barton in Avengers: Age of Ultron.[34] On how he and
            Barton fit into the Marvel Cinematic Universe, Renner said, "I'm happy to be the ensemble. I'm not scratching or
            clawing to do a solo movie by any means ... I think [Barton's] a utility guy that can bounce around into other
        people's universes a little bit".[35]</p>
          <article>
            <section>
              <div className="actor-listing">
                <h4>Actor Listing</h4>
                <ul>
                  <li>Jeremy Renner</li>
                </ul>
              </div>
            </section>
            <section>
              <div className="movie-appearances">
                <h4>Movie Appearances</h4>
                <ul>
                  <li>The Avengers</li>
                  <li>Avengers: Age of Ultron</li>
                  <li>Captain America: Civil War</li>
                  <li>Avengers: Endgame</li>
                </ul>
              </div>
            </section>
          </article>
        </main>
        <main className="character-details-hidden erik-selvig-details">
          <h2>Erik Selvig</h2>
          <p>An astrophysicist and a friend of Thor.[59] Skarsgård said he was originally not supposed to appear in the
            film, but received a call because "they'd written a couple of scenes, and I went and did them," not knowing if
        the scenes would appear in the final cut of the film.[60]</p>
          <article>
            <section>
              <div className="actor-listing">
                <h4>Actor Listing</h4>
                <ul>
                  <li>Stellan Skarsgård</li>
                </ul>
              </div>
            </section>
            <section>
              <div className="movie-appearances">
                <h4>Movie Appearances</h4>
                <ul>
                  <li>The Avengers</li>
                  <li>Thor: The Dark World</li>
                  <li>Avengers: Age of Ultron</li>
                </ul>
              </div>
            </section>
          </article>
        </main>
        <main className="character-details-hidden loki-details">
          <h2>Loki</h2>
          <p>Thor's adopted brother, based on the Norse mythological deity of the same name.[38]</p>
          <article>
            <section>
              <div className="actor-listing">
                <h4>Actor Listing</h4>
                <ul>
                  <li>Tom Hiddleston</li>
                </ul>
              </div>
            </section>
            <section>
              <div className="movie-appearances">
                <h4>Movie Appearances</h4>
                <ul>
                  <li>Thor</li>
                  <li>The Avengers</li>
                  <li>Thor: The Dark World</li>
                  <li>Thor: Ragnarok</li>
                  <li>Avengers: Infinity War</li>
                </ul>
              </div>
            </section>
          </article>
        </main>
        <main className="character-details-hidden maria-hill-details">
          <h2>Maria Hill</h2>
          <p>A former high-ranking S.H.I.E.L.D. agent who now works for Stark.[48][49][50] Describing Hill's situation in
            the film, Smulders said that after The Winter Soldier, Hill does not "really know who's a good guy and who's a
            bad guy and she's trying to figure out that throughout this film." She added, "She's not getting any sleep.
            She's doing all the work. She doesn't have the kind of manpower that she had in S.H.I.E.L.D.,"[51] instead
            working for Tony Stark at the Avenger's headquarters "trying to keep everything running as smoothly as
        possible... it's an entirely different vibe for her."[52]</p>
          <article>
            <section>
              <div className="actor-listing">
                <h4>Actor Listing</h4>
                <ul>
                  <li>Cobie Smulders</li>
                </ul>
              </div>
            </section>
            <section>
              <div className="movie-appearances">
                <h4>Movie Appearances</h4>
                <ul>
                  <li>The Avengers</li>
                  <li>Captain America: The Winter Soldier</li>
                  <li>Avengers: Age of Ultron</li>
                </ul>
              </div>
            </section>
          </article>
        </main>
        <main className="character-details-hidden black-widow-details">
          <h2>Natasha Romanoff / Black Widow</h2>
          <p>A highly trained spy, a member of Rogers' faction of Avengers, and a former agent of S.H.I.E.L.D.[10][4]</p>
          <article>
            <section>
              <div className="actor-listing">
                <h4>Actor Listing</h4>
                <ul>
                  <li>Scarlett Johansson</li>
                </ul>
              </div>
            </section>
            <section>
              <div className="movie-appearances">
                <h4>Movie Appearances</h4>
                <ul>
                  <li>The Avengers</li>
                  <li>Captain America: The Winter Soldier</li>
                  <li>Avengers: Age of Ultron</li>
                  <li>Captain America: Civil War</li>
                  <li>Iron Man 2</li>
                  <li>Avengers: Infinity War</li>
                  <li>Avengers: Endgame</li>
                </ul>
              </div>
            </section>
          </article>
        </main>
        <main className="character-details-hidden nick-fury-details">
          <h2>Nick Fury</h2>
          <p>The future director of S.H.I.E.L.D., who at this time is a low-level bureaucrat.[21] Fury appears without his
            signature eye patch as the film is set before he loses his eye.[22] Feige explained that Danvers is the first
            superhero that Fury has come across,[23] which sets him on a path to where the character is in the modern MCU
            films.[24] Jackson described Fury at this point in time as a desk jockey, who has not yet become cynical towards
            bureaucracy and who learns in the film that there are superpowered beings who could help S.H.I.E.L.D.'s
            cause.[25] Jackson added that trusting Danvers plays a key role in his development, as they become "compatriots"
            over the course of the film.[26] Jackson was digitally de-aged by 25 years, the first time Marvel has done this
        for an entire film.[27]</p>
          <article>
            <section>
              <div className="actor-listing">
                <h4>Actor Listing</h4>
                <ul>
                  <li>Samuel L. Jackson</li>
                </ul>
              </div>
            </section>
            <section>
              <div className="movie-appearances">
                <h4>Movie Appearances</h4>
                <ul>
                  <li>Iron Man 2</li>
                  <li>The Avengers</li>
                  <li>Captain America: The Winter Soldier</li>
                  <li>Avengers: Age of Ultron</li>
                  <li>Captain Marvel</li>
                </ul>
              </div>
            </section>
          </article>
        </main>
        <main className="character-details-hidden phil-coulson-details">
          <h2>Phil Coulson</h2>
          <p>A rookie agent of S.H.I.E.L.D. who works closely with Fury.[21] Gregg stated that Coulson would be younger in
            the film and "a bit of a new guy in S.H.I.E.L.D. ... It's the earliest we will have seen him [in the MCU], so
            when he says, 'Mr. Stark, this isn't my first rodeo' in Iron Man (2008), this is maybe the rodeo he's talking
            about."[39] He felt "there was something really special about going back to the early days when [Coulson] was
            just kind of coming up the ranks" and had to work to portray Coulson "a little less crusty and jaded" as he is
            in the present of the MCU.[21] Responding to the fact that Coulson has encountered the Kree on the MCU
            television series, Agents of S.H.I.E.L.D., Schwartz stated that in Captain Marvel, Kree is not even "part of his
            vocabulary yet", and the film gets "to focus on him as he is so we don't need to worry about the stuff he's
        going to encounter later".[40] Like Jackson, Gregg was digitally de-aged by 25 years.[27]</p>
          <article>
            <section>
              <div className="actor-listing">
                <h4>Actor Listing</h4>
                <ul>
                  <li>Clark Gregg</li>
                </ul>
              </div>
            </section>
            <section>
              <div className="movie-appearances">
                <h4>Movie Appearances</h4>
                <ul>
                  <li>The Avengers</li>
                  <li>Captain Marvel</li>
                </ul>
              </div>
            </section>
          </article>
        </main>
        <main className="character-details-hidden captain-america-details">
          <h2>Steve Rogers / Captain America</h2>
          <p>A fugitive superhero and leader of a faction of Avengers. A World War II veteran, he was enhanced to the peak
            of human physicality by an experimental serum and frozen in suspended animation before waking up in the modern
            world.[5] Although the film was beyond Evans' initial six-film contract with Marvel which would have ended with
            Avengers: Infinity War, Evans agreed to appear in the film "because it made sense. It's going to wrap everything
        up."[6]</p>
          <article>
            <section>
              <div className="actor-listing">
                <h4>Actor Listing</h4>
                <ul>
                  <li>Chris Evans</li>
                </ul>
              </div>
            </section>
            <section>
              <div className="movie-appearances">
                <h4>Movie Appearances</h4>
                <ul>
                  <li>Captain America: The First Avenger</li>
                  <li>The Avengers</li>
                  <li>Captain America: The Winter Soldier</li>
                  <li>Avengers: Age of Ultron</li>
                  <li>Captain America: Civil War</li>
                  <li>Avengers: Infinity War</li>
                  <li>Avengers: Endgame</li>
                </ul>
              </div>
            </section>
          </article>
        </main>
        <main className="character-details-hidden thor-details">
          <h2>Thor</h2>
          <p>An Avenger and the king of Asgard, based on the Norse mythological deity of the same name.[5] Thor now wields a
        mystical axe known as Stormbreaker, after the destruction of his hammer Mjolnir in Thor: Ragnarok.[9]</p>
          <article>
            <section>
              <div className="actor-listing">
                <h4>Actor Listing</h4>
                <ul>
                  <li>Chris Hemsworth</li>
                </ul>
              </div>
            </section>
            <section>
              <div className="movie-appearances">
                <h4>Movie Appearances</h4>
                <ul>
                  <li>Thor</li>
                  <li>The Avengers</li>
                  <li>Thor: The Dark World</li>
                  <li>Avengers: Age of Ultron</li>
                  <li>Thor: Ragnarok</li>
                  <li>Avengers: Infinity War</li>
                  <li>Avengers: Endgame</li>
                </ul>
              </div>
            </section>
          </article>
        </main>
        <main className="character-details-hidden iron-man-details">
          <h2>Tony Stark / Iron Man</h2>
          <p>The leader and benefactor of the Avengers who is a self-described genius, billionaire, playboy, and
        philanthropist with electromechanical suits of armor of his own making.[3][4]</p>
          <article>
            <section>
              <div className="actor-listing">
                <h4>Actor Listing</h4>
                <ul>
                  <li>Robert Downey Jr.</li>
                </ul>
              </div>
            </section>
            <section>
              <div className="movie-appearances">
                <h4>Movie Appearances</h4>
                <ul>
                  <li>Iron Man</li>
                  <li>Iron Man 2</li>
                  <li>The Avengers</li>
                  <li>Iron Man 3</li>
                  <li>Avengers: Age of Ultron</li>
                  <li>Captain America: Civil War</li>
                  <li>Spider-Man: Homecoming</li>
                  <li>Avengers: Infinity War</li>
                  <li>Avengers: Endgame</li>
                </ul>
              </div>
            </section>
          </article>
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