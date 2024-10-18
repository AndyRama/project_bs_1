import Hero from './components/Hero'
import Hero2 from './components/Hero2'
import RecentBlog from './components/RecentBlog'
import FAQ from './components/FAQ'
import Cta1 from './components/Cta1'
import Cta2 from './components/Cta2'
import CardProgram from './components/CardProgram'
import DescriptionCard from './components/DescriptionCard'
import RecentProject2 from './components/RecentProject2'
import GridPricing from './components/GridPricing'

export default function Home() {
  return (
    <>
      <Hero className="pt-28 md:pt-32 " />
      {/* <Hero2 className="pt-32 md:pt-22 pb-22" /> */}
      <DescriptionCard
        className="mt-28 pb-22"
        title=" Express dépannage"
        subTitle="Plomberie"
      />
      <RecentProject2 className="pt-14 pb-15 " />
      <Cta1/>
      {/* <CardProgram /> */}
      <GridPricing className="pt-14 pb-14 " />
      <Cta2/>
      <FAQ/>
      <Cta1/>
      <RecentBlog className="pt-14 pb-15 " />
      <Hero className="pt-32 md:pt-22 pb-22" />
    </>
  )
}
