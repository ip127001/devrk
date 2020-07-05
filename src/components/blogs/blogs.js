import React from 'react'
import './blogs.scss'
import array from '../../assets/array.png'
import objects from '../../assets/objects.png'
import react from '../../assets/react.png'

function Blog() {
  const mainObjArr = [
    {
      background: array,
      title: 'Copying in JavaScript',
      description:
        'There is concept of shallow copy and deep copy in JavaScript. Through this article I tried to explain the concept and some userful resources.',
      link: 'https://dev.to/ip127001/copying-objects-in-javascript-440b',
    },
    {
      background: objects,
      title: 'Convert an array to an object',
      description:
        'Generally, when we need to convert an array to object, we can use reduce method. I used an example to explain in this article.',
      link: 'https://dev.to/ip127001/convert-an-array-to-an-object-pne',
    },
    {
      background: react,
      title: 'Stop re-rendering in React',
      description: 'Coming Soon...',
      link: '#',
    },
  ]
  return (
    <section className="blog-section">
      <span className="blog-section__title">My Blogs: </span>
      <div className="blog-wrapper">
        {mainObjArr.map((element) => {
          return (
            <div className="single-blog">
              <img
                src={element.background}
                alt="card"
                className="blog-background"
              />
              <div className="blog-desc">
                <span className="blog-desc__title">{element.title}</span>
                <span className="blog-desc__description">
                  {element.description}
                </span>
                <a
                  href={element.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  link to article
                </a>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Blog
