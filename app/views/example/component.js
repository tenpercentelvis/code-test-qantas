
import React, { PropTypes, Component } from 'react';

import styles from './style.scss';

import Table from '../../components/table/table';

class Example extends Component {

  constructor(props) {
    super(props);
    this.state = {
      genres: [],
    };
    this.handleEvent = this.handleEvent.bind(this);
    this.getGenres = this.getGenres.bind(this);
  }

  // get data from api when component mounts

  componentDidMount() {

    const { getData } = this.props.actions;

    getData();
  }

  componentWillReceiveProps(nextProps) {

    const { example } = nextProps;

    this.getGenres(example.items);
  }

  getGenres(data) {

    const genres = [];

    data.forEach((item) => {
      item.genres.forEach((genre) => {
        genres.push(genre);
      });
    });

    // spread unique values of genres array into a new array using a new set

    const uniqueGenres = [...new Set(genres)];

    this.setState({
      genres: uniqueGenres,
    });
  }

  /*
    handleEvent
    - passed into list component as action prop
    - passed from list component to button component as action prop
    - called by button component with onClick event
    - called with value parameter from value prop on button component
  */

  handleEvent(event) {

    const { handleEvent } = this.props.actions;

    const { value } = event.target;

    this.setState({
      selected: value,
    });

    handleEvent(value);
  }

  // render component

  render() {

    // get example data
    const { example } = this.props;

    // create genre options
    const options = this.state.genres.map((item, index) => {
      return (
        <option value={item} key={index}>{item}</option>
      );
    });

    return (
      <section>

        <header>
          <a className={styles['logo']} href="/">Qantas Airways</a>
          <h1>Qantas developer challenge</h1>
        </header>

        <main role="main">
          <div className={styles['select']}>
            <select onChange={this.handleEvent}>
              {options}
            </select>
          </div>
          <Table data={example} />
        </main>

      </section>
    );
  }
}

Example.propTypes = {
  example: PropTypes.object,
  actions: PropTypes.object,
};

export default Example;
