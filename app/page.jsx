import Hero from './components/Hero'
import RecentBlog from './components/RecentBlog'
import Stats from './components/Stats'
import CardProgram from './components/CardProgram'
import DescriptionCard from './components/DescriptionCard'
import RecentProject2 from './components/RecentProject2'

export default function Home() {
  return (
    <>
      <Hero className="pt-32 md:pt-22 pb-22" />
      <DescriptionCard
        className="mt-28 pb-22"
        title=" Express dépannage"
        subTitle="Plomberie"
      />
      <RecentProject2 className="pt-14 pb-15 " />
      <Stats />
      <CardProgram/>
      <Stats />
      <RecentBlog className="pt-14 pb-15 " />
      <Hero className="pt-32 md:pt-22 pb-22" />
    </>
  )
}
