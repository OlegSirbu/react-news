import React from 'react';
import MainPage from './MainPage.jsx';

export default class App extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
        <MainPage />
    );
  }
}
