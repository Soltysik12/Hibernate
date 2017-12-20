import React from 'react'
import PropTypes from 'prop-types'

import TextField from 'material-ui/TextField'
import Checkbox from 'material-ui/Checkbox'

class Input extends React.Component {
  static propTypes = {
    inputText: PropTypes.string,
    floatingText: PropTypes.string,
    value: PropTypes.any.isRequired,
    type: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func,
    onEnterKey: PropTypes.func,
    multiline: PropTypes.bool,
    rows: PropTypes.number,
    inputType: PropTypes.string,
    className: PropTypes.string,
    errorText: PropTypes.string,
  }

  onChange = (e, b) => {
    this.props.onChange(b, this.props.type)
  }

  onBlur = () => {
    if(this.props.onBlur) {
      this.props.onBlur(this.props.type)
    }
  }

  render() {
    const { value, inputText, inputType, multiline, floatingText, rows } = this.props

    const input = inputType === 'checkbox' ?
      <Checkbox
        label={this.props.inputText}
        checked={this.props.value}
        onCheck={this.onChange}
      />
      : <TextField
        id={this.props.type}
        style={{ 'width': '100%' }}
        hintText={this.props.inputText}
        floatingLabelText={floatingText}
        value={this.props.value}
        onChange={this.onChange}
        errorText={this.props.errorText}
        multiLine={multiline}
        rows={rows}
      />

    return (
      <div className={this.props.className}>
        {input}
      </div>
    )
  }
}

export default Input
