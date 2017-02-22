
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
        data={{
          items: [
            {'genres': ['Action', 'Adventure']},
            {'genres': ['Animation', 'Adventure']},
          ]
        }}
      />
    );

  });

  it('Filter data', () => {

    const instance = component.instance();

    // set
    // act
    // verify

  });

  it('Set genres', () => {

    const instance = component.instance();

    // set
    // act
    // verify

  });

});
