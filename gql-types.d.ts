export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  createPainter: Painter;
  createPainting: Painting;
};


export type MutationCreatePainterArgs = {
  input: PainterInput;
};


export type MutationCreatePaintingArgs = {
  input: PaintingInput;
};

export type Painter = {
  __typename?: 'Painter';
  country: Scalars['String'];
  name: Scalars['String'];
  techniques: Array<Maybe<Scalars['String']>>;
};

export type PainterInput = {
  country: Scalars['String'];
  name: Scalars['String'];
  techniques: Array<Maybe<Scalars['String']>>;
};

export type Painting = {
  __typename?: 'Painting';
  author: Scalars['String'];
  date: Scalars['String'];
  technique: Scalars['String'];
  title: Scalars['String'];
};

export type PaintingInput = {
  author: Scalars['String'];
  date: Scalars['String'];
  technique: Scalars['String'];
  title: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  painter?: Maybe<Painter>;
  painters: Array<Maybe<Painter>>;
  painting?: Maybe<Painting>;
  paintings: Array<Maybe<Painting>>;
};


export type QueryPainterArgs = {
  name?: Maybe<Scalars['String']>;
};


export type QueryPaintingArgs = {
  title?: Maybe<Scalars['String']>;
};
