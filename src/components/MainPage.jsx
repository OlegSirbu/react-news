import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as newsAction from '../actions/newsActions';

import News from './News.jsx';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: null
    };
  }

  render() {
    return (
      <div>
        <News news={this.props.news}/>
      </div>
    );
  }
}

MainPage.propTypes = {
  news: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    news: state.news
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(newsAction, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);

