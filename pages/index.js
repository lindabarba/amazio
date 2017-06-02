import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'

export default class Index extends React.Component {
  render() {
    let badBoys = this.props.route.pages.slice(4,8);
    badBoys.push(this.props.route.pages[1]);
    let content = badBoys.map((item) => (
        <tr>
          <td><Link to={item.data.path}>{item.data.title}</Link></td>
          <td>{item.data.price}</td>
          <td>{item.data.description}</td>
          <td>{item.data.sku}</td>
        </tr>
      ))
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Price</th>
              <th>Description</th>
              <th>SKU</th>
            </tr>
          </thead>
          <tbody>
            {content}
          </tbody>
        </table>
      </div>
    )
  }
}
