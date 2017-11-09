import React from 'react';
import { connect } from 'react-redux';
import { Snackbar } from 'material-ui';
import { clearStore as clearStoreAction } from '../../stores/globalErrors/actions';

const ErrorsDisplayContainer = ({ clearStore, errorMessage }) => {
  return (
    <Snackbar
      bodyStyle={{ maxWidth: '768px' }}
      action="Dismiss"
      onActionTouchTap={clearStore}
      onRequestClose={clearStore}
      autoHideDuration={6000}
      open={Boolean(errorMessage)}
      message={errorMessage}
    />
  );
};

ErrorsDisplayContainer.propTypes = {
  errorMessage: React.PropTypes.string,
  clearStore: React.PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  clearStore: () => dispatch(clearStoreAction()),
});

const mapStateToProps = ({ globalErrors }) => ({
  ...globalErrors.toJS(),
});

export default connect(mapStateToProps, mapDispatchToProps)(ErrorsDisplayContainer);
