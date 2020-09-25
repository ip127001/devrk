import React from 'react'
import './blogs.scss'

function Blog() {
  const mainObjArr = [
    {
      title: 'Slice vs Splice',
      description:
        'There is often a confusion between slice and splice JavaScript array methods. It is a commonly asked question in Javascript interview for freshers.',
      link: 'https://dev.to/ip127001/slice-vs-splice-hmd',
    },
    {
      title: 'Copying in JavaScript',
      description:
        'There is concept of shallow copy and deep copy in JavaScript. Through this article I tried to explain the concept and some userful resources.',
      link: 'https://dev.to/ip127001/copying-objects-in-javascript-440b',
    },
    {
      title: 'Convert an array to an object',
      description:
        'Generally, when we need to convert an array to object, we can use reduce method. I used an example to explain in this article.',
      link: 'https://dev.to/ip127001/convert-an-array-to-an-object-pne',
    },
    {
      title: '5 ways to delete an element from array',
      description:
        'There is a situation when we need to delete elements from array based on conditions or given index of array. This article covers 5 days to do that and which on I prefer.',
      link:
        'https://dev.to/ip127001/5-ways-to-delete-an-element-from-an-array-in-javascript-jm9',
    },
    {
      title: 'Performance optimization in react',
      description:
        'The most discussed performance technique is to avoid reconciliation and I have discussed throughly in this blog',
      link:
        'https://dev.to/ip127001/avoid-reconciliation-using-shouldcomponent-550m',
    },
    {
      title: 'Truncate strings',
      description: 'Truncate any string to align text in one line and show ellipsis at the end and show full text on hover',
      link: 'https://dev.to/ip127001/truncate-string-with-ellipsis-26l5'    
    },
  ]

  function trackClick(link) {
    window.gtag('event', 'blog_clicked', {
      event_category: 'articles',
      event_label: 'link tracking',
      value: link,
    })
  }

  return (
    <section className="blog-section">
      <span className="blog-section__title">Blog Posts: </span>
      <div className="blog-wrapper">
        {mainObjArr.map((element) => {
          return (
            <div className="single-blog">
              <div className="layer-2"></div>
              <div className="blog-desc">
                <span className="blog-desc__title">{element.title}</span>
                <span className="blog-desc__description">
                  {element.description}
                </span>
                <a
                  href={element.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackClick(element.link)}
                >
                  Read more...
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
