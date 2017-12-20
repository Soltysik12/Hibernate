import React from 'react'
import { t } from 'i18n'
import { RaisedButton, TextField } from "material-ui"
import { sendTransactionData } from 'data/transactionActions'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { hashHistory } from 'react-router'


class summaryContainer extends React.Component {
  static propTypes = {
  }

  state = {
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>Successful order</h1>

        <RaisedButton
          label={t('button.newTransation')}
          primary={true}
          onClick={e => hashHistory.push('welcome')}
        />
      </div>
    )
  }
}

const SummaryContainer = connect(
  (state) => {
    return {
    }
  },
  (dispatch) => {
    return {
    }
  }
)(summaryContainer)

export default SummaryContainer

