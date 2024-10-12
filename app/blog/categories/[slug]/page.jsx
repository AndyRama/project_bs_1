import React from 'react'
import { allPosts } from 'contentlayer/generated'
import SubHero from '@/app/components/blog/SubHero'
import Posts from '@/app/components/blog/category/Posts'

import TeamImage from './../../../../public/images/Express3.png'
import Hero from '@/app/components/Hero'

const page = ({ params }) => {
  const newTitle = params?.slug.replace('-', ' ')
  let itemsTotal = 0,
    items = null

  if (params?.slug) {
    items = allPosts.filter((post) =>
      post.categories.some(
        (category) =>
          category.title
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, '')
            .replace(/[\s_-]+/g, '-')
            .replace(/^-+|-+$/g, '') === params.slug,
      ),
    )
    itemsTotal = items.length
  }
  return (
    <>
      <SubHero
        className="pt-32 pb-10 capitalize"
        title={`${newTitle} [${itemsTotal}]`}
        subTitle="Categories"
        description="lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        image={TeamImage}
      />
      <Posts
        className="pb-32"
        archive={true}
        params={params}
        itemsPerPage={50}
      />
      <Hero className="pt-32 md:pt-22 pb-22" />
    </>
  )
}

export default page
