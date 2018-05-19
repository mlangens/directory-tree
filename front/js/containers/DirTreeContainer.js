/**
 * @file Dir Tree container.
 */

import { connect } from 'react-redux';

import DirTree from '../components/dirtree';
import { fetchFirstDirTree } from '../actions/server-dirtree';

const mapStateToProps = ({ serverDirTree }) => ({
  dirtree: serverDirTree.dirtree,
});

const mapDispatchToProps = {
  fetchFirstDirTree,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DirTree);
