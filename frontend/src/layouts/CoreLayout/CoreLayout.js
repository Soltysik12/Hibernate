import React from "react"
import "./CoreLayout.scss"
import "../../styles/core.scss"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'
import getMuiTheme from "material-ui/styles/getMuiTheme"
import LightStyle from "styles/LightTheme"
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class CoreLayout extends React.Component {
  static propTypes = {
    children: PropTypes.any,
  }

  render() {
    const style = LightStyle
    const backgroundColor = style.palette.canvasColor
    const textColor = style.palette.textColor
    const muiTheme = getMuiTheme(style)
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={{ minHeight: '100vh', width: '100%', minWidth: '600px', backgroundColor: backgroundColor,
          color: textColor, display: 'flex', flexDirection: 'column' }}>
          <Header
          />
          <div className='core-layout__viewport'>
            {this.props.children}
          </div>
          <Footer/>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default CoreLayout
