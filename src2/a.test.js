import {AppRegistry, Text} from 'react-native';
import React, {Component} from 'react';
import renderer from 'react-test-renderer';

class MyComponent extends Component {
  render() {
    return (
      <Text>{'Hello, World!'}</Text>
    );
  }
}

describe('something', () => {
  it('should work', () => {
    AppRegistry.registerComponent('mycomponent', () => MyComponent);
    const result = renderer.create(
      <MyComponent/>
    );
    expect(result).toBeDefined();
  });

  it('should work2', () => {
    AppRegistry.registerComponent('mycomponent', () => MyComponent);
    const result = renderer.create(
      <MyComponent/>
    );
    expect(result).toBeDefined();
  });

  it('should work3', () => {
    AppRegistry.registerComponent('mycomponent', () => MyComponent);
    const result = renderer.create(
      <MyComponent/>
    );
    expect(result).toBeDefined();
  });
});
