import { Link } from 'gatsby'
import React from 'react'
import PropTypes from 'prop-types'

const PostPreview = ({ title, slug, date, timeToRead, excerpt }) => {
  return (
    <div>
      <h3>
        <Link to={slug}>{title}</Link>
      </h3>
      <small>
        {date} • {timeToRead} min read
      </small>
      <p
        dangerouslySetInnerHTML={{
          __html: excerpt,
        }}
      />
    </div>
  )
}

PostPreview.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  excerpt: PropTypes.string.isRequired,
}

export default PostPreview