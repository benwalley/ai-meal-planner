// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Calendar, Recipe, User } = initSchema(schema);

export {
  Calendar,
  Recipe,
  User
};