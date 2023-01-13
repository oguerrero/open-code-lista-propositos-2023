import Head from 'next/head'
import ResolutionActions from './components/ResolutionActions'
import Navbar from './components/Navbar'

export default function Home() {


  return (
    <>
      <Head>
        <title>Propositos 2023</title>
        <meta
          name='description'
          content='Lista de Propositos para 2023'
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />
        <link
          rel='icon'
          href='/favicon.ico'
        />
      </Head>
      <Navbar />
      <main className='flex flex-col justify-between items-center p-24 min-h-screen'>
        <div className='flex m-4'>
          <div className='w-80'>
            <ResolutionActions />
          </div>
          <div>Der</div>
        </div>
      </main>
    </>
  )
}
