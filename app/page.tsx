import Hero from './components/Hero'
import Icons from './components/Icons'

export default function Home() {
  return (
    <main>
      <div className="text-center">
        <h1 className="pt-10 font-bold text-3xl font-mono text-white">I&apos;m a Front End Web Developer</h1>
      </div>
      <Hero />
      <Icons /> 
    </main>
  ) 
}
