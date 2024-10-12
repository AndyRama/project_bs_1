import {
  defineNestedType,
  defineDocumentType,
  makeSource,
} from 'contentlayer/source-files'

const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `blog/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'the title of the post ',
      required: true,
    },
    excerpt: {
      type: 'string',
      description: 'the description of the post ',
      required: true,
    },
    date: {
      type: 'date',
      description: 'the date of the post ',
      required: true,
    },
    image: {
      type: 'string',
      description: 'the featured image of the post ',
      required: true,
    },
    author: {
      type: 'string',
      description: 'the author image of the post ',
      required: true,
    },
    categories: {
      type: 'list',
      of: Category,
      description: 'the categories image of the post ',
      required: true,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `${doc._raw.flattenedPath}`,
    },
  },
}))

const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: `project/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the project',
      require: true,
    },
    location: {
      type: 'string',
      description: 'The location of the project',
      require: true,
    },
    date: {
      type: 'date',
      description: 'The date of the project',
      require: true,
    },
    image: {
      type: 'string',
      description: 'The image of the project',
      require: true,
    },
    client: {
      type: 'string',
      description: 'The client of the project',
      require: true,
    },
    year: {
      type: 'string',
      description: 'The year of the project',
      require: true,
    },
    duration: {
      type: 'string',
      description: 'The duration of the project',
      require: true,
    },
    realisation: {
      type: 'string',
      description: 'The type of the project realised',
      require: true,
    },
    description: {
      type: 'string',
      description: 'the description content of the project ',
      required: true,
    },
    herb: {
      type: 'string',
      description: 'the url of the project ',
      required: true,
    },
    github: {
      type: 'string',
      description: 'the code content of the project ',
      required: true,
    },
    categories: {
      type: 'list',
      of: Category,
      description: 'the categories image of the project',
      required: true,
    },
    stacks: {
      type: 'list',
      of: Stack,
      description: 'the stack of the project',
      required: true,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
  },
}))

const Category = defineNestedType(() => ({
  name: 'Category',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the category',
      required: true,
    },
  },
}))

const Stack = defineNestedType(() => ({
  name: 'Stack',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the stack',
      required: true,
    },
  },
}))

const Info = defineDocumentType(() => ({
  name: 'Info',
  filePathPattern: `privacies/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'the title of the info ',
      required: true,
    },
    excerpt: {
      type: 'string',
      description: 'the description of the info ',
      required: true,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `${doc._raw.flattenedPath}`,
    },
  },
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post, Info, Project],
})
