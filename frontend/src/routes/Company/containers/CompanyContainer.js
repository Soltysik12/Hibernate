import React from 'react'
import { t } from 'i18n'
import { RaisedButton, TextField } from "material-ui"
import { sendCompanyData } from 'data/transactionActions'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { hashHistory } from 'react-router'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

class companyContainer extends React.Component {
  static propTypes = {
    sendCompanyData: PropTypes.func.isRequired,
  }

  state = {
    companyType: 'SUPPLIER',
    companyName: '',
    bankAccountNumber: '',
    street: '',
    city: '',
    zipcode: '',
    discount: '',
  }

  render() {
    const additionalData = this.state.companyType === 'SUPPLIER' ?
      <TextField
        floatingLabelText='Bank account number'
        onChange={(e, v) => this.setState({bankAccountNumber: v})}
      />
      : <TextField
        floatingLabelText='Discount'
        onChange={(e, v) => this.setState({discount: v})}
      />

    return (
      <div style={{ textAlign: 'center' }}>
        <h1>Add company</h1>
        <SelectField
          floatingLabelText="Company type"
          value={this.state.companyType}
          onChange={(k,i,v) => this.setState({companyType: v})}
        >
          <MenuItem value={'SUPPLIER'} primaryText="Supplier" />
          <MenuItem value={'CUSTOMER'} primaryText="Customer" />
        </SelectField>
        <br/>
        <TextField
          floatingLabelText='Company name'
          onChange={(e, v) => this.setState({companyName: v})}
        />
        <br/>
        <TextField
          floatingLabelText='Street'
          onChange={(e, v) => this.setState({street: v})}
        />
        <br/>
        <TextField
          floatingLabelText='City'
          onChange={(e, v) => this.setState({city: v})}
        />
        <br/>
        <TextField
          floatingLabelText='Zipcode'
          onChange={(e, v) => this.setState({zipcode: v})}
        />
        <br/>
        {additionalData}
        <br/>
        <RaisedButton
          label={t('button.createCompany')}
          primary={true}
          onClick={e => {
            this.props.sendCompanyData(this.state);
            hashHistory.push('welcome')
          }}
        />
      </div>
    )
  }
}

const CompanyContainer = connect(
  (state) => {
    return {
    }
  },
  (dispatch) => {
    return {
      sendCompanyData: (data) => sendCompanyData(data)(dispatch),
    }
  }
)(companyContainer)

export default CompanyContainer

