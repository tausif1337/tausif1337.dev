import React from 'react';
import { Link } from 'react-router-dom';
import './assets/styles/Blog.css';

import jsFrameworksImage from './assets/images/js-frameworks.webp';
import reactHooksImage from './assets/images/react-hooks.webp';
import accessibilityImage from './assets/images/accessibility.webp';
import lazyLoadingImage from './assets/images/lazy-loading.webp';

function Blog() {
  // Static blog post data with images
  const posts = [
    {
      id: 1,
      title: 'The Evolution of JavaScript Frameworks',
      author: 'Md. Tausif Hossain',
      date: '2024-11-10',
      excerpt: 'Explore how JavaScript frameworks have evolved over the years, shaping modern web development as we know it.',
      imageUrl: jsFrameworksImage
    },
    {
      id: 2,
      title: 'Understanding React Hooks',
      author: 'Md. Tausif Hossain',
      date: '2024-10-28',
      excerpt: 'Dive deep into React Hooks and learn how they simplify state management and side effects in functional components.',
      imageUrl: reactHooksImage
    },
    {
      id: 3,
      title: 'Building Accessible Web Applications',
      author: 'Md. Tausif Hossain',
      date: '2024-09-15',
      excerpt: 'Accessibility is crucial for reaching all users. Learn the key principles and best practices to build inclusive web applications.',
      imageUrl: accessibilityImage
    },
    {
      id: 4,
      title: 'Optimizing Web Performance with Lazy Loading',
      author: 'Md. Tausif Hossain',
      date: '2024-08-05',
      excerpt: 'Improve the performance of your web applications by implementing lazy loading techniques for images and components.',
      imageUrl: lazyLoadingImage
    },
    // Add more posts here to see six per row
  ];

  return (
    <section id="blog" className="section">
      <h2>Blog</h2>
      <div className="blog-posts">
        {posts.map((post, index) => (
          <div className="blog-card" key={index}>
            <img src={post.imageUrl} alt={post.title} className="blog-image" />
            <div className="blog-content">
              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-author">By {post.author} on {new Date(post.date).toLocaleDateString()}</p>
              <p className="blog-excerpt">{post.excerpt}</p>
              <Link to={`/blog/${post.id}`} className="read-more-link">Read More</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blog;
