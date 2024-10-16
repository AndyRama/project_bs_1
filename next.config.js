/** @type {import('next').NextConfig} */
const { withContentlayer } = require('next-contentlayer')

const nextConfig = {}

module.exports = withContentlayer(nextConfig)

// module.exports = {
//   images: {
//     domains: ['res.cloudinary.com'],
//   },
// }

module.exports = {
  devIndicators: {
    buildActivity: false,
  },
};