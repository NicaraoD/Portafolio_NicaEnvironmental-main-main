
import HeaderCom from './components/HeaderCom'
import Hero from './components/Hero'

export default function MainContext() {
  return (
    <>
      <HeaderCom />
      <main className='main_page_container'>
        <Hero />
      </main>
    </>
  )
}
