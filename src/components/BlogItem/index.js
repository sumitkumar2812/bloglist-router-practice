// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {itemDetails, id} = props
  const {title, description, publishedDate} = itemDetails
  console.log(id)
  return (
    <li className="list-item-container">
      <div className="heading-date">
        <h1 className="title">{title}</h1>
        <p className="date">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
    </li>
  )
}
export default BlogItem
