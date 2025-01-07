import "./app.css";
import ethan from "./assets/ethan.jpg";
import gitHubLogo from "./assets/github.png";
import linkedinLogo from "./assets/linkedin.png";
import gmailLogo from "./assets/gmail.png";

export function App() {
  return (
    <>
      <header className="w-full flex flex-row items-center justify-between bg-gradient-to-br from-[#b3cee8] to-[#617472] p-5 h-28 md:h-44">
        <section className="flex flex-col items-start justify-center">
          <h1 className="text-black text-4xl md:text-5xl font-thin">
            Ethan Franks
          </h1>
          <p className="text-black text-xl md:text-2xl font-thin">
            Software Engineer
          </p>
        </section>
        <div className="rounded-full overflow-hidden absolute top-2 right-2 md:top-5 md:right-5 shadow-2xl">
          <img src={ethan} className="h-44 md:h-64" />
        </div>
      </header>
      <main className="flex flex-col items-center justify-center py-5 px-5 min-h-[calc(100vh-192px)] md:min-h-[calc(100vh-256px)]"></main>
      <footer className="flex flex-row items-center justify-end p-5 gap-4">
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
      </footer>
    </>
  );
}
