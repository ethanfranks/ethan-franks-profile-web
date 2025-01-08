import "./app.css";
import ethan from "./assets/ethan.jpg";
import gitHubLogo from "./assets/github.png";
import linkedinLogo from "./assets/linkedin.png";
import gmailLogo from "./assets/gmail.png";

export function App() {
  return (
    <>
      <header className="fixed top-0 right-0 left-0 w-full flex flex-col justify-center">
        <section className="flex flex-col items-start justify-center h-28 md:h-44 p-5 md:p-10 bg-gradient-to-br from-[#313d46] to-[#597999]">
          <h1 className="text-white text-4xl md:text-5xl font-thin md:tracking-widest">
            Ethan Franks
          </h1>
          <p className="text-white text-xl md:text-2xl font-thin md:tracking-widest">
            Software Engineer
          </p>
        </section>
        <div className="h-36 w-36 md:h-56 md:w-56 rounded-full overflow-hidden object-cover absolute top-3 right-3 md:top-5 md:right-10 shadow-2xl">
          <img src={ethan} />
        </div>
        {/* <nav className="w-fit flex flex-row items-center bg-black/70 rounded-br-3xl">
          <a
            href="https://portfolio.ethanfranks.com"
            className="flex items-center justify-center text-center text-white text-lg md:text-xl font-thin w-24 h-10 md:h-16 md:w-48 hover:bg-black/80 hover:font-extralight hover:shadow-xl transition-all"
          >
            <p>Portfolio</p>
          </a>
          <a
            href="https://music.ethanfranks.com"
            className="flex items-center justify-center text-center text-white text-lg md:text-xl font-thin w-24 h-10 md:h-16 md:w-48 hover:bg-black/80 hover:font-extralight hover:shadow-xl transition-all rounded-br-3xl"
          >
            <p>Music</p>
          </a>
        </nav> */}
      </header>
      <main className="flex flex-col items-center justify-center py-5 px-5 md:px-10 min-h-[calc(100vh-192px)] md:min-h-[calc(100vh-256px)]"></main>
      <section className="fixed bottom-0 right-0 flex flex-row gap-5 md:gap-10 p-5 md:px-10 bg-black/70 rounded-tl-3xl">
        <a
          href="https://github.com/ethanfranks"
          target="_blank"
          rel="noreferrer"
        >
          <img src={gitHubLogo} className="h-10" />
        </a>
        <a href="mailto:j.ethan.franks@gmail.com">
          <img src={gmailLogo} className="h-10" />
        </a>
        <a
          href="https://www.linkedin.com/in/jethanfranks/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinLogo} className="h-10 -pr-1" />
        </a>
      </section>
    </>
  );
}
