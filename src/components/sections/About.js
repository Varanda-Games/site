import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';

const About = () => (
  <StaticQuery
    query={graphql`
      query {
        art_sinucashowdown: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "promo_sinucashowdown2" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        art_chqiosbanner: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "chqiosbanner" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        art_chillhopquest: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "chqbanner" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        art_ideas: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "ideas" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="games">
        <Container>
          <h1>Our Games</h1>
          <Grid>
            <div>
              <h2>Snooker Showdown: Pocket Warriors</h2>
              <p>
                Prove your valor and be the champion of Nova Brazilis' most popular sport in a local multiplayer game that mixes snooker and top down shooter genres. 2 to 4 players share the same arena, and are split into two teams, with each player able to choose an ability to help their team win the battle.
                <small><br />In Development.<br />Made with Unity.</small>
              </p>
            </div>
            <Art>
              <Img fluid={data.art_sinucashowdown.childImageSharp.fluid} />
            </Art>
          </Grid>
          <Grid inverse>
            <Art>
              <Img fluid={data.art_chillhopquest.childImageSharp.fluid} />
            </Art>
            <div>
              <h2>Chill Hop Quest</h2>
              <p>
                Join Hoody in his search for inspiration to become a Chillhop producer. Chill Hop Quest is a puzzle game where new mechanics are introduced continuously as you advance. Different tiles interact in different ways with the player, and combining the ones you've seen with each new kind enables entirely new strategies.
              <br /><small>In Pre-order.<br />Made with Unity.</small>
                <br />
               
                <Grid style={{ alignItems: 'left', justifyItems: 'left' }}>
                <a target='_blank' href='https://play.google.com/store/apps/details?id=games.varanda.chillhop&amp;pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png' style={{ width: 200 + 'px' }} /></a>
                <a target='_blank' href='https://apps.apple.com/us/app/chill-hop-quest/id1511425946?ls=1'>
                  <Img fluid={data.art_chqiosbanner.childImageSharp.fluid} style={{ width: 170 + 'px' }} /></a>
                </Grid>
              </p>
            </div>
          </Grid>
          <Grid>
            <div>
              <h2>Mini Varanda: Minimalist Games</h2>
              <p>
                Our series of minimalist games and experiences
                focusing mobile and PC.
                <br />
                <br />
              </p>
            </div>
            <Art>
              <Img fluid={data.art_ideas.childImageSharp.fluid} />
            </Art>
          </Grid>
        </Container>
      </Section>
    )}
  />
);

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 40px;
  text-align: right;
  align-items: center;
  justify-items: center;
  margin: 24px 0;

  ${props =>
    props.inverse &&
    `
    text-align: left;
    grid-template-columns: 2fr 3fr;
  `}

  h2 {
    margin-bottom: 16px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: left;
    margin-bottom: 96px;

    &:last-child {
      margin-bottom: 24px;
    }

    ${props =>
    props.inverse &&
    `
        ${Art} {
          order: 2;
        }
    `}
  }
`;

const Art = styled.figure`
  margin: 0;
  max-width: 380px;
  width: 100%;
`;

export default About;
