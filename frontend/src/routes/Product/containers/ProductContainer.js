import React from 'react'
import { t } from 'i18n'
import { RaisedButton, TextField } from "material-ui"
import { sendProductData } from 'data/transactionActions'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { hashHistory } from 'react-router'


class productContainer extends React.Component {
  static propTypes = {
    sendProductData: PropTypes.func.isRequired,
  }

  state = {
    name: '',
    category: '',
    supplier: '',
    unitsOnStock: ''
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>Add product</h1>
        <TextField
          floatingLabelText='Product name'
          onChange={(e, v) => this.setState({name: v})}
        />
        <br/>
        <TextField
          floatingLabelText='Category'
          onChange={(e, v) => this.setState({category: v})}
        />
        <br/>
        <TextField
          floatingLabelText='Supplier'
          onChange={(e, v) => this.setState({supplier: v})}
        />
        <br/>
        <TextField
          floatingLabelText='Units on stock'
          onChange={(e, v) => this.setState({unitsOnStock: v})}
        />
        <br/>
        <RaisedButton
          label={t('button.createProduct')}
          primary={true}
          onClick={e => {
            this.props.sendProductData(this.state);
            hashHistory.push('welcome')
          }}
        />
      </div>
    )
  }
}

const ProductContainer = connect(
  (state) => {
    return {
    }
  },
  (dispatch) => {
    return {
      sendProductData: (data) => sendProductData(data)(dispatch),
    }
  }
)(productContainer)

export default ProductContainer

