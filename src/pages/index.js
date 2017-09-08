import React from "react";
import Helmet from "react-helmet";
import { ButtonLink, ButtonLinkSolid } from "../components/Button";
import PageHeader from "../components/PageHeader";
import { Section, RowCenter } from "../components/LayoutHelpers";

const Reference = ({ children }) => (
  <div className="flex mb0-l justify-center h-100">
    <div className="shadow--l2 bg-white self-stretch pa4 w-100 mw6 flex flex-column justify-between">
      <blockquote className="f4-ns f5 mb4 mt0">{children}</blockquote>
      <div className="flex items-center">
        <img
          className="db w3 h3 mr3 br-100"
          src="https://pbs.twimg.com/profile_images/834411354769481728/Nbrm0GlJ_400x400.jpg"
        />
        <div className="f4-l f5 ttu tracked-light">Jof Arnold</div>
      </div>
    </div>
  </div>
);

const HeaderLink = ({ faName, children, href, title, pushRight }) => (
  <li className={`${pushRight ? "ml-auto" : "ml4"} `}>
    <a href={href} className="flex items-center no-underline-hover">
      {!!faName && <span className={`fa fa-${faName} f3 mr2 white`} />}
      <span className="white">{children}</span>
    </a>
  </li>
);

const TitledParagraph = ({ title, children }) => (
  <div>
    {title && <h3 className="ttu tracked-light">{title}</h3>}
    <p className="f5 f4-ns">{children}</p>
  </div>
);

const FooterItem = ({ children, href, title }) => (
  <li className="mr3 mb3">
    {href ? (
      <a href={href} title={title} target="_blank">
        {children}
      </a>
    ) : (
      children
    )}
  </li>
);

