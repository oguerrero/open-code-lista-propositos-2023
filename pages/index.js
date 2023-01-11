import Head from 'next/head'

export default function Home () {
  return (
    <>
      <Head>
        <title>Propositos 2023</title>
        <meta name="description" content="Lista de Propositos para 2023" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className='flex m-4'>
          <div className='w-80'>Izq</div>
          <div>Der</div>
        </div>
      </main>
    </>
  )
}
