import Head from 'next/head'
import classes from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Stats Preview Card</title>
        <meta name="description" content="Stats preview card react component" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={classes.main}>
        <h1>Hello world!</h1>
      </main>
    </div>
  )
}