const Index = () => (
  <div>
    <Helmet
      title={`GraphQL Training in London, Manchester, Berlin and Beyond`}
      meta={[
        {
          name: "description",
          content: "GraphQL training in London, Manchester and Berlin",
        },
        {
          name: "keywords",
          content:
            "GraphQL, API, Graph, PostgreSQL, Nodejs, Reactjs, London, Berline",
        },
      ]}
    />
    <PageHeader
      nav={
        <ul className="flex justify-start pv0 ph3 items-center">
          <HeaderLink faName="github" pushRight>
            Graphile
          </HeaderLink>
          <HeaderLink faName="github">Graphile Build</HeaderLink>
        </ul>
      }
    />
    <Section className="bg-dark white">
      <div className="row">
        <div className="col-xs-12 col-md-9 flex flex-column tc tl-l items-center items-start-l">
          <TitledParagraph title="Stuff1">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, a
          </TitledParagraph>
          <TitledParagraph title="Stuff2">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, a
          </TitledParagraph>
        </div>
        <div className="col-xs-12 col-md-3 flex flex-row flex-column-l tc tl-l items-center justify-center justify-start-l items-left-l flex-wrap flex-nowrap-l">
          <ul className="list pa0 ma3 mb4-l">
            <li>Sed ut perspiciatis</li>
            <li>Nde omnis</li>
            <li>Error sit</li>
            <li>Voluptatem</li>
            <li>Accusantium</li>
          </ul>
          <ul className="list pa0 ma3 mb4-l">
            <li>Sed ut perspiciatis</li>
            <li>Nde omnis</li>
            <li>Error sit</li>
            <li>Voluptatem</li>
            <li>Accusantium</li>
          </ul>
        </div>
      </div>
    </Section>

    <Section className="bg-off-grey">
      <RowCenter>
        <h3 className="tc">
          Nothing but awesome. You&rsquo;re getting some serious expertise here!
        </h3>
        <br />
        <br />
        <div className="shadow--l1 bg-white w-100 pv4 ph0">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-md-3 flex flex-column items-center">
                <img
                  className="br-100 h4 w4 shadow-2 db mt4 mb4"
                  src="images/benjie-medium.jpg"
                  alt="Profile photo of Benjie Gillam"
                />
                <div className="f4 ttu tracked-light tc mb3 mb0-l">
                  Benjie Gillam
                </div>
              </div>
              <div className="col-xs-12 col-md-9 tc tl-l flex flex-column tc tl-l items-center items-start-l">
                <TitledParagraph>
                  “I think PostGraphQL is a game changer for API development.”.
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                  dolor sit amet, consectetur, a
                </TitledParagraph>
              </div>
            </div>
          </div>
        </div>
      </RowCenter>
    </Section>

    <Section className="section-dark bg-people-dark-grey white tc tl-l">
      <div className="row">
        <div className="col-md-6 col-xs-12 flex flex-column items-center items-start-l">
          <TitledParagraph title="Stuff4">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, a
          </TitledParagraph>
        </div>
        <div className="col-md-6 col-xs-12 flex flex-column items-center items-start-l">
          <TitledParagraph title="Stuff5">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, a
          </TitledParagraph>
        </div>
        <div className="col-xs-12 flex justify-center pt3 pt4-l pb3 pb3-l">
          <ButtonLink href="/">Book Now</ButtonLink>
        </div>
      </div>
    </Section>

    <Section>
      <RowCenter>
        <h3 className="ttu tracked-light">
          GraphQL &ndash; The Future of Web APIS
        </h3>
        <div className="quote-wrapper">
          <blockquote className="f5 f4-ns f3-l" cite="jof">
            GraphQL is a query language for APIs and a runtime for fulfilling
            those queries with your existing data. GraphQL provides a complete
            and understandable description of the data in your API, gives
            clients the power to ask for exactly what they need and nothing
            more, makes it easier to evolve APIs over time, and enables powerful
            developer tools.
          </blockquote>
        </div>
        <h4 className="ttu tracked-light tc">Creator of GraphQL</h4>
      </RowCenter>
    </Section>

    <Section className="bg-fire-gradient">
      <div className="row">
        <div className="col-xs-12 col-md-4 mb3 mb0-l">
          <Reference>
            The workshop was presented with well thought out code samples - and
            even those I was on a (less than ideally set up Windows machine),
            Benjie knew just how to sort out any problems that arose.
          </Reference>
        </div>
        <div className="col-xs-12 col-md-4 mb3 mb0-l">
          <Reference>
            Benjie can give a massively in-depth talk without making your brain
            melt. His speaking style makes the subject very approachable and
            gets you excited for what you are learning
          </Reference>
        </div>
        <div className="col-xs-12 col-md-4">
          <Reference>
            Great presentation Benjie. The live code running in the slides was
            particularly impressive. Very cool
          </Reference>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 flex justify-center pt4">
          <ButtonLinkSolid href="/">Book Now</ButtonLinkSolid>
        </div>
      </div>
    </Section>

    <section className="split-section tc-ns tl-l">
      <div className="split-left white">
        <div className="split-left-core pb6 pt4">
          <TitledParagraph title="Stuff6">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, a
          </TitledParagraph>
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
          <TitledParagraph title="Stuff7">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, a dicta
          </TitledParagraph>
        </div>
      </div>
    </section>

    <Section className="bg-off-grey">
      <div className="row">
        <div className="col-xs-12 col-sm-4">
          <ul className="list pl0">
            <FooterItem href="https://graphile.org">graphile.org</FooterItem>
            <FooterItem href="https://www.twitter.com/benjie">
              @benjie
            </FooterItem>
            <FooterItem href="https://www.twitter.com/jofarnold">
              @jofarnold
            </FooterItem>
            <FooterItem href="mailto://hello@graphql-training.com">
              hello@graphql-training.com
            </FooterItem>
          </ul>
        </div>
        <div className="col-xs-12 col-sm-4">
          <ul className="list pl0">
            <FooterItem href="https://www.twitter.com/benjie">
              @benjie
            </FooterItem>
            <FooterItem href="https://www.twitter.com/jofarnold">
              @jofarnold
            </FooterItem>
            <FooterItem href="mailto://hello@graphql-training.com">
              hello@graphql-training.com
            </FooterItem>
          </ul>
        </div>
      </div>
    </Section>
  </div>
);

export default Index;
