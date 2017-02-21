
import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import styles from './style.scss';

import Loader from '../../components/loader/loader';

const Table = ({ data }) => {

  // map data items

  const items = data.items.map((item, index) => {
    return (
      <tr className={styles['table-row']} key={index}>
        <td className={styles['table-data']}>{item.title}</td>
        <td className={styles['table-data']}>{item.genres.join(', ').toString()}</td>
      </tr>
    );
  });

  // show loader while waiting data
  if (!items.length) {
    return <Loader size="1" />;
  }

  return (
    <ReactCSSTransitionGroup transitionName="example" transitionAppear transitionAppearTimeout={500} transitionEnter={false} transitionLeave={false}>

      <table className={styles['table']}>
        <thead>
          <tr>
            <th className={styles['table-header']}>Title</th>
            <th className={styles['table-header']}>Genre</th>
          </tr>
        </thead>
        <tbody>
          {items}
        </tbody>
      </table>

    </ReactCSSTransitionGroup>
  );
};

Table.propTypes = {
  data: PropTypes.object,
};

export default Table;
