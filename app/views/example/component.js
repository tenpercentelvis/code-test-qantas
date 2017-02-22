
import React, { PropTypes, Component } from 'react';

import styles from './style.scss';

import Table from '../../components/table/table';

class Example extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      genres: [],
    };
    this.setData = this.setData.bind(this);
    this.setGenres = this.setGenres.bind(this);
    this.filterData = this.filterData.bind(this);
  }

  // get data from api when component mounts

  componentDidMount() {

    const { getData } = this.props.actions;

    getData();
  }

  // set data & genres when api data is recieved

  componentWillReceiveProps(nextProps) {

    const { example } = nextProps;

    this.setData(example.items);
    this.setGenres(example.items);
  }

  // set local data state with data returned from api

  setData(data) {

    this.setState({
      data,
    });
  }

  // set unique genres

  setGenres(data) {

    const genres = [];

    // push all genres from each item into new 'genres' array

    data.forEach((items) => {
      items.genres.forEach((item) => {
        if (!genres.includes(item)) {
          genres.push(item);
        }
      });
    });

    // set genres state with unique 'genres' array

    this.setState({
      genres,
    });
  }

  // filter movie data by selected genre

  filterData(event) {

    const { example } = this.props;
    const { value } = event.target;

    // return only items where item genre includes selected genre value
    const filter = (item) => {
      return item.genres.includes(value);
    };

    // filter data
    const filtered = example.items.filter(filter);

    // set data to filtered data
    this.setState({
      data: value === 'Select genre...' ? example.items : filtered,
    });

  }

  render() {

    // create genre options
    const options = this.state.genres.map((item, index) => {
      return (
        <option value={item} key={index}>{item}</option>
      );
    });

    return (
      <section>

        <header role="banner">
          <a className={styles['logo']} href="/">Qantas Airways</a>
          <h1>Qantas developer challenge</h1>
        </header>

        <main role="main">
          <div className={styles['select']}>
            <select onChange={this.filterData} defaultValue="Select genre...">
              <option>Select genre...</option>
              {options}
            </select>
          </div>
          <Table data={this.state.data} />
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
