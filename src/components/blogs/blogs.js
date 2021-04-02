import React from 'react'
import './blogs.scss'

function Blog() {
  const mainObjArr = [
    {
      title: 'Performance optimization in react',
      description:
        'The most discussed performance technique is to avoid reconciliation and I have discussed throughly in this blog',
      link:
        'https://dev.to/ip127001/avoid-reconciliation-using-shouldcomponent-550m',
    },
    {
      title: 'How to build and publish an chrome extension',
      description:
        'Have you ever consider building a Chrome extension? Chrome extensions are great ways to enhances the browsing experience. They are built with existing web technologies like Javascript, html and css',
      link:
        'https://blog.primathon.in/2020/10/24/build-and-publish-a-chrome-extension/',
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
      title: 'Destructuring in ES6',
      description:
        'destructuring is the feature announced in the 6th Edition of the ECMAScript standard [ES6]. The destructuring assignment syntax allows you to assign values of arrays or properties from objects to variables',
      link: 'https://devrk.hashnode.dev/es6-destructuring',
    },
    {
      title: 'Template Literals in ES6',
      description:
        'ES6 introduced a new way of declaring strings [string literal syntax] called Template literals. This new syntax offers better features than just using ordinary strings with quote marks',
      link: 'https://devrk.hashnode.dev/es6-template-literals',
    },
    {
      title: 'How to add multiple classes to react component',
      description:
        'Sometimes in our react components, we need to add multiple classes based on some conditions.',
      link:
        'https://devrk.hashnode.dev/how-to-add-multiple-classes-to-react-component',
    },
    {
      title: 'The defaultProps property in React',
      description:
        'There is a property called defaultProps in react that we can define on a class or a functional component which is used to set default prop values for the component.',
      link: 'https://devrk.hashnode.dev/the-defaultprops-property-in-react',
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
      <div className="blog-section__desc">
      { '>' } 10k views on blogs
      </div>
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
