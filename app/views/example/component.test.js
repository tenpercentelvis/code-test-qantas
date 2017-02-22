
import React from 'react';
import expect from 'expect';
import { mount, shallow } from 'enzyme';

import Example from './component';

describe('Movies', () => {

  let component;

  beforeEach(() => {

    component = shallow(
      <Example
        actions={{
          getData: () => {}
        }}
        example={{
          items: [
            {'genres': ['Action', 'Adventure']},
            {'genres': ['Animation', 'Adventure']},
        ]}}
      />
    );

  });

  it('Filter data', () => {

    // new instance of component
    const instance = component.instance();

    // setup - mock select onChange event with value 'Action'
    const event = {
      target: {
        value: 'Action'
      }
    };

    // act - call filterData with mock event
    instance.filterData(event);

    // verify - return all items that include a genre of 'Action'
    expect(instance.state.data).toEqual([{'genres': ['Action', 'Adventure']}]);

  });

  it('Set genres', () => {

    // new instance of component
    const instance = component.instance();

    // act - call setGenres with mock data
    instance.setGenres(instance.props.example.items)

    // verify - return new array of unique genres
    expect(instance.state.genres).toEqual(['Action', 'Adventure', 'Animation']);

  });

});
