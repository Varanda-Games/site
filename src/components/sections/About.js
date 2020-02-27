import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';

const About = () => (
  <StaticQuery
    query={graphql`
      query {
        art_fast: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "fast" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        art_learn: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "learn_yourself" }
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
                <small><br/>In Development.<br/>Made with Unity.</small> 
              </p>
            </div>
            <Art>
              <Img fluid={data.art_fast.childImageSharp.fluid} />
            </Art>
          </Grid>
          <Grid inverse>
            <Art>
              <Img fluid={data.art_learn.childImageSharp.fluid} />
            </Art>
            <div>
              <h2>Rainbow Grid and the Uni</h2>
              <p>
              The arrogant Unigiraffe, refusing to lower her neck to pass under the Rainbow, shattered it and split its pieces all over the sky. The Unicorn wants to restore the Rainbow, but he needs to use his Moves and Jumps wisely to beat all puzzles in the Sky Worlds and collect all the pieces.
              <br/><small>In Development.<br/>Made with Unity.</small> 
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
