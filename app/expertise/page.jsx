import Subscribe from './../components/Subscribe'
import SubHero from '../components/expertise/SubHero'
import AnimatedBanner from '../components/AnimatedBanner'

export const metadata = {
  title: 'Expertise et spécialisation',
}
export default function Expertise() {
  return (
    <>
      <AnimatedBanner />
      <SubHero
        className="pt-32"
        subTitle="Toutes mon"
        title="Expertise"
        description=" Je suis un développeur web dévoué, animé par la volonté de créer des expériences 
        utilisateur exceptionnelles. Mon expertise couvre l'ensemble du processus de développement, 
        depuis la conception initiale jusqu'à la mise en ligne et l'optimisation continue. Je mets un point
        d'honneur à rester à la pointe des dernières technologies et tendances du web pour offrir des solutions 
        innovantes et adaptées aux besoins de mes clients."
      />
      <Subscribe className="py-16 pt-64 lg:py-32 " />
    </>
  )
}
