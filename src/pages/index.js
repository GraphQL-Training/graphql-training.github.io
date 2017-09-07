import React from "react";
import "../layouts/index.scss";
import "../layouts/flexgrid.scss";

const ButtonLink = ({ href, children }) => (
  <a
    className="b--white b--solid bw1 pl4 pr4 pb3 pt3 f4 ttu white tracked-light dib fw6"
    href={href}
  >
    {children}
  </a>
);

const HomeHeader = () => (
  <div className="bg-off-grey">
    <div className="white flex justify-center flex-column bg-brains-gradient">
      <div className="container mw8 w-100">
        <div className="row">
          <div className="pt1vh pb1vh col-xs-12">
            <div className="mb5">
              <h1>GraphQL Training</h1>
            </div>
            <div className="mb5">
              <h3>
                Training in London, Berlin, Paris
                <br />
                and beyond from the brain
                <br /> behind PostGraphile.
              </h3>
            </div>
            <ButtonLink href="/">Book Now</ButtonLink>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const PageHeader = () => (
  <div className="bg-off-grey relative">
    <div className="white flex justify-center flex-column bg-blue-gradient">
      <div className="container mw8 w-100">
        <div className="row">
          <div className="pt1vh pb1vh col-xs-12 tc">
            <div className="mb2">
              <h1 className="ttu tracked-light">GraphQL Training</h1>
            </div>
            <div className="mb5 flex justify-center">
              <h3>
                Here’s lots of training opportunities. And things and stuff and
                things
                <br />
                and you know what. It’s pretty great.
              </h3>
            </div>
            <div className="tools-logos-container flex justify-between w-100 pa3">
              {["graphql", "apollo", "node", "react"].map(f => (
                <img
                  className="header-tools-logo"
                  key={f}
                  src={`/images/${f}-logo.png`}
                  title={`${f} logo`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    <svg
      className="down-divider absolute events-none bottom-0 w-100 l-0"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <path d="M 0,0 50,100 100,0 100,100 0,100 z" />
    </svg>
  </div>
);

const Section = ({ className, children }) => (
  <section className={`${className} pb5 pt5`}>
    <div className="container mw8 w-100">{children}</div>
  </section>
);

const RowCenter = ({ className, children }) => (
  <div className="row">
    <div className={`col-xs-12 tc flex flex-column items-center ${className}`}>
      {children}
    </div>
  </div>
);

const Reference = ({ children }) => (
  <div className="col-xs-4 flex">
    <div className="shadow--l2 bg-white self-stretch pa4 w-100 flex flex-column justify-between">
      <blockquote className="f4 mb4 mt0">{children}</blockquote>
      <div className="flex items-center">
        <img
          className="db w3 h3 mr3 br-100"
          src="https://pbs.twimg.com/profile_images/834411354769481728/Nbrm0GlJ_400x400.jpg"
        />
        <div className="f5 ttu tracked-light">Jof Arnold</div>
      </div>
    </div>
  </div>
);

const Index = () => (
  <div>
    <HomeHeader />

    <Section className="bg-off-grey">
      <RowCenter>
        <h3>
          Nothing but awesome. You&rsquo;re getting some serious expertise here!
        </h3>
        <br />
        <br />
        <div className="shadow--l1 bg-white w-100 pt4 pb4 pr5 pl5 flex">
          <div className="flex justify-center align-center w-100">
            <div className="flex flex-column items-center mr5">
              <img
                className="br-100 h4 w4 shadow-2 db mt4 mb4"
                src="images/benjie-medium.jpg"
                alt="Profile photo of Benjie Gillam"
              />
              <div className="f4 ttu tracked-light tc">Benjie Gillam</div>
            </div>
            <p className="f4">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, a
            </p>
          </div>
        </div>
      </RowCenter>
    </Section>

    <PageHeader />

    <Section className="bg-dark white">
      <div className="row">
        <div className="col-xs-9">
          <h3 className="ttu tracked-light">Stuff</h3>
          <p className="f4">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, a
          </p>
        </div>
        <div className="col-xs-3">
          <ul className="list pa0 mb5">
            <li>Sed ut perspiciatis</li>
            <li>Nde omnis</li>
            <li>Error sit</li>
            <li>Voluptatem</li>
            <li>Accusantium</li>
          </ul>
          <ul className="list pa0 mb5">
            <li>Sed ut perspiciatis</li>
            <li>Nde omnis</li>
            <li>Error sit</li>
            <li>Voluptatem</li>
            <li>Accusantium</li>
          </ul>
        </div>
      </div>
    </Section>

    <Section className="section-dark bg-people-dark-grey">
      <div className="row">
        <div className="col-xs-6">
          <h3 className="ttu tracked-light">Stuff</h3>
          <p className="f4">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, a
          </p>
        </div>
        <div className="col-xs-6">
          <h3 className="ttu tracked-light">Stuff</h3>
          <p className="f4">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, a
          </p>
        </div>
        <div className="col-xs-12 flex justify-center mt5">
          <ButtonLink href="/">Book Now</ButtonLink>
        </div>
      </div>
    </Section>

    <Section>
      <RowCenter>
        <h2 className="ttu tracked-light">GraphQL</h2>
        <div className="quote-wrapper">
          <blockquote className="f3" cite="jof">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit.
          </blockquote>
        </div>
        <h4 className="ttu tracked-light tc">Jof Probably</h4>
      </RowCenter>
    </Section>

    <Section className="bg-fire-gradient">
      <div className="row mb5">
        <Reference>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        </Reference>
        <Reference>Stuff</Reference>
        <Reference>Things</Reference>
      </div>
      <div className="row">
        <div className="col-xs-12 flex justify-center">
          <a
            href="/"
            className="b--white b--solid bw1 pl4 pr4 pb2 pt2 bg-white f4 ttu tracked-light dib fire fw6 shadow--l2"
          >
            Book Now
          </a>
        </div>
      </div>
    </Section>

    <section className="flex split-section">
      <div className="split-left white">
        <div className="split-left-core pb6 pt4">
          <h3 className="ttu tracked-light">Stuff</h3>
          <p className="f4">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, a
          </p>
        </div>
      </div>
      <div className="split-right white">
        <div className="split-right-core pb4 pt6">
          <svg
            className="split-divider events-none h-100 top-0 absolute"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path d="M 100,0 100,100 0,100 z" />
          </svg>
          <h3 className="ttu tracked-light">Stuff</h3>
          <p className="f4">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, a dicta
          </p>
        </div>
      </div>
    </section>

    <Section className="bg-off-grey">
      <div className="row">
        <div className="col-xs-3">
          Title
          <ul className="list pl0">
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>
          </ul>
        </div>
        <div className="col-xs-3">
          Title
          <ul className="list pl0">
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>
          </ul>
        </div>
      </div>
    </Section>
  </div>
);

export default Index;
