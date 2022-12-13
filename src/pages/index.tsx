import { type NextPage } from "next"
import Head from "next/head"
import Link from "next/link"
import { trpc } from "../utils/trpc"

const appContainer = "flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]"
const pageContainer = "container flex flex-col items-center justify-center gap-12 px-4 py-16"
const title = "text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]"
const purple = "text-[hsl(280,100%,70%)]"
const grid = "grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8"
const link = "flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
const cardTitle = "text-2xl font-bold"
const cardDescription = "text-lg"
const queryResponse = "text-2xl text-white"

const Home: NextPage = () => {
  const hello = trpc.example.hello.useQuery(
    { text: "from tRPC on Netlify" }
  )

  return (
    <>
      <Head>
        <title>Create T3 App on Netlify</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={appContainer}>
        <div className={pageContainer}>
          <h1 className={title}>
            c<span className={purple}>t3</span>a netlify
          </h1>
          <div className={grid}>
            <Link className={link} href="https://docs.netlify.com/integrations/frameworks/next-js/overview/" target="_blank">
              <h3 className={cardTitle}>Netlify</h3>
              <div className={cardDescription}>Deployment for Next.js</div>
            </Link>

            <Link className={link} href="https://create.t3.gg/en/introduction" target="_blank">
              <h3 className={cardTitle}>Documentation</h3>
              <div className={cardDescription}>Learn more about Create T3 App</div>
            </Link>
          </div>
          <p className={queryResponse}>
            {hello.data ? hello.data.greeting : "Loading tRPC query..."}
          </p>
        </div>
      </main>
    </>
  )
}

export default Home