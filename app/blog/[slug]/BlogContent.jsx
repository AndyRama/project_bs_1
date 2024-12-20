'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { allPosts } from 'contentlayer/generated'
import { compareDesc, format, parseISO } from 'date-fns'
import PostCard from '@/app/components/blog/category/PostCard'
import { getMDXComponent } from 'next-contentlayer/hooks'
import Cta1 from '@/app/components/Cta1'

function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

const BlogContent = ({ post }) => {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  )

  let MDXContent

  if (!posts) return null

  if (!post) {
    console.log('Blog Post not found')
  } else {
    MDXContent = getMDXComponent(post.body.code)
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transistion: {
            delay: 0.2,
            duration: 0.5,
          },
        }}
        viewport={{ once: true }}
        className="pt-44 pb-20 px-4 md:px-8 lg:mx-auto"
      >
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16">
            {/* Content title post */}
            <h2 className="text-[#2F2E2E] text-3xl lg:text-5xl font-bold">
              {post.title}
            </h2>

            <p className="text-slate-500 mt-10 text-center">
              <span className="inline-flex space-x-3">
                <span>{format(parseISO(post.date), 'LLL d, yyyy')}</span>
                <span>•</span>
                <span>{post.author}</span>
              </span>

              <span className="mx-3">•</span>

              {post.categories?.map((category, index) => (
                <Link
                  href={`/blog/categories/${slugify(category.title)}`}
                  key={category.title}
                  className="font-medium"
                >
                  {category.title}
                  {index < post.categories.length - 1 ? ` | ` : ``}
                </Link>
              ))}
            </p>
          </div>

          {/* Content Image post */}
          <div className="mb-16">
            <Image
              src={post.image}
              width={1065}
              height={644}
              className="object-cover object-top rounded-md"
              alt={post.title}
            />
          </div>

          <article className="prose mx-auto max-w-2xl">
            <MDXContent />
          </article>

          {/* <Cta2 /> */}
          <div className="max-w-5xl mx-auto mt-20 lg:mt-32">
            <h2 className="text-2xl text-gray-700 mb-10">
              Plus d&apos;articles de mon blog
            </h2>

            {/* Card others posts */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {posts
                .filter((a) => post.title !== a.title)
                .map((item, index) => {
                  if (index > 2) return null
                  return <PostCard key={index} index={index} post={item} />
                })}
            </div>

            {/* Btn others post */}
            <div className="flex justify-center mt-10 pb-20">
              <Link
                href="/blog"
                className="transition-all duration-300 ease-in-out text-[11.5px] tracking-[2px] font-bold uppercase
               before:bg-gradient-to-r from-red-500 to-red-800 hover:transparent hover:border-white py-4 px-3
             text-white hover:shadown-2xl rounded-md"
              >
                Voir tous mes articles
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
      <Cta1 />
    </>
  )
}

export default BlogContent
