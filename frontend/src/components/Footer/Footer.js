import React from 'react'
import './Footer.scss'
import { Link } from 'react-router'
import { t } from 'i18n'
import { version } from '../../../package.json'

class Footer extends React.Component {

  render() {

    const paths = [
      {
        path: '',
        name: t('footer.contact'),
      },
    ]
    const links = paths.map((link, i) => {
      return (
        <Link
          key={i}
          to={link.path}
          >{link.name}
        </Link>
      )
    })
    return (
      <div className='footer'>
        <div className='footerLeft'>
          {t('footer.copyright')}
        </div>
      </div>
    )
  }
}

export default Footer
