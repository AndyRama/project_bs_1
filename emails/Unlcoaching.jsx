// import * as React from 'react'
// import {
//   Body,
//   Button,
//   Container,
//   Head,
//   Hr,
//   Html,
//   Img,
//   Link,
//   Preview,
//   Row,
//   Section,
//   Text,
// } from '@react-email/components'

// const baseUrl = process.env.VERCEL_URL
//   ? `https://${process.env.VERCEL_URL}`
//   : ''

// export const UnlcoachingReviewEmail = ({ authorName, authorImage, reviewText }) => {
//   const previewText = `Read ${authorName}'s review`

//   return (
//     <Html>
//       <Head />
//       <Preview>{previewText}</Preview>

//       <Body className="bg-white font-sans">
//         <Container className="mx-auto p-5 max-w-full w-[580px]">
//           <Section>
//             <Img
//               src={"https://res.cloudinary.com/dbtnehfrf/image/upload/v1717060484/Component_1_2_lragwc.png"}
//               width="96"
//               height="96"
//               alt={authorName}
//               className="mx-auto rounded-full"
//             />
//           </Section>
//           <Section className="pb-5">
//             <Row>
//               <Text className="text-2xl leading-tight font-bold text-gray-700">
//                 Here's what {authorName} wrote
//               </Text>
//               <Text className="text-lg leading-6 text-gray-700 bg-gray-100 p-6 rounded">
//                 {reviewText}
//               </Text>
//               <Text className="text-lg leading-6 text-gray-700">
//                 Now that the review period is over, we’ve posted {authorName}
//                 ’s review to your Unlcoaching profile.
//               </Text>
//               <Text className="text-lg leading-6 text-gray-700 pb-4">
//                 While it’s too late to write a review of your own, you can send
//                 your feedback to {authorName} using your Unlcoaching message thread.
//               </Text>

//               <Button className="bg-red-500 rounded text-white text-lg py-4 text-center block w-full">
//                 Envoie moi un retour
//               </Button>
//             </Row>
//           </Section>

//           <Hr className="border-gray-300 my-5" />

//           <Section>
//             <Row>
//               <Text className="text-lg leading-6 text-gray-700 font-bold">
//                 Foires Aux Questions
//               </Text>
//               <Text>
//                 <Link
//                   href="https://Unlcoaching.com/prestations"
//                   className="text-lg leading-6 text-red-500 block"
//                 >
//                   Comment ça marche ?
//                 </Link>
//               </Text>
//               <Text>
//                 <Link
//                   href="https://Unlcoaching.com/document/privacy"
//                   className="text-lg leading-6 text-red-500 block"
//                 >
//                   Mention Légal 
//                 </Link>
//               </Text>
//               <Text>
//                 <Link
//                   href="https://Unlcoaching.com/document/terms"
//                   className="text-lg leading-6 text-red-500 block"
//                 >
//                   Terms & Cookies
//                 </Link>
//               </Text>
//               <Hr className="border-gray-300 my-5" />
//               <Text className="text-sm text-gray-400 mb-2">
//                 Unlcoaching, Inc., 888 Brannan St, San Francisco, CA 94103
//               </Text>
//               <Link
//                 href="https://Unlcoaching.com"
//                 className="text-sm text-gray-400 underline"
//               >
//                 Reporter un bug
//               </Link>
//             </Row>
//           </Section>
//         </Container>
//       </Body>
//     </Html>
//   )
// }

// export default UnlcoachingReviewEmail
