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
          <td><a
                   href='#'
                   className='snipcart-add-item'
                   data-item-id={item.data.id}
                   data-item-price={item.data.price}
                   data-item-image={item.data.image}
                   data-item-name={item.data.title}
                   data-item-description={item.data.description}
                   data-item-url={"http://bookkeeper-addition-41004.netlify.com" + item.data.path}>
                   Buy
             </a>
           </td>
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
