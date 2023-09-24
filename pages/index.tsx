import Link from "next/link";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <nav className="flex-1">
        <ul>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <Footer/>
    </div>
  )
}
