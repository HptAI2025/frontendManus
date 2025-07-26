import React from 'react';
import { Link, useParams } from 'wouter';
import { useLanguage } from '@/hooks/useLanguage';

export default function BlogPost() {
  const { t } = useLanguage();
  const { id } = useParams();

  // Blog posts data - should match the data from Blog.tsx
  const blogPosts = [
    {
      id: 1,
      title: t('blog.featured.title'),
      excerpt: t('blog.featured.excerpt'),
      category: t('blog.categories.aiTrends'),
      author: t('blog.featured.author'),
      publishDate: '2024-01-15',
      readTime: t('blog.featured.readTime'),
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600',
      content: t('blogPost.post1.content')
    },
    {
      id: 2,
      title: t('blog.posts.post1.title'),
      excerpt: t('blog.posts.post1.excerpt'),
      category: t('blog.categories.caseStudy'),
      author: t('blog.posts.post1.author'),
      publishDate: '2024-01-10',
      readTime: t('blog.posts.post1.readTime'),
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600',
      content: t('blogPost.post2.content')
    },
    {
      id: 3,
      title: t('blog.posts.post2.title'),
      excerpt: t('blog.posts.post2.excerpt'),
      category: t('blog.categories.howTo'),
      author: t('blog.posts.post2.author'),
      publishDate: '2024-01-08',
      readTime: t('blog.posts.post2.readTime'),
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600',
      content: t('blogPost.post3.content')
    },
    {
      id: 4,
      title: t('blog.posts.post3.title'),
      excerpt: t('blog.posts.post3.excerpt'),
      category: t('blog.categories.technology'),
      author: t('blog.posts.post3.author'),
      publishDate: '2024-01-05',
      readTime: t('blog.posts.post3.readTime'),
      image: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600',
      content: t('blogPost.post4.content')
    },
    {
      id: 5,
      title: t('blog.posts.post4.title'),
      excerpt: t('blog.posts.post4.excerpt'),
      category: t('blog.categories.howTo'),
      author: t('blog.posts.post4.author'),
      publishDate: '2024-01-03',
      readTime: t('blog.posts.post4.readTime'),
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600',
      content: t('blogPost.post5.content')
    },
    {
      id: 6,
      title: t('blog.posts.post5.title'),
      excerpt: t('blog.posts.post5.excerpt'),
      category: t('blog.categories.caseStudy'),
      author: t('blog.posts.post5.author'),
      publishDate: '2024-01-01',
      readTime: t('blog.posts.post5.readTime'),
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600',
      content: t('blogPost.post6.content')
    },
    {
      id: 7,
      title: t('blog.posts.post6.title'),
      excerpt: t('blog.posts.post6.excerpt'),
      category: t('blog.categories.aiTrends'),
      author: t('blog.posts.post6.author'),
      publishDate: '2023-12-28',
      readTime: t('blog.posts.post6.readTime'),
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600',
      content: t('blogPost.post7.content')
    }
  ];

  // Find the current post
  const currentPost = blogPosts.find(post => post.id === parseInt(id || '1'));

  // Get related posts (same category, excluding current post)
  const relatedPosts = blogPosts
    .filter(post => post.category === currentPost?.category && post.id !== currentPost?.id)
    .slice(0, 3);

  if (!currentPost) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">{t('blogPost.notFound.title')}</h1>
          <p className="text-slate-600 mb-8">{t('blogPost.notFound.description')}</p>
          <Link href="/blog">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              {t('blogPost.notFound.backToBlog')}
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Breadcrumb */}
      <section className="py-8 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-blue-600">{t('nav.home')}</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-blue-600">{t('nav.blog')}</Link>
            <span>/</span>
            <span className="text-slate-900">{currentPost.title}</span>
          </nav>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full mr-4">
                {currentPost.category}
              </span>
              <span className="text-slate-500 text-sm">{currentPost.readTime}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              {currentPost.title}
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              {currentPost.excerpt}
            </p>
            <div className="flex items-center justify-between border-t border-slate-200 pt-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-semibold">
                    {currentPost.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-slate-900">{currentPost.author}</div>
                  <div className="text-slate-500 text-sm">{currentPost.publishDate}</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button className="text-slate-400 hover:text-blue-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                  </svg>
                </button>
                <button className="text-slate-400 hover:text-blue-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-0">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <img 
            src={currentPost.image}
            alt={currentPost.title}
            className="w-full h-96 md:h-[500px] object-cover rounded-2xl shadow-xl"
          />
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-slate max-w-none">
            <div className="text-slate-700 leading-relaxed space-y-6">
              {currentPost.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-lg leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tags and Share */}
      <section className="py-8 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-sm font-semibold text-slate-900 mb-2">{t('blogPost.tags')}</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-slate-200 text-slate-700 text-sm px-3 py-1 rounded-full">AI</span>
                <span className="bg-slate-200 text-slate-700 text-sm px-3 py-1 rounded-full">Technology</span>
                <span className="bg-slate-200 text-slate-700 text-sm px-3 py-1 rounded-full">Business</span>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-900 mb-2">{t('blogPost.share')}</h3>
              <div className="flex items-center space-x-3">
                <button className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
                  </svg>
                </button>
                <button className="bg-blue-400 text-white p-2 rounded-lg hover:bg-blue-500 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </button>
                <button className="bg-blue-700 text-white p-2 rounded-lg hover:bg-blue-800 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">{t('blogPost.relatedPosts')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.id}`}>
                  <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover-lift cursor-pointer">
                    <img 
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="bg-slate-100 text-slate-700 text-sm font-semibold px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                        <span className="text-slate-500 text-sm">{post.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3 hover:text-blue-600 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-slate-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                            <span className="text-blue-600 font-semibold text-xs">
                              {post.author.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <div>
                            <div className="font-semibold text-slate-900 text-sm">{post.author}</div>
                            <div className="text-slate-500 text-xs">{post.publishDate}</div>
                          </div>
                        </div>
                        <span className="text-blue-600 font-semibold hover:text-blue-700 text-sm">
                          {t('blog.readMore')}
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-24 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            {t('blog.newsletter.title')}
          </h2>
          <p className="text-xl text-white/90 mb-8">
            {t('blog.newsletter.description')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder={t('blog.newsletter.placeholder')}
              className="w-full px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
            />
            <button className="w-full sm:w-auto bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors whitespace-nowrap">
              {t('blog.newsletter.subscribe')}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

