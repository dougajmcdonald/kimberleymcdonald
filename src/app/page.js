import Image from "next/image"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1>Hello I&apos;m Kimberley McDonald</h1>
        <p>This is totally my own website and noone else has had any input.</p>
      </div>
      <section>
        <p>
          I&apos;m an indepedent artist who enjoys drawing and making things.
        </p>
      </section>
    </main>
  )
}
