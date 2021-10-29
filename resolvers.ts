import { painters, paintings } from './database';
import {
  Painter,
  Painting,
  MutationCreatePainterArgs,
  MutationCreatePaintingArgs,
  QueryPainterArgs,
  QueryPaintingArgs,
} from './gql-types';

const resolvers = {
  Query: {
    painters: (): Painter[] => painters,
    paintings: (): Painting[] => paintings,
    painter(_: any, { name }: QueryPainterArgs): Painter | undefined {
      console.log(name);
      return painters.find((painter) => painter.name === name);
    },
    painting(_: any, { title }: QueryPaintingArgs): Painting | undefined {
      return paintings.find((painting) => painting.title === title);
    },
  },
  Mutation: {
    createPainter(_: any, { input: painter }: MutationCreatePainterArgs): Painter {
      painters.push(painter);
      return painter;
    },
    createPainting(_: any, { input: painting }: MutationCreatePaintingArgs): Painting {
      paintings.push(painting);
      return painting;
    }
  }
};

export default resolvers;
