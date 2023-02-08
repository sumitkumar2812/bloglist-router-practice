// Write your JS code here
import './index.css'

import {Component} from 'react'

import BlogItem from '../BlogItem'

class BlogList extends Component {
  render() {
    const {blogsList} = this.props
    return (
      <div className="list-container">
        <ul className="lists">
          {blogsList.map(each => (
            <BlogItem itemDetails={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default BlogList
