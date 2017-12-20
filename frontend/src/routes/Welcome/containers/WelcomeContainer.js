import React from 'react'
import { t } from 'i18n'
import { RaisedButton, TextField } from "material-ui"
import { sendTransactionData } from 'data/transactionActions'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { hashHistory } from 'react-router'


class welcomeContainer extends React.Component {
  static propTypes = {
    sendTransactionData: PropTypes.func.isRequired,
  }

  state = {
    customer: '',
    product: '',
    quantity: '',
    transactionNumber: '',
  }

  sendData = () => {
    console.log(this.state.customer)
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>New transaction</h1>
        <TextField
          floatingLabelText='Customer name'
          onChange={(e, v) => this.setState({customer: v})}
        />
        <br/>
        <TextField
          floatingLabelText='Product name'
          onChange={(e, v) => this.setState({product: v})}
        />
        <br/>
        <TextField
          floatingLabelText='Quantity'
          onChange={(e, v) => this.setState({quantity: v})}
        />
        <br/>
        <TextField
          floatingLabelText='Transaction number'
          onChange={(e, v) => this.setState({transactionNumber: v})}
        />
        <br/>
        <RaisedButton
          label={t('button.submit')}
          primary={true}
          onClick={e => {this.props.sendTransactionData(this.state); hashHistory.push('summary')}}
        />
      </div>
    )
  }
}

const WelcomeContainer = connect(
  (state) => {
    return {
    }
  },
  (dispatch) => {
    return {
      sendTransactionData: (data) => sendTransactionData(data)(dispatch),
    }
  }
)(welcomeContainer)

export default WelcomeContainer

