// module.exports = {
//     images: {
//       remotePatterns: [
//         {
//           protocol: 'https',
//           hostname: 'https://ik.imagekit.io/',
//           port: '',
//           pathname: 'v24zntfh1/Jhawar/**',
//         },
//       ],
//     },
//   }

module.exports = {
    images: {
        domains: ['ik.imagekit.io']
    },
    env: {
        API_URL: process.env.NEXT_PUBLIC_BACKEND_URL,
        API_KEY: process.env.NEXT_PUBLIC_BACKEND_API_KEY
    },
}