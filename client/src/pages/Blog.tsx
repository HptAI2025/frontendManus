import React, { useState } from 'react';
import { Link } from 'wouter';
import { useLanguage } from '@/hooks/useLanguage';

export default function Blog() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: t('blog.categories.all'), count: 12 },
    { id: 'ai-trends', name: t('blog.categories.aiTrends'), count: 4 },
    { id: 'case-study', name: t('blog.categories.caseStudy'), count: 3 },
    { id: 'how-to', name: t('blog.categories.howTo'), count: 3 },
    { id: 'technology', name: t('blog.categories.technology'), count: 2 }
  ];

  const featuredPost = {
    id: 1,
    title: t('blog.featured.title'),
    excerpt: t('blog.featured.excerpt'),
    category: t('blog.categories.aiTrends'),
    author: t('blog.featured.author'),
    publishDate: '2024-01-15',
    readTime: t('blog.featured.readTime'),
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
    featured: true
  };

  const blogPosts = [
    {
      id: 2,
      title: t('blog.posts.post1.title'),
      excerpt: t('blog.posts.post1.excerpt'),
      category: t('blog.categories.caseStudy'),
      author: t('blog.posts.post1.author'),
      publishDate: '2024-01-10',
      readTime: t('blog.posts.post1.readTime'),
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300'
    },
    {
      id: 3,
      title: t('blog.posts.post2.title'),
      excerpt: t('blog.posts.post2.excerpt'),
      category: t('blog.categories.howTo'),
      author: t('blog.posts.post2.author'),
      publishDate: '2024-01-08',
      readTime: t('blog.posts.post2.readTime'),
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300'
    },
    {
      id: 4,
      title: t('blog.posts.post3.title'),
      excerpt: t('blog.posts.post3.excerpt'),
      category: t('blog.categories.technology'),
      author: t('blog.posts.post3.author'),
      publishDate: '2024-01-05',
      readTime: t('blog.posts.post3.readTime'),
      image: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300'
    },
    {
      id: 5,
      title: t('blog.posts.post4.title'),
      excerpt: t('blog.posts.post4.excerpt'),
      category: t('blog.categories.howTo'),
      author: t('blog.posts.post4.author'),
      publishDate: '2024-01-03',
      readTime: t('blog.posts.post4.readTime'),
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300'
    },
    {
      id: 6,
      title: t('blog.posts.post5.title'),
      excerpt: t('blog.posts.post5.excerpt'),
      category: t('blog.categories.caseStudy'),
      author: t('blog.posts.post5.author'),
      publishDate: '2024-01-01',
      readTime: t('blog.posts.post5.readTime'),
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300'
    },
    {
      id: 7,
      title: t('blog.posts.post6.title'),
      excerpt: t('blog.posts.post6.excerpt'),
      category: t('blog.categories.aiTrends'),
      author: t('blog.posts.post6.author'),
      publishDate: '2023-12-28',
      readTime: t('blog.posts.post6.readTime'),
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300'
    }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === categories.find(cat => cat.id === selectedCategory)?.name);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            {t('blog.hero.title')}
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            {t('blog.hero.description')}
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{t('blog.featured.sectionTitle')}</h2>
          </div>
          
          <Link href={`/blog/${featuredPost.id}`}>
            <article className="bg-white rounded-2xl overflow-hidden shadow-xl hover-lift cursor-pointer" data-testid="featured-post">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="order-2 lg:order-1">
                  <img 
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                </div>
                <div className="order-1 lg:order-2 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center mb-4">
                    <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full mr-4">
                      {featuredPost.category}
                    </span>
                    <span className="text-slate-500 text-sm">{t('blog.featured.label')}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-4 hover:text-blue-600 transition-colors">
                    {featuredPost.title}
                  </h3>
                  <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-blue-600 font-semibold text-sm">
                          {featuredPost.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900">{featuredPost.author}</div>
                        <div className="text-slate-500 text-sm">{featuredPost.publishDate}</div>
                      </div>
                    </div>
                    <div className="text-slate-500 text-sm">{featuredPost.readTime}</div>
                  </div>
                </div>
              </div>
            </article>
          </Link>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">{t('blog.allPosts.title')}</h2>
            <div className="flex flex-wrap gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-slate-700 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                  data-testid={`category-${category.id}`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <Link key={post.id} href={`/blog/${post.id}`}>
                <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover-lift cursor-pointer" data-testid={`blog-post-${index + 1}`}>
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

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors" data-testid="load-more-posts">
              {t('blog.loadMore')}
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
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
              data-testid="newsletter-email"
            />
            <button className="w-full sm:w-auto bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors whitespace-nowrap" data-testid="newsletter-subscribe">
              {t('blog.newsletter.subscribe')}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
