/**
 * @file Directory Tree component
 */

import React from 'react';
import PropTypes from 'prop-types';

class DirTree extends React.Component {
  static propTypes = {
    dirtree: PropTypes.string,
    fetchFirstDirTree: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.fetchFirstDirTree();
  }

  render() {
    const { dirtree } = this.props;
    console.log('PROPS', this.props);
    return (
      <div>
        <h1>Directory Tree Check It Out</h1>
        <p>The Tree: {dirtree}</p>
      </div>
    );
  }
}

export default DirTree;
