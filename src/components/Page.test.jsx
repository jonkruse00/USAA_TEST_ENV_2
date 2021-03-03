import React from 'react';
import renderer from 'react-test-renderer';
import Page from './Page';

describe('Page', () => {
  it('should render Page component', () => {
        const tree = renderer.create(<Page />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});