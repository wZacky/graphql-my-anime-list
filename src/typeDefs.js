import { gql } from "apollo-server";

const typeDefinitions = gql`
  type Character {
    name: String!
    picture: String!
    seiyu: String
  }

  type Anime {
    name: String!
    picture: String!
  }

  input AnimeInput {
    name: String!
    picture: String!
  }

  type Query {
    allCharacters: [Character]
    findCharacter(name: String!): [Character]
    allAnimes: [Anime]
    findAnime(name: String!): [Anime]
  }

  type Mutation {
    addRecord(
      name: String!
      picture: String!
      seiyu: String
      anime: AnimeInput!
    ): Character
  }
`

export default typeDefinitions;