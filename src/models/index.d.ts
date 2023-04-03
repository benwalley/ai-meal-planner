import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerCalendar = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Calendar, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly date?: string | null;
  readonly mealType?: string | null;
  readonly recipeId?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCalendar = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Calendar, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly date?: string | null;
  readonly mealType?: string | null;
  readonly recipeId?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Calendar = LazyLoading extends LazyLoadingDisabled ? EagerCalendar : LazyCalendar

export declare const Calendar: (new (init: ModelInit<Calendar>) => Calendar) & {
  copyOf(source: Calendar, mutator: (draft: MutableModel<Calendar>) => MutableModel<Calendar> | void): Calendar;
}

type EagerRecipe = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Recipe, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Ingredients?: (string | null)[] | null;
  readonly Steps?: (string | null)[] | null;
  readonly ImageUrl?: string | null;
  readonly url?: string | null;
  readonly time?: string | null;
  readonly difficulty?: string | null;
  readonly servings?: number | null;
  readonly videoUrl?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRecipe = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Recipe, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Ingredients?: (string | null)[] | null;
  readonly Steps?: (string | null)[] | null;
  readonly ImageUrl?: string | null;
  readonly url?: string | null;
  readonly time?: string | null;
  readonly difficulty?: string | null;
  readonly servings?: number | null;
  readonly videoUrl?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Recipe = LazyLoading extends LazyLoadingDisabled ? EagerRecipe : LazyRecipe

export declare const Recipe: (new (init: ModelInit<Recipe>) => Recipe) & {
  copyOf(source: Recipe, mutator: (draft: MutableModel<Recipe>) => MutableModel<Recipe> | void): Recipe;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly likedMeals?: (string | null)[] | null;
  readonly dislikedMeals?: (string | null)[] | null;
  readonly likedIngredients?: (string | null)[] | null;
  readonly dislikedIngredients?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly likedMeals?: (string | null)[] | null;
  readonly dislikedMeals?: (string | null)[] | null;
  readonly likedIngredients?: (string | null)[] | null;
  readonly dislikedIngredients?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}