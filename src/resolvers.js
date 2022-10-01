import Character from "./models/Character.js";

const resolvers = {
  Query: {
    allCharacters: async () => await Character.find({}),
    allAnimes: async () => {
      const characters = await Character.find({});
      //const animes = [];

      return characters.map(character => character.anime);
    },
    findCharacter: async (root, args) => {
      const { name } = args;
      const characters = await Character.find({
        name: {$regex: name, $options: "i"}
      });

      return characters;
    },
    findAnime: async (root, args) => {
      const { name } = args;
      const characters = await Character.find({
        'anime.name': {$regex: name, $options: "i"}
      });

      return characters;
    }
  },
  Mutation: {
    addRecord: async (root, args) => {
      if (!args.seiyu) {
        args.seiyu = "";
      }
      // console.log(args);
      const record = await Character.create(args);
      return record;
    }
  }
}

export default resolvers;