import React from 'react'
import { allProjects } from 'contentlayer/generated'
import SubHero from '@/app/components/project/SubHero'
import Projects from '@/app/components/project/category/Projects'
import Subscribe from '@/app/components/Subscribe'

const page = ({ params }) => {
  const newTitle = params?.slug.replace('-', ' ')
  let itemsTotal = 0,
    items = null

  if (params?.slug) {
    items = allProjects.filter((project) =>
      project.categories.some(
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
  } else {
    items = allProjects
    itemsTotal = items.length
  }
  return (
    <>
      <SubHero
        className="pt-32 pb-10 capitalize"
        title={`${newTitle} [${itemsTotal}]`}
        subTitle="Categories"
        description="lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nrojectrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
      <Projects
        className="pb-32"
        archive={true}
        params={params}
        itemsPerPage={50}
      />
      <Subscribe className="py-16 pt-32 lg:py-32" />
    </>
  )
}

export default page
