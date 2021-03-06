import quigley from "./static/images/quigley.jpg";
import quigleyExpoCropped from "./static/images/quigleyExpoCropped.jpg";
import quigleyResume from "./static/pages/Ben-Quigley-resume.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import { Link, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import { Helmet } from "react-helmet";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Home = () => (
  <div className="card display">
    <div>
      <h1>Ben Quigley</h1>
      <p>
        Solutions engineer developing and managing user-friendly, effective,
        enterprise software systems.
      </p>
    </div>
    <img
      src={quigleyExpoCropped}
      alt="Ben at a HR technology expo with the Sage People team"
    />
  </div>
);

const About = () => (
  <div id="about" className="card display">
    <h1>About Ben</h1>
    <h4>
      full stack software development | teaching &amp; learning | systems
      solutions
    </h4>
    <p>
      I apply my years of experience inventing, building, and rebuilding
      processes and services at client companies, and a strong portfolio of
      digital and human-organizational skills to revolutionize how work happens
      on my team.
    </p>
    <table className="table">
      <tr>
        <th>Skills</th>
        <td>
          <ul>
            <li>business intelligence</li>

            <li>ETL</li>

            <li>data management</li>

            <li>integration development</li>

            <li>JavaScript, Linux</li>

            <li>user experience</li>

            <li>Python</li>

            <li>SaaS</li>

            <li>SQL</li>

            <li>technical sales</li>
          </ul>
        </td>
      </tr>
      <tr>
        <th>Current status</th>
        <td>Open to new projects</td>
      </tr>
    </table>
  </div>
);

const Contact = () => (
  <div id="contact" className="card display">
    <h1>Contact</h1>
    <div className="name-badge">
      <div className="details">
        <p className="emph">Ben Quigley</p>
        <p>Solutions engineer</p>
        <ul>
          <li>Home: Brooklyn, NY</li>
          <li>
            Email:{" "}
            <a href="mailto:benjamin.s.quigley@gmail.com">
              benjamin.s.quigley@gmail.com
            </a>
          </li>
        </ul>
      </div>
      <img src={quigley} className="small" alt="Ben" />
    </div>
  </div>
);

const Resume = () => (
  <div id="resume" className="card display">
    <h1>Resume</h1>
    <Document file={quigleyResume}>
      <Page pageNumber={1} />
    </Document>
  </div>
);

const AboutSite = () => (
  <div className="card mini">
    <p>
      This site was built using <a href="https://reactjs.org/">React</a>.
      Its source code is hosted{" "}
      <a href="https://github.com/BenQuigley/signmaker.dev">here</a>.
    </p>
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Ben Quigley Home</title>
          <link rel="canonical" href="http://signmaker.dev" />
        </Helmet>
        <div className="body">
          <div className="card mini">
            <p>
              <Link to="/">home</Link> | <Link to="/about">about</Link> |{" "}
              <Link to="/contact">contact</Link> |{" "}
              <a href="https://benideas.home.blog">blog</a> |{" "}
              <a href="https://github.com/BenQuigley">GitHub</a> |{" "}
              <Link to="/resume">resume</Link>
            </p>
          </div>

          {/* Route components are rendered if the path prop matches the current URL */}
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/resume">
            <Resume />
          </Route>
          <Route path="/">
            <AboutSite />
          </Route>
        </div>
      </div>
    </BrowserRouter>
  );
}
