'use strict';

export class CharacterFiltering extends React.Component {
  constructor(props) {
    super(props);

    this.handleAvengersOnlyFilterChange = this.handleAvengersOnlyFilterChange.bind(this);
  }

  handleAvengersOnlyFilterChange(event) {
    this.props.onAvengersOnlyFilterChange();
  }

  render() {
    return (
      <div className="character-filtering">
      <label>
          Avengers only
          <input
            name="avengersOnlyFilter"
            type="checkbox"
            checked={this.props.isFilteringForAvengersOnly}
            onChange={this.handleAvengersOnlyFilterChange} />
        </label>
      </div>
    );
  }
}
