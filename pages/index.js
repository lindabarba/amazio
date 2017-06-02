import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'

export default class Index extends React.Component {
  render() {
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
            <tr>
              <td><Link to={prefixLink('/hat/')}>hat</Link></td>
              <td>$7</td>
              <td>Cool hat</td>
              <td>001</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
