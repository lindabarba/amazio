import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import { prefixLink } from 'gatsby-helpers'
import { TypographyStyle } from 'react-typography'
import typography from './utils/typography'

const BUILD_TIME = new Date().getTime()

export default class HTML extends React.Component {
  static propTypes = {
    body: PropTypes.string
  }

  render() {
    const head = Helmet.rewind()

    let css
    if (process.env.NODE_ENV === 'production') {
      css = (
        <style
          dangerouslySetInnerHTML={{
            __html: require('!raw!./public/styles.css'),
          }}
        />
      )
    }

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {head.title.toComponent()}
          {head.meta.toComponent()}
          <TypographyStyle typography={typography} />
          {css}
        </head>
        <body>
          <div
            id="react-mount"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          <script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />
          <link id="snipcart-theme" type="text/css" href="https://cdn.snipcart.com/themes/base/snipcart.css" rel="stylesheet" />
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
                <script type="text/javascript" id="snipcart" data-api-key="NzUzOTlmODAtM2NiMS00ZjRjLTkyMDAtODk4MGQ5M2I2YTUxNjM2MzIwMjE0NjA2MzY1MzY5" src="https://cdn.snipcart.com/scripts/snipcart.js"></script>
        </body>
      </html>
    )
  }
}
