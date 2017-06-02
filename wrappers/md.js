import React from 'react'
import PropTypes from 'prop-types'
import 'css/markdown-styles.css'
import Helmet from 'react-helmet'
import { config } from 'config'

export default class Markdown extends React.Component {
  static propTypes = {
    router: PropTypes.object,
  }

  render() {
    const post = this.props.route.page.data
    return (
      <div className="markdown">
        <Helmet title={`${config.siteTitle} | ${post.title}`} />
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.body }} />
        <a
          href='#'
          className='snipcart-add-item'
          data-item-id={post.id}
          data-item-price={post.price}
          data-item-image={post.image}
          data-item-name={post.title}
          data-item-description={post.description}
          data-item-url={"http://bookkeeper-addition-41004.netlify.com" + post.path}>
          Buy
        </a>
      </div>
    )
  }
}
