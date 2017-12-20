import React from 'react'
import PropTypes from 'prop-types'
import { Toolbar, ToolbarGroup, ToolbarSeparator } from 'material-ui/Toolbar'
import IconButton from 'material-ui/IconButton'
import { t } from 'i18n'
import ActionHome from 'material-ui/svg-icons/action/home';import { connect } from 'react-redux'
import { hashHistory, Link } from 'react-router'
import './Header.scss'
import LightStyle from "styles/LightTheme"

class header extends React.Component {

  static propTypes = {
    email: PropTypes.string,
  }

  linkToHome() {
    hashHistory.push('/home')
  }

  render() {
    const x = [
      {
        text: 'New transaction',
        to: '/welcome',
      },
      {
        text: 'New company',
        to: '/company',
      },
      {
        text: 'New product',
        to: '/product',
      },
    ]

    const links = x.map((v, i) =>
      <Link
        style={styles.appName}
        className='link'
        to={v.to}
        key={i}
      >
        <div style={{ margin: 'auto' }}>
          {v.text}
        </div>
      </Link>
    )

    const mainGroup =
      <ToolbarGroup style={styles.alternateTextColor}>
        <Link
          style={styles.appName}
          className='link'
          to='/welcome'
        >
          <IconButton><ActionHome color={styles.alternateTextColor.color}/></IconButton></Link>
        <ToolbarSeparator style={{ marginLeft: 0 }}/>
        {links}
      </ToolbarGroup>

    return (
      <Toolbar
        style={styles.container}
      >
        {mainGroup}
      </Toolbar>
    )
  }
}

const Header = connect(
  (state) => {
    return {
    }
  },
  (dispatch) => {
    return {
    }
  }
)(header)

export default Header


const styles = {
  container: {
    backgroundColor: LightStyle.palette.primary1Color,
    paddingLeft: '25px',
    paddingRight: '25px',
    flexShrink: '0',
    zIndex: '99',
  },
  iconMenu: {
    horizontal: 'right',
    vertical: 'top',
  },
  appName: {
    color: LightStyle.palette.alternateTextColor,
    display: 'flex',
    flexDirection: 'row',
  },
  alternateTextColor: {
    color: LightStyle.palette.alternateTextColor,
  },
}
