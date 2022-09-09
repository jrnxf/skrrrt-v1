import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
const defaultOptions = {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  date: any
  jsonb: any
  numeric: any
  timestamptz: any
  uuid: any
}

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>
  _gt?: Maybe<Scalars['Boolean']>
  _gte?: Maybe<Scalars['Boolean']>
  _in?: Maybe<Array<Scalars['Boolean']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['Boolean']>
  _lte?: Maybe<Scalars['Boolean']>
  _neq?: Maybe<Scalars['Boolean']>
  _nin?: Maybe<Array<Scalars['Boolean']>>
}

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>
  _gt?: Maybe<Scalars['Int']>
  _gte?: Maybe<Scalars['Int']>
  _in?: Maybe<Array<Scalars['Int']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['Int']>
  _lte?: Maybe<Scalars['Int']>
  _neq?: Maybe<Scalars['Int']>
  _nin?: Maybe<Array<Scalars['Int']>>
}

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>
  _gt?: Maybe<Scalars['String']>
  _gte?: Maybe<Scalars['String']>
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['String']>
  _in?: Maybe<Array<Scalars['String']>>
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['String']>
  _is_null?: Maybe<Scalars['Boolean']>
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['String']>
  _lt?: Maybe<Scalars['String']>
  _lte?: Maybe<Scalars['String']>
  _neq?: Maybe<Scalars['String']>
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['String']>
  _nin?: Maybe<Array<Scalars['String']>>
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['String']>
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['String']>
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['String']>
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['String']>
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['String']>
}

/** columns and relationships of "chat_messages" */
export type Chat_Messages = {
  __typename?: 'chat_messages'
  /** An object relationship */
  author?: Maybe<Users>
  author_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  id: Scalars['Int']
  /** An array relationship */
  likes: Array<Likes_Chat_Message_User>
  /** An aggregate relationship */
  likes_aggregate: Likes_Chat_Message_User_Aggregate
  text: Scalars['String']
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** columns and relationships of "chat_messages" */
export type Chat_MessagesLikesArgs = {
  distinct_on?: Maybe<Array<Likes_Chat_Message_User_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Likes_Chat_Message_User_Order_By>>
  where?: Maybe<Likes_Chat_Message_User_Bool_Exp>
}

/** columns and relationships of "chat_messages" */
export type Chat_MessagesLikes_AggregateArgs = {
  distinct_on?: Maybe<Array<Likes_Chat_Message_User_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Likes_Chat_Message_User_Order_By>>
  where?: Maybe<Likes_Chat_Message_User_Bool_Exp>
}

/** aggregated selection of "chat_messages" */
export type Chat_Messages_Aggregate = {
  __typename?: 'chat_messages_aggregate'
  aggregate?: Maybe<Chat_Messages_Aggregate_Fields>
  nodes: Array<Chat_Messages>
}

/** aggregate fields of "chat_messages" */
export type Chat_Messages_Aggregate_Fields = {
  __typename?: 'chat_messages_aggregate_fields'
  avg?: Maybe<Chat_Messages_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Chat_Messages_Max_Fields>
  min?: Maybe<Chat_Messages_Min_Fields>
  stddev?: Maybe<Chat_Messages_Stddev_Fields>
  stddev_pop?: Maybe<Chat_Messages_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Chat_Messages_Stddev_Samp_Fields>
  sum?: Maybe<Chat_Messages_Sum_Fields>
  var_pop?: Maybe<Chat_Messages_Var_Pop_Fields>
  var_samp?: Maybe<Chat_Messages_Var_Samp_Fields>
  variance?: Maybe<Chat_Messages_Variance_Fields>
}

/** aggregate fields of "chat_messages" */
export type Chat_Messages_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Chat_Messages_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "chat_messages" */
export type Chat_Messages_Aggregate_Order_By = {
  avg?: Maybe<Chat_Messages_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Chat_Messages_Max_Order_By>
  min?: Maybe<Chat_Messages_Min_Order_By>
  stddev?: Maybe<Chat_Messages_Stddev_Order_By>
  stddev_pop?: Maybe<Chat_Messages_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Chat_Messages_Stddev_Samp_Order_By>
  sum?: Maybe<Chat_Messages_Sum_Order_By>
  var_pop?: Maybe<Chat_Messages_Var_Pop_Order_By>
  var_samp?: Maybe<Chat_Messages_Var_Samp_Order_By>
  variance?: Maybe<Chat_Messages_Variance_Order_By>
}

/** input type for inserting array relation for remote table "chat_messages" */
export type Chat_Messages_Arr_Rel_Insert_Input = {
  data: Array<Chat_Messages_Insert_Input>
  /** on conflict condition */
  on_conflict?: Maybe<Chat_Messages_On_Conflict>
}

/** aggregate avg on columns */
export type Chat_Messages_Avg_Fields = {
  __typename?: 'chat_messages_avg_fields'
  author_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "chat_messages" */
export type Chat_Messages_Avg_Order_By = {
  author_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "chat_messages". All fields are combined with a logical 'AND'. */
export type Chat_Messages_Bool_Exp = {
  _and?: Maybe<Array<Chat_Messages_Bool_Exp>>
  _not?: Maybe<Chat_Messages_Bool_Exp>
  _or?: Maybe<Array<Chat_Messages_Bool_Exp>>
  author?: Maybe<Users_Bool_Exp>
  author_id?: Maybe<Int_Comparison_Exp>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  id?: Maybe<Int_Comparison_Exp>
  likes?: Maybe<Likes_Chat_Message_User_Bool_Exp>
  text?: Maybe<String_Comparison_Exp>
  updated_at?: Maybe<Timestamptz_Comparison_Exp>
}

/** unique or primary key constraints on table "chat_messages" */
export enum Chat_Messages_Constraint {
  /** unique or primary key constraint */
  ChatMessagesPkey = 'chat_messages_pkey',
  /** unique or primary key constraint */
  ChatMessagesRnKey = 'chat_messages_rn_key',
}

/** input type for incrementing numeric columns in table "chat_messages" */
export type Chat_Messages_Inc_Input = {
  author_id?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "chat_messages" */
export type Chat_Messages_Insert_Input = {
  author?: Maybe<Users_Obj_Rel_Insert_Input>
  author_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  likes?: Maybe<Likes_Chat_Message_User_Arr_Rel_Insert_Input>
  text?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregate max on columns */
export type Chat_Messages_Max_Fields = {
  __typename?: 'chat_messages_max_fields'
  author_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  text?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by max() on columns of table "chat_messages" */
export type Chat_Messages_Max_Order_By = {
  author_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  text?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Chat_Messages_Min_Fields = {
  __typename?: 'chat_messages_min_fields'
  author_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  text?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by min() on columns of table "chat_messages" */
export type Chat_Messages_Min_Order_By = {
  author_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  text?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** response of any mutation on the table "chat_messages" */
export type Chat_Messages_Mutation_Response = {
  __typename?: 'chat_messages_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Chat_Messages>
}

/** input type for inserting object relation for remote table "chat_messages" */
export type Chat_Messages_Obj_Rel_Insert_Input = {
  data: Chat_Messages_Insert_Input
  /** on conflict condition */
  on_conflict?: Maybe<Chat_Messages_On_Conflict>
}

/** on conflict condition type for table "chat_messages" */
export type Chat_Messages_On_Conflict = {
  constraint: Chat_Messages_Constraint
  update_columns?: Array<Chat_Messages_Update_Column>
  where?: Maybe<Chat_Messages_Bool_Exp>
}

/** Ordering options when selecting data from "chat_messages". */
export type Chat_Messages_Order_By = {
  author?: Maybe<Users_Order_By>
  author_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  likes_aggregate?: Maybe<Likes_Chat_Message_User_Aggregate_Order_By>
  text?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** primary key columns input for table: chat_messages */
export type Chat_Messages_Pk_Columns_Input = {
  id: Scalars['Int']
}

/** select columns of table "chat_messages" */
export enum Chat_Messages_Select_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Text = 'text',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "chat_messages" */
export type Chat_Messages_Set_Input = {
  author_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  text?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregate stddev on columns */
export type Chat_Messages_Stddev_Fields = {
  __typename?: 'chat_messages_stddev_fields'
  author_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "chat_messages" */
export type Chat_Messages_Stddev_Order_By = {
  author_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Chat_Messages_Stddev_Pop_Fields = {
  __typename?: 'chat_messages_stddev_pop_fields'
  author_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "chat_messages" */
export type Chat_Messages_Stddev_Pop_Order_By = {
  author_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Chat_Messages_Stddev_Samp_Fields = {
  __typename?: 'chat_messages_stddev_samp_fields'
  author_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "chat_messages" */
export type Chat_Messages_Stddev_Samp_Order_By = {
  author_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Chat_Messages_Sum_Fields = {
  __typename?: 'chat_messages_sum_fields'
  author_id?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "chat_messages" */
export type Chat_Messages_Sum_Order_By = {
  author_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
}

/** update columns of table "chat_messages" */
export enum Chat_Messages_Update_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Text = 'text',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** aggregate var_pop on columns */
export type Chat_Messages_Var_Pop_Fields = {
  __typename?: 'chat_messages_var_pop_fields'
  author_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "chat_messages" */
export type Chat_Messages_Var_Pop_Order_By = {
  author_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Chat_Messages_Var_Samp_Fields = {
  __typename?: 'chat_messages_var_samp_fields'
  author_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "chat_messages" */
export type Chat_Messages_Var_Samp_Order_By = {
  author_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Chat_Messages_Variance_Fields = {
  __typename?: 'chat_messages_variance_fields'
  author_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "chat_messages" */
export type Chat_Messages_Variance_Order_By = {
  author_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
}

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: Maybe<Scalars['date']>
  _gt?: Maybe<Scalars['date']>
  _gte?: Maybe<Scalars['date']>
  _in?: Maybe<Array<Scalars['date']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['date']>
  _lte?: Maybe<Scalars['date']>
  _neq?: Maybe<Scalars['date']>
  _nin?: Maybe<Array<Scalars['date']>>
}

/** columns and relationships of "e_post_tags" */
export type E_Post_Tags = {
  __typename?: 'e_post_tags'
  type: Scalars['String']
}

/** aggregated selection of "e_post_tags" */
export type E_Post_Tags_Aggregate = {
  __typename?: 'e_post_tags_aggregate'
  aggregate?: Maybe<E_Post_Tags_Aggregate_Fields>
  nodes: Array<E_Post_Tags>
}

/** aggregate fields of "e_post_tags" */
export type E_Post_Tags_Aggregate_Fields = {
  __typename?: 'e_post_tags_aggregate_fields'
  count: Scalars['Int']
  max?: Maybe<E_Post_Tags_Max_Fields>
  min?: Maybe<E_Post_Tags_Min_Fields>
}

/** aggregate fields of "e_post_tags" */
export type E_Post_Tags_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<E_Post_Tags_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** Boolean expression to filter rows from the table "e_post_tags". All fields are combined with a logical 'AND'. */
export type E_Post_Tags_Bool_Exp = {
  _and?: Maybe<Array<E_Post_Tags_Bool_Exp>>
  _not?: Maybe<E_Post_Tags_Bool_Exp>
  _or?: Maybe<Array<E_Post_Tags_Bool_Exp>>
  type?: Maybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "e_post_tags" */
export enum E_Post_Tags_Constraint {
  /** unique or primary key constraint */
  EPostTagsPkey = 'e_post_tags_pkey',
}

export enum E_Post_Tags_Enum {
  Buy = 'buy',
  Distance = 'distance',
  Flatland = 'flatland',
  Freestyle = 'freestyle',
  Memes = 'memes',
  Mountain = 'mountain',
  Nbds = 'nbds',
  Random = 'random',
  Sell = 'sell',
  Street = 'street',
  Til = 'til',
  Trials = 'trials',
}

/** Boolean expression to compare columns of type "e_post_tags_enum". All fields are combined with logical 'AND'. */
export type E_Post_Tags_Enum_Comparison_Exp = {
  _eq?: Maybe<E_Post_Tags_Enum>
  _in?: Maybe<Array<E_Post_Tags_Enum>>
  _is_null?: Maybe<Scalars['Boolean']>
  _neq?: Maybe<E_Post_Tags_Enum>
  _nin?: Maybe<Array<E_Post_Tags_Enum>>
}

/** input type for inserting data into table "e_post_tags" */
export type E_Post_Tags_Insert_Input = {
  type?: Maybe<Scalars['String']>
}

/** aggregate max on columns */
export type E_Post_Tags_Max_Fields = {
  __typename?: 'e_post_tags_max_fields'
  type?: Maybe<Scalars['String']>
}

/** aggregate min on columns */
export type E_Post_Tags_Min_Fields = {
  __typename?: 'e_post_tags_min_fields'
  type?: Maybe<Scalars['String']>
}

/** response of any mutation on the table "e_post_tags" */
export type E_Post_Tags_Mutation_Response = {
  __typename?: 'e_post_tags_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<E_Post_Tags>
}

/** on conflict condition type for table "e_post_tags" */
export type E_Post_Tags_On_Conflict = {
  constraint: E_Post_Tags_Constraint
  update_columns?: Array<E_Post_Tags_Update_Column>
  where?: Maybe<E_Post_Tags_Bool_Exp>
}

/** Ordering options when selecting data from "e_post_tags". */
export type E_Post_Tags_Order_By = {
  type?: Maybe<Order_By>
}

/** primary key columns input for table: e_post_tags */
export type E_Post_Tags_Pk_Columns_Input = {
  type: Scalars['String']
}

/** select columns of table "e_post_tags" */
export enum E_Post_Tags_Select_Column {
  /** column name */
  Type = 'type',
}

/** input type for updating data in table "e_post_tags" */
export type E_Post_Tags_Set_Input = {
  type?: Maybe<Scalars['String']>
}

/** update columns of table "e_post_tags" */
export enum E_Post_Tags_Update_Column {
  /** column name */
  Type = 'type',
}

/** columns and relationships of "e_stg_statuses" */
export type E_Stg_Statuses = {
  __typename?: 'e_stg_statuses'
  type: Scalars['String']
}

/** aggregated selection of "e_stg_statuses" */
export type E_Stg_Statuses_Aggregate = {
  __typename?: 'e_stg_statuses_aggregate'
  aggregate?: Maybe<E_Stg_Statuses_Aggregate_Fields>
  nodes: Array<E_Stg_Statuses>
}

/** aggregate fields of "e_stg_statuses" */
export type E_Stg_Statuses_Aggregate_Fields = {
  __typename?: 'e_stg_statuses_aggregate_fields'
  count: Scalars['Int']
  max?: Maybe<E_Stg_Statuses_Max_Fields>
  min?: Maybe<E_Stg_Statuses_Min_Fields>
}

/** aggregate fields of "e_stg_statuses" */
export type E_Stg_Statuses_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<E_Stg_Statuses_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** Boolean expression to filter rows from the table "e_stg_statuses". All fields are combined with a logical 'AND'. */
export type E_Stg_Statuses_Bool_Exp = {
  _and?: Maybe<Array<E_Stg_Statuses_Bool_Exp>>
  _not?: Maybe<E_Stg_Statuses_Bool_Exp>
  _or?: Maybe<Array<E_Stg_Statuses_Bool_Exp>>
  type?: Maybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "e_stg_statuses" */
export enum E_Stg_Statuses_Constraint {
  /** unique or primary key constraint */
  EStgStatusesPkey = 'e_stg_statuses_pkey',
}

export enum E_Stg_Statuses_Enum {
  Active = 'active',
  Archived = 'archived',
  Previous = 'previous',
  Upcoming = 'upcoming',
}

/** Boolean expression to compare columns of type "e_stg_statuses_enum". All fields are combined with logical 'AND'. */
export type E_Stg_Statuses_Enum_Comparison_Exp = {
  _eq?: Maybe<E_Stg_Statuses_Enum>
  _in?: Maybe<Array<E_Stg_Statuses_Enum>>
  _is_null?: Maybe<Scalars['Boolean']>
  _neq?: Maybe<E_Stg_Statuses_Enum>
  _nin?: Maybe<Array<E_Stg_Statuses_Enum>>
}

/** input type for inserting data into table "e_stg_statuses" */
export type E_Stg_Statuses_Insert_Input = {
  type?: Maybe<Scalars['String']>
}

/** aggregate max on columns */
export type E_Stg_Statuses_Max_Fields = {
  __typename?: 'e_stg_statuses_max_fields'
  type?: Maybe<Scalars['String']>
}

/** aggregate min on columns */
export type E_Stg_Statuses_Min_Fields = {
  __typename?: 'e_stg_statuses_min_fields'
  type?: Maybe<Scalars['String']>
}

/** response of any mutation on the table "e_stg_statuses" */
export type E_Stg_Statuses_Mutation_Response = {
  __typename?: 'e_stg_statuses_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<E_Stg_Statuses>
}

/** on conflict condition type for table "e_stg_statuses" */
export type E_Stg_Statuses_On_Conflict = {
  constraint: E_Stg_Statuses_Constraint
  update_columns?: Array<E_Stg_Statuses_Update_Column>
  where?: Maybe<E_Stg_Statuses_Bool_Exp>
}

/** Ordering options when selecting data from "e_stg_statuses". */
export type E_Stg_Statuses_Order_By = {
  type?: Maybe<Order_By>
}

/** primary key columns input for table: e_stg_statuses */
export type E_Stg_Statuses_Pk_Columns_Input = {
  type: Scalars['String']
}

/** select columns of table "e_stg_statuses" */
export enum E_Stg_Statuses_Select_Column {
  /** column name */
  Type = 'type',
}

/** input type for updating data in table "e_stg_statuses" */
export type E_Stg_Statuses_Set_Input = {
  type?: Maybe<Scalars['String']>
}

/** update columns of table "e_stg_statuses" */
export enum E_Stg_Statuses_Update_Column {
  /** column name */
  Type = 'type',
}

/** columns and relationships of "e_user_disciplines" */
export type E_User_Disciplines = {
  __typename?: 'e_user_disciplines'
  type: Scalars['String']
  /** An array relationship */
  user_disciplines: Array<User_Disciplines>
  /** An aggregate relationship */
  user_disciplines_aggregate: User_Disciplines_Aggregate
}

/** columns and relationships of "e_user_disciplines" */
export type E_User_DisciplinesUser_DisciplinesArgs = {
  distinct_on?: Maybe<Array<User_Disciplines_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Disciplines_Order_By>>
  where?: Maybe<User_Disciplines_Bool_Exp>
}

/** columns and relationships of "e_user_disciplines" */
export type E_User_DisciplinesUser_Disciplines_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Disciplines_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Disciplines_Order_By>>
  where?: Maybe<User_Disciplines_Bool_Exp>
}

/** aggregated selection of "e_user_disciplines" */
export type E_User_Disciplines_Aggregate = {
  __typename?: 'e_user_disciplines_aggregate'
  aggregate?: Maybe<E_User_Disciplines_Aggregate_Fields>
  nodes: Array<E_User_Disciplines>
}

/** aggregate fields of "e_user_disciplines" */
export type E_User_Disciplines_Aggregate_Fields = {
  __typename?: 'e_user_disciplines_aggregate_fields'
  count: Scalars['Int']
  max?: Maybe<E_User_Disciplines_Max_Fields>
  min?: Maybe<E_User_Disciplines_Min_Fields>
}

/** aggregate fields of "e_user_disciplines" */
export type E_User_Disciplines_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<E_User_Disciplines_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** Boolean expression to filter rows from the table "e_user_disciplines". All fields are combined with a logical 'AND'. */
export type E_User_Disciplines_Bool_Exp = {
  _and?: Maybe<Array<E_User_Disciplines_Bool_Exp>>
  _not?: Maybe<E_User_Disciplines_Bool_Exp>
  _or?: Maybe<Array<E_User_Disciplines_Bool_Exp>>
  type?: Maybe<String_Comparison_Exp>
  user_disciplines?: Maybe<User_Disciplines_Bool_Exp>
}

/** unique or primary key constraints on table "e_user_disciplines" */
export enum E_User_Disciplines_Constraint {
  /** unique or primary key constraint */
  EUserDisciplinesPkey = 'e_user_disciplines_pkey',
}

export enum E_User_Disciplines_Enum {
  Distance = 'distance',
  Flatland = 'flatland',
  Freestyle = 'freestyle',
  Mountain = 'mountain',
  Street = 'street',
  Trials = 'trials',
}

/** Boolean expression to compare columns of type "e_user_disciplines_enum". All fields are combined with logical 'AND'. */
export type E_User_Disciplines_Enum_Comparison_Exp = {
  _eq?: Maybe<E_User_Disciplines_Enum>
  _in?: Maybe<Array<E_User_Disciplines_Enum>>
  _is_null?: Maybe<Scalars['Boolean']>
  _neq?: Maybe<E_User_Disciplines_Enum>
  _nin?: Maybe<Array<E_User_Disciplines_Enum>>
}

/** input type for inserting data into table "e_user_disciplines" */
export type E_User_Disciplines_Insert_Input = {
  type?: Maybe<Scalars['String']>
  user_disciplines?: Maybe<User_Disciplines_Arr_Rel_Insert_Input>
}

/** aggregate max on columns */
export type E_User_Disciplines_Max_Fields = {
  __typename?: 'e_user_disciplines_max_fields'
  type?: Maybe<Scalars['String']>
}

/** aggregate min on columns */
export type E_User_Disciplines_Min_Fields = {
  __typename?: 'e_user_disciplines_min_fields'
  type?: Maybe<Scalars['String']>
}

/** response of any mutation on the table "e_user_disciplines" */
export type E_User_Disciplines_Mutation_Response = {
  __typename?: 'e_user_disciplines_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<E_User_Disciplines>
}

/** on conflict condition type for table "e_user_disciplines" */
export type E_User_Disciplines_On_Conflict = {
  constraint: E_User_Disciplines_Constraint
  update_columns?: Array<E_User_Disciplines_Update_Column>
  where?: Maybe<E_User_Disciplines_Bool_Exp>
}

/** Ordering options when selecting data from "e_user_disciplines". */
export type E_User_Disciplines_Order_By = {
  type?: Maybe<Order_By>
  user_disciplines_aggregate?: Maybe<User_Disciplines_Aggregate_Order_By>
}

/** primary key columns input for table: e_user_disciplines */
export type E_User_Disciplines_Pk_Columns_Input = {
  type: Scalars['String']
}

/** select columns of table "e_user_disciplines" */
export enum E_User_Disciplines_Select_Column {
  /** column name */
  Type = 'type',
}

/** input type for updating data in table "e_user_disciplines" */
export type E_User_Disciplines_Set_Input = {
  type?: Maybe<Scalars['String']>
}

/** update columns of table "e_user_disciplines" */
export enum E_User_Disciplines_Update_Column {
  /** column name */
  Type = 'type',
}

/** columns and relationships of "e_user_locations" */
export type E_User_Locations = {
  __typename?: 'e_user_locations'
  type: Scalars['String']
}

/** aggregated selection of "e_user_locations" */
export type E_User_Locations_Aggregate = {
  __typename?: 'e_user_locations_aggregate'
  aggregate?: Maybe<E_User_Locations_Aggregate_Fields>
  nodes: Array<E_User_Locations>
}

/** aggregate fields of "e_user_locations" */
export type E_User_Locations_Aggregate_Fields = {
  __typename?: 'e_user_locations_aggregate_fields'
  count: Scalars['Int']
  max?: Maybe<E_User_Locations_Max_Fields>
  min?: Maybe<E_User_Locations_Min_Fields>
}

/** aggregate fields of "e_user_locations" */
export type E_User_Locations_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<E_User_Locations_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** Boolean expression to filter rows from the table "e_user_locations". All fields are combined with a logical 'AND'. */
export type E_User_Locations_Bool_Exp = {
  _and?: Maybe<Array<E_User_Locations_Bool_Exp>>
  _not?: Maybe<E_User_Locations_Bool_Exp>
  _or?: Maybe<Array<E_User_Locations_Bool_Exp>>
  type?: Maybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "e_user_locations" */
export enum E_User_Locations_Constraint {
  /** unique or primary key constraint */
  EUserLocationsPkey = 'e_user_locations_pkey',
}

export enum E_User_Locations_Enum {
  Current = 'current',
  Hometown = 'hometown',
}

/** Boolean expression to compare columns of type "e_user_locations_enum". All fields are combined with logical 'AND'. */
export type E_User_Locations_Enum_Comparison_Exp = {
  _eq?: Maybe<E_User_Locations_Enum>
  _in?: Maybe<Array<E_User_Locations_Enum>>
  _is_null?: Maybe<Scalars['Boolean']>
  _neq?: Maybe<E_User_Locations_Enum>
  _nin?: Maybe<Array<E_User_Locations_Enum>>
}

/** input type for inserting data into table "e_user_locations" */
export type E_User_Locations_Insert_Input = {
  type?: Maybe<Scalars['String']>
}

/** aggregate max on columns */
export type E_User_Locations_Max_Fields = {
  __typename?: 'e_user_locations_max_fields'
  type?: Maybe<Scalars['String']>
}

/** aggregate min on columns */
export type E_User_Locations_Min_Fields = {
  __typename?: 'e_user_locations_min_fields'
  type?: Maybe<Scalars['String']>
}

/** response of any mutation on the table "e_user_locations" */
export type E_User_Locations_Mutation_Response = {
  __typename?: 'e_user_locations_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<E_User_Locations>
}

/** on conflict condition type for table "e_user_locations" */
export type E_User_Locations_On_Conflict = {
  constraint: E_User_Locations_Constraint
  update_columns?: Array<E_User_Locations_Update_Column>
  where?: Maybe<E_User_Locations_Bool_Exp>
}

/** Ordering options when selecting data from "e_user_locations". */
export type E_User_Locations_Order_By = {
  type?: Maybe<Order_By>
}

/** primary key columns input for table: e_user_locations */
export type E_User_Locations_Pk_Columns_Input = {
  type: Scalars['String']
}

/** select columns of table "e_user_locations" */
export enum E_User_Locations_Select_Column {
  /** column name */
  Type = 'type',
}

/** input type for updating data in table "e_user_locations" */
export type E_User_Locations_Set_Input = {
  type?: Maybe<Scalars['String']>
}

/** update columns of table "e_user_locations" */
export enum E_User_Locations_Update_Column {
  /** column name */
  Type = 'type',
}

/** columns and relationships of "e_user_roles" */
export type E_User_Roles = {
  __typename?: 'e_user_roles'
  type: Scalars['String']
}

/** aggregated selection of "e_user_roles" */
export type E_User_Roles_Aggregate = {
  __typename?: 'e_user_roles_aggregate'
  aggregate?: Maybe<E_User_Roles_Aggregate_Fields>
  nodes: Array<E_User_Roles>
}

/** aggregate fields of "e_user_roles" */
export type E_User_Roles_Aggregate_Fields = {
  __typename?: 'e_user_roles_aggregate_fields'
  count: Scalars['Int']
  max?: Maybe<E_User_Roles_Max_Fields>
  min?: Maybe<E_User_Roles_Min_Fields>
}

/** aggregate fields of "e_user_roles" */
export type E_User_Roles_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<E_User_Roles_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** Boolean expression to filter rows from the table "e_user_roles". All fields are combined with a logical 'AND'. */
export type E_User_Roles_Bool_Exp = {
  _and?: Maybe<Array<E_User_Roles_Bool_Exp>>
  _not?: Maybe<E_User_Roles_Bool_Exp>
  _or?: Maybe<Array<E_User_Roles_Bool_Exp>>
  type?: Maybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "e_user_roles" */
export enum E_User_Roles_Constraint {
  /** unique or primary key constraint */
  EUserRolesPkey = 'e_user_roles_pkey',
}

export enum E_User_Roles_Enum {
  Admin = 'admin',
  User = 'user',
}

/** Boolean expression to compare columns of type "e_user_roles_enum". All fields are combined with logical 'AND'. */
export type E_User_Roles_Enum_Comparison_Exp = {
  _eq?: Maybe<E_User_Roles_Enum>
  _in?: Maybe<Array<E_User_Roles_Enum>>
  _is_null?: Maybe<Scalars['Boolean']>
  _neq?: Maybe<E_User_Roles_Enum>
  _nin?: Maybe<Array<E_User_Roles_Enum>>
}

/** input type for inserting data into table "e_user_roles" */
export type E_User_Roles_Insert_Input = {
  type?: Maybe<Scalars['String']>
}

/** aggregate max on columns */
export type E_User_Roles_Max_Fields = {
  __typename?: 'e_user_roles_max_fields'
  type?: Maybe<Scalars['String']>
}

/** aggregate min on columns */
export type E_User_Roles_Min_Fields = {
  __typename?: 'e_user_roles_min_fields'
  type?: Maybe<Scalars['String']>
}

/** response of any mutation on the table "e_user_roles" */
export type E_User_Roles_Mutation_Response = {
  __typename?: 'e_user_roles_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<E_User_Roles>
}

/** on conflict condition type for table "e_user_roles" */
export type E_User_Roles_On_Conflict = {
  constraint: E_User_Roles_Constraint
  update_columns?: Array<E_User_Roles_Update_Column>
  where?: Maybe<E_User_Roles_Bool_Exp>
}

/** Ordering options when selecting data from "e_user_roles". */
export type E_User_Roles_Order_By = {
  type?: Maybe<Order_By>
}

/** primary key columns input for table: e_user_roles */
export type E_User_Roles_Pk_Columns_Input = {
  type: Scalars['String']
}

/** select columns of table "e_user_roles" */
export enum E_User_Roles_Select_Column {
  /** column name */
  Type = 'type',
}

/** input type for updating data in table "e_user_roles" */
export type E_User_Roles_Set_Input = {
  type?: Maybe<Scalars['String']>
}

/** update columns of table "e_user_roles" */
export enum E_User_Roles_Update_Column {
  /** column name */
  Type = 'type',
}

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  /** is the column contained in the given json value */
  _contained_in?: Maybe<Scalars['jsonb']>
  /** does the column contain the given json value at the top level */
  _contains?: Maybe<Scalars['jsonb']>
  _eq?: Maybe<Scalars['jsonb']>
  _gt?: Maybe<Scalars['jsonb']>
  _gte?: Maybe<Scalars['jsonb']>
  /** does the string exist as a top-level key in the column */
  _has_key?: Maybe<Scalars['String']>
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: Maybe<Array<Scalars['String']>>
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: Maybe<Array<Scalars['String']>>
  _in?: Maybe<Array<Scalars['jsonb']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['jsonb']>
  _lte?: Maybe<Scalars['jsonb']>
  _neq?: Maybe<Scalars['jsonb']>
  _nin?: Maybe<Array<Scalars['jsonb']>>
}

/** columns and relationships of "likes_chat_message_user" */
export type Likes_Chat_Message_User = {
  __typename?: 'likes_chat_message_user'
  /** An object relationship */
  chat_message: Chat_Messages
  chat_message_id: Scalars['Int']
  liked_by_user_id: Scalars['Int']
  /** An object relationship */
  user: Users
}

/** aggregated selection of "likes_chat_message_user" */
export type Likes_Chat_Message_User_Aggregate = {
  __typename?: 'likes_chat_message_user_aggregate'
  aggregate?: Maybe<Likes_Chat_Message_User_Aggregate_Fields>
  nodes: Array<Likes_Chat_Message_User>
}

/** aggregate fields of "likes_chat_message_user" */
export type Likes_Chat_Message_User_Aggregate_Fields = {
  __typename?: 'likes_chat_message_user_aggregate_fields'
  avg?: Maybe<Likes_Chat_Message_User_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Likes_Chat_Message_User_Max_Fields>
  min?: Maybe<Likes_Chat_Message_User_Min_Fields>
  stddev?: Maybe<Likes_Chat_Message_User_Stddev_Fields>
  stddev_pop?: Maybe<Likes_Chat_Message_User_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Likes_Chat_Message_User_Stddev_Samp_Fields>
  sum?: Maybe<Likes_Chat_Message_User_Sum_Fields>
  var_pop?: Maybe<Likes_Chat_Message_User_Var_Pop_Fields>
  var_samp?: Maybe<Likes_Chat_Message_User_Var_Samp_Fields>
  variance?: Maybe<Likes_Chat_Message_User_Variance_Fields>
}

/** aggregate fields of "likes_chat_message_user" */
export type Likes_Chat_Message_User_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Likes_Chat_Message_User_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "likes_chat_message_user" */
export type Likes_Chat_Message_User_Aggregate_Order_By = {
  avg?: Maybe<Likes_Chat_Message_User_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Likes_Chat_Message_User_Max_Order_By>
  min?: Maybe<Likes_Chat_Message_User_Min_Order_By>
  stddev?: Maybe<Likes_Chat_Message_User_Stddev_Order_By>
  stddev_pop?: Maybe<Likes_Chat_Message_User_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Likes_Chat_Message_User_Stddev_Samp_Order_By>
  sum?: Maybe<Likes_Chat_Message_User_Sum_Order_By>
  var_pop?: Maybe<Likes_Chat_Message_User_Var_Pop_Order_By>
  var_samp?: Maybe<Likes_Chat_Message_User_Var_Samp_Order_By>
  variance?: Maybe<Likes_Chat_Message_User_Variance_Order_By>
}

/** input type for inserting array relation for remote table "likes_chat_message_user" */
export type Likes_Chat_Message_User_Arr_Rel_Insert_Input = {
  data: Array<Likes_Chat_Message_User_Insert_Input>
  /** on conflict condition */
  on_conflict?: Maybe<Likes_Chat_Message_User_On_Conflict>
}

/** aggregate avg on columns */
export type Likes_Chat_Message_User_Avg_Fields = {
  __typename?: 'likes_chat_message_user_avg_fields'
  chat_message_id?: Maybe<Scalars['Float']>
  liked_by_user_id?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "likes_chat_message_user" */
export type Likes_Chat_Message_User_Avg_Order_By = {
  chat_message_id?: Maybe<Order_By>
  liked_by_user_id?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "likes_chat_message_user". All fields are combined with a logical 'AND'. */
export type Likes_Chat_Message_User_Bool_Exp = {
  _and?: Maybe<Array<Likes_Chat_Message_User_Bool_Exp>>
  _not?: Maybe<Likes_Chat_Message_User_Bool_Exp>
  _or?: Maybe<Array<Likes_Chat_Message_User_Bool_Exp>>
  chat_message?: Maybe<Chat_Messages_Bool_Exp>
  chat_message_id?: Maybe<Int_Comparison_Exp>
  liked_by_user_id?: Maybe<Int_Comparison_Exp>
  user?: Maybe<Users_Bool_Exp>
}

/** unique or primary key constraints on table "likes_chat_message_user" */
export enum Likes_Chat_Message_User_Constraint {
  /** unique or primary key constraint */
  LikesChatMessageUserPkey = 'likes_chat_message_user_pkey',
}

/** input type for incrementing numeric columns in table "likes_chat_message_user" */
export type Likes_Chat_Message_User_Inc_Input = {
  chat_message_id?: Maybe<Scalars['Int']>
  liked_by_user_id?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "likes_chat_message_user" */
export type Likes_Chat_Message_User_Insert_Input = {
  chat_message?: Maybe<Chat_Messages_Obj_Rel_Insert_Input>
  chat_message_id?: Maybe<Scalars['Int']>
  liked_by_user_id?: Maybe<Scalars['Int']>
  user?: Maybe<Users_Obj_Rel_Insert_Input>
}

/** aggregate max on columns */
export type Likes_Chat_Message_User_Max_Fields = {
  __typename?: 'likes_chat_message_user_max_fields'
  chat_message_id?: Maybe<Scalars['Int']>
  liked_by_user_id?: Maybe<Scalars['Int']>
}

/** order by max() on columns of table "likes_chat_message_user" */
export type Likes_Chat_Message_User_Max_Order_By = {
  chat_message_id?: Maybe<Order_By>
  liked_by_user_id?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Likes_Chat_Message_User_Min_Fields = {
  __typename?: 'likes_chat_message_user_min_fields'
  chat_message_id?: Maybe<Scalars['Int']>
  liked_by_user_id?: Maybe<Scalars['Int']>
}

/** order by min() on columns of table "likes_chat_message_user" */
export type Likes_Chat_Message_User_Min_Order_By = {
  chat_message_id?: Maybe<Order_By>
  liked_by_user_id?: Maybe<Order_By>
}

/** response of any mutation on the table "likes_chat_message_user" */
export type Likes_Chat_Message_User_Mutation_Response = {
  __typename?: 'likes_chat_message_user_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Likes_Chat_Message_User>
}

/** on conflict condition type for table "likes_chat_message_user" */
export type Likes_Chat_Message_User_On_Conflict = {
  constraint: Likes_Chat_Message_User_Constraint
  update_columns?: Array<Likes_Chat_Message_User_Update_Column>
  where?: Maybe<Likes_Chat_Message_User_Bool_Exp>
}

/** Ordering options when selecting data from "likes_chat_message_user". */
export type Likes_Chat_Message_User_Order_By = {
  chat_message?: Maybe<Chat_Messages_Order_By>
  chat_message_id?: Maybe<Order_By>
  liked_by_user_id?: Maybe<Order_By>
  user?: Maybe<Users_Order_By>
}

/** primary key columns input for table: likes_chat_message_user */
export type Likes_Chat_Message_User_Pk_Columns_Input = {
  chat_message_id: Scalars['Int']
  liked_by_user_id: Scalars['Int']
}

/** select columns of table "likes_chat_message_user" */
export enum Likes_Chat_Message_User_Select_Column {
  /** column name */
  ChatMessageId = 'chat_message_id',
  /** column name */
  LikedByUserId = 'liked_by_user_id',
}

/** input type for updating data in table "likes_chat_message_user" */
export type Likes_Chat_Message_User_Set_Input = {
  chat_message_id?: Maybe<Scalars['Int']>
  liked_by_user_id?: Maybe<Scalars['Int']>
}

/** aggregate stddev on columns */
export type Likes_Chat_Message_User_Stddev_Fields = {
  __typename?: 'likes_chat_message_user_stddev_fields'
  chat_message_id?: Maybe<Scalars['Float']>
  liked_by_user_id?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "likes_chat_message_user" */
export type Likes_Chat_Message_User_Stddev_Order_By = {
  chat_message_id?: Maybe<Order_By>
  liked_by_user_id?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Likes_Chat_Message_User_Stddev_Pop_Fields = {
  __typename?: 'likes_chat_message_user_stddev_pop_fields'
  chat_message_id?: Maybe<Scalars['Float']>
  liked_by_user_id?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "likes_chat_message_user" */
export type Likes_Chat_Message_User_Stddev_Pop_Order_By = {
  chat_message_id?: Maybe<Order_By>
  liked_by_user_id?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Likes_Chat_Message_User_Stddev_Samp_Fields = {
  __typename?: 'likes_chat_message_user_stddev_samp_fields'
  chat_message_id?: Maybe<Scalars['Float']>
  liked_by_user_id?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "likes_chat_message_user" */
export type Likes_Chat_Message_User_Stddev_Samp_Order_By = {
  chat_message_id?: Maybe<Order_By>
  liked_by_user_id?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Likes_Chat_Message_User_Sum_Fields = {
  __typename?: 'likes_chat_message_user_sum_fields'
  chat_message_id?: Maybe<Scalars['Int']>
  liked_by_user_id?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "likes_chat_message_user" */
export type Likes_Chat_Message_User_Sum_Order_By = {
  chat_message_id?: Maybe<Order_By>
  liked_by_user_id?: Maybe<Order_By>
}

/** update columns of table "likes_chat_message_user" */
export enum Likes_Chat_Message_User_Update_Column {
  /** column name */
  ChatMessageId = 'chat_message_id',
  /** column name */
  LikedByUserId = 'liked_by_user_id',
}

/** aggregate var_pop on columns */
export type Likes_Chat_Message_User_Var_Pop_Fields = {
  __typename?: 'likes_chat_message_user_var_pop_fields'
  chat_message_id?: Maybe<Scalars['Float']>
  liked_by_user_id?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "likes_chat_message_user" */
export type Likes_Chat_Message_User_Var_Pop_Order_By = {
  chat_message_id?: Maybe<Order_By>
  liked_by_user_id?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Likes_Chat_Message_User_Var_Samp_Fields = {
  __typename?: 'likes_chat_message_user_var_samp_fields'
  chat_message_id?: Maybe<Scalars['Float']>
  liked_by_user_id?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "likes_chat_message_user" */
export type Likes_Chat_Message_User_Var_Samp_Order_By = {
  chat_message_id?: Maybe<Order_By>
  liked_by_user_id?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Likes_Chat_Message_User_Variance_Fields = {
  __typename?: 'likes_chat_message_user_variance_fields'
  chat_message_id?: Maybe<Scalars['Float']>
  liked_by_user_id?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "likes_chat_message_user" */
export type Likes_Chat_Message_User_Variance_Order_By = {
  chat_message_id?: Maybe<Order_By>
  liked_by_user_id?: Maybe<Order_By>
}

/** columns and relationships of "likes_post_message_user" */
export type Likes_Post_Message_User = {
  __typename?: 'likes_post_message_user'
  liked_by_user_id: Scalars['Int']
  /** An object relationship */
  post_message: Post_Messages
  post_message_id: Scalars['Int']
  /** An object relationship */
  user: Users
}

/** aggregated selection of "likes_post_message_user" */
export type Likes_Post_Message_User_Aggregate = {
  __typename?: 'likes_post_message_user_aggregate'
  aggregate?: Maybe<Likes_Post_Message_User_Aggregate_Fields>
  nodes: Array<Likes_Post_Message_User>
}

/** aggregate fields of "likes_post_message_user" */
export type Likes_Post_Message_User_Aggregate_Fields = {
  __typename?: 'likes_post_message_user_aggregate_fields'
  avg?: Maybe<Likes_Post_Message_User_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Likes_Post_Message_User_Max_Fields>
  min?: Maybe<Likes_Post_Message_User_Min_Fields>
  stddev?: Maybe<Likes_Post_Message_User_Stddev_Fields>
  stddev_pop?: Maybe<Likes_Post_Message_User_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Likes_Post_Message_User_Stddev_Samp_Fields>
  sum?: Maybe<Likes_Post_Message_User_Sum_Fields>
  var_pop?: Maybe<Likes_Post_Message_User_Var_Pop_Fields>
  var_samp?: Maybe<Likes_Post_Message_User_Var_Samp_Fields>
  variance?: Maybe<Likes_Post_Message_User_Variance_Fields>
}

/** aggregate fields of "likes_post_message_user" */
export type Likes_Post_Message_User_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Likes_Post_Message_User_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "likes_post_message_user" */
export type Likes_Post_Message_User_Aggregate_Order_By = {
  avg?: Maybe<Likes_Post_Message_User_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Likes_Post_Message_User_Max_Order_By>
  min?: Maybe<Likes_Post_Message_User_Min_Order_By>
  stddev?: Maybe<Likes_Post_Message_User_Stddev_Order_By>
  stddev_pop?: Maybe<Likes_Post_Message_User_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Likes_Post_Message_User_Stddev_Samp_Order_By>
  sum?: Maybe<Likes_Post_Message_User_Sum_Order_By>
  var_pop?: Maybe<Likes_Post_Message_User_Var_Pop_Order_By>
  var_samp?: Maybe<Likes_Post_Message_User_Var_Samp_Order_By>
  variance?: Maybe<Likes_Post_Message_User_Variance_Order_By>
}

/** input type for inserting array relation for remote table "likes_post_message_user" */
export type Likes_Post_Message_User_Arr_Rel_Insert_Input = {
  data: Array<Likes_Post_Message_User_Insert_Input>
  /** on conflict condition */
  on_conflict?: Maybe<Likes_Post_Message_User_On_Conflict>
}

/** aggregate avg on columns */
export type Likes_Post_Message_User_Avg_Fields = {
  __typename?: 'likes_post_message_user_avg_fields'
  liked_by_user_id?: Maybe<Scalars['Float']>
  post_message_id?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "likes_post_message_user" */
export type Likes_Post_Message_User_Avg_Order_By = {
  liked_by_user_id?: Maybe<Order_By>
  post_message_id?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "likes_post_message_user". All fields are combined with a logical 'AND'. */
export type Likes_Post_Message_User_Bool_Exp = {
  _and?: Maybe<Array<Likes_Post_Message_User_Bool_Exp>>
  _not?: Maybe<Likes_Post_Message_User_Bool_Exp>
  _or?: Maybe<Array<Likes_Post_Message_User_Bool_Exp>>
  liked_by_user_id?: Maybe<Int_Comparison_Exp>
  post_message?: Maybe<Post_Messages_Bool_Exp>
  post_message_id?: Maybe<Int_Comparison_Exp>
  user?: Maybe<Users_Bool_Exp>
}

/** unique or primary key constraints on table "likes_post_message_user" */
export enum Likes_Post_Message_User_Constraint {
  /** unique or primary key constraint */
  LikesPostMessageUserPkey = 'likes_post_message_user_pkey',
}

/** input type for incrementing numeric columns in table "likes_post_message_user" */
export type Likes_Post_Message_User_Inc_Input = {
  liked_by_user_id?: Maybe<Scalars['Int']>
  post_message_id?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "likes_post_message_user" */
export type Likes_Post_Message_User_Insert_Input = {
  liked_by_user_id?: Maybe<Scalars['Int']>
  post_message?: Maybe<Post_Messages_Obj_Rel_Insert_Input>
  post_message_id?: Maybe<Scalars['Int']>
  user?: Maybe<Users_Obj_Rel_Insert_Input>
}

/** aggregate max on columns */
export type Likes_Post_Message_User_Max_Fields = {
  __typename?: 'likes_post_message_user_max_fields'
  liked_by_user_id?: Maybe<Scalars['Int']>
  post_message_id?: Maybe<Scalars['Int']>
}

/** order by max() on columns of table "likes_post_message_user" */
export type Likes_Post_Message_User_Max_Order_By = {
  liked_by_user_id?: Maybe<Order_By>
  post_message_id?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Likes_Post_Message_User_Min_Fields = {
  __typename?: 'likes_post_message_user_min_fields'
  liked_by_user_id?: Maybe<Scalars['Int']>
  post_message_id?: Maybe<Scalars['Int']>
}

/** order by min() on columns of table "likes_post_message_user" */
export type Likes_Post_Message_User_Min_Order_By = {
  liked_by_user_id?: Maybe<Order_By>
  post_message_id?: Maybe<Order_By>
}

/** response of any mutation on the table "likes_post_message_user" */
export type Likes_Post_Message_User_Mutation_Response = {
  __typename?: 'likes_post_message_user_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Likes_Post_Message_User>
}

/** on conflict condition type for table "likes_post_message_user" */
export type Likes_Post_Message_User_On_Conflict = {
  constraint: Likes_Post_Message_User_Constraint
  update_columns?: Array<Likes_Post_Message_User_Update_Column>
  where?: Maybe<Likes_Post_Message_User_Bool_Exp>
}

/** Ordering options when selecting data from "likes_post_message_user". */
export type Likes_Post_Message_User_Order_By = {
  liked_by_user_id?: Maybe<Order_By>
  post_message?: Maybe<Post_Messages_Order_By>
  post_message_id?: Maybe<Order_By>
  user?: Maybe<Users_Order_By>
}

/** primary key columns input for table: likes_post_message_user */
export type Likes_Post_Message_User_Pk_Columns_Input = {
  liked_by_user_id: Scalars['Int']
  post_message_id: Scalars['Int']
}

/** select columns of table "likes_post_message_user" */
export enum Likes_Post_Message_User_Select_Column {
  /** column name */
  LikedByUserId = 'liked_by_user_id',
  /** column name */
  PostMessageId = 'post_message_id',
}

/** input type for updating data in table "likes_post_message_user" */
export type Likes_Post_Message_User_Set_Input = {
  liked_by_user_id?: Maybe<Scalars['Int']>
  post_message_id?: Maybe<Scalars['Int']>
}

/** aggregate stddev on columns */
export type Likes_Post_Message_User_Stddev_Fields = {
  __typename?: 'likes_post_message_user_stddev_fields'
  liked_by_user_id?: Maybe<Scalars['Float']>
  post_message_id?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "likes_post_message_user" */
export type Likes_Post_Message_User_Stddev_Order_By = {
  liked_by_user_id?: Maybe<Order_By>
  post_message_id?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Likes_Post_Message_User_Stddev_Pop_Fields = {
  __typename?: 'likes_post_message_user_stddev_pop_fields'
  liked_by_user_id?: Maybe<Scalars['Float']>
  post_message_id?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "likes_post_message_user" */
export type Likes_Post_Message_User_Stddev_Pop_Order_By = {
  liked_by_user_id?: Maybe<Order_By>
  post_message_id?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Likes_Post_Message_User_Stddev_Samp_Fields = {
  __typename?: 'likes_post_message_user_stddev_samp_fields'
  liked_by_user_id?: Maybe<Scalars['Float']>
  post_message_id?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "likes_post_message_user" */
export type Likes_Post_Message_User_Stddev_Samp_Order_By = {
  liked_by_user_id?: Maybe<Order_By>
  post_message_id?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Likes_Post_Message_User_Sum_Fields = {
  __typename?: 'likes_post_message_user_sum_fields'
  liked_by_user_id?: Maybe<Scalars['Int']>
  post_message_id?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "likes_post_message_user" */
export type Likes_Post_Message_User_Sum_Order_By = {
  liked_by_user_id?: Maybe<Order_By>
  post_message_id?: Maybe<Order_By>
}

/** update columns of table "likes_post_message_user" */
export enum Likes_Post_Message_User_Update_Column {
  /** column name */
  LikedByUserId = 'liked_by_user_id',
  /** column name */
  PostMessageId = 'post_message_id',
}

/** aggregate var_pop on columns */
export type Likes_Post_Message_User_Var_Pop_Fields = {
  __typename?: 'likes_post_message_user_var_pop_fields'
  liked_by_user_id?: Maybe<Scalars['Float']>
  post_message_id?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "likes_post_message_user" */
export type Likes_Post_Message_User_Var_Pop_Order_By = {
  liked_by_user_id?: Maybe<Order_By>
  post_message_id?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Likes_Post_Message_User_Var_Samp_Fields = {
  __typename?: 'likes_post_message_user_var_samp_fields'
  liked_by_user_id?: Maybe<Scalars['Float']>
  post_message_id?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "likes_post_message_user" */
export type Likes_Post_Message_User_Var_Samp_Order_By = {
  liked_by_user_id?: Maybe<Order_By>
  post_message_id?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Likes_Post_Message_User_Variance_Fields = {
  __typename?: 'likes_post_message_user_variance_fields'
  liked_by_user_id?: Maybe<Scalars['Float']>
  post_message_id?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "likes_post_message_user" */
export type Likes_Post_Message_User_Variance_Order_By = {
  liked_by_user_id?: Maybe<Order_By>
  post_message_id?: Maybe<Order_By>
}

/** columns and relationships of "likes_post_user" */
export type Likes_Post_User = {
  __typename?: 'likes_post_user'
  liked_by_user_id: Scalars['Int']
  /** An object relationship */
  post: Posts
  post_id: Scalars['Int']
  /** An object relationship */
  user: Users
}

/** aggregated selection of "likes_post_user" */
export type Likes_Post_User_Aggregate = {
  __typename?: 'likes_post_user_aggregate'
  aggregate?: Maybe<Likes_Post_User_Aggregate_Fields>
  nodes: Array<Likes_Post_User>
}

/** aggregate fields of "likes_post_user" */
export type Likes_Post_User_Aggregate_Fields = {
  __typename?: 'likes_post_user_aggregate_fields'
  avg?: Maybe<Likes_Post_User_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Likes_Post_User_Max_Fields>
  min?: Maybe<Likes_Post_User_Min_Fields>
  stddev?: Maybe<Likes_Post_User_Stddev_Fields>
  stddev_pop?: Maybe<Likes_Post_User_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Likes_Post_User_Stddev_Samp_Fields>
  sum?: Maybe<Likes_Post_User_Sum_Fields>
  var_pop?: Maybe<Likes_Post_User_Var_Pop_Fields>
  var_samp?: Maybe<Likes_Post_User_Var_Samp_Fields>
  variance?: Maybe<Likes_Post_User_Variance_Fields>
}

/** aggregate fields of "likes_post_user" */
export type Likes_Post_User_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Likes_Post_User_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "likes_post_user" */
export type Likes_Post_User_Aggregate_Order_By = {
  avg?: Maybe<Likes_Post_User_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Likes_Post_User_Max_Order_By>
  min?: Maybe<Likes_Post_User_Min_Order_By>
  stddev?: Maybe<Likes_Post_User_Stddev_Order_By>
  stddev_pop?: Maybe<Likes_Post_User_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Likes_Post_User_Stddev_Samp_Order_By>
  sum?: Maybe<Likes_Post_User_Sum_Order_By>
  var_pop?: Maybe<Likes_Post_User_Var_Pop_Order_By>
  var_samp?: Maybe<Likes_Post_User_Var_Samp_Order_By>
  variance?: Maybe<Likes_Post_User_Variance_Order_By>
}

/** input type for inserting array relation for remote table "likes_post_user" */
export type Likes_Post_User_Arr_Rel_Insert_Input = {
  data: Array<Likes_Post_User_Insert_Input>
  /** on conflict condition */
  on_conflict?: Maybe<Likes_Post_User_On_Conflict>
}

/** aggregate avg on columns */
export type Likes_Post_User_Avg_Fields = {
  __typename?: 'likes_post_user_avg_fields'
  liked_by_user_id?: Maybe<Scalars['Float']>
  post_id?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "likes_post_user" */
export type Likes_Post_User_Avg_Order_By = {
  liked_by_user_id?: Maybe<Order_By>
  post_id?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "likes_post_user". All fields are combined with a logical 'AND'. */
export type Likes_Post_User_Bool_Exp = {
  _and?: Maybe<Array<Likes_Post_User_Bool_Exp>>
  _not?: Maybe<Likes_Post_User_Bool_Exp>
  _or?: Maybe<Array<Likes_Post_User_Bool_Exp>>
  liked_by_user_id?: Maybe<Int_Comparison_Exp>
  post?: Maybe<Posts_Bool_Exp>
  post_id?: Maybe<Int_Comparison_Exp>
  user?: Maybe<Users_Bool_Exp>
}

/** unique or primary key constraints on table "likes_post_user" */
export enum Likes_Post_User_Constraint {
  /** unique or primary key constraint */
  LikesPostUserPkey = 'likes_post_user_pkey',
}

/** input type for incrementing numeric columns in table "likes_post_user" */
export type Likes_Post_User_Inc_Input = {
  liked_by_user_id?: Maybe<Scalars['Int']>
  post_id?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "likes_post_user" */
export type Likes_Post_User_Insert_Input = {
  liked_by_user_id?: Maybe<Scalars['Int']>
  post?: Maybe<Posts_Obj_Rel_Insert_Input>
  post_id?: Maybe<Scalars['Int']>
  user?: Maybe<Users_Obj_Rel_Insert_Input>
}

/** aggregate max on columns */
export type Likes_Post_User_Max_Fields = {
  __typename?: 'likes_post_user_max_fields'
  liked_by_user_id?: Maybe<Scalars['Int']>
  post_id?: Maybe<Scalars['Int']>
}

/** order by max() on columns of table "likes_post_user" */
export type Likes_Post_User_Max_Order_By = {
  liked_by_user_id?: Maybe<Order_By>
  post_id?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Likes_Post_User_Min_Fields = {
  __typename?: 'likes_post_user_min_fields'
  liked_by_user_id?: Maybe<Scalars['Int']>
  post_id?: Maybe<Scalars['Int']>
}

/** order by min() on columns of table "likes_post_user" */
export type Likes_Post_User_Min_Order_By = {
  liked_by_user_id?: Maybe<Order_By>
  post_id?: Maybe<Order_By>
}

/** response of any mutation on the table "likes_post_user" */
export type Likes_Post_User_Mutation_Response = {
  __typename?: 'likes_post_user_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Likes_Post_User>
}

/** on conflict condition type for table "likes_post_user" */
export type Likes_Post_User_On_Conflict = {
  constraint: Likes_Post_User_Constraint
  update_columns?: Array<Likes_Post_User_Update_Column>
  where?: Maybe<Likes_Post_User_Bool_Exp>
}

/** Ordering options when selecting data from "likes_post_user". */
export type Likes_Post_User_Order_By = {
  liked_by_user_id?: Maybe<Order_By>
  post?: Maybe<Posts_Order_By>
  post_id?: Maybe<Order_By>
  user?: Maybe<Users_Order_By>
}

/** primary key columns input for table: likes_post_user */
export type Likes_Post_User_Pk_Columns_Input = {
  liked_by_user_id: Scalars['Int']
  post_id: Scalars['Int']
}

/** select columns of table "likes_post_user" */
export enum Likes_Post_User_Select_Column {
  /** column name */
  LikedByUserId = 'liked_by_user_id',
  /** column name */
  PostId = 'post_id',
}

/** input type for updating data in table "likes_post_user" */
export type Likes_Post_User_Set_Input = {
  liked_by_user_id?: Maybe<Scalars['Int']>
  post_id?: Maybe<Scalars['Int']>
}

/** aggregate stddev on columns */
export type Likes_Post_User_Stddev_Fields = {
  __typename?: 'likes_post_user_stddev_fields'
  liked_by_user_id?: Maybe<Scalars['Float']>
  post_id?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "likes_post_user" */
export type Likes_Post_User_Stddev_Order_By = {
  liked_by_user_id?: Maybe<Order_By>
  post_id?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Likes_Post_User_Stddev_Pop_Fields = {
  __typename?: 'likes_post_user_stddev_pop_fields'
  liked_by_user_id?: Maybe<Scalars['Float']>
  post_id?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "likes_post_user" */
export type Likes_Post_User_Stddev_Pop_Order_By = {
  liked_by_user_id?: Maybe<Order_By>
  post_id?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Likes_Post_User_Stddev_Samp_Fields = {
  __typename?: 'likes_post_user_stddev_samp_fields'
  liked_by_user_id?: Maybe<Scalars['Float']>
  post_id?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "likes_post_user" */
export type Likes_Post_User_Stddev_Samp_Order_By = {
  liked_by_user_id?: Maybe<Order_By>
  post_id?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Likes_Post_User_Sum_Fields = {
  __typename?: 'likes_post_user_sum_fields'
  liked_by_user_id?: Maybe<Scalars['Int']>
  post_id?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "likes_post_user" */
export type Likes_Post_User_Sum_Order_By = {
  liked_by_user_id?: Maybe<Order_By>
  post_id?: Maybe<Order_By>
}

/** update columns of table "likes_post_user" */
export enum Likes_Post_User_Update_Column {
  /** column name */
  LikedByUserId = 'liked_by_user_id',
  /** column name */
  PostId = 'post_id',
}

/** aggregate var_pop on columns */
export type Likes_Post_User_Var_Pop_Fields = {
  __typename?: 'likes_post_user_var_pop_fields'
  liked_by_user_id?: Maybe<Scalars['Float']>
  post_id?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "likes_post_user" */
export type Likes_Post_User_Var_Pop_Order_By = {
  liked_by_user_id?: Maybe<Order_By>
  post_id?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Likes_Post_User_Var_Samp_Fields = {
  __typename?: 'likes_post_user_var_samp_fields'
  liked_by_user_id?: Maybe<Scalars['Float']>
  post_id?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "likes_post_user" */
export type Likes_Post_User_Var_Samp_Order_By = {
  liked_by_user_id?: Maybe<Order_By>
  post_id?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Likes_Post_User_Variance_Fields = {
  __typename?: 'likes_post_user_variance_fields'
  liked_by_user_id?: Maybe<Scalars['Float']>
  post_id?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "likes_post_user" */
export type Likes_Post_User_Variance_Order_By = {
  liked_by_user_id?: Maybe<Order_By>
  post_id?: Maybe<Order_By>
}

/** columns and relationships of "likes_stg_set_message_user" */
export type Likes_Stg_Set_Message_User = {
  __typename?: 'likes_stg_set_message_user'
  liked_by_user_id: Scalars['Int']
  /** An object relationship */
  set_message: Stg_Set_Messages
  stg_set_message_id: Scalars['Int']
  /** An object relationship */
  user: Users
}

/** aggregated selection of "likes_stg_set_message_user" */
export type Likes_Stg_Set_Message_User_Aggregate = {
  __typename?: 'likes_stg_set_message_user_aggregate'
  aggregate?: Maybe<Likes_Stg_Set_Message_User_Aggregate_Fields>
  nodes: Array<Likes_Stg_Set_Message_User>
}

/** aggregate fields of "likes_stg_set_message_user" */
export type Likes_Stg_Set_Message_User_Aggregate_Fields = {
  __typename?: 'likes_stg_set_message_user_aggregate_fields'
  avg?: Maybe<Likes_Stg_Set_Message_User_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Likes_Stg_Set_Message_User_Max_Fields>
  min?: Maybe<Likes_Stg_Set_Message_User_Min_Fields>
  stddev?: Maybe<Likes_Stg_Set_Message_User_Stddev_Fields>
  stddev_pop?: Maybe<Likes_Stg_Set_Message_User_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Likes_Stg_Set_Message_User_Stddev_Samp_Fields>
  sum?: Maybe<Likes_Stg_Set_Message_User_Sum_Fields>
  var_pop?: Maybe<Likes_Stg_Set_Message_User_Var_Pop_Fields>
  var_samp?: Maybe<Likes_Stg_Set_Message_User_Var_Samp_Fields>
  variance?: Maybe<Likes_Stg_Set_Message_User_Variance_Fields>
}

/** aggregate fields of "likes_stg_set_message_user" */
export type Likes_Stg_Set_Message_User_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Likes_Stg_Set_Message_User_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "likes_stg_set_message_user" */
export type Likes_Stg_Set_Message_User_Aggregate_Order_By = {
  avg?: Maybe<Likes_Stg_Set_Message_User_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Likes_Stg_Set_Message_User_Max_Order_By>
  min?: Maybe<Likes_Stg_Set_Message_User_Min_Order_By>
  stddev?: Maybe<Likes_Stg_Set_Message_User_Stddev_Order_By>
  stddev_pop?: Maybe<Likes_Stg_Set_Message_User_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Likes_Stg_Set_Message_User_Stddev_Samp_Order_By>
  sum?: Maybe<Likes_Stg_Set_Message_User_Sum_Order_By>
  var_pop?: Maybe<Likes_Stg_Set_Message_User_Var_Pop_Order_By>
  var_samp?: Maybe<Likes_Stg_Set_Message_User_Var_Samp_Order_By>
  variance?: Maybe<Likes_Stg_Set_Message_User_Variance_Order_By>
}

/** input type for inserting array relation for remote table "likes_stg_set_message_user" */
export type Likes_Stg_Set_Message_User_Arr_Rel_Insert_Input = {
  data: Array<Likes_Stg_Set_Message_User_Insert_Input>
  /** on conflict condition */
  on_conflict?: Maybe<Likes_Stg_Set_Message_User_On_Conflict>
}

/** aggregate avg on columns */
export type Likes_Stg_Set_Message_User_Avg_Fields = {
  __typename?: 'likes_stg_set_message_user_avg_fields'
  liked_by_user_id?: Maybe<Scalars['Float']>
  stg_set_message_id?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "likes_stg_set_message_user" */
export type Likes_Stg_Set_Message_User_Avg_Order_By = {
  liked_by_user_id?: Maybe<Order_By>
  stg_set_message_id?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "likes_stg_set_message_user". All fields are combined with a logical 'AND'. */
export type Likes_Stg_Set_Message_User_Bool_Exp = {
  _and?: Maybe<Array<Likes_Stg_Set_Message_User_Bool_Exp>>
  _not?: Maybe<Likes_Stg_Set_Message_User_Bool_Exp>
  _or?: Maybe<Array<Likes_Stg_Set_Message_User_Bool_Exp>>
  liked_by_user_id?: Maybe<Int_Comparison_Exp>
  set_message?: Maybe<Stg_Set_Messages_Bool_Exp>
  stg_set_message_id?: Maybe<Int_Comparison_Exp>
  user?: Maybe<Users_Bool_Exp>
}

/** unique or primary key constraints on table "likes_stg_set_message_user" */
export enum Likes_Stg_Set_Message_User_Constraint {
  /** unique or primary key constraint */
  LikesStgSetMessageUserPkey = 'likes_stg_set_message_user_pkey',
}

/** input type for incrementing numeric columns in table "likes_stg_set_message_user" */
export type Likes_Stg_Set_Message_User_Inc_Input = {
  liked_by_user_id?: Maybe<Scalars['Int']>
  stg_set_message_id?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "likes_stg_set_message_user" */
export type Likes_Stg_Set_Message_User_Insert_Input = {
  liked_by_user_id?: Maybe<Scalars['Int']>
  set_message?: Maybe<Stg_Set_Messages_Obj_Rel_Insert_Input>
  stg_set_message_id?: Maybe<Scalars['Int']>
  user?: Maybe<Users_Obj_Rel_Insert_Input>
}

/** aggregate max on columns */
export type Likes_Stg_Set_Message_User_Max_Fields = {
  __typename?: 'likes_stg_set_message_user_max_fields'
  liked_by_user_id?: Maybe<Scalars['Int']>
  stg_set_message_id?: Maybe<Scalars['Int']>
}

/** order by max() on columns of table "likes_stg_set_message_user" */
export type Likes_Stg_Set_Message_User_Max_Order_By = {
  liked_by_user_id?: Maybe<Order_By>
  stg_set_message_id?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Likes_Stg_Set_Message_User_Min_Fields = {
  __typename?: 'likes_stg_set_message_user_min_fields'
  liked_by_user_id?: Maybe<Scalars['Int']>
  stg_set_message_id?: Maybe<Scalars['Int']>
}

/** order by min() on columns of table "likes_stg_set_message_user" */
export type Likes_Stg_Set_Message_User_Min_Order_By = {
  liked_by_user_id?: Maybe<Order_By>
  stg_set_message_id?: Maybe<Order_By>
}

/** response of any mutation on the table "likes_stg_set_message_user" */
export type Likes_Stg_Set_Message_User_Mutation_Response = {
  __typename?: 'likes_stg_set_message_user_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Likes_Stg_Set_Message_User>
}

/** on conflict condition type for table "likes_stg_set_message_user" */
export type Likes_Stg_Set_Message_User_On_Conflict = {
  constraint: Likes_Stg_Set_Message_User_Constraint
  update_columns?: Array<Likes_Stg_Set_Message_User_Update_Column>
  where?: Maybe<Likes_Stg_Set_Message_User_Bool_Exp>
}

/** Ordering options when selecting data from "likes_stg_set_message_user". */
export type Likes_Stg_Set_Message_User_Order_By = {
  liked_by_user_id?: Maybe<Order_By>
  set_message?: Maybe<Stg_Set_Messages_Order_By>
  stg_set_message_id?: Maybe<Order_By>
  user?: Maybe<Users_Order_By>
}

/** primary key columns input for table: likes_stg_set_message_user */
export type Likes_Stg_Set_Message_User_Pk_Columns_Input = {
  liked_by_user_id: Scalars['Int']
  stg_set_message_id: Scalars['Int']
}

/** select columns of table "likes_stg_set_message_user" */
export enum Likes_Stg_Set_Message_User_Select_Column {
  /** column name */
  LikedByUserId = 'liked_by_user_id',
  /** column name */
  StgSetMessageId = 'stg_set_message_id',
}

/** input type for updating data in table "likes_stg_set_message_user" */
export type Likes_Stg_Set_Message_User_Set_Input = {
  liked_by_user_id?: Maybe<Scalars['Int']>
  stg_set_message_id?: Maybe<Scalars['Int']>
}

/** aggregate stddev on columns */
export type Likes_Stg_Set_Message_User_Stddev_Fields = {
  __typename?: 'likes_stg_set_message_user_stddev_fields'
  liked_by_user_id?: Maybe<Scalars['Float']>
  stg_set_message_id?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "likes_stg_set_message_user" */
export type Likes_Stg_Set_Message_User_Stddev_Order_By = {
  liked_by_user_id?: Maybe<Order_By>
  stg_set_message_id?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Likes_Stg_Set_Message_User_Stddev_Pop_Fields = {
  __typename?: 'likes_stg_set_message_user_stddev_pop_fields'
  liked_by_user_id?: Maybe<Scalars['Float']>
  stg_set_message_id?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "likes_stg_set_message_user" */
export type Likes_Stg_Set_Message_User_Stddev_Pop_Order_By = {
  liked_by_user_id?: Maybe<Order_By>
  stg_set_message_id?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Likes_Stg_Set_Message_User_Stddev_Samp_Fields = {
  __typename?: 'likes_stg_set_message_user_stddev_samp_fields'
  liked_by_user_id?: Maybe<Scalars['Float']>
  stg_set_message_id?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "likes_stg_set_message_user" */
export type Likes_Stg_Set_Message_User_Stddev_Samp_Order_By = {
  liked_by_user_id?: Maybe<Order_By>
  stg_set_message_id?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Likes_Stg_Set_Message_User_Sum_Fields = {
  __typename?: 'likes_stg_set_message_user_sum_fields'
  liked_by_user_id?: Maybe<Scalars['Int']>
  stg_set_message_id?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "likes_stg_set_message_user" */
export type Likes_Stg_Set_Message_User_Sum_Order_By = {
  liked_by_user_id?: Maybe<Order_By>
  stg_set_message_id?: Maybe<Order_By>
}

/** update columns of table "likes_stg_set_message_user" */
export enum Likes_Stg_Set_Message_User_Update_Column {
  /** column name */
  LikedByUserId = 'liked_by_user_id',
  /** column name */
  StgSetMessageId = 'stg_set_message_id',
}

/** aggregate var_pop on columns */
export type Likes_Stg_Set_Message_User_Var_Pop_Fields = {
  __typename?: 'likes_stg_set_message_user_var_pop_fields'
  liked_by_user_id?: Maybe<Scalars['Float']>
  stg_set_message_id?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "likes_stg_set_message_user" */
export type Likes_Stg_Set_Message_User_Var_Pop_Order_By = {
  liked_by_user_id?: Maybe<Order_By>
  stg_set_message_id?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Likes_Stg_Set_Message_User_Var_Samp_Fields = {
  __typename?: 'likes_stg_set_message_user_var_samp_fields'
  liked_by_user_id?: Maybe<Scalars['Float']>
  stg_set_message_id?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "likes_stg_set_message_user" */
export type Likes_Stg_Set_Message_User_Var_Samp_Order_By = {
  liked_by_user_id?: Maybe<Order_By>
  stg_set_message_id?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Likes_Stg_Set_Message_User_Variance_Fields = {
  __typename?: 'likes_stg_set_message_user_variance_fields'
  liked_by_user_id?: Maybe<Scalars['Float']>
  stg_set_message_id?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "likes_stg_set_message_user" */
export type Likes_Stg_Set_Message_User_Variance_Order_By = {
  liked_by_user_id?: Maybe<Order_By>
  stg_set_message_id?: Maybe<Order_By>
}

/** columns and relationships of "likes_stg_set_user" */
export type Likes_Stg_Set_User = {
  __typename?: 'likes_stg_set_user'
  liked_by_user_id: Scalars['Int']
  /** An object relationship */
  stg_set: Stg_Sets
  stg_set_id: Scalars['Int']
  /** An object relationship */
  user: Users
}

/** aggregated selection of "likes_stg_set_user" */
export type Likes_Stg_Set_User_Aggregate = {
  __typename?: 'likes_stg_set_user_aggregate'
  aggregate?: Maybe<Likes_Stg_Set_User_Aggregate_Fields>
  nodes: Array<Likes_Stg_Set_User>
}

/** aggregate fields of "likes_stg_set_user" */
export type Likes_Stg_Set_User_Aggregate_Fields = {
  __typename?: 'likes_stg_set_user_aggregate_fields'
  avg?: Maybe<Likes_Stg_Set_User_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Likes_Stg_Set_User_Max_Fields>
  min?: Maybe<Likes_Stg_Set_User_Min_Fields>
  stddev?: Maybe<Likes_Stg_Set_User_Stddev_Fields>
  stddev_pop?: Maybe<Likes_Stg_Set_User_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Likes_Stg_Set_User_Stddev_Samp_Fields>
  sum?: Maybe<Likes_Stg_Set_User_Sum_Fields>
  var_pop?: Maybe<Likes_Stg_Set_User_Var_Pop_Fields>
  var_samp?: Maybe<Likes_Stg_Set_User_Var_Samp_Fields>
  variance?: Maybe<Likes_Stg_Set_User_Variance_Fields>
}

/** aggregate fields of "likes_stg_set_user" */
export type Likes_Stg_Set_User_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Likes_Stg_Set_User_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "likes_stg_set_user" */
export type Likes_Stg_Set_User_Aggregate_Order_By = {
  avg?: Maybe<Likes_Stg_Set_User_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Likes_Stg_Set_User_Max_Order_By>
  min?: Maybe<Likes_Stg_Set_User_Min_Order_By>
  stddev?: Maybe<Likes_Stg_Set_User_Stddev_Order_By>
  stddev_pop?: Maybe<Likes_Stg_Set_User_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Likes_Stg_Set_User_Stddev_Samp_Order_By>
  sum?: Maybe<Likes_Stg_Set_User_Sum_Order_By>
  var_pop?: Maybe<Likes_Stg_Set_User_Var_Pop_Order_By>
  var_samp?: Maybe<Likes_Stg_Set_User_Var_Samp_Order_By>
  variance?: Maybe<Likes_Stg_Set_User_Variance_Order_By>
}

/** input type for inserting array relation for remote table "likes_stg_set_user" */
export type Likes_Stg_Set_User_Arr_Rel_Insert_Input = {
  data: Array<Likes_Stg_Set_User_Insert_Input>
  /** on conflict condition */
  on_conflict?: Maybe<Likes_Stg_Set_User_On_Conflict>
}

/** aggregate avg on columns */
export type Likes_Stg_Set_User_Avg_Fields = {
  __typename?: 'likes_stg_set_user_avg_fields'
  liked_by_user_id?: Maybe<Scalars['Float']>
  stg_set_id?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "likes_stg_set_user" */
export type Likes_Stg_Set_User_Avg_Order_By = {
  liked_by_user_id?: Maybe<Order_By>
  stg_set_id?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "likes_stg_set_user". All fields are combined with a logical 'AND'. */
export type Likes_Stg_Set_User_Bool_Exp = {
  _and?: Maybe<Array<Likes_Stg_Set_User_Bool_Exp>>
  _not?: Maybe<Likes_Stg_Set_User_Bool_Exp>
  _or?: Maybe<Array<Likes_Stg_Set_User_Bool_Exp>>
  liked_by_user_id?: Maybe<Int_Comparison_Exp>
  stg_set?: Maybe<Stg_Sets_Bool_Exp>
  stg_set_id?: Maybe<Int_Comparison_Exp>
  user?: Maybe<Users_Bool_Exp>
}

/** unique or primary key constraints on table "likes_stg_set_user" */
export enum Likes_Stg_Set_User_Constraint {
  /** unique or primary key constraint */
  LikesStgSetUserPkey = 'likes_stg_set_user_pkey',
}

/** input type for incrementing numeric columns in table "likes_stg_set_user" */
export type Likes_Stg_Set_User_Inc_Input = {
  liked_by_user_id?: Maybe<Scalars['Int']>
  stg_set_id?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "likes_stg_set_user" */
export type Likes_Stg_Set_User_Insert_Input = {
  liked_by_user_id?: Maybe<Scalars['Int']>
  stg_set?: Maybe<Stg_Sets_Obj_Rel_Insert_Input>
  stg_set_id?: Maybe<Scalars['Int']>
  user?: Maybe<Users_Obj_Rel_Insert_Input>
}

/** aggregate max on columns */
export type Likes_Stg_Set_User_Max_Fields = {
  __typename?: 'likes_stg_set_user_max_fields'
  liked_by_user_id?: Maybe<Scalars['Int']>
  stg_set_id?: Maybe<Scalars['Int']>
}

/** order by max() on columns of table "likes_stg_set_user" */
export type Likes_Stg_Set_User_Max_Order_By = {
  liked_by_user_id?: Maybe<Order_By>
  stg_set_id?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Likes_Stg_Set_User_Min_Fields = {
  __typename?: 'likes_stg_set_user_min_fields'
  liked_by_user_id?: Maybe<Scalars['Int']>
  stg_set_id?: Maybe<Scalars['Int']>
}

/** order by min() on columns of table "likes_stg_set_user" */
export type Likes_Stg_Set_User_Min_Order_By = {
  liked_by_user_id?: Maybe<Order_By>
  stg_set_id?: Maybe<Order_By>
}

/** response of any mutation on the table "likes_stg_set_user" */
export type Likes_Stg_Set_User_Mutation_Response = {
  __typename?: 'likes_stg_set_user_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Likes_Stg_Set_User>
}

/** on conflict condition type for table "likes_stg_set_user" */
export type Likes_Stg_Set_User_On_Conflict = {
  constraint: Likes_Stg_Set_User_Constraint
  update_columns?: Array<Likes_Stg_Set_User_Update_Column>
  where?: Maybe<Likes_Stg_Set_User_Bool_Exp>
}

/** Ordering options when selecting data from "likes_stg_set_user". */
export type Likes_Stg_Set_User_Order_By = {
  liked_by_user_id?: Maybe<Order_By>
  stg_set?: Maybe<Stg_Sets_Order_By>
  stg_set_id?: Maybe<Order_By>
  user?: Maybe<Users_Order_By>
}

/** primary key columns input for table: likes_stg_set_user */
export type Likes_Stg_Set_User_Pk_Columns_Input = {
  liked_by_user_id: Scalars['Int']
  stg_set_id: Scalars['Int']
}

/** select columns of table "likes_stg_set_user" */
export enum Likes_Stg_Set_User_Select_Column {
  /** column name */
  LikedByUserId = 'liked_by_user_id',
  /** column name */
  StgSetId = 'stg_set_id',
}

/** input type for updating data in table "likes_stg_set_user" */
export type Likes_Stg_Set_User_Set_Input = {
  liked_by_user_id?: Maybe<Scalars['Int']>
  stg_set_id?: Maybe<Scalars['Int']>
}

/** aggregate stddev on columns */
export type Likes_Stg_Set_User_Stddev_Fields = {
  __typename?: 'likes_stg_set_user_stddev_fields'
  liked_by_user_id?: Maybe<Scalars['Float']>
  stg_set_id?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "likes_stg_set_user" */
export type Likes_Stg_Set_User_Stddev_Order_By = {
  liked_by_user_id?: Maybe<Order_By>
  stg_set_id?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Likes_Stg_Set_User_Stddev_Pop_Fields = {
  __typename?: 'likes_stg_set_user_stddev_pop_fields'
  liked_by_user_id?: Maybe<Scalars['Float']>
  stg_set_id?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "likes_stg_set_user" */
export type Likes_Stg_Set_User_Stddev_Pop_Order_By = {
  liked_by_user_id?: Maybe<Order_By>
  stg_set_id?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Likes_Stg_Set_User_Stddev_Samp_Fields = {
  __typename?: 'likes_stg_set_user_stddev_samp_fields'
  liked_by_user_id?: Maybe<Scalars['Float']>
  stg_set_id?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "likes_stg_set_user" */
export type Likes_Stg_Set_User_Stddev_Samp_Order_By = {
  liked_by_user_id?: Maybe<Order_By>
  stg_set_id?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Likes_Stg_Set_User_Sum_Fields = {
  __typename?: 'likes_stg_set_user_sum_fields'
  liked_by_user_id?: Maybe<Scalars['Int']>
  stg_set_id?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "likes_stg_set_user" */
export type Likes_Stg_Set_User_Sum_Order_By = {
  liked_by_user_id?: Maybe<Order_By>
  stg_set_id?: Maybe<Order_By>
}

/** update columns of table "likes_stg_set_user" */
export enum Likes_Stg_Set_User_Update_Column {
  /** column name */
  LikedByUserId = 'liked_by_user_id',
  /** column name */
  StgSetId = 'stg_set_id',
}

/** aggregate var_pop on columns */
export type Likes_Stg_Set_User_Var_Pop_Fields = {
  __typename?: 'likes_stg_set_user_var_pop_fields'
  liked_by_user_id?: Maybe<Scalars['Float']>
  stg_set_id?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "likes_stg_set_user" */
export type Likes_Stg_Set_User_Var_Pop_Order_By = {
  liked_by_user_id?: Maybe<Order_By>
  stg_set_id?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Likes_Stg_Set_User_Var_Samp_Fields = {
  __typename?: 'likes_stg_set_user_var_samp_fields'
  liked_by_user_id?: Maybe<Scalars['Float']>
  stg_set_id?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "likes_stg_set_user" */
export type Likes_Stg_Set_User_Var_Samp_Order_By = {
  liked_by_user_id?: Maybe<Order_By>
  stg_set_id?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Likes_Stg_Set_User_Variance_Fields = {
  __typename?: 'likes_stg_set_user_variance_fields'
  liked_by_user_id?: Maybe<Scalars['Float']>
  stg_set_id?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "likes_stg_set_user" */
export type Likes_Stg_Set_User_Variance_Order_By = {
  liked_by_user_id?: Maybe<Order_By>
  stg_set_id?: Maybe<Order_By>
}

/** columns and relationships of "likes_stg_submission_message_user" */
export type Likes_Stg_Submission_Message_User = {
  __typename?: 'likes_stg_submission_message_user'
  liked_by_user_id: Scalars['Int']
  stg_submission_message_id: Scalars['Int']
  /** An object relationship */
  submission_message: Stg_Submission_Messages
  /** An object relationship */
  user: Users
}

/** aggregated selection of "likes_stg_submission_message_user" */
export type Likes_Stg_Submission_Message_User_Aggregate = {
  __typename?: 'likes_stg_submission_message_user_aggregate'
  aggregate?: Maybe<Likes_Stg_Submission_Message_User_Aggregate_Fields>
  nodes: Array<Likes_Stg_Submission_Message_User>
}

/** aggregate fields of "likes_stg_submission_message_user" */
export type Likes_Stg_Submission_Message_User_Aggregate_Fields = {
  __typename?: 'likes_stg_submission_message_user_aggregate_fields'
  avg?: Maybe<Likes_Stg_Submission_Message_User_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Likes_Stg_Submission_Message_User_Max_Fields>
  min?: Maybe<Likes_Stg_Submission_Message_User_Min_Fields>
  stddev?: Maybe<Likes_Stg_Submission_Message_User_Stddev_Fields>
  stddev_pop?: Maybe<Likes_Stg_Submission_Message_User_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Likes_Stg_Submission_Message_User_Stddev_Samp_Fields>
  sum?: Maybe<Likes_Stg_Submission_Message_User_Sum_Fields>
  var_pop?: Maybe<Likes_Stg_Submission_Message_User_Var_Pop_Fields>
  var_samp?: Maybe<Likes_Stg_Submission_Message_User_Var_Samp_Fields>
  variance?: Maybe<Likes_Stg_Submission_Message_User_Variance_Fields>
}

/** aggregate fields of "likes_stg_submission_message_user" */
export type Likes_Stg_Submission_Message_User_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Likes_Stg_Submission_Message_User_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "likes_stg_submission_message_user" */
export type Likes_Stg_Submission_Message_User_Aggregate_Order_By = {
  avg?: Maybe<Likes_Stg_Submission_Message_User_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Likes_Stg_Submission_Message_User_Max_Order_By>
  min?: Maybe<Likes_Stg_Submission_Message_User_Min_Order_By>
  stddev?: Maybe<Likes_Stg_Submission_Message_User_Stddev_Order_By>
  stddev_pop?: Maybe<Likes_Stg_Submission_Message_User_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Likes_Stg_Submission_Message_User_Stddev_Samp_Order_By>
  sum?: Maybe<Likes_Stg_Submission_Message_User_Sum_Order_By>
  var_pop?: Maybe<Likes_Stg_Submission_Message_User_Var_Pop_Order_By>
  var_samp?: Maybe<Likes_Stg_Submission_Message_User_Var_Samp_Order_By>
  variance?: Maybe<Likes_Stg_Submission_Message_User_Variance_Order_By>
}

/** input type for inserting array relation for remote table "likes_stg_submission_message_user" */
export type Likes_Stg_Submission_Message_User_Arr_Rel_Insert_Input = {
  data: Array<Likes_Stg_Submission_Message_User_Insert_Input>
  /** on conflict condition */
  on_conflict?: Maybe<Likes_Stg_Submission_Message_User_On_Conflict>
}

/** aggregate avg on columns */
export type Likes_Stg_Submission_Message_User_Avg_Fields = {
  __typename?: 'likes_stg_submission_message_user_avg_fields'
  liked_by_user_id?: Maybe<Scalars['Float']>
  stg_submission_message_id?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "likes_stg_submission_message_user" */
export type Likes_Stg_Submission_Message_User_Avg_Order_By = {
  liked_by_user_id?: Maybe<Order_By>
  stg_submission_message_id?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "likes_stg_submission_message_user". All fields are combined with a logical 'AND'. */
export type Likes_Stg_Submission_Message_User_Bool_Exp = {
  _and?: Maybe<Array<Likes_Stg_Submission_Message_User_Bool_Exp>>
  _not?: Maybe<Likes_Stg_Submission_Message_User_Bool_Exp>
  _or?: Maybe<Array<Likes_Stg_Submission_Message_User_Bool_Exp>>
  liked_by_user_id?: Maybe<Int_Comparison_Exp>
  stg_submission_message_id?: Maybe<Int_Comparison_Exp>
  submission_message?: Maybe<Stg_Submission_Messages_Bool_Exp>
  user?: Maybe<Users_Bool_Exp>
}

/** unique or primary key constraints on table "likes_stg_submission_message_user" */
export enum Likes_Stg_Submission_Message_User_Constraint {
  /** unique or primary key constraint */
  LikesStgSubmissionMessageUserPkey = 'likes_stg_submission_message_user_pkey',
}

/** input type for incrementing numeric columns in table "likes_stg_submission_message_user" */
export type Likes_Stg_Submission_Message_User_Inc_Input = {
  liked_by_user_id?: Maybe<Scalars['Int']>
  stg_submission_message_id?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "likes_stg_submission_message_user" */
export type Likes_Stg_Submission_Message_User_Insert_Input = {
  liked_by_user_id?: Maybe<Scalars['Int']>
  stg_submission_message_id?: Maybe<Scalars['Int']>
  submission_message?: Maybe<Stg_Submission_Messages_Obj_Rel_Insert_Input>
  user?: Maybe<Users_Obj_Rel_Insert_Input>
}

/** aggregate max on columns */
export type Likes_Stg_Submission_Message_User_Max_Fields = {
  __typename?: 'likes_stg_submission_message_user_max_fields'
  liked_by_user_id?: Maybe<Scalars['Int']>
  stg_submission_message_id?: Maybe<Scalars['Int']>
}

/** order by max() on columns of table "likes_stg_submission_message_user" */
export type Likes_Stg_Submission_Message_User_Max_Order_By = {
  liked_by_user_id?: Maybe<Order_By>
  stg_submission_message_id?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Likes_Stg_Submission_Message_User_Min_Fields = {
  __typename?: 'likes_stg_submission_message_user_min_fields'
  liked_by_user_id?: Maybe<Scalars['Int']>
  stg_submission_message_id?: Maybe<Scalars['Int']>
}

/** order by min() on columns of table "likes_stg_submission_message_user" */
export type Likes_Stg_Submission_Message_User_Min_Order_By = {
  liked_by_user_id?: Maybe<Order_By>
  stg_submission_message_id?: Maybe<Order_By>
}

/** response of any mutation on the table "likes_stg_submission_message_user" */
export type Likes_Stg_Submission_Message_User_Mutation_Response = {
  __typename?: 'likes_stg_submission_message_user_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Likes_Stg_Submission_Message_User>
}

/** on conflict condition type for table "likes_stg_submission_message_user" */
export type Likes_Stg_Submission_Message_User_On_Conflict = {
  constraint: Likes_Stg_Submission_Message_User_Constraint
  update_columns?: Array<Likes_Stg_Submission_Message_User_Update_Column>
  where?: Maybe<Likes_Stg_Submission_Message_User_Bool_Exp>
}

/** Ordering options when selecting data from "likes_stg_submission_message_user". */
export type Likes_Stg_Submission_Message_User_Order_By = {
  liked_by_user_id?: Maybe<Order_By>
  stg_submission_message_id?: Maybe<Order_By>
  submission_message?: Maybe<Stg_Submission_Messages_Order_By>
  user?: Maybe<Users_Order_By>
}

/** primary key columns input for table: likes_stg_submission_message_user */
export type Likes_Stg_Submission_Message_User_Pk_Columns_Input = {
  liked_by_user_id: Scalars['Int']
  stg_submission_message_id: Scalars['Int']
}

/** select columns of table "likes_stg_submission_message_user" */
export enum Likes_Stg_Submission_Message_User_Select_Column {
  /** column name */
  LikedByUserId = 'liked_by_user_id',
  /** column name */
  StgSubmissionMessageId = 'stg_submission_message_id',
}

/** input type for updating data in table "likes_stg_submission_message_user" */
export type Likes_Stg_Submission_Message_User_Set_Input = {
  liked_by_user_id?: Maybe<Scalars['Int']>
  stg_submission_message_id?: Maybe<Scalars['Int']>
}

/** aggregate stddev on columns */
export type Likes_Stg_Submission_Message_User_Stddev_Fields = {
  __typename?: 'likes_stg_submission_message_user_stddev_fields'
  liked_by_user_id?: Maybe<Scalars['Float']>
  stg_submission_message_id?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "likes_stg_submission_message_user" */
export type Likes_Stg_Submission_Message_User_Stddev_Order_By = {
  liked_by_user_id?: Maybe<Order_By>
  stg_submission_message_id?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Likes_Stg_Submission_Message_User_Stddev_Pop_Fields = {
  __typename?: 'likes_stg_submission_message_user_stddev_pop_fields'
  liked_by_user_id?: Maybe<Scalars['Float']>
  stg_submission_message_id?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "likes_stg_submission_message_user" */
export type Likes_Stg_Submission_Message_User_Stddev_Pop_Order_By = {
  liked_by_user_id?: Maybe<Order_By>
  stg_submission_message_id?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Likes_Stg_Submission_Message_User_Stddev_Samp_Fields = {
  __typename?: 'likes_stg_submission_message_user_stddev_samp_fields'
  liked_by_user_id?: Maybe<Scalars['Float']>
  stg_submission_message_id?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "likes_stg_submission_message_user" */
export type Likes_Stg_Submission_Message_User_Stddev_Samp_Order_By = {
  liked_by_user_id?: Maybe<Order_By>
  stg_submission_message_id?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Likes_Stg_Submission_Message_User_Sum_Fields = {
  __typename?: 'likes_stg_submission_message_user_sum_fields'
  liked_by_user_id?: Maybe<Scalars['Int']>
  stg_submission_message_id?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "likes_stg_submission_message_user" */
export type Likes_Stg_Submission_Message_User_Sum_Order_By = {
  liked_by_user_id?: Maybe<Order_By>
  stg_submission_message_id?: Maybe<Order_By>
}

/** update columns of table "likes_stg_submission_message_user" */
export enum Likes_Stg_Submission_Message_User_Update_Column {
  /** column name */
  LikedByUserId = 'liked_by_user_id',
  /** column name */
  StgSubmissionMessageId = 'stg_submission_message_id',
}

/** aggregate var_pop on columns */
export type Likes_Stg_Submission_Message_User_Var_Pop_Fields = {
  __typename?: 'likes_stg_submission_message_user_var_pop_fields'
  liked_by_user_id?: Maybe<Scalars['Float']>
  stg_submission_message_id?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "likes_stg_submission_message_user" */
export type Likes_Stg_Submission_Message_User_Var_Pop_Order_By = {
  liked_by_user_id?: Maybe<Order_By>
  stg_submission_message_id?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Likes_Stg_Submission_Message_User_Var_Samp_Fields = {
  __typename?: 'likes_stg_submission_message_user_var_samp_fields'
  liked_by_user_id?: Maybe<Scalars['Float']>
  stg_submission_message_id?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "likes_stg_submission_message_user" */
export type Likes_Stg_Submission_Message_User_Var_Samp_Order_By = {
  liked_by_user_id?: Maybe<Order_By>
  stg_submission_message_id?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Likes_Stg_Submission_Message_User_Variance_Fields = {
  __typename?: 'likes_stg_submission_message_user_variance_fields'
  liked_by_user_id?: Maybe<Scalars['Float']>
  stg_submission_message_id?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "likes_stg_submission_message_user" */
export type Likes_Stg_Submission_Message_User_Variance_Order_By = {
  liked_by_user_id?: Maybe<Order_By>
  stg_submission_message_id?: Maybe<Order_By>
}

/** columns and relationships of "likes_stg_submission_user" */
export type Likes_Stg_Submission_User = {
  __typename?: 'likes_stg_submission_user'
  liked_by_user_id: Scalars['Int']
  /** An object relationship */
  stg_submission: Stg_Submissions
  stg_submission_id: Scalars['Int']
  /** An object relationship */
  user: Users
}

/** aggregated selection of "likes_stg_submission_user" */
export type Likes_Stg_Submission_User_Aggregate = {
  __typename?: 'likes_stg_submission_user_aggregate'
  aggregate?: Maybe<Likes_Stg_Submission_User_Aggregate_Fields>
  nodes: Array<Likes_Stg_Submission_User>
}

/** aggregate fields of "likes_stg_submission_user" */
export type Likes_Stg_Submission_User_Aggregate_Fields = {
  __typename?: 'likes_stg_submission_user_aggregate_fields'
  avg?: Maybe<Likes_Stg_Submission_User_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Likes_Stg_Submission_User_Max_Fields>
  min?: Maybe<Likes_Stg_Submission_User_Min_Fields>
  stddev?: Maybe<Likes_Stg_Submission_User_Stddev_Fields>
  stddev_pop?: Maybe<Likes_Stg_Submission_User_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Likes_Stg_Submission_User_Stddev_Samp_Fields>
  sum?: Maybe<Likes_Stg_Submission_User_Sum_Fields>
  var_pop?: Maybe<Likes_Stg_Submission_User_Var_Pop_Fields>
  var_samp?: Maybe<Likes_Stg_Submission_User_Var_Samp_Fields>
  variance?: Maybe<Likes_Stg_Submission_User_Variance_Fields>
}

/** aggregate fields of "likes_stg_submission_user" */
export type Likes_Stg_Submission_User_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Likes_Stg_Submission_User_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "likes_stg_submission_user" */
export type Likes_Stg_Submission_User_Aggregate_Order_By = {
  avg?: Maybe<Likes_Stg_Submission_User_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Likes_Stg_Submission_User_Max_Order_By>
  min?: Maybe<Likes_Stg_Submission_User_Min_Order_By>
  stddev?: Maybe<Likes_Stg_Submission_User_Stddev_Order_By>
  stddev_pop?: Maybe<Likes_Stg_Submission_User_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Likes_Stg_Submission_User_Stddev_Samp_Order_By>
  sum?: Maybe<Likes_Stg_Submission_User_Sum_Order_By>
  var_pop?: Maybe<Likes_Stg_Submission_User_Var_Pop_Order_By>
  var_samp?: Maybe<Likes_Stg_Submission_User_Var_Samp_Order_By>
  variance?: Maybe<Likes_Stg_Submission_User_Variance_Order_By>
}

/** input type for inserting array relation for remote table "likes_stg_submission_user" */
export type Likes_Stg_Submission_User_Arr_Rel_Insert_Input = {
  data: Array<Likes_Stg_Submission_User_Insert_Input>
  /** on conflict condition */
  on_conflict?: Maybe<Likes_Stg_Submission_User_On_Conflict>
}

/** aggregate avg on columns */
export type Likes_Stg_Submission_User_Avg_Fields = {
  __typename?: 'likes_stg_submission_user_avg_fields'
  liked_by_user_id?: Maybe<Scalars['Float']>
  stg_submission_id?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "likes_stg_submission_user" */
export type Likes_Stg_Submission_User_Avg_Order_By = {
  liked_by_user_id?: Maybe<Order_By>
  stg_submission_id?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "likes_stg_submission_user". All fields are combined with a logical 'AND'. */
export type Likes_Stg_Submission_User_Bool_Exp = {
  _and?: Maybe<Array<Likes_Stg_Submission_User_Bool_Exp>>
  _not?: Maybe<Likes_Stg_Submission_User_Bool_Exp>
  _or?: Maybe<Array<Likes_Stg_Submission_User_Bool_Exp>>
  liked_by_user_id?: Maybe<Int_Comparison_Exp>
  stg_submission?: Maybe<Stg_Submissions_Bool_Exp>
  stg_submission_id?: Maybe<Int_Comparison_Exp>
  user?: Maybe<Users_Bool_Exp>
}

/** unique or primary key constraints on table "likes_stg_submission_user" */
export enum Likes_Stg_Submission_User_Constraint {
  /** unique or primary key constraint */
  LikesStgSubmissionUserPkey = 'likes_stg_submission_user_pkey',
}

/** input type for incrementing numeric columns in table "likes_stg_submission_user" */
export type Likes_Stg_Submission_User_Inc_Input = {
  liked_by_user_id?: Maybe<Scalars['Int']>
  stg_submission_id?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "likes_stg_submission_user" */
export type Likes_Stg_Submission_User_Insert_Input = {
  liked_by_user_id?: Maybe<Scalars['Int']>
  stg_submission?: Maybe<Stg_Submissions_Obj_Rel_Insert_Input>
  stg_submission_id?: Maybe<Scalars['Int']>
  user?: Maybe<Users_Obj_Rel_Insert_Input>
}

/** aggregate max on columns */
export type Likes_Stg_Submission_User_Max_Fields = {
  __typename?: 'likes_stg_submission_user_max_fields'
  liked_by_user_id?: Maybe<Scalars['Int']>
  stg_submission_id?: Maybe<Scalars['Int']>
}

/** order by max() on columns of table "likes_stg_submission_user" */
export type Likes_Stg_Submission_User_Max_Order_By = {
  liked_by_user_id?: Maybe<Order_By>
  stg_submission_id?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Likes_Stg_Submission_User_Min_Fields = {
  __typename?: 'likes_stg_submission_user_min_fields'
  liked_by_user_id?: Maybe<Scalars['Int']>
  stg_submission_id?: Maybe<Scalars['Int']>
}

/** order by min() on columns of table "likes_stg_submission_user" */
export type Likes_Stg_Submission_User_Min_Order_By = {
  liked_by_user_id?: Maybe<Order_By>
  stg_submission_id?: Maybe<Order_By>
}

/** response of any mutation on the table "likes_stg_submission_user" */
export type Likes_Stg_Submission_User_Mutation_Response = {
  __typename?: 'likes_stg_submission_user_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Likes_Stg_Submission_User>
}

/** on conflict condition type for table "likes_stg_submission_user" */
export type Likes_Stg_Submission_User_On_Conflict = {
  constraint: Likes_Stg_Submission_User_Constraint
  update_columns?: Array<Likes_Stg_Submission_User_Update_Column>
  where?: Maybe<Likes_Stg_Submission_User_Bool_Exp>
}

/** Ordering options when selecting data from "likes_stg_submission_user". */
export type Likes_Stg_Submission_User_Order_By = {
  liked_by_user_id?: Maybe<Order_By>
  stg_submission?: Maybe<Stg_Submissions_Order_By>
  stg_submission_id?: Maybe<Order_By>
  user?: Maybe<Users_Order_By>
}

/** primary key columns input for table: likes_stg_submission_user */
export type Likes_Stg_Submission_User_Pk_Columns_Input = {
  liked_by_user_id: Scalars['Int']
  stg_submission_id: Scalars['Int']
}

/** select columns of table "likes_stg_submission_user" */
export enum Likes_Stg_Submission_User_Select_Column {
  /** column name */
  LikedByUserId = 'liked_by_user_id',
  /** column name */
  StgSubmissionId = 'stg_submission_id',
}

/** input type for updating data in table "likes_stg_submission_user" */
export type Likes_Stg_Submission_User_Set_Input = {
  liked_by_user_id?: Maybe<Scalars['Int']>
  stg_submission_id?: Maybe<Scalars['Int']>
}

/** aggregate stddev on columns */
export type Likes_Stg_Submission_User_Stddev_Fields = {
  __typename?: 'likes_stg_submission_user_stddev_fields'
  liked_by_user_id?: Maybe<Scalars['Float']>
  stg_submission_id?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "likes_stg_submission_user" */
export type Likes_Stg_Submission_User_Stddev_Order_By = {
  liked_by_user_id?: Maybe<Order_By>
  stg_submission_id?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Likes_Stg_Submission_User_Stddev_Pop_Fields = {
  __typename?: 'likes_stg_submission_user_stddev_pop_fields'
  liked_by_user_id?: Maybe<Scalars['Float']>
  stg_submission_id?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "likes_stg_submission_user" */
export type Likes_Stg_Submission_User_Stddev_Pop_Order_By = {
  liked_by_user_id?: Maybe<Order_By>
  stg_submission_id?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Likes_Stg_Submission_User_Stddev_Samp_Fields = {
  __typename?: 'likes_stg_submission_user_stddev_samp_fields'
  liked_by_user_id?: Maybe<Scalars['Float']>
  stg_submission_id?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "likes_stg_submission_user" */
export type Likes_Stg_Submission_User_Stddev_Samp_Order_By = {
  liked_by_user_id?: Maybe<Order_By>
  stg_submission_id?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Likes_Stg_Submission_User_Sum_Fields = {
  __typename?: 'likes_stg_submission_user_sum_fields'
  liked_by_user_id?: Maybe<Scalars['Int']>
  stg_submission_id?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "likes_stg_submission_user" */
export type Likes_Stg_Submission_User_Sum_Order_By = {
  liked_by_user_id?: Maybe<Order_By>
  stg_submission_id?: Maybe<Order_By>
}

/** update columns of table "likes_stg_submission_user" */
export enum Likes_Stg_Submission_User_Update_Column {
  /** column name */
  LikedByUserId = 'liked_by_user_id',
  /** column name */
  StgSubmissionId = 'stg_submission_id',
}

/** aggregate var_pop on columns */
export type Likes_Stg_Submission_User_Var_Pop_Fields = {
  __typename?: 'likes_stg_submission_user_var_pop_fields'
  liked_by_user_id?: Maybe<Scalars['Float']>
  stg_submission_id?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "likes_stg_submission_user" */
export type Likes_Stg_Submission_User_Var_Pop_Order_By = {
  liked_by_user_id?: Maybe<Order_By>
  stg_submission_id?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Likes_Stg_Submission_User_Var_Samp_Fields = {
  __typename?: 'likes_stg_submission_user_var_samp_fields'
  liked_by_user_id?: Maybe<Scalars['Float']>
  stg_submission_id?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "likes_stg_submission_user" */
export type Likes_Stg_Submission_User_Var_Samp_Order_By = {
  liked_by_user_id?: Maybe<Order_By>
  stg_submission_id?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Likes_Stg_Submission_User_Variance_Fields = {
  __typename?: 'likes_stg_submission_user_variance_fields'
  liked_by_user_id?: Maybe<Scalars['Float']>
  stg_submission_id?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "likes_stg_submission_user" */
export type Likes_Stg_Submission_User_Variance_Order_By = {
  liked_by_user_id?: Maybe<Order_By>
  stg_submission_id?: Maybe<Order_By>
}

/** columns and relationships of "likes_user_user" */
export type Likes_User_User = {
  __typename?: 'likes_user_user'
  /** An object relationship */
  liked_by: Users
  liked_by_user_id: Scalars['Int']
  /** An object relationship */
  liked_user: Users
  liked_user_id: Scalars['Int']
}

/** aggregated selection of "likes_user_user" */
export type Likes_User_User_Aggregate = {
  __typename?: 'likes_user_user_aggregate'
  aggregate?: Maybe<Likes_User_User_Aggregate_Fields>
  nodes: Array<Likes_User_User>
}

/** aggregate fields of "likes_user_user" */
export type Likes_User_User_Aggregate_Fields = {
  __typename?: 'likes_user_user_aggregate_fields'
  avg?: Maybe<Likes_User_User_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Likes_User_User_Max_Fields>
  min?: Maybe<Likes_User_User_Min_Fields>
  stddev?: Maybe<Likes_User_User_Stddev_Fields>
  stddev_pop?: Maybe<Likes_User_User_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Likes_User_User_Stddev_Samp_Fields>
  sum?: Maybe<Likes_User_User_Sum_Fields>
  var_pop?: Maybe<Likes_User_User_Var_Pop_Fields>
  var_samp?: Maybe<Likes_User_User_Var_Samp_Fields>
  variance?: Maybe<Likes_User_User_Variance_Fields>
}

/** aggregate fields of "likes_user_user" */
export type Likes_User_User_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Likes_User_User_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "likes_user_user" */
export type Likes_User_User_Aggregate_Order_By = {
  avg?: Maybe<Likes_User_User_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Likes_User_User_Max_Order_By>
  min?: Maybe<Likes_User_User_Min_Order_By>
  stddev?: Maybe<Likes_User_User_Stddev_Order_By>
  stddev_pop?: Maybe<Likes_User_User_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Likes_User_User_Stddev_Samp_Order_By>
  sum?: Maybe<Likes_User_User_Sum_Order_By>
  var_pop?: Maybe<Likes_User_User_Var_Pop_Order_By>
  var_samp?: Maybe<Likes_User_User_Var_Samp_Order_By>
  variance?: Maybe<Likes_User_User_Variance_Order_By>
}

/** input type for inserting array relation for remote table "likes_user_user" */
export type Likes_User_User_Arr_Rel_Insert_Input = {
  data: Array<Likes_User_User_Insert_Input>
  /** on conflict condition */
  on_conflict?: Maybe<Likes_User_User_On_Conflict>
}

/** aggregate avg on columns */
export type Likes_User_User_Avg_Fields = {
  __typename?: 'likes_user_user_avg_fields'
  liked_by_user_id?: Maybe<Scalars['Float']>
  liked_user_id?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "likes_user_user" */
export type Likes_User_User_Avg_Order_By = {
  liked_by_user_id?: Maybe<Order_By>
  liked_user_id?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "likes_user_user". All fields are combined with a logical 'AND'. */
export type Likes_User_User_Bool_Exp = {
  _and?: Maybe<Array<Likes_User_User_Bool_Exp>>
  _not?: Maybe<Likes_User_User_Bool_Exp>
  _or?: Maybe<Array<Likes_User_User_Bool_Exp>>
  liked_by?: Maybe<Users_Bool_Exp>
  liked_by_user_id?: Maybe<Int_Comparison_Exp>
  liked_user?: Maybe<Users_Bool_Exp>
  liked_user_id?: Maybe<Int_Comparison_Exp>
}

/** unique or primary key constraints on table "likes_user_user" */
export enum Likes_User_User_Constraint {
  /** unique or primary key constraint */
  LikesUserUserPkey = 'likes_user_user_pkey',
}

/** input type for incrementing numeric columns in table "likes_user_user" */
export type Likes_User_User_Inc_Input = {
  liked_by_user_id?: Maybe<Scalars['Int']>
  liked_user_id?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "likes_user_user" */
export type Likes_User_User_Insert_Input = {
  liked_by?: Maybe<Users_Obj_Rel_Insert_Input>
  liked_by_user_id?: Maybe<Scalars['Int']>
  liked_user?: Maybe<Users_Obj_Rel_Insert_Input>
  liked_user_id?: Maybe<Scalars['Int']>
}

/** aggregate max on columns */
export type Likes_User_User_Max_Fields = {
  __typename?: 'likes_user_user_max_fields'
  liked_by_user_id?: Maybe<Scalars['Int']>
  liked_user_id?: Maybe<Scalars['Int']>
}

/** order by max() on columns of table "likes_user_user" */
export type Likes_User_User_Max_Order_By = {
  liked_by_user_id?: Maybe<Order_By>
  liked_user_id?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Likes_User_User_Min_Fields = {
  __typename?: 'likes_user_user_min_fields'
  liked_by_user_id?: Maybe<Scalars['Int']>
  liked_user_id?: Maybe<Scalars['Int']>
}

/** order by min() on columns of table "likes_user_user" */
export type Likes_User_User_Min_Order_By = {
  liked_by_user_id?: Maybe<Order_By>
  liked_user_id?: Maybe<Order_By>
}

/** response of any mutation on the table "likes_user_user" */
export type Likes_User_User_Mutation_Response = {
  __typename?: 'likes_user_user_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Likes_User_User>
}

/** on conflict condition type for table "likes_user_user" */
export type Likes_User_User_On_Conflict = {
  constraint: Likes_User_User_Constraint
  update_columns?: Array<Likes_User_User_Update_Column>
  where?: Maybe<Likes_User_User_Bool_Exp>
}

/** Ordering options when selecting data from "likes_user_user". */
export type Likes_User_User_Order_By = {
  liked_by?: Maybe<Users_Order_By>
  liked_by_user_id?: Maybe<Order_By>
  liked_user?: Maybe<Users_Order_By>
  liked_user_id?: Maybe<Order_By>
}

/** primary key columns input for table: likes_user_user */
export type Likes_User_User_Pk_Columns_Input = {
  liked_by_user_id: Scalars['Int']
  liked_user_id: Scalars['Int']
}

/** select columns of table "likes_user_user" */
export enum Likes_User_User_Select_Column {
  /** column name */
  LikedByUserId = 'liked_by_user_id',
  /** column name */
  LikedUserId = 'liked_user_id',
}

/** input type for updating data in table "likes_user_user" */
export type Likes_User_User_Set_Input = {
  liked_by_user_id?: Maybe<Scalars['Int']>
  liked_user_id?: Maybe<Scalars['Int']>
}

/** aggregate stddev on columns */
export type Likes_User_User_Stddev_Fields = {
  __typename?: 'likes_user_user_stddev_fields'
  liked_by_user_id?: Maybe<Scalars['Float']>
  liked_user_id?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "likes_user_user" */
export type Likes_User_User_Stddev_Order_By = {
  liked_by_user_id?: Maybe<Order_By>
  liked_user_id?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Likes_User_User_Stddev_Pop_Fields = {
  __typename?: 'likes_user_user_stddev_pop_fields'
  liked_by_user_id?: Maybe<Scalars['Float']>
  liked_user_id?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "likes_user_user" */
export type Likes_User_User_Stddev_Pop_Order_By = {
  liked_by_user_id?: Maybe<Order_By>
  liked_user_id?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Likes_User_User_Stddev_Samp_Fields = {
  __typename?: 'likes_user_user_stddev_samp_fields'
  liked_by_user_id?: Maybe<Scalars['Float']>
  liked_user_id?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "likes_user_user" */
export type Likes_User_User_Stddev_Samp_Order_By = {
  liked_by_user_id?: Maybe<Order_By>
  liked_user_id?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Likes_User_User_Sum_Fields = {
  __typename?: 'likes_user_user_sum_fields'
  liked_by_user_id?: Maybe<Scalars['Int']>
  liked_user_id?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "likes_user_user" */
export type Likes_User_User_Sum_Order_By = {
  liked_by_user_id?: Maybe<Order_By>
  liked_user_id?: Maybe<Order_By>
}

/** update columns of table "likes_user_user" */
export enum Likes_User_User_Update_Column {
  /** column name */
  LikedByUserId = 'liked_by_user_id',
  /** column name */
  LikedUserId = 'liked_user_id',
}

/** aggregate var_pop on columns */
export type Likes_User_User_Var_Pop_Fields = {
  __typename?: 'likes_user_user_var_pop_fields'
  liked_by_user_id?: Maybe<Scalars['Float']>
  liked_user_id?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "likes_user_user" */
export type Likes_User_User_Var_Pop_Order_By = {
  liked_by_user_id?: Maybe<Order_By>
  liked_user_id?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Likes_User_User_Var_Samp_Fields = {
  __typename?: 'likes_user_user_var_samp_fields'
  liked_by_user_id?: Maybe<Scalars['Float']>
  liked_user_id?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "likes_user_user" */
export type Likes_User_User_Var_Samp_Order_By = {
  liked_by_user_id?: Maybe<Order_By>
  liked_user_id?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Likes_User_User_Variance_Fields = {
  __typename?: 'likes_user_user_variance_fields'
  liked_by_user_id?: Maybe<Scalars['Float']>
  liked_user_id?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "likes_user_user" */
export type Likes_User_User_Variance_Order_By = {
  liked_by_user_id?: Maybe<Order_By>
  liked_user_id?: Maybe<Order_By>
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root'
  /** delete data from the table: "chat_messages" */
  delete_chat_messages?: Maybe<Chat_Messages_Mutation_Response>
  /** delete single row from the table: "chat_messages" */
  delete_chat_messages_by_pk?: Maybe<Chat_Messages>
  /** delete data from the table: "e_post_tags" */
  delete_e_post_tags?: Maybe<E_Post_Tags_Mutation_Response>
  /** delete single row from the table: "e_post_tags" */
  delete_e_post_tags_by_pk?: Maybe<E_Post_Tags>
  /** delete data from the table: "e_stg_statuses" */
  delete_e_stg_statuses?: Maybe<E_Stg_Statuses_Mutation_Response>
  /** delete single row from the table: "e_stg_statuses" */
  delete_e_stg_statuses_by_pk?: Maybe<E_Stg_Statuses>
  /** delete data from the table: "e_user_disciplines" */
  delete_e_user_disciplines?: Maybe<E_User_Disciplines_Mutation_Response>
  /** delete single row from the table: "e_user_disciplines" */
  delete_e_user_disciplines_by_pk?: Maybe<E_User_Disciplines>
  /** delete data from the table: "e_user_locations" */
  delete_e_user_locations?: Maybe<E_User_Locations_Mutation_Response>
  /** delete single row from the table: "e_user_locations" */
  delete_e_user_locations_by_pk?: Maybe<E_User_Locations>
  /** delete data from the table: "e_user_roles" */
  delete_e_user_roles?: Maybe<E_User_Roles_Mutation_Response>
  /** delete single row from the table: "e_user_roles" */
  delete_e_user_roles_by_pk?: Maybe<E_User_Roles>
  /** delete data from the table: "likes_chat_message_user" */
  delete_likes_chat_message_user?: Maybe<Likes_Chat_Message_User_Mutation_Response>
  /** delete single row from the table: "likes_chat_message_user" */
  delete_likes_chat_message_user_by_pk?: Maybe<Likes_Chat_Message_User>
  /** delete data from the table: "likes_post_message_user" */
  delete_likes_post_message_user?: Maybe<Likes_Post_Message_User_Mutation_Response>
  /** delete single row from the table: "likes_post_message_user" */
  delete_likes_post_message_user_by_pk?: Maybe<Likes_Post_Message_User>
  /** delete data from the table: "likes_post_user" */
  delete_likes_post_user?: Maybe<Likes_Post_User_Mutation_Response>
  /** delete single row from the table: "likes_post_user" */
  delete_likes_post_user_by_pk?: Maybe<Likes_Post_User>
  /** delete data from the table: "likes_stg_set_message_user" */
  delete_likes_stg_set_message_user?: Maybe<Likes_Stg_Set_Message_User_Mutation_Response>
  /** delete single row from the table: "likes_stg_set_message_user" */
  delete_likes_stg_set_message_user_by_pk?: Maybe<Likes_Stg_Set_Message_User>
  /** delete data from the table: "likes_stg_set_user" */
  delete_likes_stg_set_user?: Maybe<Likes_Stg_Set_User_Mutation_Response>
  /** delete single row from the table: "likes_stg_set_user" */
  delete_likes_stg_set_user_by_pk?: Maybe<Likes_Stg_Set_User>
  /** delete data from the table: "likes_stg_submission_message_user" */
  delete_likes_stg_submission_message_user?: Maybe<Likes_Stg_Submission_Message_User_Mutation_Response>
  /** delete single row from the table: "likes_stg_submission_message_user" */
  delete_likes_stg_submission_message_user_by_pk?: Maybe<Likes_Stg_Submission_Message_User>
  /** delete data from the table: "likes_stg_submission_user" */
  delete_likes_stg_submission_user?: Maybe<Likes_Stg_Submission_User_Mutation_Response>
  /** delete single row from the table: "likes_stg_submission_user" */
  delete_likes_stg_submission_user_by_pk?: Maybe<Likes_Stg_Submission_User>
  /** delete data from the table: "likes_user_user" */
  delete_likes_user_user?: Maybe<Likes_User_User_Mutation_Response>
  /** delete single row from the table: "likes_user_user" */
  delete_likes_user_user_by_pk?: Maybe<Likes_User_User>
  /** delete data from the table: "post_messages" */
  delete_post_messages?: Maybe<Post_Messages_Mutation_Response>
  /** delete single row from the table: "post_messages" */
  delete_post_messages_by_pk?: Maybe<Post_Messages>
  /** delete data from the table: "post_tags" */
  delete_post_tags?: Maybe<Post_Tags_Mutation_Response>
  /** delete single row from the table: "post_tags" */
  delete_post_tags_by_pk?: Maybe<Post_Tags>
  /** delete data from the table: "posts" */
  delete_posts?: Maybe<Posts_Mutation_Response>
  /** delete single row from the table: "posts" */
  delete_posts_by_pk?: Maybe<Posts>
  /** delete data from the table: "refresh_tokens" */
  delete_refresh_tokens?: Maybe<Refresh_Tokens_Mutation_Response>
  /** delete single row from the table: "refresh_tokens" */
  delete_refresh_tokens_by_pk?: Maybe<Refresh_Tokens>
  /** delete data from the table: "stg_players" */
  delete_stg_players?: Maybe<Stg_Players_Mutation_Response>
  /** delete single row from the table: "stg_players" */
  delete_stg_players_by_pk?: Maybe<Stg_Players>
  /** delete data from the table: "stg_set_messages" */
  delete_stg_set_messages?: Maybe<Stg_Set_Messages_Mutation_Response>
  /** delete single row from the table: "stg_set_messages" */
  delete_stg_set_messages_by_pk?: Maybe<Stg_Set_Messages>
  /** delete data from the table: "stg_sets" */
  delete_stg_sets?: Maybe<Stg_Sets_Mutation_Response>
  /** delete single row from the table: "stg_sets" */
  delete_stg_sets_by_pk?: Maybe<Stg_Sets>
  /** delete data from the table: "stg_submission_messages" */
  delete_stg_submission_messages?: Maybe<Stg_Submission_Messages_Mutation_Response>
  /** delete single row from the table: "stg_submission_messages" */
  delete_stg_submission_messages_by_pk?: Maybe<Stg_Submission_Messages>
  /** delete data from the table: "stg_submissions" */
  delete_stg_submissions?: Maybe<Stg_Submissions_Mutation_Response>
  /** delete single row from the table: "stg_submissions" */
  delete_stg_submissions_by_pk?: Maybe<Stg_Submissions>
  /** delete data from the table: "stgs" */
  delete_stgs?: Maybe<Stgs_Mutation_Response>
  /** delete single row from the table: "stgs" */
  delete_stgs_by_pk?: Maybe<Stgs>
  /** delete data from the table: "user_activity" */
  delete_user_activity?: Maybe<User_Activity_Mutation_Response>
  /** delete single row from the table: "user_activity" */
  delete_user_activity_by_pk?: Maybe<User_Activity>
  /** delete data from the table: "user_disciplines" */
  delete_user_disciplines?: Maybe<User_Disciplines_Mutation_Response>
  /** delete single row from the table: "user_disciplines" */
  delete_user_disciplines_by_pk?: Maybe<User_Disciplines>
  /** delete data from the table: "user_locations" */
  delete_user_locations?: Maybe<User_Locations_Mutation_Response>
  /** delete single row from the table: "user_locations" */
  delete_user_locations_by_pk?: Maybe<User_Locations>
  /** delete data from the table: "user_socials" */
  delete_user_socials?: Maybe<User_Socials_Mutation_Response>
  /** delete single row from the table: "user_socials" */
  delete_user_socials_by_pk?: Maybe<User_Socials>
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>
  /** insert data into the table: "chat_messages" */
  insert_chat_messages?: Maybe<Chat_Messages_Mutation_Response>
  /** insert a single row into the table: "chat_messages" */
  insert_chat_messages_one?: Maybe<Chat_Messages>
  /** insert data into the table: "e_post_tags" */
  insert_e_post_tags?: Maybe<E_Post_Tags_Mutation_Response>
  /** insert a single row into the table: "e_post_tags" */
  insert_e_post_tags_one?: Maybe<E_Post_Tags>
  /** insert data into the table: "e_stg_statuses" */
  insert_e_stg_statuses?: Maybe<E_Stg_Statuses_Mutation_Response>
  /** insert a single row into the table: "e_stg_statuses" */
  insert_e_stg_statuses_one?: Maybe<E_Stg_Statuses>
  /** insert data into the table: "e_user_disciplines" */
  insert_e_user_disciplines?: Maybe<E_User_Disciplines_Mutation_Response>
  /** insert a single row into the table: "e_user_disciplines" */
  insert_e_user_disciplines_one?: Maybe<E_User_Disciplines>
  /** insert data into the table: "e_user_locations" */
  insert_e_user_locations?: Maybe<E_User_Locations_Mutation_Response>
  /** insert a single row into the table: "e_user_locations" */
  insert_e_user_locations_one?: Maybe<E_User_Locations>
  /** insert data into the table: "e_user_roles" */
  insert_e_user_roles?: Maybe<E_User_Roles_Mutation_Response>
  /** insert a single row into the table: "e_user_roles" */
  insert_e_user_roles_one?: Maybe<E_User_Roles>
  /** insert data into the table: "likes_chat_message_user" */
  insert_likes_chat_message_user?: Maybe<Likes_Chat_Message_User_Mutation_Response>
  /** insert a single row into the table: "likes_chat_message_user" */
  insert_likes_chat_message_user_one?: Maybe<Likes_Chat_Message_User>
  /** insert data into the table: "likes_post_message_user" */
  insert_likes_post_message_user?: Maybe<Likes_Post_Message_User_Mutation_Response>
  /** insert a single row into the table: "likes_post_message_user" */
  insert_likes_post_message_user_one?: Maybe<Likes_Post_Message_User>
  /** insert data into the table: "likes_post_user" */
  insert_likes_post_user?: Maybe<Likes_Post_User_Mutation_Response>
  /** insert a single row into the table: "likes_post_user" */
  insert_likes_post_user_one?: Maybe<Likes_Post_User>
  /** insert data into the table: "likes_stg_set_message_user" */
  insert_likes_stg_set_message_user?: Maybe<Likes_Stg_Set_Message_User_Mutation_Response>
  /** insert a single row into the table: "likes_stg_set_message_user" */
  insert_likes_stg_set_message_user_one?: Maybe<Likes_Stg_Set_Message_User>
  /** insert data into the table: "likes_stg_set_user" */
  insert_likes_stg_set_user?: Maybe<Likes_Stg_Set_User_Mutation_Response>
  /** insert a single row into the table: "likes_stg_set_user" */
  insert_likes_stg_set_user_one?: Maybe<Likes_Stg_Set_User>
  /** insert data into the table: "likes_stg_submission_message_user" */
  insert_likes_stg_submission_message_user?: Maybe<Likes_Stg_Submission_Message_User_Mutation_Response>
  /** insert a single row into the table: "likes_stg_submission_message_user" */
  insert_likes_stg_submission_message_user_one?: Maybe<Likes_Stg_Submission_Message_User>
  /** insert data into the table: "likes_stg_submission_user" */
  insert_likes_stg_submission_user?: Maybe<Likes_Stg_Submission_User_Mutation_Response>
  /** insert a single row into the table: "likes_stg_submission_user" */
  insert_likes_stg_submission_user_one?: Maybe<Likes_Stg_Submission_User>
  /** insert data into the table: "likes_user_user" */
  insert_likes_user_user?: Maybe<Likes_User_User_Mutation_Response>
  /** insert a single row into the table: "likes_user_user" */
  insert_likes_user_user_one?: Maybe<Likes_User_User>
  /** insert data into the table: "post_messages" */
  insert_post_messages?: Maybe<Post_Messages_Mutation_Response>
  /** insert a single row into the table: "post_messages" */
  insert_post_messages_one?: Maybe<Post_Messages>
  /** insert data into the table: "post_tags" */
  insert_post_tags?: Maybe<Post_Tags_Mutation_Response>
  /** insert a single row into the table: "post_tags" */
  insert_post_tags_one?: Maybe<Post_Tags>
  /** insert data into the table: "posts" */
  insert_posts?: Maybe<Posts_Mutation_Response>
  /** insert a single row into the table: "posts" */
  insert_posts_one?: Maybe<Posts>
  /** insert data into the table: "refresh_tokens" */
  insert_refresh_tokens?: Maybe<Refresh_Tokens_Mutation_Response>
  /** insert a single row into the table: "refresh_tokens" */
  insert_refresh_tokens_one?: Maybe<Refresh_Tokens>
  /** insert data into the table: "stg_players" */
  insert_stg_players?: Maybe<Stg_Players_Mutation_Response>
  /** insert a single row into the table: "stg_players" */
  insert_stg_players_one?: Maybe<Stg_Players>
  /** insert data into the table: "stg_set_messages" */
  insert_stg_set_messages?: Maybe<Stg_Set_Messages_Mutation_Response>
  /** insert a single row into the table: "stg_set_messages" */
  insert_stg_set_messages_one?: Maybe<Stg_Set_Messages>
  /** insert data into the table: "stg_sets" */
  insert_stg_sets?: Maybe<Stg_Sets_Mutation_Response>
  /** insert a single row into the table: "stg_sets" */
  insert_stg_sets_one?: Maybe<Stg_Sets>
  /** insert data into the table: "stg_submission_messages" */
  insert_stg_submission_messages?: Maybe<Stg_Submission_Messages_Mutation_Response>
  /** insert a single row into the table: "stg_submission_messages" */
  insert_stg_submission_messages_one?: Maybe<Stg_Submission_Messages>
  /** insert data into the table: "stg_submissions" */
  insert_stg_submissions?: Maybe<Stg_Submissions_Mutation_Response>
  /** insert a single row into the table: "stg_submissions" */
  insert_stg_submissions_one?: Maybe<Stg_Submissions>
  /** insert data into the table: "stgs" */
  insert_stgs?: Maybe<Stgs_Mutation_Response>
  /** insert a single row into the table: "stgs" */
  insert_stgs_one?: Maybe<Stgs>
  /** insert data into the table: "user_activity" */
  insert_user_activity?: Maybe<User_Activity_Mutation_Response>
  /** insert a single row into the table: "user_activity" */
  insert_user_activity_one?: Maybe<User_Activity>
  /** insert data into the table: "user_disciplines" */
  insert_user_disciplines?: Maybe<User_Disciplines_Mutation_Response>
  /** insert a single row into the table: "user_disciplines" */
  insert_user_disciplines_one?: Maybe<User_Disciplines>
  /** insert data into the table: "user_locations" */
  insert_user_locations?: Maybe<User_Locations_Mutation_Response>
  /** insert a single row into the table: "user_locations" */
  insert_user_locations_one?: Maybe<User_Locations>
  /** insert data into the table: "user_socials" */
  insert_user_socials?: Maybe<User_Socials_Mutation_Response>
  /** insert a single row into the table: "user_socials" */
  insert_user_socials_one?: Maybe<User_Socials>
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>
  /** update data of the table: "chat_messages" */
  update_chat_messages?: Maybe<Chat_Messages_Mutation_Response>
  /** update single row of the table: "chat_messages" */
  update_chat_messages_by_pk?: Maybe<Chat_Messages>
  /** update data of the table: "e_post_tags" */
  update_e_post_tags?: Maybe<E_Post_Tags_Mutation_Response>
  /** update single row of the table: "e_post_tags" */
  update_e_post_tags_by_pk?: Maybe<E_Post_Tags>
  /** update data of the table: "e_stg_statuses" */
  update_e_stg_statuses?: Maybe<E_Stg_Statuses_Mutation_Response>
  /** update single row of the table: "e_stg_statuses" */
  update_e_stg_statuses_by_pk?: Maybe<E_Stg_Statuses>
  /** update data of the table: "e_user_disciplines" */
  update_e_user_disciplines?: Maybe<E_User_Disciplines_Mutation_Response>
  /** update single row of the table: "e_user_disciplines" */
  update_e_user_disciplines_by_pk?: Maybe<E_User_Disciplines>
  /** update data of the table: "e_user_locations" */
  update_e_user_locations?: Maybe<E_User_Locations_Mutation_Response>
  /** update single row of the table: "e_user_locations" */
  update_e_user_locations_by_pk?: Maybe<E_User_Locations>
  /** update data of the table: "e_user_roles" */
  update_e_user_roles?: Maybe<E_User_Roles_Mutation_Response>
  /** update single row of the table: "e_user_roles" */
  update_e_user_roles_by_pk?: Maybe<E_User_Roles>
  /** update data of the table: "likes_chat_message_user" */
  update_likes_chat_message_user?: Maybe<Likes_Chat_Message_User_Mutation_Response>
  /** update single row of the table: "likes_chat_message_user" */
  update_likes_chat_message_user_by_pk?: Maybe<Likes_Chat_Message_User>
  /** update data of the table: "likes_post_message_user" */
  update_likes_post_message_user?: Maybe<Likes_Post_Message_User_Mutation_Response>
  /** update single row of the table: "likes_post_message_user" */
  update_likes_post_message_user_by_pk?: Maybe<Likes_Post_Message_User>
  /** update data of the table: "likes_post_user" */
  update_likes_post_user?: Maybe<Likes_Post_User_Mutation_Response>
  /** update single row of the table: "likes_post_user" */
  update_likes_post_user_by_pk?: Maybe<Likes_Post_User>
  /** update data of the table: "likes_stg_set_message_user" */
  update_likes_stg_set_message_user?: Maybe<Likes_Stg_Set_Message_User_Mutation_Response>
  /** update single row of the table: "likes_stg_set_message_user" */
  update_likes_stg_set_message_user_by_pk?: Maybe<Likes_Stg_Set_Message_User>
  /** update data of the table: "likes_stg_set_user" */
  update_likes_stg_set_user?: Maybe<Likes_Stg_Set_User_Mutation_Response>
  /** update single row of the table: "likes_stg_set_user" */
  update_likes_stg_set_user_by_pk?: Maybe<Likes_Stg_Set_User>
  /** update data of the table: "likes_stg_submission_message_user" */
  update_likes_stg_submission_message_user?: Maybe<Likes_Stg_Submission_Message_User_Mutation_Response>
  /** update single row of the table: "likes_stg_submission_message_user" */
  update_likes_stg_submission_message_user_by_pk?: Maybe<Likes_Stg_Submission_Message_User>
  /** update data of the table: "likes_stg_submission_user" */
  update_likes_stg_submission_user?: Maybe<Likes_Stg_Submission_User_Mutation_Response>
  /** update single row of the table: "likes_stg_submission_user" */
  update_likes_stg_submission_user_by_pk?: Maybe<Likes_Stg_Submission_User>
  /** update data of the table: "likes_user_user" */
  update_likes_user_user?: Maybe<Likes_User_User_Mutation_Response>
  /** update single row of the table: "likes_user_user" */
  update_likes_user_user_by_pk?: Maybe<Likes_User_User>
  /** update data of the table: "post_messages" */
  update_post_messages?: Maybe<Post_Messages_Mutation_Response>
  /** update single row of the table: "post_messages" */
  update_post_messages_by_pk?: Maybe<Post_Messages>
  /** update data of the table: "post_tags" */
  update_post_tags?: Maybe<Post_Tags_Mutation_Response>
  /** update single row of the table: "post_tags" */
  update_post_tags_by_pk?: Maybe<Post_Tags>
  /** update data of the table: "posts" */
  update_posts?: Maybe<Posts_Mutation_Response>
  /** update single row of the table: "posts" */
  update_posts_by_pk?: Maybe<Posts>
  /** update data of the table: "refresh_tokens" */
  update_refresh_tokens?: Maybe<Refresh_Tokens_Mutation_Response>
  /** update single row of the table: "refresh_tokens" */
  update_refresh_tokens_by_pk?: Maybe<Refresh_Tokens>
  /** update data of the table: "stg_players" */
  update_stg_players?: Maybe<Stg_Players_Mutation_Response>
  /** update single row of the table: "stg_players" */
  update_stg_players_by_pk?: Maybe<Stg_Players>
  /** update data of the table: "stg_set_messages" */
  update_stg_set_messages?: Maybe<Stg_Set_Messages_Mutation_Response>
  /** update single row of the table: "stg_set_messages" */
  update_stg_set_messages_by_pk?: Maybe<Stg_Set_Messages>
  /** update data of the table: "stg_sets" */
  update_stg_sets?: Maybe<Stg_Sets_Mutation_Response>
  /** update single row of the table: "stg_sets" */
  update_stg_sets_by_pk?: Maybe<Stg_Sets>
  /** update data of the table: "stg_submission_messages" */
  update_stg_submission_messages?: Maybe<Stg_Submission_Messages_Mutation_Response>
  /** update single row of the table: "stg_submission_messages" */
  update_stg_submission_messages_by_pk?: Maybe<Stg_Submission_Messages>
  /** update data of the table: "stg_submissions" */
  update_stg_submissions?: Maybe<Stg_Submissions_Mutation_Response>
  /** update single row of the table: "stg_submissions" */
  update_stg_submissions_by_pk?: Maybe<Stg_Submissions>
  /** update data of the table: "stgs" */
  update_stgs?: Maybe<Stgs_Mutation_Response>
  /** update single row of the table: "stgs" */
  update_stgs_by_pk?: Maybe<Stgs>
  /** update data of the table: "user_activity" */
  update_user_activity?: Maybe<User_Activity_Mutation_Response>
  /** update single row of the table: "user_activity" */
  update_user_activity_by_pk?: Maybe<User_Activity>
  /** update data of the table: "user_disciplines" */
  update_user_disciplines?: Maybe<User_Disciplines_Mutation_Response>
  /** update single row of the table: "user_disciplines" */
  update_user_disciplines_by_pk?: Maybe<User_Disciplines>
  /** update data of the table: "user_locations" */
  update_user_locations?: Maybe<User_Locations_Mutation_Response>
  /** update single row of the table: "user_locations" */
  update_user_locations_by_pk?: Maybe<User_Locations>
  /** update data of the table: "user_socials" */
  update_user_socials?: Maybe<User_Socials_Mutation_Response>
  /** update single row of the table: "user_socials" */
  update_user_socials_by_pk?: Maybe<User_Socials>
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>
}

/** mutation root */
export type Mutation_RootDelete_Chat_MessagesArgs = {
  where: Chat_Messages_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Chat_Messages_By_PkArgs = {
  id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDelete_E_Post_TagsArgs = {
  where: E_Post_Tags_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_E_Post_Tags_By_PkArgs = {
  type: Scalars['String']
}

/** mutation root */
export type Mutation_RootDelete_E_Stg_StatusesArgs = {
  where: E_Stg_Statuses_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_E_Stg_Statuses_By_PkArgs = {
  type: Scalars['String']
}

/** mutation root */
export type Mutation_RootDelete_E_User_DisciplinesArgs = {
  where: E_User_Disciplines_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_E_User_Disciplines_By_PkArgs = {
  type: Scalars['String']
}

/** mutation root */
export type Mutation_RootDelete_E_User_LocationsArgs = {
  where: E_User_Locations_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_E_User_Locations_By_PkArgs = {
  type: Scalars['String']
}

/** mutation root */
export type Mutation_RootDelete_E_User_RolesArgs = {
  where: E_User_Roles_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_E_User_Roles_By_PkArgs = {
  type: Scalars['String']
}

/** mutation root */
export type Mutation_RootDelete_Likes_Chat_Message_UserArgs = {
  where: Likes_Chat_Message_User_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Likes_Chat_Message_User_By_PkArgs = {
  chat_message_id: Scalars['Int']
  liked_by_user_id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDelete_Likes_Post_Message_UserArgs = {
  where: Likes_Post_Message_User_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Likes_Post_Message_User_By_PkArgs = {
  liked_by_user_id: Scalars['Int']
  post_message_id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDelete_Likes_Post_UserArgs = {
  where: Likes_Post_User_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Likes_Post_User_By_PkArgs = {
  liked_by_user_id: Scalars['Int']
  post_id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDelete_Likes_Stg_Set_Message_UserArgs = {
  where: Likes_Stg_Set_Message_User_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Likes_Stg_Set_Message_User_By_PkArgs = {
  liked_by_user_id: Scalars['Int']
  stg_set_message_id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDelete_Likes_Stg_Set_UserArgs = {
  where: Likes_Stg_Set_User_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Likes_Stg_Set_User_By_PkArgs = {
  liked_by_user_id: Scalars['Int']
  stg_set_id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDelete_Likes_Stg_Submission_Message_UserArgs = {
  where: Likes_Stg_Submission_Message_User_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Likes_Stg_Submission_Message_User_By_PkArgs = {
  liked_by_user_id: Scalars['Int']
  stg_submission_message_id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDelete_Likes_Stg_Submission_UserArgs = {
  where: Likes_Stg_Submission_User_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Likes_Stg_Submission_User_By_PkArgs = {
  liked_by_user_id: Scalars['Int']
  stg_submission_id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDelete_Likes_User_UserArgs = {
  where: Likes_User_User_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Likes_User_User_By_PkArgs = {
  liked_by_user_id: Scalars['Int']
  liked_user_id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDelete_Post_MessagesArgs = {
  where: Post_Messages_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Post_Messages_By_PkArgs = {
  id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDelete_Post_TagsArgs = {
  where: Post_Tags_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Post_Tags_By_PkArgs = {
  post_id: Scalars['Int']
  tag: E_Post_Tags_Enum
}

/** mutation root */
export type Mutation_RootDelete_PostsArgs = {
  where: Posts_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Posts_By_PkArgs = {
  id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDelete_Refresh_TokensArgs = {
  where: Refresh_Tokens_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Refresh_Tokens_By_PkArgs = {
  token: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_Stg_PlayersArgs = {
  where: Stg_Players_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Stg_Players_By_PkArgs = {
  player_id: Scalars['Int']
  stg_id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDelete_Stg_Set_MessagesArgs = {
  where: Stg_Set_Messages_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Stg_Set_Messages_By_PkArgs = {
  id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDelete_Stg_SetsArgs = {
  where: Stg_Sets_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Stg_Sets_By_PkArgs = {
  id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDelete_Stg_Submission_MessagesArgs = {
  where: Stg_Submission_Messages_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Stg_Submission_Messages_By_PkArgs = {
  id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDelete_Stg_SubmissionsArgs = {
  where: Stg_Submissions_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Stg_Submissions_By_PkArgs = {
  id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDelete_StgsArgs = {
  where: Stgs_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Stgs_By_PkArgs = {
  id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDelete_User_ActivityArgs = {
  where: User_Activity_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_User_Activity_By_PkArgs = {
  user_id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDelete_User_DisciplinesArgs = {
  where: User_Disciplines_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_User_Disciplines_By_PkArgs = {
  discipline: E_User_Disciplines_Enum
  user_id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDelete_User_LocationsArgs = {
  where: User_Locations_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_User_Locations_By_PkArgs = {
  type: E_User_Locations_Enum
  user_id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDelete_User_SocialsArgs = {
  where: User_Socials_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_User_Socials_By_PkArgs = {
  user_id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootInsert_Chat_MessagesArgs = {
  objects: Array<Chat_Messages_Insert_Input>
  on_conflict?: Maybe<Chat_Messages_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Chat_Messages_OneArgs = {
  object: Chat_Messages_Insert_Input
  on_conflict?: Maybe<Chat_Messages_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_E_Post_TagsArgs = {
  objects: Array<E_Post_Tags_Insert_Input>
  on_conflict?: Maybe<E_Post_Tags_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_E_Post_Tags_OneArgs = {
  object: E_Post_Tags_Insert_Input
  on_conflict?: Maybe<E_Post_Tags_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_E_Stg_StatusesArgs = {
  objects: Array<E_Stg_Statuses_Insert_Input>
  on_conflict?: Maybe<E_Stg_Statuses_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_E_Stg_Statuses_OneArgs = {
  object: E_Stg_Statuses_Insert_Input
  on_conflict?: Maybe<E_Stg_Statuses_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_E_User_DisciplinesArgs = {
  objects: Array<E_User_Disciplines_Insert_Input>
  on_conflict?: Maybe<E_User_Disciplines_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_E_User_Disciplines_OneArgs = {
  object: E_User_Disciplines_Insert_Input
  on_conflict?: Maybe<E_User_Disciplines_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_E_User_LocationsArgs = {
  objects: Array<E_User_Locations_Insert_Input>
  on_conflict?: Maybe<E_User_Locations_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_E_User_Locations_OneArgs = {
  object: E_User_Locations_Insert_Input
  on_conflict?: Maybe<E_User_Locations_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_E_User_RolesArgs = {
  objects: Array<E_User_Roles_Insert_Input>
  on_conflict?: Maybe<E_User_Roles_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_E_User_Roles_OneArgs = {
  object: E_User_Roles_Insert_Input
  on_conflict?: Maybe<E_User_Roles_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Likes_Chat_Message_UserArgs = {
  objects: Array<Likes_Chat_Message_User_Insert_Input>
  on_conflict?: Maybe<Likes_Chat_Message_User_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Likes_Chat_Message_User_OneArgs = {
  object: Likes_Chat_Message_User_Insert_Input
  on_conflict?: Maybe<Likes_Chat_Message_User_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Likes_Post_Message_UserArgs = {
  objects: Array<Likes_Post_Message_User_Insert_Input>
  on_conflict?: Maybe<Likes_Post_Message_User_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Likes_Post_Message_User_OneArgs = {
  object: Likes_Post_Message_User_Insert_Input
  on_conflict?: Maybe<Likes_Post_Message_User_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Likes_Post_UserArgs = {
  objects: Array<Likes_Post_User_Insert_Input>
  on_conflict?: Maybe<Likes_Post_User_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Likes_Post_User_OneArgs = {
  object: Likes_Post_User_Insert_Input
  on_conflict?: Maybe<Likes_Post_User_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Likes_Stg_Set_Message_UserArgs = {
  objects: Array<Likes_Stg_Set_Message_User_Insert_Input>
  on_conflict?: Maybe<Likes_Stg_Set_Message_User_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Likes_Stg_Set_Message_User_OneArgs = {
  object: Likes_Stg_Set_Message_User_Insert_Input
  on_conflict?: Maybe<Likes_Stg_Set_Message_User_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Likes_Stg_Set_UserArgs = {
  objects: Array<Likes_Stg_Set_User_Insert_Input>
  on_conflict?: Maybe<Likes_Stg_Set_User_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Likes_Stg_Set_User_OneArgs = {
  object: Likes_Stg_Set_User_Insert_Input
  on_conflict?: Maybe<Likes_Stg_Set_User_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Likes_Stg_Submission_Message_UserArgs = {
  objects: Array<Likes_Stg_Submission_Message_User_Insert_Input>
  on_conflict?: Maybe<Likes_Stg_Submission_Message_User_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Likes_Stg_Submission_Message_User_OneArgs = {
  object: Likes_Stg_Submission_Message_User_Insert_Input
  on_conflict?: Maybe<Likes_Stg_Submission_Message_User_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Likes_Stg_Submission_UserArgs = {
  objects: Array<Likes_Stg_Submission_User_Insert_Input>
  on_conflict?: Maybe<Likes_Stg_Submission_User_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Likes_Stg_Submission_User_OneArgs = {
  object: Likes_Stg_Submission_User_Insert_Input
  on_conflict?: Maybe<Likes_Stg_Submission_User_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Likes_User_UserArgs = {
  objects: Array<Likes_User_User_Insert_Input>
  on_conflict?: Maybe<Likes_User_User_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Likes_User_User_OneArgs = {
  object: Likes_User_User_Insert_Input
  on_conflict?: Maybe<Likes_User_User_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Post_MessagesArgs = {
  objects: Array<Post_Messages_Insert_Input>
  on_conflict?: Maybe<Post_Messages_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Post_Messages_OneArgs = {
  object: Post_Messages_Insert_Input
  on_conflict?: Maybe<Post_Messages_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Post_TagsArgs = {
  objects: Array<Post_Tags_Insert_Input>
  on_conflict?: Maybe<Post_Tags_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Post_Tags_OneArgs = {
  object: Post_Tags_Insert_Input
  on_conflict?: Maybe<Post_Tags_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_PostsArgs = {
  objects: Array<Posts_Insert_Input>
  on_conflict?: Maybe<Posts_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Posts_OneArgs = {
  object: Posts_Insert_Input
  on_conflict?: Maybe<Posts_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Refresh_TokensArgs = {
  objects: Array<Refresh_Tokens_Insert_Input>
  on_conflict?: Maybe<Refresh_Tokens_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Refresh_Tokens_OneArgs = {
  object: Refresh_Tokens_Insert_Input
  on_conflict?: Maybe<Refresh_Tokens_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Stg_PlayersArgs = {
  objects: Array<Stg_Players_Insert_Input>
  on_conflict?: Maybe<Stg_Players_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Stg_Players_OneArgs = {
  object: Stg_Players_Insert_Input
  on_conflict?: Maybe<Stg_Players_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Stg_Set_MessagesArgs = {
  objects: Array<Stg_Set_Messages_Insert_Input>
  on_conflict?: Maybe<Stg_Set_Messages_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Stg_Set_Messages_OneArgs = {
  object: Stg_Set_Messages_Insert_Input
  on_conflict?: Maybe<Stg_Set_Messages_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Stg_SetsArgs = {
  objects: Array<Stg_Sets_Insert_Input>
  on_conflict?: Maybe<Stg_Sets_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Stg_Sets_OneArgs = {
  object: Stg_Sets_Insert_Input
  on_conflict?: Maybe<Stg_Sets_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Stg_Submission_MessagesArgs = {
  objects: Array<Stg_Submission_Messages_Insert_Input>
  on_conflict?: Maybe<Stg_Submission_Messages_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Stg_Submission_Messages_OneArgs = {
  object: Stg_Submission_Messages_Insert_Input
  on_conflict?: Maybe<Stg_Submission_Messages_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Stg_SubmissionsArgs = {
  objects: Array<Stg_Submissions_Insert_Input>
  on_conflict?: Maybe<Stg_Submissions_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Stg_Submissions_OneArgs = {
  object: Stg_Submissions_Insert_Input
  on_conflict?: Maybe<Stg_Submissions_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_StgsArgs = {
  objects: Array<Stgs_Insert_Input>
  on_conflict?: Maybe<Stgs_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Stgs_OneArgs = {
  object: Stgs_Insert_Input
  on_conflict?: Maybe<Stgs_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_User_ActivityArgs = {
  objects: Array<User_Activity_Insert_Input>
  on_conflict?: Maybe<User_Activity_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_User_Activity_OneArgs = {
  object: User_Activity_Insert_Input
  on_conflict?: Maybe<User_Activity_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_User_DisciplinesArgs = {
  objects: Array<User_Disciplines_Insert_Input>
  on_conflict?: Maybe<User_Disciplines_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_User_Disciplines_OneArgs = {
  object: User_Disciplines_Insert_Input
  on_conflict?: Maybe<User_Disciplines_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_User_LocationsArgs = {
  objects: Array<User_Locations_Insert_Input>
  on_conflict?: Maybe<User_Locations_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_User_Locations_OneArgs = {
  object: User_Locations_Insert_Input
  on_conflict?: Maybe<User_Locations_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_User_SocialsArgs = {
  objects: Array<User_Socials_Insert_Input>
  on_conflict?: Maybe<User_Socials_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_User_Socials_OneArgs = {
  object: User_Socials_Insert_Input
  on_conflict?: Maybe<User_Socials_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>
  on_conflict?: Maybe<Users_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input
  on_conflict?: Maybe<Users_On_Conflict>
}

/** mutation root */
export type Mutation_RootUpdate_Chat_MessagesArgs = {
  _inc?: Maybe<Chat_Messages_Inc_Input>
  _set?: Maybe<Chat_Messages_Set_Input>
  where: Chat_Messages_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Chat_Messages_By_PkArgs = {
  _inc?: Maybe<Chat_Messages_Inc_Input>
  _set?: Maybe<Chat_Messages_Set_Input>
  pk_columns: Chat_Messages_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_E_Post_TagsArgs = {
  _set?: Maybe<E_Post_Tags_Set_Input>
  where: E_Post_Tags_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_E_Post_Tags_By_PkArgs = {
  _set?: Maybe<E_Post_Tags_Set_Input>
  pk_columns: E_Post_Tags_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_E_Stg_StatusesArgs = {
  _set?: Maybe<E_Stg_Statuses_Set_Input>
  where: E_Stg_Statuses_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_E_Stg_Statuses_By_PkArgs = {
  _set?: Maybe<E_Stg_Statuses_Set_Input>
  pk_columns: E_Stg_Statuses_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_E_User_DisciplinesArgs = {
  _set?: Maybe<E_User_Disciplines_Set_Input>
  where: E_User_Disciplines_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_E_User_Disciplines_By_PkArgs = {
  _set?: Maybe<E_User_Disciplines_Set_Input>
  pk_columns: E_User_Disciplines_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_E_User_LocationsArgs = {
  _set?: Maybe<E_User_Locations_Set_Input>
  where: E_User_Locations_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_E_User_Locations_By_PkArgs = {
  _set?: Maybe<E_User_Locations_Set_Input>
  pk_columns: E_User_Locations_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_E_User_RolesArgs = {
  _set?: Maybe<E_User_Roles_Set_Input>
  where: E_User_Roles_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_E_User_Roles_By_PkArgs = {
  _set?: Maybe<E_User_Roles_Set_Input>
  pk_columns: E_User_Roles_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Likes_Chat_Message_UserArgs = {
  _inc?: Maybe<Likes_Chat_Message_User_Inc_Input>
  _set?: Maybe<Likes_Chat_Message_User_Set_Input>
  where: Likes_Chat_Message_User_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Likes_Chat_Message_User_By_PkArgs = {
  _inc?: Maybe<Likes_Chat_Message_User_Inc_Input>
  _set?: Maybe<Likes_Chat_Message_User_Set_Input>
  pk_columns: Likes_Chat_Message_User_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Likes_Post_Message_UserArgs = {
  _inc?: Maybe<Likes_Post_Message_User_Inc_Input>
  _set?: Maybe<Likes_Post_Message_User_Set_Input>
  where: Likes_Post_Message_User_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Likes_Post_Message_User_By_PkArgs = {
  _inc?: Maybe<Likes_Post_Message_User_Inc_Input>
  _set?: Maybe<Likes_Post_Message_User_Set_Input>
  pk_columns: Likes_Post_Message_User_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Likes_Post_UserArgs = {
  _inc?: Maybe<Likes_Post_User_Inc_Input>
  _set?: Maybe<Likes_Post_User_Set_Input>
  where: Likes_Post_User_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Likes_Post_User_By_PkArgs = {
  _inc?: Maybe<Likes_Post_User_Inc_Input>
  _set?: Maybe<Likes_Post_User_Set_Input>
  pk_columns: Likes_Post_User_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Likes_Stg_Set_Message_UserArgs = {
  _inc?: Maybe<Likes_Stg_Set_Message_User_Inc_Input>
  _set?: Maybe<Likes_Stg_Set_Message_User_Set_Input>
  where: Likes_Stg_Set_Message_User_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Likes_Stg_Set_Message_User_By_PkArgs = {
  _inc?: Maybe<Likes_Stg_Set_Message_User_Inc_Input>
  _set?: Maybe<Likes_Stg_Set_Message_User_Set_Input>
  pk_columns: Likes_Stg_Set_Message_User_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Likes_Stg_Set_UserArgs = {
  _inc?: Maybe<Likes_Stg_Set_User_Inc_Input>
  _set?: Maybe<Likes_Stg_Set_User_Set_Input>
  where: Likes_Stg_Set_User_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Likes_Stg_Set_User_By_PkArgs = {
  _inc?: Maybe<Likes_Stg_Set_User_Inc_Input>
  _set?: Maybe<Likes_Stg_Set_User_Set_Input>
  pk_columns: Likes_Stg_Set_User_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Likes_Stg_Submission_Message_UserArgs = {
  _inc?: Maybe<Likes_Stg_Submission_Message_User_Inc_Input>
  _set?: Maybe<Likes_Stg_Submission_Message_User_Set_Input>
  where: Likes_Stg_Submission_Message_User_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Likes_Stg_Submission_Message_User_By_PkArgs = {
  _inc?: Maybe<Likes_Stg_Submission_Message_User_Inc_Input>
  _set?: Maybe<Likes_Stg_Submission_Message_User_Set_Input>
  pk_columns: Likes_Stg_Submission_Message_User_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Likes_Stg_Submission_UserArgs = {
  _inc?: Maybe<Likes_Stg_Submission_User_Inc_Input>
  _set?: Maybe<Likes_Stg_Submission_User_Set_Input>
  where: Likes_Stg_Submission_User_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Likes_Stg_Submission_User_By_PkArgs = {
  _inc?: Maybe<Likes_Stg_Submission_User_Inc_Input>
  _set?: Maybe<Likes_Stg_Submission_User_Set_Input>
  pk_columns: Likes_Stg_Submission_User_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Likes_User_UserArgs = {
  _inc?: Maybe<Likes_User_User_Inc_Input>
  _set?: Maybe<Likes_User_User_Set_Input>
  where: Likes_User_User_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Likes_User_User_By_PkArgs = {
  _inc?: Maybe<Likes_User_User_Inc_Input>
  _set?: Maybe<Likes_User_User_Set_Input>
  pk_columns: Likes_User_User_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Post_MessagesArgs = {
  _inc?: Maybe<Post_Messages_Inc_Input>
  _set?: Maybe<Post_Messages_Set_Input>
  where: Post_Messages_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Post_Messages_By_PkArgs = {
  _inc?: Maybe<Post_Messages_Inc_Input>
  _set?: Maybe<Post_Messages_Set_Input>
  pk_columns: Post_Messages_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Post_TagsArgs = {
  _inc?: Maybe<Post_Tags_Inc_Input>
  _set?: Maybe<Post_Tags_Set_Input>
  where: Post_Tags_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Post_Tags_By_PkArgs = {
  _inc?: Maybe<Post_Tags_Inc_Input>
  _set?: Maybe<Post_Tags_Set_Input>
  pk_columns: Post_Tags_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_PostsArgs = {
  _append?: Maybe<Posts_Append_Input>
  _delete_at_path?: Maybe<Posts_Delete_At_Path_Input>
  _delete_elem?: Maybe<Posts_Delete_Elem_Input>
  _delete_key?: Maybe<Posts_Delete_Key_Input>
  _inc?: Maybe<Posts_Inc_Input>
  _prepend?: Maybe<Posts_Prepend_Input>
  _set?: Maybe<Posts_Set_Input>
  where: Posts_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Posts_By_PkArgs = {
  _append?: Maybe<Posts_Append_Input>
  _delete_at_path?: Maybe<Posts_Delete_At_Path_Input>
  _delete_elem?: Maybe<Posts_Delete_Elem_Input>
  _delete_key?: Maybe<Posts_Delete_Key_Input>
  _inc?: Maybe<Posts_Inc_Input>
  _prepend?: Maybe<Posts_Prepend_Input>
  _set?: Maybe<Posts_Set_Input>
  pk_columns: Posts_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Refresh_TokensArgs = {
  _inc?: Maybe<Refresh_Tokens_Inc_Input>
  _set?: Maybe<Refresh_Tokens_Set_Input>
  where: Refresh_Tokens_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Refresh_Tokens_By_PkArgs = {
  _inc?: Maybe<Refresh_Tokens_Inc_Input>
  _set?: Maybe<Refresh_Tokens_Set_Input>
  pk_columns: Refresh_Tokens_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Stg_PlayersArgs = {
  _inc?: Maybe<Stg_Players_Inc_Input>
  _set?: Maybe<Stg_Players_Set_Input>
  where: Stg_Players_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Stg_Players_By_PkArgs = {
  _inc?: Maybe<Stg_Players_Inc_Input>
  _set?: Maybe<Stg_Players_Set_Input>
  pk_columns: Stg_Players_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Stg_Set_MessagesArgs = {
  _inc?: Maybe<Stg_Set_Messages_Inc_Input>
  _set?: Maybe<Stg_Set_Messages_Set_Input>
  where: Stg_Set_Messages_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Stg_Set_Messages_By_PkArgs = {
  _inc?: Maybe<Stg_Set_Messages_Inc_Input>
  _set?: Maybe<Stg_Set_Messages_Set_Input>
  pk_columns: Stg_Set_Messages_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Stg_SetsArgs = {
  _inc?: Maybe<Stg_Sets_Inc_Input>
  _set?: Maybe<Stg_Sets_Set_Input>
  where: Stg_Sets_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Stg_Sets_By_PkArgs = {
  _inc?: Maybe<Stg_Sets_Inc_Input>
  _set?: Maybe<Stg_Sets_Set_Input>
  pk_columns: Stg_Sets_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Stg_Submission_MessagesArgs = {
  _inc?: Maybe<Stg_Submission_Messages_Inc_Input>
  _set?: Maybe<Stg_Submission_Messages_Set_Input>
  where: Stg_Submission_Messages_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Stg_Submission_Messages_By_PkArgs = {
  _inc?: Maybe<Stg_Submission_Messages_Inc_Input>
  _set?: Maybe<Stg_Submission_Messages_Set_Input>
  pk_columns: Stg_Submission_Messages_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Stg_SubmissionsArgs = {
  _inc?: Maybe<Stg_Submissions_Inc_Input>
  _set?: Maybe<Stg_Submissions_Set_Input>
  where: Stg_Submissions_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Stg_Submissions_By_PkArgs = {
  _inc?: Maybe<Stg_Submissions_Inc_Input>
  _set?: Maybe<Stg_Submissions_Set_Input>
  pk_columns: Stg_Submissions_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_StgsArgs = {
  _inc?: Maybe<Stgs_Inc_Input>
  _set?: Maybe<Stgs_Set_Input>
  where: Stgs_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Stgs_By_PkArgs = {
  _inc?: Maybe<Stgs_Inc_Input>
  _set?: Maybe<Stgs_Set_Input>
  pk_columns: Stgs_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_User_ActivityArgs = {
  _inc?: Maybe<User_Activity_Inc_Input>
  _set?: Maybe<User_Activity_Set_Input>
  where: User_Activity_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_User_Activity_By_PkArgs = {
  _inc?: Maybe<User_Activity_Inc_Input>
  _set?: Maybe<User_Activity_Set_Input>
  pk_columns: User_Activity_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_User_DisciplinesArgs = {
  _inc?: Maybe<User_Disciplines_Inc_Input>
  _set?: Maybe<User_Disciplines_Set_Input>
  where: User_Disciplines_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_User_Disciplines_By_PkArgs = {
  _inc?: Maybe<User_Disciplines_Inc_Input>
  _set?: Maybe<User_Disciplines_Set_Input>
  pk_columns: User_Disciplines_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_User_LocationsArgs = {
  _inc?: Maybe<User_Locations_Inc_Input>
  _set?: Maybe<User_Locations_Set_Input>
  where: User_Locations_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_User_Locations_By_PkArgs = {
  _inc?: Maybe<User_Locations_Inc_Input>
  _set?: Maybe<User_Locations_Set_Input>
  pk_columns: User_Locations_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_User_SocialsArgs = {
  _inc?: Maybe<User_Socials_Inc_Input>
  _set?: Maybe<User_Socials_Set_Input>
  where: User_Socials_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_User_Socials_By_PkArgs = {
  _inc?: Maybe<User_Socials_Inc_Input>
  _set?: Maybe<User_Socials_Set_Input>
  pk_columns: User_Socials_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _append?: Maybe<Users_Append_Input>
  _delete_at_path?: Maybe<Users_Delete_At_Path_Input>
  _delete_elem?: Maybe<Users_Delete_Elem_Input>
  _delete_key?: Maybe<Users_Delete_Key_Input>
  _inc?: Maybe<Users_Inc_Input>
  _prepend?: Maybe<Users_Prepend_Input>
  _set?: Maybe<Users_Set_Input>
  where: Users_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _append?: Maybe<Users_Append_Input>
  _delete_at_path?: Maybe<Users_Delete_At_Path_Input>
  _delete_elem?: Maybe<Users_Delete_Elem_Input>
  _delete_key?: Maybe<Users_Delete_Key_Input>
  _inc?: Maybe<Users_Inc_Input>
  _prepend?: Maybe<Users_Prepend_Input>
  _set?: Maybe<Users_Set_Input>
  pk_columns: Users_Pk_Columns_Input
}

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: Maybe<Scalars['numeric']>
  _gt?: Maybe<Scalars['numeric']>
  _gte?: Maybe<Scalars['numeric']>
  _in?: Maybe<Array<Scalars['numeric']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['numeric']>
  _lte?: Maybe<Scalars['numeric']>
  _neq?: Maybe<Scalars['numeric']>
  _nin?: Maybe<Array<Scalars['numeric']>>
}

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last',
}

/** columns and relationships of "post_messages" */
export type Post_Messages = {
  __typename?: 'post_messages'
  /** An object relationship */
  author?: Maybe<Users>
  author_id?: Maybe<Scalars['Int']>
  created_at: Scalars['timestamptz']
  id: Scalars['Int']
  /** An array relationship */
  likes: Array<Likes_Post_Message_User>
  /** An aggregate relationship */
  likes_aggregate: Likes_Post_Message_User_Aggregate
  /** An object relationship */
  post?: Maybe<Posts>
  post_id?: Maybe<Scalars['Int']>
  text: Scalars['String']
  updated_at: Scalars['timestamptz']
}

/** columns and relationships of "post_messages" */
export type Post_MessagesLikesArgs = {
  distinct_on?: Maybe<Array<Likes_Post_Message_User_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Likes_Post_Message_User_Order_By>>
  where?: Maybe<Likes_Post_Message_User_Bool_Exp>
}

/** columns and relationships of "post_messages" */
export type Post_MessagesLikes_AggregateArgs = {
  distinct_on?: Maybe<Array<Likes_Post_Message_User_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Likes_Post_Message_User_Order_By>>
  where?: Maybe<Likes_Post_Message_User_Bool_Exp>
}

/** aggregated selection of "post_messages" */
export type Post_Messages_Aggregate = {
  __typename?: 'post_messages_aggregate'
  aggregate?: Maybe<Post_Messages_Aggregate_Fields>
  nodes: Array<Post_Messages>
}

/** aggregate fields of "post_messages" */
export type Post_Messages_Aggregate_Fields = {
  __typename?: 'post_messages_aggregate_fields'
  avg?: Maybe<Post_Messages_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Post_Messages_Max_Fields>
  min?: Maybe<Post_Messages_Min_Fields>
  stddev?: Maybe<Post_Messages_Stddev_Fields>
  stddev_pop?: Maybe<Post_Messages_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Post_Messages_Stddev_Samp_Fields>
  sum?: Maybe<Post_Messages_Sum_Fields>
  var_pop?: Maybe<Post_Messages_Var_Pop_Fields>
  var_samp?: Maybe<Post_Messages_Var_Samp_Fields>
  variance?: Maybe<Post_Messages_Variance_Fields>
}

/** aggregate fields of "post_messages" */
export type Post_Messages_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Post_Messages_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "post_messages" */
export type Post_Messages_Aggregate_Order_By = {
  avg?: Maybe<Post_Messages_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Post_Messages_Max_Order_By>
  min?: Maybe<Post_Messages_Min_Order_By>
  stddev?: Maybe<Post_Messages_Stddev_Order_By>
  stddev_pop?: Maybe<Post_Messages_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Post_Messages_Stddev_Samp_Order_By>
  sum?: Maybe<Post_Messages_Sum_Order_By>
  var_pop?: Maybe<Post_Messages_Var_Pop_Order_By>
  var_samp?: Maybe<Post_Messages_Var_Samp_Order_By>
  variance?: Maybe<Post_Messages_Variance_Order_By>
}

/** input type for inserting array relation for remote table "post_messages" */
export type Post_Messages_Arr_Rel_Insert_Input = {
  data: Array<Post_Messages_Insert_Input>
  /** on conflict condition */
  on_conflict?: Maybe<Post_Messages_On_Conflict>
}

/** aggregate avg on columns */
export type Post_Messages_Avg_Fields = {
  __typename?: 'post_messages_avg_fields'
  author_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  post_id?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "post_messages" */
export type Post_Messages_Avg_Order_By = {
  author_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  post_id?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "post_messages". All fields are combined with a logical 'AND'. */
export type Post_Messages_Bool_Exp = {
  _and?: Maybe<Array<Post_Messages_Bool_Exp>>
  _not?: Maybe<Post_Messages_Bool_Exp>
  _or?: Maybe<Array<Post_Messages_Bool_Exp>>
  author?: Maybe<Users_Bool_Exp>
  author_id?: Maybe<Int_Comparison_Exp>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  id?: Maybe<Int_Comparison_Exp>
  likes?: Maybe<Likes_Post_Message_User_Bool_Exp>
  post?: Maybe<Posts_Bool_Exp>
  post_id?: Maybe<Int_Comparison_Exp>
  text?: Maybe<String_Comparison_Exp>
  updated_at?: Maybe<Timestamptz_Comparison_Exp>
}

/** unique or primary key constraints on table "post_messages" */
export enum Post_Messages_Constraint {
  /** unique or primary key constraint */
  PostMessagesPkey = 'post_messages_pkey',
  /** unique or primary key constraint */
  PostMessagesRnKey = 'post_messages_rn_key',
}

/** input type for incrementing numeric columns in table "post_messages" */
export type Post_Messages_Inc_Input = {
  author_id?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
  post_id?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "post_messages" */
export type Post_Messages_Insert_Input = {
  author?: Maybe<Users_Obj_Rel_Insert_Input>
  author_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  likes?: Maybe<Likes_Post_Message_User_Arr_Rel_Insert_Input>
  post?: Maybe<Posts_Obj_Rel_Insert_Input>
  post_id?: Maybe<Scalars['Int']>
  text?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregate max on columns */
export type Post_Messages_Max_Fields = {
  __typename?: 'post_messages_max_fields'
  author_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  post_id?: Maybe<Scalars['Int']>
  text?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by max() on columns of table "post_messages" */
export type Post_Messages_Max_Order_By = {
  author_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  post_id?: Maybe<Order_By>
  text?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Post_Messages_Min_Fields = {
  __typename?: 'post_messages_min_fields'
  author_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  post_id?: Maybe<Scalars['Int']>
  text?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by min() on columns of table "post_messages" */
export type Post_Messages_Min_Order_By = {
  author_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  post_id?: Maybe<Order_By>
  text?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** response of any mutation on the table "post_messages" */
export type Post_Messages_Mutation_Response = {
  __typename?: 'post_messages_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Post_Messages>
}

/** input type for inserting object relation for remote table "post_messages" */
export type Post_Messages_Obj_Rel_Insert_Input = {
  data: Post_Messages_Insert_Input
  /** on conflict condition */
  on_conflict?: Maybe<Post_Messages_On_Conflict>
}

/** on conflict condition type for table "post_messages" */
export type Post_Messages_On_Conflict = {
  constraint: Post_Messages_Constraint
  update_columns?: Array<Post_Messages_Update_Column>
  where?: Maybe<Post_Messages_Bool_Exp>
}

/** Ordering options when selecting data from "post_messages". */
export type Post_Messages_Order_By = {
  author?: Maybe<Users_Order_By>
  author_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  likes_aggregate?: Maybe<Likes_Post_Message_User_Aggregate_Order_By>
  post?: Maybe<Posts_Order_By>
  post_id?: Maybe<Order_By>
  text?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** primary key columns input for table: post_messages */
export type Post_Messages_Pk_Columns_Input = {
  id: Scalars['Int']
}

/** select columns of table "post_messages" */
export enum Post_Messages_Select_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PostId = 'post_id',
  /** column name */
  Text = 'text',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "post_messages" */
export type Post_Messages_Set_Input = {
  author_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  post_id?: Maybe<Scalars['Int']>
  text?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregate stddev on columns */
export type Post_Messages_Stddev_Fields = {
  __typename?: 'post_messages_stddev_fields'
  author_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  post_id?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "post_messages" */
export type Post_Messages_Stddev_Order_By = {
  author_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  post_id?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Post_Messages_Stddev_Pop_Fields = {
  __typename?: 'post_messages_stddev_pop_fields'
  author_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  post_id?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "post_messages" */
export type Post_Messages_Stddev_Pop_Order_By = {
  author_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  post_id?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Post_Messages_Stddev_Samp_Fields = {
  __typename?: 'post_messages_stddev_samp_fields'
  author_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  post_id?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "post_messages" */
export type Post_Messages_Stddev_Samp_Order_By = {
  author_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  post_id?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Post_Messages_Sum_Fields = {
  __typename?: 'post_messages_sum_fields'
  author_id?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
  post_id?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "post_messages" */
export type Post_Messages_Sum_Order_By = {
  author_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  post_id?: Maybe<Order_By>
}

/** update columns of table "post_messages" */
export enum Post_Messages_Update_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PostId = 'post_id',
  /** column name */
  Text = 'text',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** aggregate var_pop on columns */
export type Post_Messages_Var_Pop_Fields = {
  __typename?: 'post_messages_var_pop_fields'
  author_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  post_id?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "post_messages" */
export type Post_Messages_Var_Pop_Order_By = {
  author_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  post_id?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Post_Messages_Var_Samp_Fields = {
  __typename?: 'post_messages_var_samp_fields'
  author_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  post_id?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "post_messages" */
export type Post_Messages_Var_Samp_Order_By = {
  author_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  post_id?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Post_Messages_Variance_Fields = {
  __typename?: 'post_messages_variance_fields'
  author_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  post_id?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "post_messages" */
export type Post_Messages_Variance_Order_By = {
  author_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  post_id?: Maybe<Order_By>
}

/** columns and relationships of "post_tags" */
export type Post_Tags = {
  __typename?: 'post_tags'
  /** An object relationship */
  post: Posts
  post_id: Scalars['Int']
  tag: E_Post_Tags_Enum
}

/** aggregated selection of "post_tags" */
export type Post_Tags_Aggregate = {
  __typename?: 'post_tags_aggregate'
  aggregate?: Maybe<Post_Tags_Aggregate_Fields>
  nodes: Array<Post_Tags>
}

/** aggregate fields of "post_tags" */
export type Post_Tags_Aggregate_Fields = {
  __typename?: 'post_tags_aggregate_fields'
  avg?: Maybe<Post_Tags_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Post_Tags_Max_Fields>
  min?: Maybe<Post_Tags_Min_Fields>
  stddev?: Maybe<Post_Tags_Stddev_Fields>
  stddev_pop?: Maybe<Post_Tags_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Post_Tags_Stddev_Samp_Fields>
  sum?: Maybe<Post_Tags_Sum_Fields>
  var_pop?: Maybe<Post_Tags_Var_Pop_Fields>
  var_samp?: Maybe<Post_Tags_Var_Samp_Fields>
  variance?: Maybe<Post_Tags_Variance_Fields>
}

/** aggregate fields of "post_tags" */
export type Post_Tags_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Post_Tags_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "post_tags" */
export type Post_Tags_Aggregate_Order_By = {
  avg?: Maybe<Post_Tags_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Post_Tags_Max_Order_By>
  min?: Maybe<Post_Tags_Min_Order_By>
  stddev?: Maybe<Post_Tags_Stddev_Order_By>
  stddev_pop?: Maybe<Post_Tags_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Post_Tags_Stddev_Samp_Order_By>
  sum?: Maybe<Post_Tags_Sum_Order_By>
  var_pop?: Maybe<Post_Tags_Var_Pop_Order_By>
  var_samp?: Maybe<Post_Tags_Var_Samp_Order_By>
  variance?: Maybe<Post_Tags_Variance_Order_By>
}

/** input type for inserting array relation for remote table "post_tags" */
export type Post_Tags_Arr_Rel_Insert_Input = {
  data: Array<Post_Tags_Insert_Input>
  /** on conflict condition */
  on_conflict?: Maybe<Post_Tags_On_Conflict>
}

/** aggregate avg on columns */
export type Post_Tags_Avg_Fields = {
  __typename?: 'post_tags_avg_fields'
  post_id?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "post_tags" */
export type Post_Tags_Avg_Order_By = {
  post_id?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "post_tags". All fields are combined with a logical 'AND'. */
export type Post_Tags_Bool_Exp = {
  _and?: Maybe<Array<Post_Tags_Bool_Exp>>
  _not?: Maybe<Post_Tags_Bool_Exp>
  _or?: Maybe<Array<Post_Tags_Bool_Exp>>
  post?: Maybe<Posts_Bool_Exp>
  post_id?: Maybe<Int_Comparison_Exp>
  tag?: Maybe<E_Post_Tags_Enum_Comparison_Exp>
}

/** unique or primary key constraints on table "post_tags" */
export enum Post_Tags_Constraint {
  /** unique or primary key constraint */
  PostTagsPkey = 'post_tags_pkey',
}

/** input type for incrementing numeric columns in table "post_tags" */
export type Post_Tags_Inc_Input = {
  post_id?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "post_tags" */
export type Post_Tags_Insert_Input = {
  post?: Maybe<Posts_Obj_Rel_Insert_Input>
  post_id?: Maybe<Scalars['Int']>
  tag?: Maybe<E_Post_Tags_Enum>
}

/** aggregate max on columns */
export type Post_Tags_Max_Fields = {
  __typename?: 'post_tags_max_fields'
  post_id?: Maybe<Scalars['Int']>
}

/** order by max() on columns of table "post_tags" */
export type Post_Tags_Max_Order_By = {
  post_id?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Post_Tags_Min_Fields = {
  __typename?: 'post_tags_min_fields'
  post_id?: Maybe<Scalars['Int']>
}

/** order by min() on columns of table "post_tags" */
export type Post_Tags_Min_Order_By = {
  post_id?: Maybe<Order_By>
}

/** response of any mutation on the table "post_tags" */
export type Post_Tags_Mutation_Response = {
  __typename?: 'post_tags_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Post_Tags>
}

/** on conflict condition type for table "post_tags" */
export type Post_Tags_On_Conflict = {
  constraint: Post_Tags_Constraint
  update_columns?: Array<Post_Tags_Update_Column>
  where?: Maybe<Post_Tags_Bool_Exp>
}

/** Ordering options when selecting data from "post_tags". */
export type Post_Tags_Order_By = {
  post?: Maybe<Posts_Order_By>
  post_id?: Maybe<Order_By>
  tag?: Maybe<Order_By>
}

/** primary key columns input for table: post_tags */
export type Post_Tags_Pk_Columns_Input = {
  post_id: Scalars['Int']
  tag: E_Post_Tags_Enum
}

/** select columns of table "post_tags" */
export enum Post_Tags_Select_Column {
  /** column name */
  PostId = 'post_id',
  /** column name */
  Tag = 'tag',
}

/** input type for updating data in table "post_tags" */
export type Post_Tags_Set_Input = {
  post_id?: Maybe<Scalars['Int']>
  tag?: Maybe<E_Post_Tags_Enum>
}

/** aggregate stddev on columns */
export type Post_Tags_Stddev_Fields = {
  __typename?: 'post_tags_stddev_fields'
  post_id?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "post_tags" */
export type Post_Tags_Stddev_Order_By = {
  post_id?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Post_Tags_Stddev_Pop_Fields = {
  __typename?: 'post_tags_stddev_pop_fields'
  post_id?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "post_tags" */
export type Post_Tags_Stddev_Pop_Order_By = {
  post_id?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Post_Tags_Stddev_Samp_Fields = {
  __typename?: 'post_tags_stddev_samp_fields'
  post_id?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "post_tags" */
export type Post_Tags_Stddev_Samp_Order_By = {
  post_id?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Post_Tags_Sum_Fields = {
  __typename?: 'post_tags_sum_fields'
  post_id?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "post_tags" */
export type Post_Tags_Sum_Order_By = {
  post_id?: Maybe<Order_By>
}

/** update columns of table "post_tags" */
export enum Post_Tags_Update_Column {
  /** column name */
  PostId = 'post_id',
  /** column name */
  Tag = 'tag',
}

/** aggregate var_pop on columns */
export type Post_Tags_Var_Pop_Fields = {
  __typename?: 'post_tags_var_pop_fields'
  post_id?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "post_tags" */
export type Post_Tags_Var_Pop_Order_By = {
  post_id?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Post_Tags_Var_Samp_Fields = {
  __typename?: 'post_tags_var_samp_fields'
  post_id?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "post_tags" */
export type Post_Tags_Var_Samp_Order_By = {
  post_id?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Post_Tags_Variance_Fields = {
  __typename?: 'post_tags_variance_fields'
  post_id?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "post_tags" */
export type Post_Tags_Variance_Order_By = {
  post_id?: Maybe<Order_By>
}

/** columns and relationships of "posts" */
export type Posts = {
  __typename?: 'posts'
  body: Scalars['String']
  created_at: Scalars['timestamptz']
  embed_html?: Maybe<Scalars['String']>
  embed_url?: Maybe<Scalars['String']>
  id: Scalars['Int']
  image_url?: Maybe<Scalars['String']>
  /** An array relationship */
  likes: Array<Likes_Post_User>
  /** An aggregate relationship */
  likes_aggregate: Likes_Post_User_Aggregate
  /** An array relationship */
  messages: Array<Post_Messages>
  /** An aggregate relationship */
  messages_aggregate: Post_Messages_Aggregate
  oembed?: Maybe<Scalars['jsonb']>
  /** An object relationship */
  posted_by?: Maybe<Users>
  posted_by_id?: Maybe<Scalars['Int']>
  /** An array relationship */
  tags: Array<Post_Tags>
  /** An aggregate relationship */
  tags_aggregate: Post_Tags_Aggregate
  updated_at: Scalars['timestamptz']
  video_asset_id?: Maybe<Scalars['String']>
  video_asset_status?: Maybe<Scalars['String']>
  video_playback_id?: Maybe<Scalars['String']>
}

/** columns and relationships of "posts" */
export type PostsLikesArgs = {
  distinct_on?: Maybe<Array<Likes_Post_User_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Likes_Post_User_Order_By>>
  where?: Maybe<Likes_Post_User_Bool_Exp>
}

/** columns and relationships of "posts" */
export type PostsLikes_AggregateArgs = {
  distinct_on?: Maybe<Array<Likes_Post_User_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Likes_Post_User_Order_By>>
  where?: Maybe<Likes_Post_User_Bool_Exp>
}

/** columns and relationships of "posts" */
export type PostsMessagesArgs = {
  distinct_on?: Maybe<Array<Post_Messages_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Post_Messages_Order_By>>
  where?: Maybe<Post_Messages_Bool_Exp>
}

/** columns and relationships of "posts" */
export type PostsMessages_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Messages_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Post_Messages_Order_By>>
  where?: Maybe<Post_Messages_Bool_Exp>
}

/** columns and relationships of "posts" */
export type PostsOembedArgs = {
  path?: Maybe<Scalars['String']>
}

/** columns and relationships of "posts" */
export type PostsTagsArgs = {
  distinct_on?: Maybe<Array<Post_Tags_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Post_Tags_Order_By>>
  where?: Maybe<Post_Tags_Bool_Exp>
}

/** columns and relationships of "posts" */
export type PostsTags_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Tags_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Post_Tags_Order_By>>
  where?: Maybe<Post_Tags_Bool_Exp>
}

/** aggregated selection of "posts" */
export type Posts_Aggregate = {
  __typename?: 'posts_aggregate'
  aggregate?: Maybe<Posts_Aggregate_Fields>
  nodes: Array<Posts>
}

/** aggregate fields of "posts" */
export type Posts_Aggregate_Fields = {
  __typename?: 'posts_aggregate_fields'
  avg?: Maybe<Posts_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Posts_Max_Fields>
  min?: Maybe<Posts_Min_Fields>
  stddev?: Maybe<Posts_Stddev_Fields>
  stddev_pop?: Maybe<Posts_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Posts_Stddev_Samp_Fields>
  sum?: Maybe<Posts_Sum_Fields>
  var_pop?: Maybe<Posts_Var_Pop_Fields>
  var_samp?: Maybe<Posts_Var_Samp_Fields>
  variance?: Maybe<Posts_Variance_Fields>
}

/** aggregate fields of "posts" */
export type Posts_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Posts_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "posts" */
export type Posts_Aggregate_Order_By = {
  avg?: Maybe<Posts_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Posts_Max_Order_By>
  min?: Maybe<Posts_Min_Order_By>
  stddev?: Maybe<Posts_Stddev_Order_By>
  stddev_pop?: Maybe<Posts_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Posts_Stddev_Samp_Order_By>
  sum?: Maybe<Posts_Sum_Order_By>
  var_pop?: Maybe<Posts_Var_Pop_Order_By>
  var_samp?: Maybe<Posts_Var_Samp_Order_By>
  variance?: Maybe<Posts_Variance_Order_By>
}

/** append existing jsonb value of filtered columns with new jsonb value */
export type Posts_Append_Input = {
  oembed?: Maybe<Scalars['jsonb']>
}

/** input type for inserting array relation for remote table "posts" */
export type Posts_Arr_Rel_Insert_Input = {
  data: Array<Posts_Insert_Input>
  /** on conflict condition */
  on_conflict?: Maybe<Posts_On_Conflict>
}

/** aggregate avg on columns */
export type Posts_Avg_Fields = {
  __typename?: 'posts_avg_fields'
  id?: Maybe<Scalars['Float']>
  posted_by_id?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "posts" */
export type Posts_Avg_Order_By = {
  id?: Maybe<Order_By>
  posted_by_id?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "posts". All fields are combined with a logical 'AND'. */
export type Posts_Bool_Exp = {
  _and?: Maybe<Array<Posts_Bool_Exp>>
  _not?: Maybe<Posts_Bool_Exp>
  _or?: Maybe<Array<Posts_Bool_Exp>>
  body?: Maybe<String_Comparison_Exp>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  embed_html?: Maybe<String_Comparison_Exp>
  embed_url?: Maybe<String_Comparison_Exp>
  id?: Maybe<Int_Comparison_Exp>
  image_url?: Maybe<String_Comparison_Exp>
  likes?: Maybe<Likes_Post_User_Bool_Exp>
  messages?: Maybe<Post_Messages_Bool_Exp>
  oembed?: Maybe<Jsonb_Comparison_Exp>
  posted_by?: Maybe<Users_Bool_Exp>
  posted_by_id?: Maybe<Int_Comparison_Exp>
  tags?: Maybe<Post_Tags_Bool_Exp>
  updated_at?: Maybe<Timestamptz_Comparison_Exp>
  video_asset_id?: Maybe<String_Comparison_Exp>
  video_asset_status?: Maybe<String_Comparison_Exp>
  video_playback_id?: Maybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "posts" */
export enum Posts_Constraint {
  /** unique or primary key constraint */
  PostsPkey = 'posts_pkey',
  /** unique or primary key constraint */
  PostsRnKey = 'posts_rn_key',
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Posts_Delete_At_Path_Input = {
  oembed?: Maybe<Array<Scalars['String']>>
}

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Posts_Delete_Elem_Input = {
  oembed?: Maybe<Scalars['Int']>
}

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Posts_Delete_Key_Input = {
  oembed?: Maybe<Scalars['String']>
}

/** input type for incrementing numeric columns in table "posts" */
export type Posts_Inc_Input = {
  id?: Maybe<Scalars['Int']>
  posted_by_id?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "posts" */
export type Posts_Insert_Input = {
  body?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamptz']>
  embed_html?: Maybe<Scalars['String']>
  embed_url?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['Int']>
  image_url?: Maybe<Scalars['String']>
  likes?: Maybe<Likes_Post_User_Arr_Rel_Insert_Input>
  messages?: Maybe<Post_Messages_Arr_Rel_Insert_Input>
  oembed?: Maybe<Scalars['jsonb']>
  posted_by?: Maybe<Users_Obj_Rel_Insert_Input>
  posted_by_id?: Maybe<Scalars['Int']>
  tags?: Maybe<Post_Tags_Arr_Rel_Insert_Input>
  updated_at?: Maybe<Scalars['timestamptz']>
  video_asset_id?: Maybe<Scalars['String']>
  video_asset_status?: Maybe<Scalars['String']>
  video_playback_id?: Maybe<Scalars['String']>
}

/** aggregate max on columns */
export type Posts_Max_Fields = {
  __typename?: 'posts_max_fields'
  body?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamptz']>
  embed_html?: Maybe<Scalars['String']>
  embed_url?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['Int']>
  image_url?: Maybe<Scalars['String']>
  posted_by_id?: Maybe<Scalars['Int']>
  updated_at?: Maybe<Scalars['timestamptz']>
  video_asset_id?: Maybe<Scalars['String']>
  video_asset_status?: Maybe<Scalars['String']>
  video_playback_id?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "posts" */
export type Posts_Max_Order_By = {
  body?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  embed_html?: Maybe<Order_By>
  embed_url?: Maybe<Order_By>
  id?: Maybe<Order_By>
  image_url?: Maybe<Order_By>
  posted_by_id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  video_asset_id?: Maybe<Order_By>
  video_asset_status?: Maybe<Order_By>
  video_playback_id?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Posts_Min_Fields = {
  __typename?: 'posts_min_fields'
  body?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamptz']>
  embed_html?: Maybe<Scalars['String']>
  embed_url?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['Int']>
  image_url?: Maybe<Scalars['String']>
  posted_by_id?: Maybe<Scalars['Int']>
  updated_at?: Maybe<Scalars['timestamptz']>
  video_asset_id?: Maybe<Scalars['String']>
  video_asset_status?: Maybe<Scalars['String']>
  video_playback_id?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "posts" */
export type Posts_Min_Order_By = {
  body?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  embed_html?: Maybe<Order_By>
  embed_url?: Maybe<Order_By>
  id?: Maybe<Order_By>
  image_url?: Maybe<Order_By>
  posted_by_id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  video_asset_id?: Maybe<Order_By>
  video_asset_status?: Maybe<Order_By>
  video_playback_id?: Maybe<Order_By>
}

/** response of any mutation on the table "posts" */
export type Posts_Mutation_Response = {
  __typename?: 'posts_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Posts>
}

/** input type for inserting object relation for remote table "posts" */
export type Posts_Obj_Rel_Insert_Input = {
  data: Posts_Insert_Input
  /** on conflict condition */
  on_conflict?: Maybe<Posts_On_Conflict>
}

/** on conflict condition type for table "posts" */
export type Posts_On_Conflict = {
  constraint: Posts_Constraint
  update_columns?: Array<Posts_Update_Column>
  where?: Maybe<Posts_Bool_Exp>
}

/** Ordering options when selecting data from "posts". */
export type Posts_Order_By = {
  body?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  embed_html?: Maybe<Order_By>
  embed_url?: Maybe<Order_By>
  id?: Maybe<Order_By>
  image_url?: Maybe<Order_By>
  likes_aggregate?: Maybe<Likes_Post_User_Aggregate_Order_By>
  messages_aggregate?: Maybe<Post_Messages_Aggregate_Order_By>
  oembed?: Maybe<Order_By>
  posted_by?: Maybe<Users_Order_By>
  posted_by_id?: Maybe<Order_By>
  tags_aggregate?: Maybe<Post_Tags_Aggregate_Order_By>
  updated_at?: Maybe<Order_By>
  video_asset_id?: Maybe<Order_By>
  video_asset_status?: Maybe<Order_By>
  video_playback_id?: Maybe<Order_By>
}

/** primary key columns input for table: posts */
export type Posts_Pk_Columns_Input = {
  id: Scalars['Int']
}

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Posts_Prepend_Input = {
  oembed?: Maybe<Scalars['jsonb']>
}

/** select columns of table "posts" */
export enum Posts_Select_Column {
  /** column name */
  Body = 'body',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EmbedHtml = 'embed_html',
  /** column name */
  EmbedUrl = 'embed_url',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  Oembed = 'oembed',
  /** column name */
  PostedById = 'posted_by_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  VideoAssetId = 'video_asset_id',
  /** column name */
  VideoAssetStatus = 'video_asset_status',
  /** column name */
  VideoPlaybackId = 'video_playback_id',
}

/** input type for updating data in table "posts" */
export type Posts_Set_Input = {
  body?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamptz']>
  embed_html?: Maybe<Scalars['String']>
  embed_url?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['Int']>
  image_url?: Maybe<Scalars['String']>
  oembed?: Maybe<Scalars['jsonb']>
  posted_by_id?: Maybe<Scalars['Int']>
  updated_at?: Maybe<Scalars['timestamptz']>
  video_asset_id?: Maybe<Scalars['String']>
  video_asset_status?: Maybe<Scalars['String']>
  video_playback_id?: Maybe<Scalars['String']>
}

/** aggregate stddev on columns */
export type Posts_Stddev_Fields = {
  __typename?: 'posts_stddev_fields'
  id?: Maybe<Scalars['Float']>
  posted_by_id?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "posts" */
export type Posts_Stddev_Order_By = {
  id?: Maybe<Order_By>
  posted_by_id?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Posts_Stddev_Pop_Fields = {
  __typename?: 'posts_stddev_pop_fields'
  id?: Maybe<Scalars['Float']>
  posted_by_id?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "posts" */
export type Posts_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>
  posted_by_id?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Posts_Stddev_Samp_Fields = {
  __typename?: 'posts_stddev_samp_fields'
  id?: Maybe<Scalars['Float']>
  posted_by_id?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "posts" */
export type Posts_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>
  posted_by_id?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Posts_Sum_Fields = {
  __typename?: 'posts_sum_fields'
  id?: Maybe<Scalars['Int']>
  posted_by_id?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "posts" */
export type Posts_Sum_Order_By = {
  id?: Maybe<Order_By>
  posted_by_id?: Maybe<Order_By>
}

/** update columns of table "posts" */
export enum Posts_Update_Column {
  /** column name */
  Body = 'body',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EmbedHtml = 'embed_html',
  /** column name */
  EmbedUrl = 'embed_url',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  Oembed = 'oembed',
  /** column name */
  PostedById = 'posted_by_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  VideoAssetId = 'video_asset_id',
  /** column name */
  VideoAssetStatus = 'video_asset_status',
  /** column name */
  VideoPlaybackId = 'video_playback_id',
}

/** aggregate var_pop on columns */
export type Posts_Var_Pop_Fields = {
  __typename?: 'posts_var_pop_fields'
  id?: Maybe<Scalars['Float']>
  posted_by_id?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "posts" */
export type Posts_Var_Pop_Order_By = {
  id?: Maybe<Order_By>
  posted_by_id?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Posts_Var_Samp_Fields = {
  __typename?: 'posts_var_samp_fields'
  id?: Maybe<Scalars['Float']>
  posted_by_id?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "posts" */
export type Posts_Var_Samp_Order_By = {
  id?: Maybe<Order_By>
  posted_by_id?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Posts_Variance_Fields = {
  __typename?: 'posts_variance_fields'
  id?: Maybe<Scalars['Float']>
  posted_by_id?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "posts" */
export type Posts_Variance_Order_By = {
  id?: Maybe<Order_By>
  posted_by_id?: Maybe<Order_By>
}

export type Query_Root = {
  __typename?: 'query_root'
  /** An array relationship */
  chat_messages: Array<Chat_Messages>
  /** An aggregate relationship */
  chat_messages_aggregate: Chat_Messages_Aggregate
  /** fetch data from the table: "chat_messages" using primary key columns */
  chat_messages_by_pk?: Maybe<Chat_Messages>
  /** fetch data from the table: "e_post_tags" */
  e_post_tags: Array<E_Post_Tags>
  /** fetch aggregated fields from the table: "e_post_tags" */
  e_post_tags_aggregate: E_Post_Tags_Aggregate
  /** fetch data from the table: "e_post_tags" using primary key columns */
  e_post_tags_by_pk?: Maybe<E_Post_Tags>
  /** fetch data from the table: "e_stg_statuses" */
  e_stg_statuses: Array<E_Stg_Statuses>
  /** fetch aggregated fields from the table: "e_stg_statuses" */
  e_stg_statuses_aggregate: E_Stg_Statuses_Aggregate
  /** fetch data from the table: "e_stg_statuses" using primary key columns */
  e_stg_statuses_by_pk?: Maybe<E_Stg_Statuses>
  /** fetch data from the table: "e_user_disciplines" */
  e_user_disciplines: Array<E_User_Disciplines>
  /** fetch aggregated fields from the table: "e_user_disciplines" */
  e_user_disciplines_aggregate: E_User_Disciplines_Aggregate
  /** fetch data from the table: "e_user_disciplines" using primary key columns */
  e_user_disciplines_by_pk?: Maybe<E_User_Disciplines>
  /** fetch data from the table: "e_user_locations" */
  e_user_locations: Array<E_User_Locations>
  /** fetch aggregated fields from the table: "e_user_locations" */
  e_user_locations_aggregate: E_User_Locations_Aggregate
  /** fetch data from the table: "e_user_locations" using primary key columns */
  e_user_locations_by_pk?: Maybe<E_User_Locations>
  /** fetch data from the table: "e_user_roles" */
  e_user_roles: Array<E_User_Roles>
  /** fetch aggregated fields from the table: "e_user_roles" */
  e_user_roles_aggregate: E_User_Roles_Aggregate
  /** fetch data from the table: "e_user_roles" using primary key columns */
  e_user_roles_by_pk?: Maybe<E_User_Roles>
  /** fetch data from the table: "likes_chat_message_user" */
  likes_chat_message_user: Array<Likes_Chat_Message_User>
  /** fetch aggregated fields from the table: "likes_chat_message_user" */
  likes_chat_message_user_aggregate: Likes_Chat_Message_User_Aggregate
  /** fetch data from the table: "likes_chat_message_user" using primary key columns */
  likes_chat_message_user_by_pk?: Maybe<Likes_Chat_Message_User>
  /** fetch data from the table: "likes_post_message_user" */
  likes_post_message_user: Array<Likes_Post_Message_User>
  /** fetch aggregated fields from the table: "likes_post_message_user" */
  likes_post_message_user_aggregate: Likes_Post_Message_User_Aggregate
  /** fetch data from the table: "likes_post_message_user" using primary key columns */
  likes_post_message_user_by_pk?: Maybe<Likes_Post_Message_User>
  /** fetch data from the table: "likes_post_user" */
  likes_post_user: Array<Likes_Post_User>
  /** fetch aggregated fields from the table: "likes_post_user" */
  likes_post_user_aggregate: Likes_Post_User_Aggregate
  /** fetch data from the table: "likes_post_user" using primary key columns */
  likes_post_user_by_pk?: Maybe<Likes_Post_User>
  /** fetch data from the table: "likes_stg_set_message_user" */
  likes_stg_set_message_user: Array<Likes_Stg_Set_Message_User>
  /** fetch aggregated fields from the table: "likes_stg_set_message_user" */
  likes_stg_set_message_user_aggregate: Likes_Stg_Set_Message_User_Aggregate
  /** fetch data from the table: "likes_stg_set_message_user" using primary key columns */
  likes_stg_set_message_user_by_pk?: Maybe<Likes_Stg_Set_Message_User>
  /** fetch data from the table: "likes_stg_set_user" */
  likes_stg_set_user: Array<Likes_Stg_Set_User>
  /** fetch aggregated fields from the table: "likes_stg_set_user" */
  likes_stg_set_user_aggregate: Likes_Stg_Set_User_Aggregate
  /** fetch data from the table: "likes_stg_set_user" using primary key columns */
  likes_stg_set_user_by_pk?: Maybe<Likes_Stg_Set_User>
  /** fetch data from the table: "likes_stg_submission_message_user" */
  likes_stg_submission_message_user: Array<Likes_Stg_Submission_Message_User>
  /** fetch aggregated fields from the table: "likes_stg_submission_message_user" */
  likes_stg_submission_message_user_aggregate: Likes_Stg_Submission_Message_User_Aggregate
  /** fetch data from the table: "likes_stg_submission_message_user" using primary key columns */
  likes_stg_submission_message_user_by_pk?: Maybe<Likes_Stg_Submission_Message_User>
  /** fetch data from the table: "likes_stg_submission_user" */
  likes_stg_submission_user: Array<Likes_Stg_Submission_User>
  /** fetch aggregated fields from the table: "likes_stg_submission_user" */
  likes_stg_submission_user_aggregate: Likes_Stg_Submission_User_Aggregate
  /** fetch data from the table: "likes_stg_submission_user" using primary key columns */
  likes_stg_submission_user_by_pk?: Maybe<Likes_Stg_Submission_User>
  /** fetch data from the table: "likes_user_user" */
  likes_user_user: Array<Likes_User_User>
  /** fetch aggregated fields from the table: "likes_user_user" */
  likes_user_user_aggregate: Likes_User_User_Aggregate
  /** fetch data from the table: "likes_user_user" using primary key columns */
  likes_user_user_by_pk?: Maybe<Likes_User_User>
  /** fetch data from the table: "post_messages" */
  post_messages: Array<Post_Messages>
  /** fetch aggregated fields from the table: "post_messages" */
  post_messages_aggregate: Post_Messages_Aggregate
  /** fetch data from the table: "post_messages" using primary key columns */
  post_messages_by_pk?: Maybe<Post_Messages>
  /** fetch data from the table: "post_tags" */
  post_tags: Array<Post_Tags>
  /** fetch aggregated fields from the table: "post_tags" */
  post_tags_aggregate: Post_Tags_Aggregate
  /** fetch data from the table: "post_tags" using primary key columns */
  post_tags_by_pk?: Maybe<Post_Tags>
  /** An array relationship */
  posts: Array<Posts>
  /** An aggregate relationship */
  posts_aggregate: Posts_Aggregate
  /** fetch data from the table: "posts" using primary key columns */
  posts_by_pk?: Maybe<Posts>
  /** An array relationship */
  refresh_tokens: Array<Refresh_Tokens>
  /** An aggregate relationship */
  refresh_tokens_aggregate: Refresh_Tokens_Aggregate
  /** fetch data from the table: "refresh_tokens" using primary key columns */
  refresh_tokens_by_pk?: Maybe<Refresh_Tokens>
  /** fetch data from the table: "stg_players" */
  stg_players: Array<Stg_Players>
  /** fetch aggregated fields from the table: "stg_players" */
  stg_players_aggregate: Stg_Players_Aggregate
  /** fetch data from the table: "stg_players" using primary key columns */
  stg_players_by_pk?: Maybe<Stg_Players>
  /** fetch data from the table: "stg_set_messages" */
  stg_set_messages: Array<Stg_Set_Messages>
  /** fetch aggregated fields from the table: "stg_set_messages" */
  stg_set_messages_aggregate: Stg_Set_Messages_Aggregate
  /** fetch data from the table: "stg_set_messages" using primary key columns */
  stg_set_messages_by_pk?: Maybe<Stg_Set_Messages>
  /** An array relationship */
  stg_sets: Array<Stg_Sets>
  /** An aggregate relationship */
  stg_sets_aggregate: Stg_Sets_Aggregate
  /** fetch data from the table: "stg_sets" using primary key columns */
  stg_sets_by_pk?: Maybe<Stg_Sets>
  /** fetch data from the table: "stg_submission_messages" */
  stg_submission_messages: Array<Stg_Submission_Messages>
  /** fetch aggregated fields from the table: "stg_submission_messages" */
  stg_submission_messages_aggregate: Stg_Submission_Messages_Aggregate
  /** fetch data from the table: "stg_submission_messages" using primary key columns */
  stg_submission_messages_by_pk?: Maybe<Stg_Submission_Messages>
  /** An array relationship */
  stg_submissions: Array<Stg_Submissions>
  /** An aggregate relationship */
  stg_submissions_aggregate: Stg_Submissions_Aggregate
  /** fetch data from the table: "stg_submissions" using primary key columns */
  stg_submissions_by_pk?: Maybe<Stg_Submissions>
  /** fetch data from the table: "stgs" */
  stgs: Array<Stgs>
  /** fetch aggregated fields from the table: "stgs" */
  stgs_aggregate: Stgs_Aggregate
  /** fetch data from the table: "stgs" using primary key columns */
  stgs_by_pk?: Maybe<Stgs>
  /** fetch data from the table: "user_activity" */
  user_activity: Array<User_Activity>
  /** fetch aggregated fields from the table: "user_activity" */
  user_activity_aggregate: User_Activity_Aggregate
  /** fetch data from the table: "user_activity" using primary key columns */
  user_activity_by_pk?: Maybe<User_Activity>
  /** An array relationship */
  user_disciplines: Array<User_Disciplines>
  /** An aggregate relationship */
  user_disciplines_aggregate: User_Disciplines_Aggregate
  /** fetch data from the table: "user_disciplines" using primary key columns */
  user_disciplines_by_pk?: Maybe<User_Disciplines>
  /** fetch data from the table: "user_locations" */
  user_locations: Array<User_Locations>
  /** fetch aggregated fields from the table: "user_locations" */
  user_locations_aggregate: User_Locations_Aggregate
  /** fetch data from the table: "user_locations" using primary key columns */
  user_locations_by_pk?: Maybe<User_Locations>
  /** fetch data from the table: "user_socials" */
  user_socials: Array<User_Socials>
  /** fetch aggregated fields from the table: "user_socials" */
  user_socials_aggregate: User_Socials_Aggregate
  /** fetch data from the table: "user_socials" using primary key columns */
  user_socials_by_pk?: Maybe<User_Socials>
  /** fetch data from the table: "users" */
  users: Array<Users>
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>
  /** fetch data from the table: "v_posts_sorted" */
  v_posts_sorted: Array<V_Posts_Sorted>
  /** fetch aggregated fields from the table: "v_posts_sorted" */
  v_posts_sorted_aggregate: V_Posts_Sorted_Aggregate
  /** fetch data from the table: "v_public_user_trick_todos" */
  v_public_user_trick_todos: Array<V_Public_User_Trick_Todos>
  /** fetch aggregated fields from the table: "v_public_user_trick_todos" */
  v_public_user_trick_todos_aggregate: V_Public_User_Trick_Todos_Aggregate
  /** fetch data from the table: "v_users_online" */
  v_users_online: Array<V_Users_Online>
  /** fetch aggregated fields from the table: "v_users_online" */
  v_users_online_aggregate: V_Users_Online_Aggregate
}

export type Query_RootChat_MessagesArgs = {
  distinct_on?: Maybe<Array<Chat_Messages_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Chat_Messages_Order_By>>
  where?: Maybe<Chat_Messages_Bool_Exp>
}

export type Query_RootChat_Messages_AggregateArgs = {
  distinct_on?: Maybe<Array<Chat_Messages_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Chat_Messages_Order_By>>
  where?: Maybe<Chat_Messages_Bool_Exp>
}

export type Query_RootChat_Messages_By_PkArgs = {
  id: Scalars['Int']
}

export type Query_RootE_Post_TagsArgs = {
  distinct_on?: Maybe<Array<E_Post_Tags_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<E_Post_Tags_Order_By>>
  where?: Maybe<E_Post_Tags_Bool_Exp>
}

export type Query_RootE_Post_Tags_AggregateArgs = {
  distinct_on?: Maybe<Array<E_Post_Tags_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<E_Post_Tags_Order_By>>
  where?: Maybe<E_Post_Tags_Bool_Exp>
}

export type Query_RootE_Post_Tags_By_PkArgs = {
  type: Scalars['String']
}

export type Query_RootE_Stg_StatusesArgs = {
  distinct_on?: Maybe<Array<E_Stg_Statuses_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<E_Stg_Statuses_Order_By>>
  where?: Maybe<E_Stg_Statuses_Bool_Exp>
}

export type Query_RootE_Stg_Statuses_AggregateArgs = {
  distinct_on?: Maybe<Array<E_Stg_Statuses_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<E_Stg_Statuses_Order_By>>
  where?: Maybe<E_Stg_Statuses_Bool_Exp>
}

export type Query_RootE_Stg_Statuses_By_PkArgs = {
  type: Scalars['String']
}

export type Query_RootE_User_DisciplinesArgs = {
  distinct_on?: Maybe<Array<E_User_Disciplines_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<E_User_Disciplines_Order_By>>
  where?: Maybe<E_User_Disciplines_Bool_Exp>
}

export type Query_RootE_User_Disciplines_AggregateArgs = {
  distinct_on?: Maybe<Array<E_User_Disciplines_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<E_User_Disciplines_Order_By>>
  where?: Maybe<E_User_Disciplines_Bool_Exp>
}

export type Query_RootE_User_Disciplines_By_PkArgs = {
  type: Scalars['String']
}

export type Query_RootE_User_LocationsArgs = {
  distinct_on?: Maybe<Array<E_User_Locations_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<E_User_Locations_Order_By>>
  where?: Maybe<E_User_Locations_Bool_Exp>
}

export type Query_RootE_User_Locations_AggregateArgs = {
  distinct_on?: Maybe<Array<E_User_Locations_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<E_User_Locations_Order_By>>
  where?: Maybe<E_User_Locations_Bool_Exp>
}

export type Query_RootE_User_Locations_By_PkArgs = {
  type: Scalars['String']
}

export type Query_RootE_User_RolesArgs = {
  distinct_on?: Maybe<Array<E_User_Roles_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<E_User_Roles_Order_By>>
  where?: Maybe<E_User_Roles_Bool_Exp>
}

export type Query_RootE_User_Roles_AggregateArgs = {
  distinct_on?: Maybe<Array<E_User_Roles_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<E_User_Roles_Order_By>>
  where?: Maybe<E_User_Roles_Bool_Exp>
}

export type Query_RootE_User_Roles_By_PkArgs = {
  type: Scalars['String']
}

export type Query_RootLikes_Chat_Message_UserArgs = {
  distinct_on?: Maybe<Array<Likes_Chat_Message_User_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Likes_Chat_Message_User_Order_By>>
  where?: Maybe<Likes_Chat_Message_User_Bool_Exp>
}

export type Query_RootLikes_Chat_Message_User_AggregateArgs = {
  distinct_on?: Maybe<Array<Likes_Chat_Message_User_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Likes_Chat_Message_User_Order_By>>
  where?: Maybe<Likes_Chat_Message_User_Bool_Exp>
}

export type Query_RootLikes_Chat_Message_User_By_PkArgs = {
  chat_message_id: Scalars['Int']
  liked_by_user_id: Scalars['Int']
}

export type Query_RootLikes_Post_Message_UserArgs = {
  distinct_on?: Maybe<Array<Likes_Post_Message_User_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Likes_Post_Message_User_Order_By>>
  where?: Maybe<Likes_Post_Message_User_Bool_Exp>
}

export type Query_RootLikes_Post_Message_User_AggregateArgs = {
  distinct_on?: Maybe<Array<Likes_Post_Message_User_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Likes_Post_Message_User_Order_By>>
  where?: Maybe<Likes_Post_Message_User_Bool_Exp>
}

export type Query_RootLikes_Post_Message_User_By_PkArgs = {
  liked_by_user_id: Scalars['Int']
  post_message_id: Scalars['Int']
}

export type Query_RootLikes_Post_UserArgs = {
  distinct_on?: Maybe<Array<Likes_Post_User_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Likes_Post_User_Order_By>>
  where?: Maybe<Likes_Post_User_Bool_Exp>
}

export type Query_RootLikes_Post_User_AggregateArgs = {
  distinct_on?: Maybe<Array<Likes_Post_User_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Likes_Post_User_Order_By>>
  where?: Maybe<Likes_Post_User_Bool_Exp>
}

export type Query_RootLikes_Post_User_By_PkArgs = {
  liked_by_user_id: Scalars['Int']
  post_id: Scalars['Int']
}

export type Query_RootLikes_Stg_Set_Message_UserArgs = {
  distinct_on?: Maybe<Array<Likes_Stg_Set_Message_User_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Likes_Stg_Set_Message_User_Order_By>>
  where?: Maybe<Likes_Stg_Set_Message_User_Bool_Exp>
}

export type Query_RootLikes_Stg_Set_Message_User_AggregateArgs = {
  distinct_on?: Maybe<Array<Likes_Stg_Set_Message_User_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Likes_Stg_Set_Message_User_Order_By>>
  where?: Maybe<Likes_Stg_Set_Message_User_Bool_Exp>
}

export type Query_RootLikes_Stg_Set_Message_User_By_PkArgs = {
  liked_by_user_id: Scalars['Int']
  stg_set_message_id: Scalars['Int']
}

export type Query_RootLikes_Stg_Set_UserArgs = {
  distinct_on?: Maybe<Array<Likes_Stg_Set_User_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Likes_Stg_Set_User_Order_By>>
  where?: Maybe<Likes_Stg_Set_User_Bool_Exp>
}

export type Query_RootLikes_Stg_Set_User_AggregateArgs = {
  distinct_on?: Maybe<Array<Likes_Stg_Set_User_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Likes_Stg_Set_User_Order_By>>
  where?: Maybe<Likes_Stg_Set_User_Bool_Exp>
}

export type Query_RootLikes_Stg_Set_User_By_PkArgs = {
  liked_by_user_id: Scalars['Int']
  stg_set_id: Scalars['Int']
}

export type Query_RootLikes_Stg_Submission_Message_UserArgs = {
  distinct_on?: Maybe<Array<Likes_Stg_Submission_Message_User_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Likes_Stg_Submission_Message_User_Order_By>>
  where?: Maybe<Likes_Stg_Submission_Message_User_Bool_Exp>
}

export type Query_RootLikes_Stg_Submission_Message_User_AggregateArgs = {
  distinct_on?: Maybe<Array<Likes_Stg_Submission_Message_User_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Likes_Stg_Submission_Message_User_Order_By>>
  where?: Maybe<Likes_Stg_Submission_Message_User_Bool_Exp>
}

export type Query_RootLikes_Stg_Submission_Message_User_By_PkArgs = {
  liked_by_user_id: Scalars['Int']
  stg_submission_message_id: Scalars['Int']
}

export type Query_RootLikes_Stg_Submission_UserArgs = {
  distinct_on?: Maybe<Array<Likes_Stg_Submission_User_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Likes_Stg_Submission_User_Order_By>>
  where?: Maybe<Likes_Stg_Submission_User_Bool_Exp>
}

export type Query_RootLikes_Stg_Submission_User_AggregateArgs = {
  distinct_on?: Maybe<Array<Likes_Stg_Submission_User_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Likes_Stg_Submission_User_Order_By>>
  where?: Maybe<Likes_Stg_Submission_User_Bool_Exp>
}

export type Query_RootLikes_Stg_Submission_User_By_PkArgs = {
  liked_by_user_id: Scalars['Int']
  stg_submission_id: Scalars['Int']
}

export type Query_RootLikes_User_UserArgs = {
  distinct_on?: Maybe<Array<Likes_User_User_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Likes_User_User_Order_By>>
  where?: Maybe<Likes_User_User_Bool_Exp>
}

export type Query_RootLikes_User_User_AggregateArgs = {
  distinct_on?: Maybe<Array<Likes_User_User_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Likes_User_User_Order_By>>
  where?: Maybe<Likes_User_User_Bool_Exp>
}

export type Query_RootLikes_User_User_By_PkArgs = {
  liked_by_user_id: Scalars['Int']
  liked_user_id: Scalars['Int']
}

export type Query_RootPost_MessagesArgs = {
  distinct_on?: Maybe<Array<Post_Messages_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Post_Messages_Order_By>>
  where?: Maybe<Post_Messages_Bool_Exp>
}

export type Query_RootPost_Messages_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Messages_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Post_Messages_Order_By>>
  where?: Maybe<Post_Messages_Bool_Exp>
}

export type Query_RootPost_Messages_By_PkArgs = {
  id: Scalars['Int']
}

export type Query_RootPost_TagsArgs = {
  distinct_on?: Maybe<Array<Post_Tags_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Post_Tags_Order_By>>
  where?: Maybe<Post_Tags_Bool_Exp>
}

export type Query_RootPost_Tags_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Tags_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Post_Tags_Order_By>>
  where?: Maybe<Post_Tags_Bool_Exp>
}

export type Query_RootPost_Tags_By_PkArgs = {
  post_id: Scalars['Int']
  tag: E_Post_Tags_Enum
}

export type Query_RootPostsArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Posts_Order_By>>
  where?: Maybe<Posts_Bool_Exp>
}

export type Query_RootPosts_AggregateArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Posts_Order_By>>
  where?: Maybe<Posts_Bool_Exp>
}

export type Query_RootPosts_By_PkArgs = {
  id: Scalars['Int']
}

export type Query_RootRefresh_TokensArgs = {
  distinct_on?: Maybe<Array<Refresh_Tokens_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Refresh_Tokens_Order_By>>
  where?: Maybe<Refresh_Tokens_Bool_Exp>
}

export type Query_RootRefresh_Tokens_AggregateArgs = {
  distinct_on?: Maybe<Array<Refresh_Tokens_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Refresh_Tokens_Order_By>>
  where?: Maybe<Refresh_Tokens_Bool_Exp>
}

export type Query_RootRefresh_Tokens_By_PkArgs = {
  token: Scalars['uuid']
}

export type Query_RootStg_PlayersArgs = {
  distinct_on?: Maybe<Array<Stg_Players_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Stg_Players_Order_By>>
  where?: Maybe<Stg_Players_Bool_Exp>
}

export type Query_RootStg_Players_AggregateArgs = {
  distinct_on?: Maybe<Array<Stg_Players_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Stg_Players_Order_By>>
  where?: Maybe<Stg_Players_Bool_Exp>
}

export type Query_RootStg_Players_By_PkArgs = {
  player_id: Scalars['Int']
  stg_id: Scalars['Int']
}

export type Query_RootStg_Set_MessagesArgs = {
  distinct_on?: Maybe<Array<Stg_Set_Messages_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Stg_Set_Messages_Order_By>>
  where?: Maybe<Stg_Set_Messages_Bool_Exp>
}

export type Query_RootStg_Set_Messages_AggregateArgs = {
  distinct_on?: Maybe<Array<Stg_Set_Messages_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Stg_Set_Messages_Order_By>>
  where?: Maybe<Stg_Set_Messages_Bool_Exp>
}

export type Query_RootStg_Set_Messages_By_PkArgs = {
  id: Scalars['Int']
}

export type Query_RootStg_SetsArgs = {
  distinct_on?: Maybe<Array<Stg_Sets_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Stg_Sets_Order_By>>
  where?: Maybe<Stg_Sets_Bool_Exp>
}

export type Query_RootStg_Sets_AggregateArgs = {
  distinct_on?: Maybe<Array<Stg_Sets_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Stg_Sets_Order_By>>
  where?: Maybe<Stg_Sets_Bool_Exp>
}

export type Query_RootStg_Sets_By_PkArgs = {
  id: Scalars['Int']
}

export type Query_RootStg_Submission_MessagesArgs = {
  distinct_on?: Maybe<Array<Stg_Submission_Messages_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Stg_Submission_Messages_Order_By>>
  where?: Maybe<Stg_Submission_Messages_Bool_Exp>
}

export type Query_RootStg_Submission_Messages_AggregateArgs = {
  distinct_on?: Maybe<Array<Stg_Submission_Messages_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Stg_Submission_Messages_Order_By>>
  where?: Maybe<Stg_Submission_Messages_Bool_Exp>
}

export type Query_RootStg_Submission_Messages_By_PkArgs = {
  id: Scalars['Int']
}

export type Query_RootStg_SubmissionsArgs = {
  distinct_on?: Maybe<Array<Stg_Submissions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Stg_Submissions_Order_By>>
  where?: Maybe<Stg_Submissions_Bool_Exp>
}

export type Query_RootStg_Submissions_AggregateArgs = {
  distinct_on?: Maybe<Array<Stg_Submissions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Stg_Submissions_Order_By>>
  where?: Maybe<Stg_Submissions_Bool_Exp>
}

export type Query_RootStg_Submissions_By_PkArgs = {
  id: Scalars['Int']
}

export type Query_RootStgsArgs = {
  distinct_on?: Maybe<Array<Stgs_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Stgs_Order_By>>
  where?: Maybe<Stgs_Bool_Exp>
}

export type Query_RootStgs_AggregateArgs = {
  distinct_on?: Maybe<Array<Stgs_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Stgs_Order_By>>
  where?: Maybe<Stgs_Bool_Exp>
}

export type Query_RootStgs_By_PkArgs = {
  id: Scalars['Int']
}

export type Query_RootUser_ActivityArgs = {
  distinct_on?: Maybe<Array<User_Activity_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Activity_Order_By>>
  where?: Maybe<User_Activity_Bool_Exp>
}

export type Query_RootUser_Activity_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Activity_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Activity_Order_By>>
  where?: Maybe<User_Activity_Bool_Exp>
}

export type Query_RootUser_Activity_By_PkArgs = {
  user_id: Scalars['Int']
}

export type Query_RootUser_DisciplinesArgs = {
  distinct_on?: Maybe<Array<User_Disciplines_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Disciplines_Order_By>>
  where?: Maybe<User_Disciplines_Bool_Exp>
}

export type Query_RootUser_Disciplines_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Disciplines_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Disciplines_Order_By>>
  where?: Maybe<User_Disciplines_Bool_Exp>
}

export type Query_RootUser_Disciplines_By_PkArgs = {
  discipline: E_User_Disciplines_Enum
  user_id: Scalars['Int']
}

export type Query_RootUser_LocationsArgs = {
  distinct_on?: Maybe<Array<User_Locations_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Locations_Order_By>>
  where?: Maybe<User_Locations_Bool_Exp>
}

export type Query_RootUser_Locations_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Locations_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Locations_Order_By>>
  where?: Maybe<User_Locations_Bool_Exp>
}

export type Query_RootUser_Locations_By_PkArgs = {
  type: E_User_Locations_Enum
  user_id: Scalars['Int']
}

export type Query_RootUser_SocialsArgs = {
  distinct_on?: Maybe<Array<User_Socials_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Socials_Order_By>>
  where?: Maybe<User_Socials_Bool_Exp>
}

export type Query_RootUser_Socials_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Socials_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Socials_Order_By>>
  where?: Maybe<User_Socials_Bool_Exp>
}

export type Query_RootUser_Socials_By_PkArgs = {
  user_id: Scalars['Int']
}

export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Order_By>>
  where?: Maybe<Users_Bool_Exp>
}

export type Query_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Order_By>>
  where?: Maybe<Users_Bool_Exp>
}

export type Query_RootUsers_By_PkArgs = {
  id: Scalars['Int']
}

export type Query_RootV_Posts_SortedArgs = {
  distinct_on?: Maybe<Array<V_Posts_Sorted_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<V_Posts_Sorted_Order_By>>
  where?: Maybe<V_Posts_Sorted_Bool_Exp>
}

export type Query_RootV_Posts_Sorted_AggregateArgs = {
  distinct_on?: Maybe<Array<V_Posts_Sorted_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<V_Posts_Sorted_Order_By>>
  where?: Maybe<V_Posts_Sorted_Bool_Exp>
}

export type Query_RootV_Public_User_Trick_TodosArgs = {
  distinct_on?: Maybe<Array<V_Public_User_Trick_Todos_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<V_Public_User_Trick_Todos_Order_By>>
  where?: Maybe<V_Public_User_Trick_Todos_Bool_Exp>
}

export type Query_RootV_Public_User_Trick_Todos_AggregateArgs = {
  distinct_on?: Maybe<Array<V_Public_User_Trick_Todos_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<V_Public_User_Trick_Todos_Order_By>>
  where?: Maybe<V_Public_User_Trick_Todos_Bool_Exp>
}

export type Query_RootV_Users_OnlineArgs = {
  distinct_on?: Maybe<Array<V_Users_Online_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<V_Users_Online_Order_By>>
  where?: Maybe<V_Users_Online_Bool_Exp>
}

export type Query_RootV_Users_Online_AggregateArgs = {
  distinct_on?: Maybe<Array<V_Users_Online_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<V_Users_Online_Order_By>>
  where?: Maybe<V_Users_Online_Bool_Exp>
}

/** columns and relationships of "refresh_tokens" */
export type Refresh_Tokens = {
  __typename?: 'refresh_tokens'
  token: Scalars['uuid']
  token_expiry: Scalars['timestamptz']
  /** An object relationship */
  user?: Maybe<Users>
  user_id?: Maybe<Scalars['Int']>
}

/** aggregated selection of "refresh_tokens" */
export type Refresh_Tokens_Aggregate = {
  __typename?: 'refresh_tokens_aggregate'
  aggregate?: Maybe<Refresh_Tokens_Aggregate_Fields>
  nodes: Array<Refresh_Tokens>
}

/** aggregate fields of "refresh_tokens" */
export type Refresh_Tokens_Aggregate_Fields = {
  __typename?: 'refresh_tokens_aggregate_fields'
  avg?: Maybe<Refresh_Tokens_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Refresh_Tokens_Max_Fields>
  min?: Maybe<Refresh_Tokens_Min_Fields>
  stddev?: Maybe<Refresh_Tokens_Stddev_Fields>
  stddev_pop?: Maybe<Refresh_Tokens_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Refresh_Tokens_Stddev_Samp_Fields>
  sum?: Maybe<Refresh_Tokens_Sum_Fields>
  var_pop?: Maybe<Refresh_Tokens_Var_Pop_Fields>
  var_samp?: Maybe<Refresh_Tokens_Var_Samp_Fields>
  variance?: Maybe<Refresh_Tokens_Variance_Fields>
}

/** aggregate fields of "refresh_tokens" */
export type Refresh_Tokens_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Refresh_Tokens_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "refresh_tokens" */
export type Refresh_Tokens_Aggregate_Order_By = {
  avg?: Maybe<Refresh_Tokens_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Refresh_Tokens_Max_Order_By>
  min?: Maybe<Refresh_Tokens_Min_Order_By>
  stddev?: Maybe<Refresh_Tokens_Stddev_Order_By>
  stddev_pop?: Maybe<Refresh_Tokens_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Refresh_Tokens_Stddev_Samp_Order_By>
  sum?: Maybe<Refresh_Tokens_Sum_Order_By>
  var_pop?: Maybe<Refresh_Tokens_Var_Pop_Order_By>
  var_samp?: Maybe<Refresh_Tokens_Var_Samp_Order_By>
  variance?: Maybe<Refresh_Tokens_Variance_Order_By>
}

/** input type for inserting array relation for remote table "refresh_tokens" */
export type Refresh_Tokens_Arr_Rel_Insert_Input = {
  data: Array<Refresh_Tokens_Insert_Input>
  /** on conflict condition */
  on_conflict?: Maybe<Refresh_Tokens_On_Conflict>
}

/** aggregate avg on columns */
export type Refresh_Tokens_Avg_Fields = {
  __typename?: 'refresh_tokens_avg_fields'
  user_id?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "refresh_tokens" */
export type Refresh_Tokens_Avg_Order_By = {
  user_id?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "refresh_tokens". All fields are combined with a logical 'AND'. */
export type Refresh_Tokens_Bool_Exp = {
  _and?: Maybe<Array<Refresh_Tokens_Bool_Exp>>
  _not?: Maybe<Refresh_Tokens_Bool_Exp>
  _or?: Maybe<Array<Refresh_Tokens_Bool_Exp>>
  token?: Maybe<Uuid_Comparison_Exp>
  token_expiry?: Maybe<Timestamptz_Comparison_Exp>
  user?: Maybe<Users_Bool_Exp>
  user_id?: Maybe<Int_Comparison_Exp>
}

/** unique or primary key constraints on table "refresh_tokens" */
export enum Refresh_Tokens_Constraint {
  /** unique or primary key constraint */
  RefreshTokensPkey = 'refresh_tokens_pkey',
}

/** input type for incrementing numeric columns in table "refresh_tokens" */
export type Refresh_Tokens_Inc_Input = {
  user_id?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "refresh_tokens" */
export type Refresh_Tokens_Insert_Input = {
  token?: Maybe<Scalars['uuid']>
  token_expiry?: Maybe<Scalars['timestamptz']>
  user?: Maybe<Users_Obj_Rel_Insert_Input>
  user_id?: Maybe<Scalars['Int']>
}

/** aggregate max on columns */
export type Refresh_Tokens_Max_Fields = {
  __typename?: 'refresh_tokens_max_fields'
  token?: Maybe<Scalars['uuid']>
  token_expiry?: Maybe<Scalars['timestamptz']>
  user_id?: Maybe<Scalars['Int']>
}

/** order by max() on columns of table "refresh_tokens" */
export type Refresh_Tokens_Max_Order_By = {
  token?: Maybe<Order_By>
  token_expiry?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Refresh_Tokens_Min_Fields = {
  __typename?: 'refresh_tokens_min_fields'
  token?: Maybe<Scalars['uuid']>
  token_expiry?: Maybe<Scalars['timestamptz']>
  user_id?: Maybe<Scalars['Int']>
}

/** order by min() on columns of table "refresh_tokens" */
export type Refresh_Tokens_Min_Order_By = {
  token?: Maybe<Order_By>
  token_expiry?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** response of any mutation on the table "refresh_tokens" */
export type Refresh_Tokens_Mutation_Response = {
  __typename?: 'refresh_tokens_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Refresh_Tokens>
}

/** on conflict condition type for table "refresh_tokens" */
export type Refresh_Tokens_On_Conflict = {
  constraint: Refresh_Tokens_Constraint
  update_columns?: Array<Refresh_Tokens_Update_Column>
  where?: Maybe<Refresh_Tokens_Bool_Exp>
}

/** Ordering options when selecting data from "refresh_tokens". */
export type Refresh_Tokens_Order_By = {
  token?: Maybe<Order_By>
  token_expiry?: Maybe<Order_By>
  user?: Maybe<Users_Order_By>
  user_id?: Maybe<Order_By>
}

/** primary key columns input for table: refresh_tokens */
export type Refresh_Tokens_Pk_Columns_Input = {
  token: Scalars['uuid']
}

/** select columns of table "refresh_tokens" */
export enum Refresh_Tokens_Select_Column {
  /** column name */
  Token = 'token',
  /** column name */
  TokenExpiry = 'token_expiry',
  /** column name */
  UserId = 'user_id',
}

/** input type for updating data in table "refresh_tokens" */
export type Refresh_Tokens_Set_Input = {
  token?: Maybe<Scalars['uuid']>
  token_expiry?: Maybe<Scalars['timestamptz']>
  user_id?: Maybe<Scalars['Int']>
}

/** aggregate stddev on columns */
export type Refresh_Tokens_Stddev_Fields = {
  __typename?: 'refresh_tokens_stddev_fields'
  user_id?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "refresh_tokens" */
export type Refresh_Tokens_Stddev_Order_By = {
  user_id?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Refresh_Tokens_Stddev_Pop_Fields = {
  __typename?: 'refresh_tokens_stddev_pop_fields'
  user_id?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "refresh_tokens" */
export type Refresh_Tokens_Stddev_Pop_Order_By = {
  user_id?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Refresh_Tokens_Stddev_Samp_Fields = {
  __typename?: 'refresh_tokens_stddev_samp_fields'
  user_id?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "refresh_tokens" */
export type Refresh_Tokens_Stddev_Samp_Order_By = {
  user_id?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Refresh_Tokens_Sum_Fields = {
  __typename?: 'refresh_tokens_sum_fields'
  user_id?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "refresh_tokens" */
export type Refresh_Tokens_Sum_Order_By = {
  user_id?: Maybe<Order_By>
}

/** update columns of table "refresh_tokens" */
export enum Refresh_Tokens_Update_Column {
  /** column name */
  Token = 'token',
  /** column name */
  TokenExpiry = 'token_expiry',
  /** column name */
  UserId = 'user_id',
}

/** aggregate var_pop on columns */
export type Refresh_Tokens_Var_Pop_Fields = {
  __typename?: 'refresh_tokens_var_pop_fields'
  user_id?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "refresh_tokens" */
export type Refresh_Tokens_Var_Pop_Order_By = {
  user_id?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Refresh_Tokens_Var_Samp_Fields = {
  __typename?: 'refresh_tokens_var_samp_fields'
  user_id?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "refresh_tokens" */
export type Refresh_Tokens_Var_Samp_Order_By = {
  user_id?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Refresh_Tokens_Variance_Fields = {
  __typename?: 'refresh_tokens_variance_fields'
  user_id?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "refresh_tokens" */
export type Refresh_Tokens_Variance_Order_By = {
  user_id?: Maybe<Order_By>
}

/** columns and relationships of "stg_players" */
export type Stg_Players = {
  __typename?: 'stg_players'
  /** An object relationship */
  player?: Maybe<Users>
  player_id: Scalars['Int']
  /** An object relationship */
  stg?: Maybe<Stgs>
  stg_id: Scalars['Int']
}

/** aggregated selection of "stg_players" */
export type Stg_Players_Aggregate = {
  __typename?: 'stg_players_aggregate'
  aggregate?: Maybe<Stg_Players_Aggregate_Fields>
  nodes: Array<Stg_Players>
}

/** aggregate fields of "stg_players" */
export type Stg_Players_Aggregate_Fields = {
  __typename?: 'stg_players_aggregate_fields'
  avg?: Maybe<Stg_Players_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Stg_Players_Max_Fields>
  min?: Maybe<Stg_Players_Min_Fields>
  stddev?: Maybe<Stg_Players_Stddev_Fields>
  stddev_pop?: Maybe<Stg_Players_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Stg_Players_Stddev_Samp_Fields>
  sum?: Maybe<Stg_Players_Sum_Fields>
  var_pop?: Maybe<Stg_Players_Var_Pop_Fields>
  var_samp?: Maybe<Stg_Players_Var_Samp_Fields>
  variance?: Maybe<Stg_Players_Variance_Fields>
}

/** aggregate fields of "stg_players" */
export type Stg_Players_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Stg_Players_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "stg_players" */
export type Stg_Players_Aggregate_Order_By = {
  avg?: Maybe<Stg_Players_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Stg_Players_Max_Order_By>
  min?: Maybe<Stg_Players_Min_Order_By>
  stddev?: Maybe<Stg_Players_Stddev_Order_By>
  stddev_pop?: Maybe<Stg_Players_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Stg_Players_Stddev_Samp_Order_By>
  sum?: Maybe<Stg_Players_Sum_Order_By>
  var_pop?: Maybe<Stg_Players_Var_Pop_Order_By>
  var_samp?: Maybe<Stg_Players_Var_Samp_Order_By>
  variance?: Maybe<Stg_Players_Variance_Order_By>
}

/** input type for inserting array relation for remote table "stg_players" */
export type Stg_Players_Arr_Rel_Insert_Input = {
  data: Array<Stg_Players_Insert_Input>
  /** on conflict condition */
  on_conflict?: Maybe<Stg_Players_On_Conflict>
}

/** aggregate avg on columns */
export type Stg_Players_Avg_Fields = {
  __typename?: 'stg_players_avg_fields'
  player_id?: Maybe<Scalars['Float']>
  stg_id?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "stg_players" */
export type Stg_Players_Avg_Order_By = {
  player_id?: Maybe<Order_By>
  stg_id?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "stg_players". All fields are combined with a logical 'AND'. */
export type Stg_Players_Bool_Exp = {
  _and?: Maybe<Array<Stg_Players_Bool_Exp>>
  _not?: Maybe<Stg_Players_Bool_Exp>
  _or?: Maybe<Array<Stg_Players_Bool_Exp>>
  player?: Maybe<Users_Bool_Exp>
  player_id?: Maybe<Int_Comparison_Exp>
  stg?: Maybe<Stgs_Bool_Exp>
  stg_id?: Maybe<Int_Comparison_Exp>
}

/** unique or primary key constraints on table "stg_players" */
export enum Stg_Players_Constraint {
  /** unique or primary key constraint */
  StgPlayersPkey = 'stg_players_pkey',
}

/** input type for incrementing numeric columns in table "stg_players" */
export type Stg_Players_Inc_Input = {
  player_id?: Maybe<Scalars['Int']>
  stg_id?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "stg_players" */
export type Stg_Players_Insert_Input = {
  player?: Maybe<Users_Obj_Rel_Insert_Input>
  player_id?: Maybe<Scalars['Int']>
  stg?: Maybe<Stgs_Obj_Rel_Insert_Input>
  stg_id?: Maybe<Scalars['Int']>
}

/** aggregate max on columns */
export type Stg_Players_Max_Fields = {
  __typename?: 'stg_players_max_fields'
  player_id?: Maybe<Scalars['Int']>
  stg_id?: Maybe<Scalars['Int']>
}

/** order by max() on columns of table "stg_players" */
export type Stg_Players_Max_Order_By = {
  player_id?: Maybe<Order_By>
  stg_id?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Stg_Players_Min_Fields = {
  __typename?: 'stg_players_min_fields'
  player_id?: Maybe<Scalars['Int']>
  stg_id?: Maybe<Scalars['Int']>
}

/** order by min() on columns of table "stg_players" */
export type Stg_Players_Min_Order_By = {
  player_id?: Maybe<Order_By>
  stg_id?: Maybe<Order_By>
}

/** response of any mutation on the table "stg_players" */
export type Stg_Players_Mutation_Response = {
  __typename?: 'stg_players_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Stg_Players>
}

/** on conflict condition type for table "stg_players" */
export type Stg_Players_On_Conflict = {
  constraint: Stg_Players_Constraint
  update_columns?: Array<Stg_Players_Update_Column>
  where?: Maybe<Stg_Players_Bool_Exp>
}

/** Ordering options when selecting data from "stg_players". */
export type Stg_Players_Order_By = {
  player?: Maybe<Users_Order_By>
  player_id?: Maybe<Order_By>
  stg?: Maybe<Stgs_Order_By>
  stg_id?: Maybe<Order_By>
}

/** primary key columns input for table: stg_players */
export type Stg_Players_Pk_Columns_Input = {
  player_id: Scalars['Int']
  stg_id: Scalars['Int']
}

/** select columns of table "stg_players" */
export enum Stg_Players_Select_Column {
  /** column name */
  PlayerId = 'player_id',
  /** column name */
  StgId = 'stg_id',
}

/** input type for updating data in table "stg_players" */
export type Stg_Players_Set_Input = {
  player_id?: Maybe<Scalars['Int']>
  stg_id?: Maybe<Scalars['Int']>
}

/** aggregate stddev on columns */
export type Stg_Players_Stddev_Fields = {
  __typename?: 'stg_players_stddev_fields'
  player_id?: Maybe<Scalars['Float']>
  stg_id?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "stg_players" */
export type Stg_Players_Stddev_Order_By = {
  player_id?: Maybe<Order_By>
  stg_id?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Stg_Players_Stddev_Pop_Fields = {
  __typename?: 'stg_players_stddev_pop_fields'
  player_id?: Maybe<Scalars['Float']>
  stg_id?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "stg_players" */
export type Stg_Players_Stddev_Pop_Order_By = {
  player_id?: Maybe<Order_By>
  stg_id?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Stg_Players_Stddev_Samp_Fields = {
  __typename?: 'stg_players_stddev_samp_fields'
  player_id?: Maybe<Scalars['Float']>
  stg_id?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "stg_players" */
export type Stg_Players_Stddev_Samp_Order_By = {
  player_id?: Maybe<Order_By>
  stg_id?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Stg_Players_Sum_Fields = {
  __typename?: 'stg_players_sum_fields'
  player_id?: Maybe<Scalars['Int']>
  stg_id?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "stg_players" */
export type Stg_Players_Sum_Order_By = {
  player_id?: Maybe<Order_By>
  stg_id?: Maybe<Order_By>
}

/** update columns of table "stg_players" */
export enum Stg_Players_Update_Column {
  /** column name */
  PlayerId = 'player_id',
  /** column name */
  StgId = 'stg_id',
}

/** aggregate var_pop on columns */
export type Stg_Players_Var_Pop_Fields = {
  __typename?: 'stg_players_var_pop_fields'
  player_id?: Maybe<Scalars['Float']>
  stg_id?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "stg_players" */
export type Stg_Players_Var_Pop_Order_By = {
  player_id?: Maybe<Order_By>
  stg_id?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Stg_Players_Var_Samp_Fields = {
  __typename?: 'stg_players_var_samp_fields'
  player_id?: Maybe<Scalars['Float']>
  stg_id?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "stg_players" */
export type Stg_Players_Var_Samp_Order_By = {
  player_id?: Maybe<Order_By>
  stg_id?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Stg_Players_Variance_Fields = {
  __typename?: 'stg_players_variance_fields'
  player_id?: Maybe<Scalars['Float']>
  stg_id?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "stg_players" */
export type Stg_Players_Variance_Order_By = {
  player_id?: Maybe<Order_By>
  stg_id?: Maybe<Order_By>
}

/** columns and relationships of "stg_set_messages" */
export type Stg_Set_Messages = {
  __typename?: 'stg_set_messages'
  /** An object relationship */
  author?: Maybe<Users>
  author_id?: Maybe<Scalars['Int']>
  created_at: Scalars['timestamptz']
  id: Scalars['Int']
  /** An array relationship */
  likes: Array<Likes_Stg_Set_Message_User>
  /** An aggregate relationship */
  likes_aggregate: Likes_Stg_Set_Message_User_Aggregate
  /** An object relationship */
  set?: Maybe<Stg_Sets>
  stg_set_id?: Maybe<Scalars['Int']>
  text: Scalars['String']
  updated_at: Scalars['timestamptz']
}

/** columns and relationships of "stg_set_messages" */
export type Stg_Set_MessagesLikesArgs = {
  distinct_on?: Maybe<Array<Likes_Stg_Set_Message_User_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Likes_Stg_Set_Message_User_Order_By>>
  where?: Maybe<Likes_Stg_Set_Message_User_Bool_Exp>
}

/** columns and relationships of "stg_set_messages" */
export type Stg_Set_MessagesLikes_AggregateArgs = {
  distinct_on?: Maybe<Array<Likes_Stg_Set_Message_User_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Likes_Stg_Set_Message_User_Order_By>>
  where?: Maybe<Likes_Stg_Set_Message_User_Bool_Exp>
}

/** aggregated selection of "stg_set_messages" */
export type Stg_Set_Messages_Aggregate = {
  __typename?: 'stg_set_messages_aggregate'
  aggregate?: Maybe<Stg_Set_Messages_Aggregate_Fields>
  nodes: Array<Stg_Set_Messages>
}

/** aggregate fields of "stg_set_messages" */
export type Stg_Set_Messages_Aggregate_Fields = {
  __typename?: 'stg_set_messages_aggregate_fields'
  avg?: Maybe<Stg_Set_Messages_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Stg_Set_Messages_Max_Fields>
  min?: Maybe<Stg_Set_Messages_Min_Fields>
  stddev?: Maybe<Stg_Set_Messages_Stddev_Fields>
  stddev_pop?: Maybe<Stg_Set_Messages_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Stg_Set_Messages_Stddev_Samp_Fields>
  sum?: Maybe<Stg_Set_Messages_Sum_Fields>
  var_pop?: Maybe<Stg_Set_Messages_Var_Pop_Fields>
  var_samp?: Maybe<Stg_Set_Messages_Var_Samp_Fields>
  variance?: Maybe<Stg_Set_Messages_Variance_Fields>
}

/** aggregate fields of "stg_set_messages" */
export type Stg_Set_Messages_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Stg_Set_Messages_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "stg_set_messages" */
export type Stg_Set_Messages_Aggregate_Order_By = {
  avg?: Maybe<Stg_Set_Messages_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Stg_Set_Messages_Max_Order_By>
  min?: Maybe<Stg_Set_Messages_Min_Order_By>
  stddev?: Maybe<Stg_Set_Messages_Stddev_Order_By>
  stddev_pop?: Maybe<Stg_Set_Messages_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Stg_Set_Messages_Stddev_Samp_Order_By>
  sum?: Maybe<Stg_Set_Messages_Sum_Order_By>
  var_pop?: Maybe<Stg_Set_Messages_Var_Pop_Order_By>
  var_samp?: Maybe<Stg_Set_Messages_Var_Samp_Order_By>
  variance?: Maybe<Stg_Set_Messages_Variance_Order_By>
}

/** input type for inserting array relation for remote table "stg_set_messages" */
export type Stg_Set_Messages_Arr_Rel_Insert_Input = {
  data: Array<Stg_Set_Messages_Insert_Input>
  /** on conflict condition */
  on_conflict?: Maybe<Stg_Set_Messages_On_Conflict>
}

/** aggregate avg on columns */
export type Stg_Set_Messages_Avg_Fields = {
  __typename?: 'stg_set_messages_avg_fields'
  author_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  stg_set_id?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "stg_set_messages" */
export type Stg_Set_Messages_Avg_Order_By = {
  author_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  stg_set_id?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "stg_set_messages". All fields are combined with a logical 'AND'. */
export type Stg_Set_Messages_Bool_Exp = {
  _and?: Maybe<Array<Stg_Set_Messages_Bool_Exp>>
  _not?: Maybe<Stg_Set_Messages_Bool_Exp>
  _or?: Maybe<Array<Stg_Set_Messages_Bool_Exp>>
  author?: Maybe<Users_Bool_Exp>
  author_id?: Maybe<Int_Comparison_Exp>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  id?: Maybe<Int_Comparison_Exp>
  likes?: Maybe<Likes_Stg_Set_Message_User_Bool_Exp>
  set?: Maybe<Stg_Sets_Bool_Exp>
  stg_set_id?: Maybe<Int_Comparison_Exp>
  text?: Maybe<String_Comparison_Exp>
  updated_at?: Maybe<Timestamptz_Comparison_Exp>
}

/** unique or primary key constraints on table "stg_set_messages" */
export enum Stg_Set_Messages_Constraint {
  /** unique or primary key constraint */
  StgSetMessagesPkey = 'stg_set_messages_pkey',
  /** unique or primary key constraint */
  StgSetMessagesRnKey = 'stg_set_messages_rn_key',
}

/** input type for incrementing numeric columns in table "stg_set_messages" */
export type Stg_Set_Messages_Inc_Input = {
  author_id?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
  stg_set_id?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "stg_set_messages" */
export type Stg_Set_Messages_Insert_Input = {
  author?: Maybe<Users_Obj_Rel_Insert_Input>
  author_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  likes?: Maybe<Likes_Stg_Set_Message_User_Arr_Rel_Insert_Input>
  set?: Maybe<Stg_Sets_Obj_Rel_Insert_Input>
  stg_set_id?: Maybe<Scalars['Int']>
  text?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregate max on columns */
export type Stg_Set_Messages_Max_Fields = {
  __typename?: 'stg_set_messages_max_fields'
  author_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  stg_set_id?: Maybe<Scalars['Int']>
  text?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by max() on columns of table "stg_set_messages" */
export type Stg_Set_Messages_Max_Order_By = {
  author_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  stg_set_id?: Maybe<Order_By>
  text?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Stg_Set_Messages_Min_Fields = {
  __typename?: 'stg_set_messages_min_fields'
  author_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  stg_set_id?: Maybe<Scalars['Int']>
  text?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by min() on columns of table "stg_set_messages" */
export type Stg_Set_Messages_Min_Order_By = {
  author_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  stg_set_id?: Maybe<Order_By>
  text?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** response of any mutation on the table "stg_set_messages" */
export type Stg_Set_Messages_Mutation_Response = {
  __typename?: 'stg_set_messages_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Stg_Set_Messages>
}

/** input type for inserting object relation for remote table "stg_set_messages" */
export type Stg_Set_Messages_Obj_Rel_Insert_Input = {
  data: Stg_Set_Messages_Insert_Input
  /** on conflict condition */
  on_conflict?: Maybe<Stg_Set_Messages_On_Conflict>
}

/** on conflict condition type for table "stg_set_messages" */
export type Stg_Set_Messages_On_Conflict = {
  constraint: Stg_Set_Messages_Constraint
  update_columns?: Array<Stg_Set_Messages_Update_Column>
  where?: Maybe<Stg_Set_Messages_Bool_Exp>
}

/** Ordering options when selecting data from "stg_set_messages". */
export type Stg_Set_Messages_Order_By = {
  author?: Maybe<Users_Order_By>
  author_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  likes_aggregate?: Maybe<Likes_Stg_Set_Message_User_Aggregate_Order_By>
  set?: Maybe<Stg_Sets_Order_By>
  stg_set_id?: Maybe<Order_By>
  text?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** primary key columns input for table: stg_set_messages */
export type Stg_Set_Messages_Pk_Columns_Input = {
  id: Scalars['Int']
}

/** select columns of table "stg_set_messages" */
export enum Stg_Set_Messages_Select_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  StgSetId = 'stg_set_id',
  /** column name */
  Text = 'text',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "stg_set_messages" */
export type Stg_Set_Messages_Set_Input = {
  author_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  stg_set_id?: Maybe<Scalars['Int']>
  text?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregate stddev on columns */
export type Stg_Set_Messages_Stddev_Fields = {
  __typename?: 'stg_set_messages_stddev_fields'
  author_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  stg_set_id?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "stg_set_messages" */
export type Stg_Set_Messages_Stddev_Order_By = {
  author_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  stg_set_id?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Stg_Set_Messages_Stddev_Pop_Fields = {
  __typename?: 'stg_set_messages_stddev_pop_fields'
  author_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  stg_set_id?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "stg_set_messages" */
export type Stg_Set_Messages_Stddev_Pop_Order_By = {
  author_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  stg_set_id?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Stg_Set_Messages_Stddev_Samp_Fields = {
  __typename?: 'stg_set_messages_stddev_samp_fields'
  author_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  stg_set_id?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "stg_set_messages" */
export type Stg_Set_Messages_Stddev_Samp_Order_By = {
  author_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  stg_set_id?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Stg_Set_Messages_Sum_Fields = {
  __typename?: 'stg_set_messages_sum_fields'
  author_id?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
  stg_set_id?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "stg_set_messages" */
export type Stg_Set_Messages_Sum_Order_By = {
  author_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  stg_set_id?: Maybe<Order_By>
}

/** update columns of table "stg_set_messages" */
export enum Stg_Set_Messages_Update_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  StgSetId = 'stg_set_id',
  /** column name */
  Text = 'text',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** aggregate var_pop on columns */
export type Stg_Set_Messages_Var_Pop_Fields = {
  __typename?: 'stg_set_messages_var_pop_fields'
  author_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  stg_set_id?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "stg_set_messages" */
export type Stg_Set_Messages_Var_Pop_Order_By = {
  author_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  stg_set_id?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Stg_Set_Messages_Var_Samp_Fields = {
  __typename?: 'stg_set_messages_var_samp_fields'
  author_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  stg_set_id?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "stg_set_messages" */
export type Stg_Set_Messages_Var_Samp_Order_By = {
  author_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  stg_set_id?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Stg_Set_Messages_Variance_Fields = {
  __typename?: 'stg_set_messages_variance_fields'
  author_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  stg_set_id?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "stg_set_messages" */
export type Stg_Set_Messages_Variance_Order_By = {
  author_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  stg_set_id?: Maybe<Order_By>
}

/** columns and relationships of "stg_sets" */
export type Stg_Sets = {
  __typename?: 'stg_sets'
  created_at?: Maybe<Scalars['timestamptz']>
  id: Scalars['Int']
  instructions: Scalars['String']
  /** An array relationship */
  likes: Array<Likes_Stg_Set_User>
  /** An aggregate relationship */
  likes_aggregate: Likes_Stg_Set_User_Aggregate
  /** An array relationship */
  messages: Array<Stg_Set_Messages>
  /** An aggregate relationship */
  messages_aggregate: Stg_Set_Messages_Aggregate
  /** An object relationship */
  set_by?: Maybe<Users>
  set_by_id?: Maybe<Scalars['Int']>
  /** An object relationship */
  stg?: Maybe<Stgs>
  stg_id?: Maybe<Scalars['Int']>
  /** An array relationship */
  submissions_where_landed: Array<Stg_Submissions>
  /** An aggregate relationship */
  submissions_where_landed_aggregate: Stg_Submissions_Aggregate
  title?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
  video_asset_id?: Maybe<Scalars['String']>
  video_asset_status?: Maybe<Scalars['String']>
  video_playback_id?: Maybe<Scalars['String']>
}

/** columns and relationships of "stg_sets" */
export type Stg_SetsLikesArgs = {
  distinct_on?: Maybe<Array<Likes_Stg_Set_User_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Likes_Stg_Set_User_Order_By>>
  where?: Maybe<Likes_Stg_Set_User_Bool_Exp>
}

/** columns and relationships of "stg_sets" */
export type Stg_SetsLikes_AggregateArgs = {
  distinct_on?: Maybe<Array<Likes_Stg_Set_User_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Likes_Stg_Set_User_Order_By>>
  where?: Maybe<Likes_Stg_Set_User_Bool_Exp>
}

/** columns and relationships of "stg_sets" */
export type Stg_SetsMessagesArgs = {
  distinct_on?: Maybe<Array<Stg_Set_Messages_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Stg_Set_Messages_Order_By>>
  where?: Maybe<Stg_Set_Messages_Bool_Exp>
}

/** columns and relationships of "stg_sets" */
export type Stg_SetsMessages_AggregateArgs = {
  distinct_on?: Maybe<Array<Stg_Set_Messages_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Stg_Set_Messages_Order_By>>
  where?: Maybe<Stg_Set_Messages_Bool_Exp>
}

/** columns and relationships of "stg_sets" */
export type Stg_SetsSubmissions_Where_LandedArgs = {
  distinct_on?: Maybe<Array<Stg_Submissions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Stg_Submissions_Order_By>>
  where?: Maybe<Stg_Submissions_Bool_Exp>
}

/** columns and relationships of "stg_sets" */
export type Stg_SetsSubmissions_Where_Landed_AggregateArgs = {
  distinct_on?: Maybe<Array<Stg_Submissions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Stg_Submissions_Order_By>>
  where?: Maybe<Stg_Submissions_Bool_Exp>
}

/** aggregated selection of "stg_sets" */
export type Stg_Sets_Aggregate = {
  __typename?: 'stg_sets_aggregate'
  aggregate?: Maybe<Stg_Sets_Aggregate_Fields>
  nodes: Array<Stg_Sets>
}

/** aggregate fields of "stg_sets" */
export type Stg_Sets_Aggregate_Fields = {
  __typename?: 'stg_sets_aggregate_fields'
  avg?: Maybe<Stg_Sets_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Stg_Sets_Max_Fields>
  min?: Maybe<Stg_Sets_Min_Fields>
  stddev?: Maybe<Stg_Sets_Stddev_Fields>
  stddev_pop?: Maybe<Stg_Sets_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Stg_Sets_Stddev_Samp_Fields>
  sum?: Maybe<Stg_Sets_Sum_Fields>
  var_pop?: Maybe<Stg_Sets_Var_Pop_Fields>
  var_samp?: Maybe<Stg_Sets_Var_Samp_Fields>
  variance?: Maybe<Stg_Sets_Variance_Fields>
}

/** aggregate fields of "stg_sets" */
export type Stg_Sets_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Stg_Sets_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "stg_sets" */
export type Stg_Sets_Aggregate_Order_By = {
  avg?: Maybe<Stg_Sets_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Stg_Sets_Max_Order_By>
  min?: Maybe<Stg_Sets_Min_Order_By>
  stddev?: Maybe<Stg_Sets_Stddev_Order_By>
  stddev_pop?: Maybe<Stg_Sets_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Stg_Sets_Stddev_Samp_Order_By>
  sum?: Maybe<Stg_Sets_Sum_Order_By>
  var_pop?: Maybe<Stg_Sets_Var_Pop_Order_By>
  var_samp?: Maybe<Stg_Sets_Var_Samp_Order_By>
  variance?: Maybe<Stg_Sets_Variance_Order_By>
}

/** input type for inserting array relation for remote table "stg_sets" */
export type Stg_Sets_Arr_Rel_Insert_Input = {
  data: Array<Stg_Sets_Insert_Input>
  /** on conflict condition */
  on_conflict?: Maybe<Stg_Sets_On_Conflict>
}

/** aggregate avg on columns */
export type Stg_Sets_Avg_Fields = {
  __typename?: 'stg_sets_avg_fields'
  id?: Maybe<Scalars['Float']>
  set_by_id?: Maybe<Scalars['Float']>
  stg_id?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "stg_sets" */
export type Stg_Sets_Avg_Order_By = {
  id?: Maybe<Order_By>
  set_by_id?: Maybe<Order_By>
  stg_id?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "stg_sets". All fields are combined with a logical 'AND'. */
export type Stg_Sets_Bool_Exp = {
  _and?: Maybe<Array<Stg_Sets_Bool_Exp>>
  _not?: Maybe<Stg_Sets_Bool_Exp>
  _or?: Maybe<Array<Stg_Sets_Bool_Exp>>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  id?: Maybe<Int_Comparison_Exp>
  instructions?: Maybe<String_Comparison_Exp>
  likes?: Maybe<Likes_Stg_Set_User_Bool_Exp>
  messages?: Maybe<Stg_Set_Messages_Bool_Exp>
  set_by?: Maybe<Users_Bool_Exp>
  set_by_id?: Maybe<Int_Comparison_Exp>
  stg?: Maybe<Stgs_Bool_Exp>
  stg_id?: Maybe<Int_Comparison_Exp>
  submissions_where_landed?: Maybe<Stg_Submissions_Bool_Exp>
  title?: Maybe<String_Comparison_Exp>
  updated_at?: Maybe<Timestamptz_Comparison_Exp>
  video_asset_id?: Maybe<String_Comparison_Exp>
  video_asset_status?: Maybe<String_Comparison_Exp>
  video_playback_id?: Maybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "stg_sets" */
export enum Stg_Sets_Constraint {
  /** unique or primary key constraint */
  StgSetsPkey = 'stg_sets_pkey',
  /** unique or primary key constraint */
  StgSetsRnKey = 'stg_sets_rn_key',
}

/** input type for incrementing numeric columns in table "stg_sets" */
export type Stg_Sets_Inc_Input = {
  id?: Maybe<Scalars['Int']>
  set_by_id?: Maybe<Scalars['Int']>
  stg_id?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "stg_sets" */
export type Stg_Sets_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  instructions?: Maybe<Scalars['String']>
  likes?: Maybe<Likes_Stg_Set_User_Arr_Rel_Insert_Input>
  messages?: Maybe<Stg_Set_Messages_Arr_Rel_Insert_Input>
  set_by?: Maybe<Users_Obj_Rel_Insert_Input>
  set_by_id?: Maybe<Scalars['Int']>
  stg?: Maybe<Stgs_Obj_Rel_Insert_Input>
  stg_id?: Maybe<Scalars['Int']>
  submissions_where_landed?: Maybe<Stg_Submissions_Arr_Rel_Insert_Input>
  title?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
  video_asset_id?: Maybe<Scalars['String']>
  video_asset_status?: Maybe<Scalars['String']>
  video_playback_id?: Maybe<Scalars['String']>
}

/** aggregate max on columns */
export type Stg_Sets_Max_Fields = {
  __typename?: 'stg_sets_max_fields'
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  instructions?: Maybe<Scalars['String']>
  set_by_id?: Maybe<Scalars['Int']>
  stg_id?: Maybe<Scalars['Int']>
  title?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
  video_asset_id?: Maybe<Scalars['String']>
  video_asset_status?: Maybe<Scalars['String']>
  video_playback_id?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "stg_sets" */
export type Stg_Sets_Max_Order_By = {
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  instructions?: Maybe<Order_By>
  set_by_id?: Maybe<Order_By>
  stg_id?: Maybe<Order_By>
  title?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  video_asset_id?: Maybe<Order_By>
  video_asset_status?: Maybe<Order_By>
  video_playback_id?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Stg_Sets_Min_Fields = {
  __typename?: 'stg_sets_min_fields'
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  instructions?: Maybe<Scalars['String']>
  set_by_id?: Maybe<Scalars['Int']>
  stg_id?: Maybe<Scalars['Int']>
  title?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
  video_asset_id?: Maybe<Scalars['String']>
  video_asset_status?: Maybe<Scalars['String']>
  video_playback_id?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "stg_sets" */
export type Stg_Sets_Min_Order_By = {
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  instructions?: Maybe<Order_By>
  set_by_id?: Maybe<Order_By>
  stg_id?: Maybe<Order_By>
  title?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  video_asset_id?: Maybe<Order_By>
  video_asset_status?: Maybe<Order_By>
  video_playback_id?: Maybe<Order_By>
}

/** response of any mutation on the table "stg_sets" */
export type Stg_Sets_Mutation_Response = {
  __typename?: 'stg_sets_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Stg_Sets>
}

/** input type for inserting object relation for remote table "stg_sets" */
export type Stg_Sets_Obj_Rel_Insert_Input = {
  data: Stg_Sets_Insert_Input
  /** on conflict condition */
  on_conflict?: Maybe<Stg_Sets_On_Conflict>
}

/** on conflict condition type for table "stg_sets" */
export type Stg_Sets_On_Conflict = {
  constraint: Stg_Sets_Constraint
  update_columns?: Array<Stg_Sets_Update_Column>
  where?: Maybe<Stg_Sets_Bool_Exp>
}

/** Ordering options when selecting data from "stg_sets". */
export type Stg_Sets_Order_By = {
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  instructions?: Maybe<Order_By>
  likes_aggregate?: Maybe<Likes_Stg_Set_User_Aggregate_Order_By>
  messages_aggregate?: Maybe<Stg_Set_Messages_Aggregate_Order_By>
  set_by?: Maybe<Users_Order_By>
  set_by_id?: Maybe<Order_By>
  stg?: Maybe<Stgs_Order_By>
  stg_id?: Maybe<Order_By>
  submissions_where_landed_aggregate?: Maybe<Stg_Submissions_Aggregate_Order_By>
  title?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  video_asset_id?: Maybe<Order_By>
  video_asset_status?: Maybe<Order_By>
  video_playback_id?: Maybe<Order_By>
}

/** primary key columns input for table: stg_sets */
export type Stg_Sets_Pk_Columns_Input = {
  id: Scalars['Int']
}

/** select columns of table "stg_sets" */
export enum Stg_Sets_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Instructions = 'instructions',
  /** column name */
  SetById = 'set_by_id',
  /** column name */
  StgId = 'stg_id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  VideoAssetId = 'video_asset_id',
  /** column name */
  VideoAssetStatus = 'video_asset_status',
  /** column name */
  VideoPlaybackId = 'video_playback_id',
}

/** input type for updating data in table "stg_sets" */
export type Stg_Sets_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  instructions?: Maybe<Scalars['String']>
  set_by_id?: Maybe<Scalars['Int']>
  stg_id?: Maybe<Scalars['Int']>
  title?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
  video_asset_id?: Maybe<Scalars['String']>
  video_asset_status?: Maybe<Scalars['String']>
  video_playback_id?: Maybe<Scalars['String']>
}

/** aggregate stddev on columns */
export type Stg_Sets_Stddev_Fields = {
  __typename?: 'stg_sets_stddev_fields'
  id?: Maybe<Scalars['Float']>
  set_by_id?: Maybe<Scalars['Float']>
  stg_id?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "stg_sets" */
export type Stg_Sets_Stddev_Order_By = {
  id?: Maybe<Order_By>
  set_by_id?: Maybe<Order_By>
  stg_id?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Stg_Sets_Stddev_Pop_Fields = {
  __typename?: 'stg_sets_stddev_pop_fields'
  id?: Maybe<Scalars['Float']>
  set_by_id?: Maybe<Scalars['Float']>
  stg_id?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "stg_sets" */
export type Stg_Sets_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>
  set_by_id?: Maybe<Order_By>
  stg_id?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Stg_Sets_Stddev_Samp_Fields = {
  __typename?: 'stg_sets_stddev_samp_fields'
  id?: Maybe<Scalars['Float']>
  set_by_id?: Maybe<Scalars['Float']>
  stg_id?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "stg_sets" */
export type Stg_Sets_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>
  set_by_id?: Maybe<Order_By>
  stg_id?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Stg_Sets_Sum_Fields = {
  __typename?: 'stg_sets_sum_fields'
  id?: Maybe<Scalars['Int']>
  set_by_id?: Maybe<Scalars['Int']>
  stg_id?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "stg_sets" */
export type Stg_Sets_Sum_Order_By = {
  id?: Maybe<Order_By>
  set_by_id?: Maybe<Order_By>
  stg_id?: Maybe<Order_By>
}

/** update columns of table "stg_sets" */
export enum Stg_Sets_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Instructions = 'instructions',
  /** column name */
  SetById = 'set_by_id',
  /** column name */
  StgId = 'stg_id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  VideoAssetId = 'video_asset_id',
  /** column name */
  VideoAssetStatus = 'video_asset_status',
  /** column name */
  VideoPlaybackId = 'video_playback_id',
}

/** aggregate var_pop on columns */
export type Stg_Sets_Var_Pop_Fields = {
  __typename?: 'stg_sets_var_pop_fields'
  id?: Maybe<Scalars['Float']>
  set_by_id?: Maybe<Scalars['Float']>
  stg_id?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "stg_sets" */
export type Stg_Sets_Var_Pop_Order_By = {
  id?: Maybe<Order_By>
  set_by_id?: Maybe<Order_By>
  stg_id?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Stg_Sets_Var_Samp_Fields = {
  __typename?: 'stg_sets_var_samp_fields'
  id?: Maybe<Scalars['Float']>
  set_by_id?: Maybe<Scalars['Float']>
  stg_id?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "stg_sets" */
export type Stg_Sets_Var_Samp_Order_By = {
  id?: Maybe<Order_By>
  set_by_id?: Maybe<Order_By>
  stg_id?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Stg_Sets_Variance_Fields = {
  __typename?: 'stg_sets_variance_fields'
  id?: Maybe<Scalars['Float']>
  set_by_id?: Maybe<Scalars['Float']>
  stg_id?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "stg_sets" */
export type Stg_Sets_Variance_Order_By = {
  id?: Maybe<Order_By>
  set_by_id?: Maybe<Order_By>
  stg_id?: Maybe<Order_By>
}

/** columns and relationships of "stg_submission_messages" */
export type Stg_Submission_Messages = {
  __typename?: 'stg_submission_messages'
  /** An object relationship */
  author?: Maybe<Users>
  author_id?: Maybe<Scalars['Int']>
  created_at: Scalars['timestamptz']
  id: Scalars['Int']
  /** An array relationship */
  likes: Array<Likes_Stg_Submission_Message_User>
  /** An aggregate relationship */
  likes_aggregate: Likes_Stg_Submission_Message_User_Aggregate
  stg_submission_id?: Maybe<Scalars['Int']>
  /** An object relationship */
  submission?: Maybe<Stg_Submissions>
  text: Scalars['String']
  updated_at: Scalars['timestamptz']
}

/** columns and relationships of "stg_submission_messages" */
export type Stg_Submission_MessagesLikesArgs = {
  distinct_on?: Maybe<Array<Likes_Stg_Submission_Message_User_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Likes_Stg_Submission_Message_User_Order_By>>
  where?: Maybe<Likes_Stg_Submission_Message_User_Bool_Exp>
}

/** columns and relationships of "stg_submission_messages" */
export type Stg_Submission_MessagesLikes_AggregateArgs = {
  distinct_on?: Maybe<Array<Likes_Stg_Submission_Message_User_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Likes_Stg_Submission_Message_User_Order_By>>
  where?: Maybe<Likes_Stg_Submission_Message_User_Bool_Exp>
}

/** aggregated selection of "stg_submission_messages" */
export type Stg_Submission_Messages_Aggregate = {
  __typename?: 'stg_submission_messages_aggregate'
  aggregate?: Maybe<Stg_Submission_Messages_Aggregate_Fields>
  nodes: Array<Stg_Submission_Messages>
}

/** aggregate fields of "stg_submission_messages" */
export type Stg_Submission_Messages_Aggregate_Fields = {
  __typename?: 'stg_submission_messages_aggregate_fields'
  avg?: Maybe<Stg_Submission_Messages_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Stg_Submission_Messages_Max_Fields>
  min?: Maybe<Stg_Submission_Messages_Min_Fields>
  stddev?: Maybe<Stg_Submission_Messages_Stddev_Fields>
  stddev_pop?: Maybe<Stg_Submission_Messages_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Stg_Submission_Messages_Stddev_Samp_Fields>
  sum?: Maybe<Stg_Submission_Messages_Sum_Fields>
  var_pop?: Maybe<Stg_Submission_Messages_Var_Pop_Fields>
  var_samp?: Maybe<Stg_Submission_Messages_Var_Samp_Fields>
  variance?: Maybe<Stg_Submission_Messages_Variance_Fields>
}

/** aggregate fields of "stg_submission_messages" */
export type Stg_Submission_Messages_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Stg_Submission_Messages_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "stg_submission_messages" */
export type Stg_Submission_Messages_Aggregate_Order_By = {
  avg?: Maybe<Stg_Submission_Messages_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Stg_Submission_Messages_Max_Order_By>
  min?: Maybe<Stg_Submission_Messages_Min_Order_By>
  stddev?: Maybe<Stg_Submission_Messages_Stddev_Order_By>
  stddev_pop?: Maybe<Stg_Submission_Messages_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Stg_Submission_Messages_Stddev_Samp_Order_By>
  sum?: Maybe<Stg_Submission_Messages_Sum_Order_By>
  var_pop?: Maybe<Stg_Submission_Messages_Var_Pop_Order_By>
  var_samp?: Maybe<Stg_Submission_Messages_Var_Samp_Order_By>
  variance?: Maybe<Stg_Submission_Messages_Variance_Order_By>
}

/** input type for inserting array relation for remote table "stg_submission_messages" */
export type Stg_Submission_Messages_Arr_Rel_Insert_Input = {
  data: Array<Stg_Submission_Messages_Insert_Input>
  /** on conflict condition */
  on_conflict?: Maybe<Stg_Submission_Messages_On_Conflict>
}

/** aggregate avg on columns */
export type Stg_Submission_Messages_Avg_Fields = {
  __typename?: 'stg_submission_messages_avg_fields'
  author_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  stg_submission_id?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "stg_submission_messages" */
export type Stg_Submission_Messages_Avg_Order_By = {
  author_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  stg_submission_id?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "stg_submission_messages". All fields are combined with a logical 'AND'. */
export type Stg_Submission_Messages_Bool_Exp = {
  _and?: Maybe<Array<Stg_Submission_Messages_Bool_Exp>>
  _not?: Maybe<Stg_Submission_Messages_Bool_Exp>
  _or?: Maybe<Array<Stg_Submission_Messages_Bool_Exp>>
  author?: Maybe<Users_Bool_Exp>
  author_id?: Maybe<Int_Comparison_Exp>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  id?: Maybe<Int_Comparison_Exp>
  likes?: Maybe<Likes_Stg_Submission_Message_User_Bool_Exp>
  stg_submission_id?: Maybe<Int_Comparison_Exp>
  submission?: Maybe<Stg_Submissions_Bool_Exp>
  text?: Maybe<String_Comparison_Exp>
  updated_at?: Maybe<Timestamptz_Comparison_Exp>
}

/** unique or primary key constraints on table "stg_submission_messages" */
export enum Stg_Submission_Messages_Constraint {
  /** unique or primary key constraint */
  StgSubmissionMessagesPkey = 'stg_submission_messages_pkey',
  /** unique or primary key constraint */
  StgSubmissionMessagesRnKey = 'stg_submission_messages_rn_key',
}

/** input type for incrementing numeric columns in table "stg_submission_messages" */
export type Stg_Submission_Messages_Inc_Input = {
  author_id?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
  stg_submission_id?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "stg_submission_messages" */
export type Stg_Submission_Messages_Insert_Input = {
  author?: Maybe<Users_Obj_Rel_Insert_Input>
  author_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  likes?: Maybe<Likes_Stg_Submission_Message_User_Arr_Rel_Insert_Input>
  stg_submission_id?: Maybe<Scalars['Int']>
  submission?: Maybe<Stg_Submissions_Obj_Rel_Insert_Input>
  text?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregate max on columns */
export type Stg_Submission_Messages_Max_Fields = {
  __typename?: 'stg_submission_messages_max_fields'
  author_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  stg_submission_id?: Maybe<Scalars['Int']>
  text?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by max() on columns of table "stg_submission_messages" */
export type Stg_Submission_Messages_Max_Order_By = {
  author_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  stg_submission_id?: Maybe<Order_By>
  text?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Stg_Submission_Messages_Min_Fields = {
  __typename?: 'stg_submission_messages_min_fields'
  author_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  stg_submission_id?: Maybe<Scalars['Int']>
  text?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by min() on columns of table "stg_submission_messages" */
export type Stg_Submission_Messages_Min_Order_By = {
  author_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  stg_submission_id?: Maybe<Order_By>
  text?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** response of any mutation on the table "stg_submission_messages" */
export type Stg_Submission_Messages_Mutation_Response = {
  __typename?: 'stg_submission_messages_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Stg_Submission_Messages>
}

/** input type for inserting object relation for remote table "stg_submission_messages" */
export type Stg_Submission_Messages_Obj_Rel_Insert_Input = {
  data: Stg_Submission_Messages_Insert_Input
  /** on conflict condition */
  on_conflict?: Maybe<Stg_Submission_Messages_On_Conflict>
}

/** on conflict condition type for table "stg_submission_messages" */
export type Stg_Submission_Messages_On_Conflict = {
  constraint: Stg_Submission_Messages_Constraint
  update_columns?: Array<Stg_Submission_Messages_Update_Column>
  where?: Maybe<Stg_Submission_Messages_Bool_Exp>
}

/** Ordering options when selecting data from "stg_submission_messages". */
export type Stg_Submission_Messages_Order_By = {
  author?: Maybe<Users_Order_By>
  author_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  likes_aggregate?: Maybe<Likes_Stg_Submission_Message_User_Aggregate_Order_By>
  stg_submission_id?: Maybe<Order_By>
  submission?: Maybe<Stg_Submissions_Order_By>
  text?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** primary key columns input for table: stg_submission_messages */
export type Stg_Submission_Messages_Pk_Columns_Input = {
  id: Scalars['Int']
}

/** select columns of table "stg_submission_messages" */
export enum Stg_Submission_Messages_Select_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  StgSubmissionId = 'stg_submission_id',
  /** column name */
  Text = 'text',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "stg_submission_messages" */
export type Stg_Submission_Messages_Set_Input = {
  author_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  stg_submission_id?: Maybe<Scalars['Int']>
  text?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregate stddev on columns */
export type Stg_Submission_Messages_Stddev_Fields = {
  __typename?: 'stg_submission_messages_stddev_fields'
  author_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  stg_submission_id?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "stg_submission_messages" */
export type Stg_Submission_Messages_Stddev_Order_By = {
  author_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  stg_submission_id?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Stg_Submission_Messages_Stddev_Pop_Fields = {
  __typename?: 'stg_submission_messages_stddev_pop_fields'
  author_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  stg_submission_id?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "stg_submission_messages" */
export type Stg_Submission_Messages_Stddev_Pop_Order_By = {
  author_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  stg_submission_id?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Stg_Submission_Messages_Stddev_Samp_Fields = {
  __typename?: 'stg_submission_messages_stddev_samp_fields'
  author_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  stg_submission_id?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "stg_submission_messages" */
export type Stg_Submission_Messages_Stddev_Samp_Order_By = {
  author_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  stg_submission_id?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Stg_Submission_Messages_Sum_Fields = {
  __typename?: 'stg_submission_messages_sum_fields'
  author_id?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
  stg_submission_id?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "stg_submission_messages" */
export type Stg_Submission_Messages_Sum_Order_By = {
  author_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  stg_submission_id?: Maybe<Order_By>
}

/** update columns of table "stg_submission_messages" */
export enum Stg_Submission_Messages_Update_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  StgSubmissionId = 'stg_submission_id',
  /** column name */
  Text = 'text',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** aggregate var_pop on columns */
export type Stg_Submission_Messages_Var_Pop_Fields = {
  __typename?: 'stg_submission_messages_var_pop_fields'
  author_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  stg_submission_id?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "stg_submission_messages" */
export type Stg_Submission_Messages_Var_Pop_Order_By = {
  author_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  stg_submission_id?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Stg_Submission_Messages_Var_Samp_Fields = {
  __typename?: 'stg_submission_messages_var_samp_fields'
  author_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  stg_submission_id?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "stg_submission_messages" */
export type Stg_Submission_Messages_Var_Samp_Order_By = {
  author_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  stg_submission_id?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Stg_Submission_Messages_Variance_Fields = {
  __typename?: 'stg_submission_messages_variance_fields'
  author_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  stg_submission_id?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "stg_submission_messages" */
export type Stg_Submission_Messages_Variance_Order_By = {
  author_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  stg_submission_id?: Maybe<Order_By>
}

/** columns and relationships of "stg_submissions" */
export type Stg_Submissions = {
  __typename?: 'stg_submissions'
  created_at: Scalars['timestamptz']
  id: Scalars['Int']
  /** An array relationship */
  likes: Array<Likes_Stg_Submission_User>
  /** An aggregate relationship */
  likes_aggregate: Likes_Stg_Submission_User_Aggregate
  /** An array relationship */
  messages: Array<Stg_Submission_Messages>
  /** An aggregate relationship */
  messages_aggregate: Stg_Submission_Messages_Aggregate
  /** An object relationship */
  set_landed?: Maybe<Stg_Sets>
  /** An object relationship */
  stg?: Maybe<Stgs>
  stg_id?: Maybe<Scalars['Int']>
  stg_set_id?: Maybe<Scalars['Int']>
  /** An object relationship */
  submitted_by?: Maybe<Users>
  submitted_by_id?: Maybe<Scalars['Int']>
  updated_at: Scalars['timestamptz']
  video_asset_id?: Maybe<Scalars['String']>
  video_asset_status?: Maybe<Scalars['String']>
  video_playback_id?: Maybe<Scalars['String']>
}

/** columns and relationships of "stg_submissions" */
export type Stg_SubmissionsLikesArgs = {
  distinct_on?: Maybe<Array<Likes_Stg_Submission_User_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Likes_Stg_Submission_User_Order_By>>
  where?: Maybe<Likes_Stg_Submission_User_Bool_Exp>
}

/** columns and relationships of "stg_submissions" */
export type Stg_SubmissionsLikes_AggregateArgs = {
  distinct_on?: Maybe<Array<Likes_Stg_Submission_User_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Likes_Stg_Submission_User_Order_By>>
  where?: Maybe<Likes_Stg_Submission_User_Bool_Exp>
}

/** columns and relationships of "stg_submissions" */
export type Stg_SubmissionsMessagesArgs = {
  distinct_on?: Maybe<Array<Stg_Submission_Messages_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Stg_Submission_Messages_Order_By>>
  where?: Maybe<Stg_Submission_Messages_Bool_Exp>
}

/** columns and relationships of "stg_submissions" */
export type Stg_SubmissionsMessages_AggregateArgs = {
  distinct_on?: Maybe<Array<Stg_Submission_Messages_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Stg_Submission_Messages_Order_By>>
  where?: Maybe<Stg_Submission_Messages_Bool_Exp>
}

/** aggregated selection of "stg_submissions" */
export type Stg_Submissions_Aggregate = {
  __typename?: 'stg_submissions_aggregate'
  aggregate?: Maybe<Stg_Submissions_Aggregate_Fields>
  nodes: Array<Stg_Submissions>
}

/** aggregate fields of "stg_submissions" */
export type Stg_Submissions_Aggregate_Fields = {
  __typename?: 'stg_submissions_aggregate_fields'
  avg?: Maybe<Stg_Submissions_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Stg_Submissions_Max_Fields>
  min?: Maybe<Stg_Submissions_Min_Fields>
  stddev?: Maybe<Stg_Submissions_Stddev_Fields>
  stddev_pop?: Maybe<Stg_Submissions_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Stg_Submissions_Stddev_Samp_Fields>
  sum?: Maybe<Stg_Submissions_Sum_Fields>
  var_pop?: Maybe<Stg_Submissions_Var_Pop_Fields>
  var_samp?: Maybe<Stg_Submissions_Var_Samp_Fields>
  variance?: Maybe<Stg_Submissions_Variance_Fields>
}

/** aggregate fields of "stg_submissions" */
export type Stg_Submissions_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Stg_Submissions_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "stg_submissions" */
export type Stg_Submissions_Aggregate_Order_By = {
  avg?: Maybe<Stg_Submissions_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Stg_Submissions_Max_Order_By>
  min?: Maybe<Stg_Submissions_Min_Order_By>
  stddev?: Maybe<Stg_Submissions_Stddev_Order_By>
  stddev_pop?: Maybe<Stg_Submissions_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Stg_Submissions_Stddev_Samp_Order_By>
  sum?: Maybe<Stg_Submissions_Sum_Order_By>
  var_pop?: Maybe<Stg_Submissions_Var_Pop_Order_By>
  var_samp?: Maybe<Stg_Submissions_Var_Samp_Order_By>
  variance?: Maybe<Stg_Submissions_Variance_Order_By>
}

/** input type for inserting array relation for remote table "stg_submissions" */
export type Stg_Submissions_Arr_Rel_Insert_Input = {
  data: Array<Stg_Submissions_Insert_Input>
  /** on conflict condition */
  on_conflict?: Maybe<Stg_Submissions_On_Conflict>
}

/** aggregate avg on columns */
export type Stg_Submissions_Avg_Fields = {
  __typename?: 'stg_submissions_avg_fields'
  id?: Maybe<Scalars['Float']>
  stg_id?: Maybe<Scalars['Float']>
  stg_set_id?: Maybe<Scalars['Float']>
  submitted_by_id?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "stg_submissions" */
export type Stg_Submissions_Avg_Order_By = {
  id?: Maybe<Order_By>
  stg_id?: Maybe<Order_By>
  stg_set_id?: Maybe<Order_By>
  submitted_by_id?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "stg_submissions". All fields are combined with a logical 'AND'. */
export type Stg_Submissions_Bool_Exp = {
  _and?: Maybe<Array<Stg_Submissions_Bool_Exp>>
  _not?: Maybe<Stg_Submissions_Bool_Exp>
  _or?: Maybe<Array<Stg_Submissions_Bool_Exp>>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  id?: Maybe<Int_Comparison_Exp>
  likes?: Maybe<Likes_Stg_Submission_User_Bool_Exp>
  messages?: Maybe<Stg_Submission_Messages_Bool_Exp>
  set_landed?: Maybe<Stg_Sets_Bool_Exp>
  stg?: Maybe<Stgs_Bool_Exp>
  stg_id?: Maybe<Int_Comparison_Exp>
  stg_set_id?: Maybe<Int_Comparison_Exp>
  submitted_by?: Maybe<Users_Bool_Exp>
  submitted_by_id?: Maybe<Int_Comparison_Exp>
  updated_at?: Maybe<Timestamptz_Comparison_Exp>
  video_asset_id?: Maybe<String_Comparison_Exp>
  video_asset_status?: Maybe<String_Comparison_Exp>
  video_playback_id?: Maybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "stg_submissions" */
export enum Stg_Submissions_Constraint {
  /** unique or primary key constraint */
  StgSubmissionsPkey = 'stg_submissions_pkey',
  /** unique or primary key constraint */
  StgSubmissionsRnKey = 'stg_submissions_rn_key',
}

/** input type for incrementing numeric columns in table "stg_submissions" */
export type Stg_Submissions_Inc_Input = {
  id?: Maybe<Scalars['Int']>
  stg_id?: Maybe<Scalars['Int']>
  stg_set_id?: Maybe<Scalars['Int']>
  submitted_by_id?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "stg_submissions" */
export type Stg_Submissions_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  likes?: Maybe<Likes_Stg_Submission_User_Arr_Rel_Insert_Input>
  messages?: Maybe<Stg_Submission_Messages_Arr_Rel_Insert_Input>
  set_landed?: Maybe<Stg_Sets_Obj_Rel_Insert_Input>
  stg?: Maybe<Stgs_Obj_Rel_Insert_Input>
  stg_id?: Maybe<Scalars['Int']>
  stg_set_id?: Maybe<Scalars['Int']>
  submitted_by?: Maybe<Users_Obj_Rel_Insert_Input>
  submitted_by_id?: Maybe<Scalars['Int']>
  updated_at?: Maybe<Scalars['timestamptz']>
  video_asset_id?: Maybe<Scalars['String']>
  video_asset_status?: Maybe<Scalars['String']>
  video_playback_id?: Maybe<Scalars['String']>
}

/** aggregate max on columns */
export type Stg_Submissions_Max_Fields = {
  __typename?: 'stg_submissions_max_fields'
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  stg_id?: Maybe<Scalars['Int']>
  stg_set_id?: Maybe<Scalars['Int']>
  submitted_by_id?: Maybe<Scalars['Int']>
  updated_at?: Maybe<Scalars['timestamptz']>
  video_asset_id?: Maybe<Scalars['String']>
  video_asset_status?: Maybe<Scalars['String']>
  video_playback_id?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "stg_submissions" */
export type Stg_Submissions_Max_Order_By = {
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  stg_id?: Maybe<Order_By>
  stg_set_id?: Maybe<Order_By>
  submitted_by_id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  video_asset_id?: Maybe<Order_By>
  video_asset_status?: Maybe<Order_By>
  video_playback_id?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Stg_Submissions_Min_Fields = {
  __typename?: 'stg_submissions_min_fields'
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  stg_id?: Maybe<Scalars['Int']>
  stg_set_id?: Maybe<Scalars['Int']>
  submitted_by_id?: Maybe<Scalars['Int']>
  updated_at?: Maybe<Scalars['timestamptz']>
  video_asset_id?: Maybe<Scalars['String']>
  video_asset_status?: Maybe<Scalars['String']>
  video_playback_id?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "stg_submissions" */
export type Stg_Submissions_Min_Order_By = {
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  stg_id?: Maybe<Order_By>
  stg_set_id?: Maybe<Order_By>
  submitted_by_id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  video_asset_id?: Maybe<Order_By>
  video_asset_status?: Maybe<Order_By>
  video_playback_id?: Maybe<Order_By>
}

/** response of any mutation on the table "stg_submissions" */
export type Stg_Submissions_Mutation_Response = {
  __typename?: 'stg_submissions_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Stg_Submissions>
}

/** input type for inserting object relation for remote table "stg_submissions" */
export type Stg_Submissions_Obj_Rel_Insert_Input = {
  data: Stg_Submissions_Insert_Input
  /** on conflict condition */
  on_conflict?: Maybe<Stg_Submissions_On_Conflict>
}

/** on conflict condition type for table "stg_submissions" */
export type Stg_Submissions_On_Conflict = {
  constraint: Stg_Submissions_Constraint
  update_columns?: Array<Stg_Submissions_Update_Column>
  where?: Maybe<Stg_Submissions_Bool_Exp>
}

/** Ordering options when selecting data from "stg_submissions". */
export type Stg_Submissions_Order_By = {
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  likes_aggregate?: Maybe<Likes_Stg_Submission_User_Aggregate_Order_By>
  messages_aggregate?: Maybe<Stg_Submission_Messages_Aggregate_Order_By>
  set_landed?: Maybe<Stg_Sets_Order_By>
  stg?: Maybe<Stgs_Order_By>
  stg_id?: Maybe<Order_By>
  stg_set_id?: Maybe<Order_By>
  submitted_by?: Maybe<Users_Order_By>
  submitted_by_id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  video_asset_id?: Maybe<Order_By>
  video_asset_status?: Maybe<Order_By>
  video_playback_id?: Maybe<Order_By>
}

/** primary key columns input for table: stg_submissions */
export type Stg_Submissions_Pk_Columns_Input = {
  id: Scalars['Int']
}

/** select columns of table "stg_submissions" */
export enum Stg_Submissions_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  StgId = 'stg_id',
  /** column name */
  StgSetId = 'stg_set_id',
  /** column name */
  SubmittedById = 'submitted_by_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  VideoAssetId = 'video_asset_id',
  /** column name */
  VideoAssetStatus = 'video_asset_status',
  /** column name */
  VideoPlaybackId = 'video_playback_id',
}

/** input type for updating data in table "stg_submissions" */
export type Stg_Submissions_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  stg_id?: Maybe<Scalars['Int']>
  stg_set_id?: Maybe<Scalars['Int']>
  submitted_by_id?: Maybe<Scalars['Int']>
  updated_at?: Maybe<Scalars['timestamptz']>
  video_asset_id?: Maybe<Scalars['String']>
  video_asset_status?: Maybe<Scalars['String']>
  video_playback_id?: Maybe<Scalars['String']>
}

/** aggregate stddev on columns */
export type Stg_Submissions_Stddev_Fields = {
  __typename?: 'stg_submissions_stddev_fields'
  id?: Maybe<Scalars['Float']>
  stg_id?: Maybe<Scalars['Float']>
  stg_set_id?: Maybe<Scalars['Float']>
  submitted_by_id?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "stg_submissions" */
export type Stg_Submissions_Stddev_Order_By = {
  id?: Maybe<Order_By>
  stg_id?: Maybe<Order_By>
  stg_set_id?: Maybe<Order_By>
  submitted_by_id?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Stg_Submissions_Stddev_Pop_Fields = {
  __typename?: 'stg_submissions_stddev_pop_fields'
  id?: Maybe<Scalars['Float']>
  stg_id?: Maybe<Scalars['Float']>
  stg_set_id?: Maybe<Scalars['Float']>
  submitted_by_id?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "stg_submissions" */
export type Stg_Submissions_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>
  stg_id?: Maybe<Order_By>
  stg_set_id?: Maybe<Order_By>
  submitted_by_id?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Stg_Submissions_Stddev_Samp_Fields = {
  __typename?: 'stg_submissions_stddev_samp_fields'
  id?: Maybe<Scalars['Float']>
  stg_id?: Maybe<Scalars['Float']>
  stg_set_id?: Maybe<Scalars['Float']>
  submitted_by_id?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "stg_submissions" */
export type Stg_Submissions_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>
  stg_id?: Maybe<Order_By>
  stg_set_id?: Maybe<Order_By>
  submitted_by_id?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Stg_Submissions_Sum_Fields = {
  __typename?: 'stg_submissions_sum_fields'
  id?: Maybe<Scalars['Int']>
  stg_id?: Maybe<Scalars['Int']>
  stg_set_id?: Maybe<Scalars['Int']>
  submitted_by_id?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "stg_submissions" */
export type Stg_Submissions_Sum_Order_By = {
  id?: Maybe<Order_By>
  stg_id?: Maybe<Order_By>
  stg_set_id?: Maybe<Order_By>
  submitted_by_id?: Maybe<Order_By>
}

/** update columns of table "stg_submissions" */
export enum Stg_Submissions_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  StgId = 'stg_id',
  /** column name */
  StgSetId = 'stg_set_id',
  /** column name */
  SubmittedById = 'submitted_by_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  VideoAssetId = 'video_asset_id',
  /** column name */
  VideoAssetStatus = 'video_asset_status',
  /** column name */
  VideoPlaybackId = 'video_playback_id',
}

/** aggregate var_pop on columns */
export type Stg_Submissions_Var_Pop_Fields = {
  __typename?: 'stg_submissions_var_pop_fields'
  id?: Maybe<Scalars['Float']>
  stg_id?: Maybe<Scalars['Float']>
  stg_set_id?: Maybe<Scalars['Float']>
  submitted_by_id?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "stg_submissions" */
export type Stg_Submissions_Var_Pop_Order_By = {
  id?: Maybe<Order_By>
  stg_id?: Maybe<Order_By>
  stg_set_id?: Maybe<Order_By>
  submitted_by_id?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Stg_Submissions_Var_Samp_Fields = {
  __typename?: 'stg_submissions_var_samp_fields'
  id?: Maybe<Scalars['Float']>
  stg_id?: Maybe<Scalars['Float']>
  stg_set_id?: Maybe<Scalars['Float']>
  submitted_by_id?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "stg_submissions" */
export type Stg_Submissions_Var_Samp_Order_By = {
  id?: Maybe<Order_By>
  stg_id?: Maybe<Order_By>
  stg_set_id?: Maybe<Order_By>
  submitted_by_id?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Stg_Submissions_Variance_Fields = {
  __typename?: 'stg_submissions_variance_fields'
  id?: Maybe<Scalars['Float']>
  stg_id?: Maybe<Scalars['Float']>
  stg_set_id?: Maybe<Scalars['Float']>
  submitted_by_id?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "stg_submissions" */
export type Stg_Submissions_Variance_Order_By = {
  id?: Maybe<Order_By>
  stg_id?: Maybe<Order_By>
  stg_set_id?: Maybe<Order_By>
  submitted_by_id?: Maybe<Order_By>
}

/** columns and relationships of "stgs" */
export type Stgs = {
  __typename?: 'stgs'
  created_at: Scalars['timestamptz']
  id: Scalars['Int']
  /** An array relationship */
  players: Array<Stg_Players>
  /** An aggregate relationship */
  players_aggregate: Stg_Players_Aggregate
  /** An array relationship */
  sets: Array<Stg_Sets>
  /** An aggregate relationship */
  sets_aggregate: Stg_Sets_Aggregate
  status: E_Stg_Statuses_Enum
  /** An array relationship */
  submissions: Array<Stg_Submissions>
  /** An aggregate relationship */
  submissions_aggregate: Stg_Submissions_Aggregate
  updated_at: Scalars['timestamptz']
}

/** columns and relationships of "stgs" */
export type StgsPlayersArgs = {
  distinct_on?: Maybe<Array<Stg_Players_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Stg_Players_Order_By>>
  where?: Maybe<Stg_Players_Bool_Exp>
}

/** columns and relationships of "stgs" */
export type StgsPlayers_AggregateArgs = {
  distinct_on?: Maybe<Array<Stg_Players_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Stg_Players_Order_By>>
  where?: Maybe<Stg_Players_Bool_Exp>
}

/** columns and relationships of "stgs" */
export type StgsSetsArgs = {
  distinct_on?: Maybe<Array<Stg_Sets_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Stg_Sets_Order_By>>
  where?: Maybe<Stg_Sets_Bool_Exp>
}

/** columns and relationships of "stgs" */
export type StgsSets_AggregateArgs = {
  distinct_on?: Maybe<Array<Stg_Sets_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Stg_Sets_Order_By>>
  where?: Maybe<Stg_Sets_Bool_Exp>
}

/** columns and relationships of "stgs" */
export type StgsSubmissionsArgs = {
  distinct_on?: Maybe<Array<Stg_Submissions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Stg_Submissions_Order_By>>
  where?: Maybe<Stg_Submissions_Bool_Exp>
}

/** columns and relationships of "stgs" */
export type StgsSubmissions_AggregateArgs = {
  distinct_on?: Maybe<Array<Stg_Submissions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Stg_Submissions_Order_By>>
  where?: Maybe<Stg_Submissions_Bool_Exp>
}

/** aggregated selection of "stgs" */
export type Stgs_Aggregate = {
  __typename?: 'stgs_aggregate'
  aggregate?: Maybe<Stgs_Aggregate_Fields>
  nodes: Array<Stgs>
}

/** aggregate fields of "stgs" */
export type Stgs_Aggregate_Fields = {
  __typename?: 'stgs_aggregate_fields'
  avg?: Maybe<Stgs_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Stgs_Max_Fields>
  min?: Maybe<Stgs_Min_Fields>
  stddev?: Maybe<Stgs_Stddev_Fields>
  stddev_pop?: Maybe<Stgs_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Stgs_Stddev_Samp_Fields>
  sum?: Maybe<Stgs_Sum_Fields>
  var_pop?: Maybe<Stgs_Var_Pop_Fields>
  var_samp?: Maybe<Stgs_Var_Samp_Fields>
  variance?: Maybe<Stgs_Variance_Fields>
}

/** aggregate fields of "stgs" */
export type Stgs_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Stgs_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type Stgs_Avg_Fields = {
  __typename?: 'stgs_avg_fields'
  id?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "stgs". All fields are combined with a logical 'AND'. */
export type Stgs_Bool_Exp = {
  _and?: Maybe<Array<Stgs_Bool_Exp>>
  _not?: Maybe<Stgs_Bool_Exp>
  _or?: Maybe<Array<Stgs_Bool_Exp>>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  id?: Maybe<Int_Comparison_Exp>
  players?: Maybe<Stg_Players_Bool_Exp>
  sets?: Maybe<Stg_Sets_Bool_Exp>
  status?: Maybe<E_Stg_Statuses_Enum_Comparison_Exp>
  submissions?: Maybe<Stg_Submissions_Bool_Exp>
  updated_at?: Maybe<Timestamptz_Comparison_Exp>
}

/** unique or primary key constraints on table "stgs" */
export enum Stgs_Constraint {
  /** unique or primary key constraint */
  StgsPkey = 'stgs_pkey',
  /** unique or primary key constraint */
  StgsRnKey = 'stgs_rn_key',
}

/** input type for incrementing numeric columns in table "stgs" */
export type Stgs_Inc_Input = {
  id?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "stgs" */
export type Stgs_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  players?: Maybe<Stg_Players_Arr_Rel_Insert_Input>
  sets?: Maybe<Stg_Sets_Arr_Rel_Insert_Input>
  status?: Maybe<E_Stg_Statuses_Enum>
  submissions?: Maybe<Stg_Submissions_Arr_Rel_Insert_Input>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregate max on columns */
export type Stgs_Max_Fields = {
  __typename?: 'stgs_max_fields'
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregate min on columns */
export type Stgs_Min_Fields = {
  __typename?: 'stgs_min_fields'
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** response of any mutation on the table "stgs" */
export type Stgs_Mutation_Response = {
  __typename?: 'stgs_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Stgs>
}

/** input type for inserting object relation for remote table "stgs" */
export type Stgs_Obj_Rel_Insert_Input = {
  data: Stgs_Insert_Input
  /** on conflict condition */
  on_conflict?: Maybe<Stgs_On_Conflict>
}

/** on conflict condition type for table "stgs" */
export type Stgs_On_Conflict = {
  constraint: Stgs_Constraint
  update_columns?: Array<Stgs_Update_Column>
  where?: Maybe<Stgs_Bool_Exp>
}

/** Ordering options when selecting data from "stgs". */
export type Stgs_Order_By = {
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  players_aggregate?: Maybe<Stg_Players_Aggregate_Order_By>
  sets_aggregate?: Maybe<Stg_Sets_Aggregate_Order_By>
  status?: Maybe<Order_By>
  submissions_aggregate?: Maybe<Stg_Submissions_Aggregate_Order_By>
  updated_at?: Maybe<Order_By>
}

/** primary key columns input for table: stgs */
export type Stgs_Pk_Columns_Input = {
  id: Scalars['Int']
}

/** select columns of table "stgs" */
export enum Stgs_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "stgs" */
export type Stgs_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  status?: Maybe<E_Stg_Statuses_Enum>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregate stddev on columns */
export type Stgs_Stddev_Fields = {
  __typename?: 'stgs_stddev_fields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type Stgs_Stddev_Pop_Fields = {
  __typename?: 'stgs_stddev_pop_fields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type Stgs_Stddev_Samp_Fields = {
  __typename?: 'stgs_stddev_samp_fields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate sum on columns */
export type Stgs_Sum_Fields = {
  __typename?: 'stgs_sum_fields'
  id?: Maybe<Scalars['Int']>
}

/** update columns of table "stgs" */
export enum Stgs_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** aggregate var_pop on columns */
export type Stgs_Var_Pop_Fields = {
  __typename?: 'stgs_var_pop_fields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type Stgs_Var_Samp_Fields = {
  __typename?: 'stgs_var_samp_fields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type Stgs_Variance_Fields = {
  __typename?: 'stgs_variance_fields'
  id?: Maybe<Scalars['Float']>
}

export type Subscription_Root = {
  __typename?: 'subscription_root'
  /** An array relationship */
  chat_messages: Array<Chat_Messages>
  /** An aggregate relationship */
  chat_messages_aggregate: Chat_Messages_Aggregate
  /** fetch data from the table: "chat_messages" using primary key columns */
  chat_messages_by_pk?: Maybe<Chat_Messages>
  /** fetch data from the table: "e_post_tags" */
  e_post_tags: Array<E_Post_Tags>
  /** fetch aggregated fields from the table: "e_post_tags" */
  e_post_tags_aggregate: E_Post_Tags_Aggregate
  /** fetch data from the table: "e_post_tags" using primary key columns */
  e_post_tags_by_pk?: Maybe<E_Post_Tags>
  /** fetch data from the table: "e_stg_statuses" */
  e_stg_statuses: Array<E_Stg_Statuses>
  /** fetch aggregated fields from the table: "e_stg_statuses" */
  e_stg_statuses_aggregate: E_Stg_Statuses_Aggregate
  /** fetch data from the table: "e_stg_statuses" using primary key columns */
  e_stg_statuses_by_pk?: Maybe<E_Stg_Statuses>
  /** fetch data from the table: "e_user_disciplines" */
  e_user_disciplines: Array<E_User_Disciplines>
  /** fetch aggregated fields from the table: "e_user_disciplines" */
  e_user_disciplines_aggregate: E_User_Disciplines_Aggregate
  /** fetch data from the table: "e_user_disciplines" using primary key columns */
  e_user_disciplines_by_pk?: Maybe<E_User_Disciplines>
  /** fetch data from the table: "e_user_locations" */
  e_user_locations: Array<E_User_Locations>
  /** fetch aggregated fields from the table: "e_user_locations" */
  e_user_locations_aggregate: E_User_Locations_Aggregate
  /** fetch data from the table: "e_user_locations" using primary key columns */
  e_user_locations_by_pk?: Maybe<E_User_Locations>
  /** fetch data from the table: "e_user_roles" */
  e_user_roles: Array<E_User_Roles>
  /** fetch aggregated fields from the table: "e_user_roles" */
  e_user_roles_aggregate: E_User_Roles_Aggregate
  /** fetch data from the table: "e_user_roles" using primary key columns */
  e_user_roles_by_pk?: Maybe<E_User_Roles>
  /** fetch data from the table: "likes_chat_message_user" */
  likes_chat_message_user: Array<Likes_Chat_Message_User>
  /** fetch aggregated fields from the table: "likes_chat_message_user" */
  likes_chat_message_user_aggregate: Likes_Chat_Message_User_Aggregate
  /** fetch data from the table: "likes_chat_message_user" using primary key columns */
  likes_chat_message_user_by_pk?: Maybe<Likes_Chat_Message_User>
  /** fetch data from the table: "likes_post_message_user" */
  likes_post_message_user: Array<Likes_Post_Message_User>
  /** fetch aggregated fields from the table: "likes_post_message_user" */
  likes_post_message_user_aggregate: Likes_Post_Message_User_Aggregate
  /** fetch data from the table: "likes_post_message_user" using primary key columns */
  likes_post_message_user_by_pk?: Maybe<Likes_Post_Message_User>
  /** fetch data from the table: "likes_post_user" */
  likes_post_user: Array<Likes_Post_User>
  /** fetch aggregated fields from the table: "likes_post_user" */
  likes_post_user_aggregate: Likes_Post_User_Aggregate
  /** fetch data from the table: "likes_post_user" using primary key columns */
  likes_post_user_by_pk?: Maybe<Likes_Post_User>
  /** fetch data from the table: "likes_stg_set_message_user" */
  likes_stg_set_message_user: Array<Likes_Stg_Set_Message_User>
  /** fetch aggregated fields from the table: "likes_stg_set_message_user" */
  likes_stg_set_message_user_aggregate: Likes_Stg_Set_Message_User_Aggregate
  /** fetch data from the table: "likes_stg_set_message_user" using primary key columns */
  likes_stg_set_message_user_by_pk?: Maybe<Likes_Stg_Set_Message_User>
  /** fetch data from the table: "likes_stg_set_user" */
  likes_stg_set_user: Array<Likes_Stg_Set_User>
  /** fetch aggregated fields from the table: "likes_stg_set_user" */
  likes_stg_set_user_aggregate: Likes_Stg_Set_User_Aggregate
  /** fetch data from the table: "likes_stg_set_user" using primary key columns */
  likes_stg_set_user_by_pk?: Maybe<Likes_Stg_Set_User>
  /** fetch data from the table: "likes_stg_submission_message_user" */
  likes_stg_submission_message_user: Array<Likes_Stg_Submission_Message_User>
  /** fetch aggregated fields from the table: "likes_stg_submission_message_user" */
  likes_stg_submission_message_user_aggregate: Likes_Stg_Submission_Message_User_Aggregate
  /** fetch data from the table: "likes_stg_submission_message_user" using primary key columns */
  likes_stg_submission_message_user_by_pk?: Maybe<Likes_Stg_Submission_Message_User>
  /** fetch data from the table: "likes_stg_submission_user" */
  likes_stg_submission_user: Array<Likes_Stg_Submission_User>
  /** fetch aggregated fields from the table: "likes_stg_submission_user" */
  likes_stg_submission_user_aggregate: Likes_Stg_Submission_User_Aggregate
  /** fetch data from the table: "likes_stg_submission_user" using primary key columns */
  likes_stg_submission_user_by_pk?: Maybe<Likes_Stg_Submission_User>
  /** fetch data from the table: "likes_user_user" */
  likes_user_user: Array<Likes_User_User>
  /** fetch aggregated fields from the table: "likes_user_user" */
  likes_user_user_aggregate: Likes_User_User_Aggregate
  /** fetch data from the table: "likes_user_user" using primary key columns */
  likes_user_user_by_pk?: Maybe<Likes_User_User>
  /** fetch data from the table: "post_messages" */
  post_messages: Array<Post_Messages>
  /** fetch aggregated fields from the table: "post_messages" */
  post_messages_aggregate: Post_Messages_Aggregate
  /** fetch data from the table: "post_messages" using primary key columns */
  post_messages_by_pk?: Maybe<Post_Messages>
  /** fetch data from the table: "post_tags" */
  post_tags: Array<Post_Tags>
  /** fetch aggregated fields from the table: "post_tags" */
  post_tags_aggregate: Post_Tags_Aggregate
  /** fetch data from the table: "post_tags" using primary key columns */
  post_tags_by_pk?: Maybe<Post_Tags>
  /** An array relationship */
  posts: Array<Posts>
  /** An aggregate relationship */
  posts_aggregate: Posts_Aggregate
  /** fetch data from the table: "posts" using primary key columns */
  posts_by_pk?: Maybe<Posts>
  /** An array relationship */
  refresh_tokens: Array<Refresh_Tokens>
  /** An aggregate relationship */
  refresh_tokens_aggregate: Refresh_Tokens_Aggregate
  /** fetch data from the table: "refresh_tokens" using primary key columns */
  refresh_tokens_by_pk?: Maybe<Refresh_Tokens>
  /** fetch data from the table: "stg_players" */
  stg_players: Array<Stg_Players>
  /** fetch aggregated fields from the table: "stg_players" */
  stg_players_aggregate: Stg_Players_Aggregate
  /** fetch data from the table: "stg_players" using primary key columns */
  stg_players_by_pk?: Maybe<Stg_Players>
  /** fetch data from the table: "stg_set_messages" */
  stg_set_messages: Array<Stg_Set_Messages>
  /** fetch aggregated fields from the table: "stg_set_messages" */
  stg_set_messages_aggregate: Stg_Set_Messages_Aggregate
  /** fetch data from the table: "stg_set_messages" using primary key columns */
  stg_set_messages_by_pk?: Maybe<Stg_Set_Messages>
  /** An array relationship */
  stg_sets: Array<Stg_Sets>
  /** An aggregate relationship */
  stg_sets_aggregate: Stg_Sets_Aggregate
  /** fetch data from the table: "stg_sets" using primary key columns */
  stg_sets_by_pk?: Maybe<Stg_Sets>
  /** fetch data from the table: "stg_submission_messages" */
  stg_submission_messages: Array<Stg_Submission_Messages>
  /** fetch aggregated fields from the table: "stg_submission_messages" */
  stg_submission_messages_aggregate: Stg_Submission_Messages_Aggregate
  /** fetch data from the table: "stg_submission_messages" using primary key columns */
  stg_submission_messages_by_pk?: Maybe<Stg_Submission_Messages>
  /** An array relationship */
  stg_submissions: Array<Stg_Submissions>
  /** An aggregate relationship */
  stg_submissions_aggregate: Stg_Submissions_Aggregate
  /** fetch data from the table: "stg_submissions" using primary key columns */
  stg_submissions_by_pk?: Maybe<Stg_Submissions>
  /** fetch data from the table: "stgs" */
  stgs: Array<Stgs>
  /** fetch aggregated fields from the table: "stgs" */
  stgs_aggregate: Stgs_Aggregate
  /** fetch data from the table: "stgs" using primary key columns */
  stgs_by_pk?: Maybe<Stgs>
  /** fetch data from the table: "user_activity" */
  user_activity: Array<User_Activity>
  /** fetch aggregated fields from the table: "user_activity" */
  user_activity_aggregate: User_Activity_Aggregate
  /** fetch data from the table: "user_activity" using primary key columns */
  user_activity_by_pk?: Maybe<User_Activity>
  /** An array relationship */
  user_disciplines: Array<User_Disciplines>
  /** An aggregate relationship */
  user_disciplines_aggregate: User_Disciplines_Aggregate
  /** fetch data from the table: "user_disciplines" using primary key columns */
  user_disciplines_by_pk?: Maybe<User_Disciplines>
  /** fetch data from the table: "user_locations" */
  user_locations: Array<User_Locations>
  /** fetch aggregated fields from the table: "user_locations" */
  user_locations_aggregate: User_Locations_Aggregate
  /** fetch data from the table: "user_locations" using primary key columns */
  user_locations_by_pk?: Maybe<User_Locations>
  /** fetch data from the table: "user_socials" */
  user_socials: Array<User_Socials>
  /** fetch aggregated fields from the table: "user_socials" */
  user_socials_aggregate: User_Socials_Aggregate
  /** fetch data from the table: "user_socials" using primary key columns */
  user_socials_by_pk?: Maybe<User_Socials>
  /** fetch data from the table: "users" */
  users: Array<Users>
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>
  /** fetch data from the table: "v_posts_sorted" */
  v_posts_sorted: Array<V_Posts_Sorted>
  /** fetch aggregated fields from the table: "v_posts_sorted" */
  v_posts_sorted_aggregate: V_Posts_Sorted_Aggregate
  /** fetch data from the table: "v_public_user_trick_todos" */
  v_public_user_trick_todos: Array<V_Public_User_Trick_Todos>
  /** fetch aggregated fields from the table: "v_public_user_trick_todos" */
  v_public_user_trick_todos_aggregate: V_Public_User_Trick_Todos_Aggregate
  /** fetch data from the table: "v_users_online" */
  v_users_online: Array<V_Users_Online>
  /** fetch aggregated fields from the table: "v_users_online" */
  v_users_online_aggregate: V_Users_Online_Aggregate
}

export type Subscription_RootChat_MessagesArgs = {
  distinct_on?: Maybe<Array<Chat_Messages_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Chat_Messages_Order_By>>
  where?: Maybe<Chat_Messages_Bool_Exp>
}

export type Subscription_RootChat_Messages_AggregateArgs = {
  distinct_on?: Maybe<Array<Chat_Messages_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Chat_Messages_Order_By>>
  where?: Maybe<Chat_Messages_Bool_Exp>
}

export type Subscription_RootChat_Messages_By_PkArgs = {
  id: Scalars['Int']
}

export type Subscription_RootE_Post_TagsArgs = {
  distinct_on?: Maybe<Array<E_Post_Tags_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<E_Post_Tags_Order_By>>
  where?: Maybe<E_Post_Tags_Bool_Exp>
}

export type Subscription_RootE_Post_Tags_AggregateArgs = {
  distinct_on?: Maybe<Array<E_Post_Tags_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<E_Post_Tags_Order_By>>
  where?: Maybe<E_Post_Tags_Bool_Exp>
}

export type Subscription_RootE_Post_Tags_By_PkArgs = {
  type: Scalars['String']
}

export type Subscription_RootE_Stg_StatusesArgs = {
  distinct_on?: Maybe<Array<E_Stg_Statuses_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<E_Stg_Statuses_Order_By>>
  where?: Maybe<E_Stg_Statuses_Bool_Exp>
}

export type Subscription_RootE_Stg_Statuses_AggregateArgs = {
  distinct_on?: Maybe<Array<E_Stg_Statuses_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<E_Stg_Statuses_Order_By>>
  where?: Maybe<E_Stg_Statuses_Bool_Exp>
}

export type Subscription_RootE_Stg_Statuses_By_PkArgs = {
  type: Scalars['String']
}

export type Subscription_RootE_User_DisciplinesArgs = {
  distinct_on?: Maybe<Array<E_User_Disciplines_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<E_User_Disciplines_Order_By>>
  where?: Maybe<E_User_Disciplines_Bool_Exp>
}

export type Subscription_RootE_User_Disciplines_AggregateArgs = {
  distinct_on?: Maybe<Array<E_User_Disciplines_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<E_User_Disciplines_Order_By>>
  where?: Maybe<E_User_Disciplines_Bool_Exp>
}

export type Subscription_RootE_User_Disciplines_By_PkArgs = {
  type: Scalars['String']
}

export type Subscription_RootE_User_LocationsArgs = {
  distinct_on?: Maybe<Array<E_User_Locations_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<E_User_Locations_Order_By>>
  where?: Maybe<E_User_Locations_Bool_Exp>
}

export type Subscription_RootE_User_Locations_AggregateArgs = {
  distinct_on?: Maybe<Array<E_User_Locations_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<E_User_Locations_Order_By>>
  where?: Maybe<E_User_Locations_Bool_Exp>
}

export type Subscription_RootE_User_Locations_By_PkArgs = {
  type: Scalars['String']
}

export type Subscription_RootE_User_RolesArgs = {
  distinct_on?: Maybe<Array<E_User_Roles_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<E_User_Roles_Order_By>>
  where?: Maybe<E_User_Roles_Bool_Exp>
}

export type Subscription_RootE_User_Roles_AggregateArgs = {
  distinct_on?: Maybe<Array<E_User_Roles_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<E_User_Roles_Order_By>>
  where?: Maybe<E_User_Roles_Bool_Exp>
}

export type Subscription_RootE_User_Roles_By_PkArgs = {
  type: Scalars['String']
}

export type Subscription_RootLikes_Chat_Message_UserArgs = {
  distinct_on?: Maybe<Array<Likes_Chat_Message_User_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Likes_Chat_Message_User_Order_By>>
  where?: Maybe<Likes_Chat_Message_User_Bool_Exp>
}

export type Subscription_RootLikes_Chat_Message_User_AggregateArgs = {
  distinct_on?: Maybe<Array<Likes_Chat_Message_User_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Likes_Chat_Message_User_Order_By>>
  where?: Maybe<Likes_Chat_Message_User_Bool_Exp>
}

export type Subscription_RootLikes_Chat_Message_User_By_PkArgs = {
  chat_message_id: Scalars['Int']
  liked_by_user_id: Scalars['Int']
}

export type Subscription_RootLikes_Post_Message_UserArgs = {
  distinct_on?: Maybe<Array<Likes_Post_Message_User_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Likes_Post_Message_User_Order_By>>
  where?: Maybe<Likes_Post_Message_User_Bool_Exp>
}

export type Subscription_RootLikes_Post_Message_User_AggregateArgs = {
  distinct_on?: Maybe<Array<Likes_Post_Message_User_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Likes_Post_Message_User_Order_By>>
  where?: Maybe<Likes_Post_Message_User_Bool_Exp>
}

export type Subscription_RootLikes_Post_Message_User_By_PkArgs = {
  liked_by_user_id: Scalars['Int']
  post_message_id: Scalars['Int']
}

export type Subscription_RootLikes_Post_UserArgs = {
  distinct_on?: Maybe<Array<Likes_Post_User_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Likes_Post_User_Order_By>>
  where?: Maybe<Likes_Post_User_Bool_Exp>
}

export type Subscription_RootLikes_Post_User_AggregateArgs = {
  distinct_on?: Maybe<Array<Likes_Post_User_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Likes_Post_User_Order_By>>
  where?: Maybe<Likes_Post_User_Bool_Exp>
}

export type Subscription_RootLikes_Post_User_By_PkArgs = {
  liked_by_user_id: Scalars['Int']
  post_id: Scalars['Int']
}

export type Subscription_RootLikes_Stg_Set_Message_UserArgs = {
  distinct_on?: Maybe<Array<Likes_Stg_Set_Message_User_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Likes_Stg_Set_Message_User_Order_By>>
  where?: Maybe<Likes_Stg_Set_Message_User_Bool_Exp>
}

export type Subscription_RootLikes_Stg_Set_Message_User_AggregateArgs = {
  distinct_on?: Maybe<Array<Likes_Stg_Set_Message_User_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Likes_Stg_Set_Message_User_Order_By>>
  where?: Maybe<Likes_Stg_Set_Message_User_Bool_Exp>
}

export type Subscription_RootLikes_Stg_Set_Message_User_By_PkArgs = {
  liked_by_user_id: Scalars['Int']
  stg_set_message_id: Scalars['Int']
}

export type Subscription_RootLikes_Stg_Set_UserArgs = {
  distinct_on?: Maybe<Array<Likes_Stg_Set_User_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Likes_Stg_Set_User_Order_By>>
  where?: Maybe<Likes_Stg_Set_User_Bool_Exp>
}

export type Subscription_RootLikes_Stg_Set_User_AggregateArgs = {
  distinct_on?: Maybe<Array<Likes_Stg_Set_User_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Likes_Stg_Set_User_Order_By>>
  where?: Maybe<Likes_Stg_Set_User_Bool_Exp>
}

export type Subscription_RootLikes_Stg_Set_User_By_PkArgs = {
  liked_by_user_id: Scalars['Int']
  stg_set_id: Scalars['Int']
}

export type Subscription_RootLikes_Stg_Submission_Message_UserArgs = {
  distinct_on?: Maybe<Array<Likes_Stg_Submission_Message_User_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Likes_Stg_Submission_Message_User_Order_By>>
  where?: Maybe<Likes_Stg_Submission_Message_User_Bool_Exp>
}

export type Subscription_RootLikes_Stg_Submission_Message_User_AggregateArgs = {
  distinct_on?: Maybe<Array<Likes_Stg_Submission_Message_User_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Likes_Stg_Submission_Message_User_Order_By>>
  where?: Maybe<Likes_Stg_Submission_Message_User_Bool_Exp>
}

export type Subscription_RootLikes_Stg_Submission_Message_User_By_PkArgs = {
  liked_by_user_id: Scalars['Int']
  stg_submission_message_id: Scalars['Int']
}

export type Subscription_RootLikes_Stg_Submission_UserArgs = {
  distinct_on?: Maybe<Array<Likes_Stg_Submission_User_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Likes_Stg_Submission_User_Order_By>>
  where?: Maybe<Likes_Stg_Submission_User_Bool_Exp>
}

export type Subscription_RootLikes_Stg_Submission_User_AggregateArgs = {
  distinct_on?: Maybe<Array<Likes_Stg_Submission_User_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Likes_Stg_Submission_User_Order_By>>
  where?: Maybe<Likes_Stg_Submission_User_Bool_Exp>
}

export type Subscription_RootLikes_Stg_Submission_User_By_PkArgs = {
  liked_by_user_id: Scalars['Int']
  stg_submission_id: Scalars['Int']
}

export type Subscription_RootLikes_User_UserArgs = {
  distinct_on?: Maybe<Array<Likes_User_User_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Likes_User_User_Order_By>>
  where?: Maybe<Likes_User_User_Bool_Exp>
}

export type Subscription_RootLikes_User_User_AggregateArgs = {
  distinct_on?: Maybe<Array<Likes_User_User_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Likes_User_User_Order_By>>
  where?: Maybe<Likes_User_User_Bool_Exp>
}

export type Subscription_RootLikes_User_User_By_PkArgs = {
  liked_by_user_id: Scalars['Int']
  liked_user_id: Scalars['Int']
}

export type Subscription_RootPost_MessagesArgs = {
  distinct_on?: Maybe<Array<Post_Messages_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Post_Messages_Order_By>>
  where?: Maybe<Post_Messages_Bool_Exp>
}

export type Subscription_RootPost_Messages_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Messages_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Post_Messages_Order_By>>
  where?: Maybe<Post_Messages_Bool_Exp>
}

export type Subscription_RootPost_Messages_By_PkArgs = {
  id: Scalars['Int']
}

export type Subscription_RootPost_TagsArgs = {
  distinct_on?: Maybe<Array<Post_Tags_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Post_Tags_Order_By>>
  where?: Maybe<Post_Tags_Bool_Exp>
}

export type Subscription_RootPost_Tags_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Tags_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Post_Tags_Order_By>>
  where?: Maybe<Post_Tags_Bool_Exp>
}

export type Subscription_RootPost_Tags_By_PkArgs = {
  post_id: Scalars['Int']
  tag: E_Post_Tags_Enum
}

export type Subscription_RootPostsArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Posts_Order_By>>
  where?: Maybe<Posts_Bool_Exp>
}

export type Subscription_RootPosts_AggregateArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Posts_Order_By>>
  where?: Maybe<Posts_Bool_Exp>
}

export type Subscription_RootPosts_By_PkArgs = {
  id: Scalars['Int']
}

export type Subscription_RootRefresh_TokensArgs = {
  distinct_on?: Maybe<Array<Refresh_Tokens_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Refresh_Tokens_Order_By>>
  where?: Maybe<Refresh_Tokens_Bool_Exp>
}

export type Subscription_RootRefresh_Tokens_AggregateArgs = {
  distinct_on?: Maybe<Array<Refresh_Tokens_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Refresh_Tokens_Order_By>>
  where?: Maybe<Refresh_Tokens_Bool_Exp>
}

export type Subscription_RootRefresh_Tokens_By_PkArgs = {
  token: Scalars['uuid']
}

export type Subscription_RootStg_PlayersArgs = {
  distinct_on?: Maybe<Array<Stg_Players_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Stg_Players_Order_By>>
  where?: Maybe<Stg_Players_Bool_Exp>
}

export type Subscription_RootStg_Players_AggregateArgs = {
  distinct_on?: Maybe<Array<Stg_Players_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Stg_Players_Order_By>>
  where?: Maybe<Stg_Players_Bool_Exp>
}

export type Subscription_RootStg_Players_By_PkArgs = {
  player_id: Scalars['Int']
  stg_id: Scalars['Int']
}

export type Subscription_RootStg_Set_MessagesArgs = {
  distinct_on?: Maybe<Array<Stg_Set_Messages_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Stg_Set_Messages_Order_By>>
  where?: Maybe<Stg_Set_Messages_Bool_Exp>
}

export type Subscription_RootStg_Set_Messages_AggregateArgs = {
  distinct_on?: Maybe<Array<Stg_Set_Messages_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Stg_Set_Messages_Order_By>>
  where?: Maybe<Stg_Set_Messages_Bool_Exp>
}

export type Subscription_RootStg_Set_Messages_By_PkArgs = {
  id: Scalars['Int']
}

export type Subscription_RootStg_SetsArgs = {
  distinct_on?: Maybe<Array<Stg_Sets_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Stg_Sets_Order_By>>
  where?: Maybe<Stg_Sets_Bool_Exp>
}

export type Subscription_RootStg_Sets_AggregateArgs = {
  distinct_on?: Maybe<Array<Stg_Sets_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Stg_Sets_Order_By>>
  where?: Maybe<Stg_Sets_Bool_Exp>
}

export type Subscription_RootStg_Sets_By_PkArgs = {
  id: Scalars['Int']
}

export type Subscription_RootStg_Submission_MessagesArgs = {
  distinct_on?: Maybe<Array<Stg_Submission_Messages_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Stg_Submission_Messages_Order_By>>
  where?: Maybe<Stg_Submission_Messages_Bool_Exp>
}

export type Subscription_RootStg_Submission_Messages_AggregateArgs = {
  distinct_on?: Maybe<Array<Stg_Submission_Messages_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Stg_Submission_Messages_Order_By>>
  where?: Maybe<Stg_Submission_Messages_Bool_Exp>
}

export type Subscription_RootStg_Submission_Messages_By_PkArgs = {
  id: Scalars['Int']
}

export type Subscription_RootStg_SubmissionsArgs = {
  distinct_on?: Maybe<Array<Stg_Submissions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Stg_Submissions_Order_By>>
  where?: Maybe<Stg_Submissions_Bool_Exp>
}

export type Subscription_RootStg_Submissions_AggregateArgs = {
  distinct_on?: Maybe<Array<Stg_Submissions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Stg_Submissions_Order_By>>
  where?: Maybe<Stg_Submissions_Bool_Exp>
}

export type Subscription_RootStg_Submissions_By_PkArgs = {
  id: Scalars['Int']
}

export type Subscription_RootStgsArgs = {
  distinct_on?: Maybe<Array<Stgs_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Stgs_Order_By>>
  where?: Maybe<Stgs_Bool_Exp>
}

export type Subscription_RootStgs_AggregateArgs = {
  distinct_on?: Maybe<Array<Stgs_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Stgs_Order_By>>
  where?: Maybe<Stgs_Bool_Exp>
}

export type Subscription_RootStgs_By_PkArgs = {
  id: Scalars['Int']
}

export type Subscription_RootUser_ActivityArgs = {
  distinct_on?: Maybe<Array<User_Activity_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Activity_Order_By>>
  where?: Maybe<User_Activity_Bool_Exp>
}

export type Subscription_RootUser_Activity_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Activity_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Activity_Order_By>>
  where?: Maybe<User_Activity_Bool_Exp>
}

export type Subscription_RootUser_Activity_By_PkArgs = {
  user_id: Scalars['Int']
}

export type Subscription_RootUser_DisciplinesArgs = {
  distinct_on?: Maybe<Array<User_Disciplines_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Disciplines_Order_By>>
  where?: Maybe<User_Disciplines_Bool_Exp>
}

export type Subscription_RootUser_Disciplines_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Disciplines_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Disciplines_Order_By>>
  where?: Maybe<User_Disciplines_Bool_Exp>
}

export type Subscription_RootUser_Disciplines_By_PkArgs = {
  discipline: E_User_Disciplines_Enum
  user_id: Scalars['Int']
}

export type Subscription_RootUser_LocationsArgs = {
  distinct_on?: Maybe<Array<User_Locations_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Locations_Order_By>>
  where?: Maybe<User_Locations_Bool_Exp>
}

export type Subscription_RootUser_Locations_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Locations_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Locations_Order_By>>
  where?: Maybe<User_Locations_Bool_Exp>
}

export type Subscription_RootUser_Locations_By_PkArgs = {
  type: E_User_Locations_Enum
  user_id: Scalars['Int']
}

export type Subscription_RootUser_SocialsArgs = {
  distinct_on?: Maybe<Array<User_Socials_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Socials_Order_By>>
  where?: Maybe<User_Socials_Bool_Exp>
}

export type Subscription_RootUser_Socials_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Socials_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Socials_Order_By>>
  where?: Maybe<User_Socials_Bool_Exp>
}

export type Subscription_RootUser_Socials_By_PkArgs = {
  user_id: Scalars['Int']
}

export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Order_By>>
  where?: Maybe<Users_Bool_Exp>
}

export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Order_By>>
  where?: Maybe<Users_Bool_Exp>
}

export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['Int']
}

export type Subscription_RootV_Posts_SortedArgs = {
  distinct_on?: Maybe<Array<V_Posts_Sorted_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<V_Posts_Sorted_Order_By>>
  where?: Maybe<V_Posts_Sorted_Bool_Exp>
}

export type Subscription_RootV_Posts_Sorted_AggregateArgs = {
  distinct_on?: Maybe<Array<V_Posts_Sorted_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<V_Posts_Sorted_Order_By>>
  where?: Maybe<V_Posts_Sorted_Bool_Exp>
}

export type Subscription_RootV_Public_User_Trick_TodosArgs = {
  distinct_on?: Maybe<Array<V_Public_User_Trick_Todos_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<V_Public_User_Trick_Todos_Order_By>>
  where?: Maybe<V_Public_User_Trick_Todos_Bool_Exp>
}

export type Subscription_RootV_Public_User_Trick_Todos_AggregateArgs = {
  distinct_on?: Maybe<Array<V_Public_User_Trick_Todos_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<V_Public_User_Trick_Todos_Order_By>>
  where?: Maybe<V_Public_User_Trick_Todos_Bool_Exp>
}

export type Subscription_RootV_Users_OnlineArgs = {
  distinct_on?: Maybe<Array<V_Users_Online_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<V_Users_Online_Order_By>>
  where?: Maybe<V_Users_Online_Bool_Exp>
}

export type Subscription_RootV_Users_Online_AggregateArgs = {
  distinct_on?: Maybe<Array<V_Users_Online_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<V_Users_Online_Order_By>>
  where?: Maybe<V_Users_Online_Bool_Exp>
}

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>
  _gt?: Maybe<Scalars['timestamptz']>
  _gte?: Maybe<Scalars['timestamptz']>
  _in?: Maybe<Array<Scalars['timestamptz']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['timestamptz']>
  _lte?: Maybe<Scalars['timestamptz']>
  _neq?: Maybe<Scalars['timestamptz']>
  _nin?: Maybe<Array<Scalars['timestamptz']>>
}

/** columns and relationships of "user_activity" */
export type User_Activity = {
  __typename?: 'user_activity'
  /** general activity with the app */
  app?: Maybe<Scalars['timestamptz']>
  chat_page?: Maybe<Scalars['timestamptz']>
  /** A computed field, executes function "user_is_online" */
  is_online?: Maybe<Scalars['Boolean']>
  posts_page?: Maybe<Scalars['timestamptz']>
  /** An object relationship */
  user: Users
  user_id: Scalars['Int']
  users_page?: Maybe<Scalars['timestamptz']>
}

/** aggregated selection of "user_activity" */
export type User_Activity_Aggregate = {
  __typename?: 'user_activity_aggregate'
  aggregate?: Maybe<User_Activity_Aggregate_Fields>
  nodes: Array<User_Activity>
}

/** aggregate fields of "user_activity" */
export type User_Activity_Aggregate_Fields = {
  __typename?: 'user_activity_aggregate_fields'
  avg?: Maybe<User_Activity_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<User_Activity_Max_Fields>
  min?: Maybe<User_Activity_Min_Fields>
  stddev?: Maybe<User_Activity_Stddev_Fields>
  stddev_pop?: Maybe<User_Activity_Stddev_Pop_Fields>
  stddev_samp?: Maybe<User_Activity_Stddev_Samp_Fields>
  sum?: Maybe<User_Activity_Sum_Fields>
  var_pop?: Maybe<User_Activity_Var_Pop_Fields>
  var_samp?: Maybe<User_Activity_Var_Samp_Fields>
  variance?: Maybe<User_Activity_Variance_Fields>
}

/** aggregate fields of "user_activity" */
export type User_Activity_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Activity_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type User_Activity_Avg_Fields = {
  __typename?: 'user_activity_avg_fields'
  user_id?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "user_activity". All fields are combined with a logical 'AND'. */
export type User_Activity_Bool_Exp = {
  _and?: Maybe<Array<User_Activity_Bool_Exp>>
  _not?: Maybe<User_Activity_Bool_Exp>
  _or?: Maybe<Array<User_Activity_Bool_Exp>>
  app?: Maybe<Timestamptz_Comparison_Exp>
  chat_page?: Maybe<Timestamptz_Comparison_Exp>
  is_online?: Maybe<Boolean_Comparison_Exp>
  posts_page?: Maybe<Timestamptz_Comparison_Exp>
  user?: Maybe<Users_Bool_Exp>
  user_id?: Maybe<Int_Comparison_Exp>
  users_page?: Maybe<Timestamptz_Comparison_Exp>
}

/** unique or primary key constraints on table "user_activity" */
export enum User_Activity_Constraint {
  /** unique or primary key constraint */
  UserActivityPkey = 'user_activity_pkey',
}

/** input type for incrementing numeric columns in table "user_activity" */
export type User_Activity_Inc_Input = {
  user_id?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "user_activity" */
export type User_Activity_Insert_Input = {
  /** general activity with the app */
  app?: Maybe<Scalars['timestamptz']>
  chat_page?: Maybe<Scalars['timestamptz']>
  posts_page?: Maybe<Scalars['timestamptz']>
  user?: Maybe<Users_Obj_Rel_Insert_Input>
  user_id?: Maybe<Scalars['Int']>
  users_page?: Maybe<Scalars['timestamptz']>
}

/** aggregate max on columns */
export type User_Activity_Max_Fields = {
  __typename?: 'user_activity_max_fields'
  /** general activity with the app */
  app?: Maybe<Scalars['timestamptz']>
  chat_page?: Maybe<Scalars['timestamptz']>
  posts_page?: Maybe<Scalars['timestamptz']>
  user_id?: Maybe<Scalars['Int']>
  users_page?: Maybe<Scalars['timestamptz']>
}

/** aggregate min on columns */
export type User_Activity_Min_Fields = {
  __typename?: 'user_activity_min_fields'
  /** general activity with the app */
  app?: Maybe<Scalars['timestamptz']>
  chat_page?: Maybe<Scalars['timestamptz']>
  posts_page?: Maybe<Scalars['timestamptz']>
  user_id?: Maybe<Scalars['Int']>
  users_page?: Maybe<Scalars['timestamptz']>
}

/** response of any mutation on the table "user_activity" */
export type User_Activity_Mutation_Response = {
  __typename?: 'user_activity_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<User_Activity>
}

/** input type for inserting object relation for remote table "user_activity" */
export type User_Activity_Obj_Rel_Insert_Input = {
  data: User_Activity_Insert_Input
  /** on conflict condition */
  on_conflict?: Maybe<User_Activity_On_Conflict>
}

/** on conflict condition type for table "user_activity" */
export type User_Activity_On_Conflict = {
  constraint: User_Activity_Constraint
  update_columns?: Array<User_Activity_Update_Column>
  where?: Maybe<User_Activity_Bool_Exp>
}

/** Ordering options when selecting data from "user_activity". */
export type User_Activity_Order_By = {
  app?: Maybe<Order_By>
  chat_page?: Maybe<Order_By>
  is_online?: Maybe<Order_By>
  posts_page?: Maybe<Order_By>
  user?: Maybe<Users_Order_By>
  user_id?: Maybe<Order_By>
  users_page?: Maybe<Order_By>
}

/** primary key columns input for table: user_activity */
export type User_Activity_Pk_Columns_Input = {
  user_id: Scalars['Int']
}

/** select columns of table "user_activity" */
export enum User_Activity_Select_Column {
  /** column name */
  App = 'app',
  /** column name */
  ChatPage = 'chat_page',
  /** column name */
  PostsPage = 'posts_page',
  /** column name */
  UserId = 'user_id',
  /** column name */
  UsersPage = 'users_page',
}

/** input type for updating data in table "user_activity" */
export type User_Activity_Set_Input = {
  /** general activity with the app */
  app?: Maybe<Scalars['timestamptz']>
  chat_page?: Maybe<Scalars['timestamptz']>
  posts_page?: Maybe<Scalars['timestamptz']>
  user_id?: Maybe<Scalars['Int']>
  users_page?: Maybe<Scalars['timestamptz']>
}

/** aggregate stddev on columns */
export type User_Activity_Stddev_Fields = {
  __typename?: 'user_activity_stddev_fields'
  user_id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type User_Activity_Stddev_Pop_Fields = {
  __typename?: 'user_activity_stddev_pop_fields'
  user_id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type User_Activity_Stddev_Samp_Fields = {
  __typename?: 'user_activity_stddev_samp_fields'
  user_id?: Maybe<Scalars['Float']>
}

/** aggregate sum on columns */
export type User_Activity_Sum_Fields = {
  __typename?: 'user_activity_sum_fields'
  user_id?: Maybe<Scalars['Int']>
}

/** update columns of table "user_activity" */
export enum User_Activity_Update_Column {
  /** column name */
  App = 'app',
  /** column name */
  ChatPage = 'chat_page',
  /** column name */
  PostsPage = 'posts_page',
  /** column name */
  UserId = 'user_id',
  /** column name */
  UsersPage = 'users_page',
}

/** aggregate var_pop on columns */
export type User_Activity_Var_Pop_Fields = {
  __typename?: 'user_activity_var_pop_fields'
  user_id?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type User_Activity_Var_Samp_Fields = {
  __typename?: 'user_activity_var_samp_fields'
  user_id?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type User_Activity_Variance_Fields = {
  __typename?: 'user_activity_variance_fields'
  user_id?: Maybe<Scalars['Float']>
}

/** columns and relationships of "user_disciplines" */
export type User_Disciplines = {
  __typename?: 'user_disciplines'
  discipline: E_User_Disciplines_Enum
  /** An object relationship */
  user: Users
  user_id: Scalars['Int']
}

/** aggregated selection of "user_disciplines" */
export type User_Disciplines_Aggregate = {
  __typename?: 'user_disciplines_aggregate'
  aggregate?: Maybe<User_Disciplines_Aggregate_Fields>
  nodes: Array<User_Disciplines>
}

/** aggregate fields of "user_disciplines" */
export type User_Disciplines_Aggregate_Fields = {
  __typename?: 'user_disciplines_aggregate_fields'
  avg?: Maybe<User_Disciplines_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<User_Disciplines_Max_Fields>
  min?: Maybe<User_Disciplines_Min_Fields>
  stddev?: Maybe<User_Disciplines_Stddev_Fields>
  stddev_pop?: Maybe<User_Disciplines_Stddev_Pop_Fields>
  stddev_samp?: Maybe<User_Disciplines_Stddev_Samp_Fields>
  sum?: Maybe<User_Disciplines_Sum_Fields>
  var_pop?: Maybe<User_Disciplines_Var_Pop_Fields>
  var_samp?: Maybe<User_Disciplines_Var_Samp_Fields>
  variance?: Maybe<User_Disciplines_Variance_Fields>
}

/** aggregate fields of "user_disciplines" */
export type User_Disciplines_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Disciplines_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "user_disciplines" */
export type User_Disciplines_Aggregate_Order_By = {
  avg?: Maybe<User_Disciplines_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<User_Disciplines_Max_Order_By>
  min?: Maybe<User_Disciplines_Min_Order_By>
  stddev?: Maybe<User_Disciplines_Stddev_Order_By>
  stddev_pop?: Maybe<User_Disciplines_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<User_Disciplines_Stddev_Samp_Order_By>
  sum?: Maybe<User_Disciplines_Sum_Order_By>
  var_pop?: Maybe<User_Disciplines_Var_Pop_Order_By>
  var_samp?: Maybe<User_Disciplines_Var_Samp_Order_By>
  variance?: Maybe<User_Disciplines_Variance_Order_By>
}

/** input type for inserting array relation for remote table "user_disciplines" */
export type User_Disciplines_Arr_Rel_Insert_Input = {
  data: Array<User_Disciplines_Insert_Input>
  /** on conflict condition */
  on_conflict?: Maybe<User_Disciplines_On_Conflict>
}

/** aggregate avg on columns */
export type User_Disciplines_Avg_Fields = {
  __typename?: 'user_disciplines_avg_fields'
  user_id?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "user_disciplines" */
export type User_Disciplines_Avg_Order_By = {
  user_id?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "user_disciplines". All fields are combined with a logical 'AND'. */
export type User_Disciplines_Bool_Exp = {
  _and?: Maybe<Array<User_Disciplines_Bool_Exp>>
  _not?: Maybe<User_Disciplines_Bool_Exp>
  _or?: Maybe<Array<User_Disciplines_Bool_Exp>>
  discipline?: Maybe<E_User_Disciplines_Enum_Comparison_Exp>
  user?: Maybe<Users_Bool_Exp>
  user_id?: Maybe<Int_Comparison_Exp>
}

/** unique or primary key constraints on table "user_disciplines" */
export enum User_Disciplines_Constraint {
  /** unique or primary key constraint */
  UserDisciplinesPkey = 'user_disciplines_pkey',
}

/** input type for incrementing numeric columns in table "user_disciplines" */
export type User_Disciplines_Inc_Input = {
  user_id?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "user_disciplines" */
export type User_Disciplines_Insert_Input = {
  discipline?: Maybe<E_User_Disciplines_Enum>
  user?: Maybe<Users_Obj_Rel_Insert_Input>
  user_id?: Maybe<Scalars['Int']>
}

/** aggregate max on columns */
export type User_Disciplines_Max_Fields = {
  __typename?: 'user_disciplines_max_fields'
  user_id?: Maybe<Scalars['Int']>
}

/** order by max() on columns of table "user_disciplines" */
export type User_Disciplines_Max_Order_By = {
  user_id?: Maybe<Order_By>
}

/** aggregate min on columns */
export type User_Disciplines_Min_Fields = {
  __typename?: 'user_disciplines_min_fields'
  user_id?: Maybe<Scalars['Int']>
}

/** order by min() on columns of table "user_disciplines" */
export type User_Disciplines_Min_Order_By = {
  user_id?: Maybe<Order_By>
}

/** response of any mutation on the table "user_disciplines" */
export type User_Disciplines_Mutation_Response = {
  __typename?: 'user_disciplines_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<User_Disciplines>
}

/** on conflict condition type for table "user_disciplines" */
export type User_Disciplines_On_Conflict = {
  constraint: User_Disciplines_Constraint
  update_columns?: Array<User_Disciplines_Update_Column>
  where?: Maybe<User_Disciplines_Bool_Exp>
}

/** Ordering options when selecting data from "user_disciplines". */
export type User_Disciplines_Order_By = {
  discipline?: Maybe<Order_By>
  user?: Maybe<Users_Order_By>
  user_id?: Maybe<Order_By>
}

/** primary key columns input for table: user_disciplines */
export type User_Disciplines_Pk_Columns_Input = {
  discipline: E_User_Disciplines_Enum
  user_id: Scalars['Int']
}

/** select columns of table "user_disciplines" */
export enum User_Disciplines_Select_Column {
  /** column name */
  Discipline = 'discipline',
  /** column name */
  UserId = 'user_id',
}

/** input type for updating data in table "user_disciplines" */
export type User_Disciplines_Set_Input = {
  discipline?: Maybe<E_User_Disciplines_Enum>
  user_id?: Maybe<Scalars['Int']>
}

/** aggregate stddev on columns */
export type User_Disciplines_Stddev_Fields = {
  __typename?: 'user_disciplines_stddev_fields'
  user_id?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "user_disciplines" */
export type User_Disciplines_Stddev_Order_By = {
  user_id?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type User_Disciplines_Stddev_Pop_Fields = {
  __typename?: 'user_disciplines_stddev_pop_fields'
  user_id?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "user_disciplines" */
export type User_Disciplines_Stddev_Pop_Order_By = {
  user_id?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type User_Disciplines_Stddev_Samp_Fields = {
  __typename?: 'user_disciplines_stddev_samp_fields'
  user_id?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "user_disciplines" */
export type User_Disciplines_Stddev_Samp_Order_By = {
  user_id?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type User_Disciplines_Sum_Fields = {
  __typename?: 'user_disciplines_sum_fields'
  user_id?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "user_disciplines" */
export type User_Disciplines_Sum_Order_By = {
  user_id?: Maybe<Order_By>
}

/** update columns of table "user_disciplines" */
export enum User_Disciplines_Update_Column {
  /** column name */
  Discipline = 'discipline',
  /** column name */
  UserId = 'user_id',
}

/** aggregate var_pop on columns */
export type User_Disciplines_Var_Pop_Fields = {
  __typename?: 'user_disciplines_var_pop_fields'
  user_id?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "user_disciplines" */
export type User_Disciplines_Var_Pop_Order_By = {
  user_id?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type User_Disciplines_Var_Samp_Fields = {
  __typename?: 'user_disciplines_var_samp_fields'
  user_id?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "user_disciplines" */
export type User_Disciplines_Var_Samp_Order_By = {
  user_id?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type User_Disciplines_Variance_Fields = {
  __typename?: 'user_disciplines_variance_fields'
  user_id?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "user_disciplines" */
export type User_Disciplines_Variance_Order_By = {
  user_id?: Maybe<Order_By>
}

/** columns and relationships of "user_locations" */
export type User_Locations = {
  __typename?: 'user_locations'
  country_long_name: Scalars['String']
  country_short_name: Scalars['String']
  formatted_address: Scalars['String']
  id: Scalars['uuid']
  lat: Scalars['numeric']
  lng: Scalars['numeric']
  type: E_User_Locations_Enum
  /** An object relationship */
  user: Users
  user_id: Scalars['Int']
}

/** aggregated selection of "user_locations" */
export type User_Locations_Aggregate = {
  __typename?: 'user_locations_aggregate'
  aggregate?: Maybe<User_Locations_Aggregate_Fields>
  nodes: Array<User_Locations>
}

/** aggregate fields of "user_locations" */
export type User_Locations_Aggregate_Fields = {
  __typename?: 'user_locations_aggregate_fields'
  avg?: Maybe<User_Locations_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<User_Locations_Max_Fields>
  min?: Maybe<User_Locations_Min_Fields>
  stddev?: Maybe<User_Locations_Stddev_Fields>
  stddev_pop?: Maybe<User_Locations_Stddev_Pop_Fields>
  stddev_samp?: Maybe<User_Locations_Stddev_Samp_Fields>
  sum?: Maybe<User_Locations_Sum_Fields>
  var_pop?: Maybe<User_Locations_Var_Pop_Fields>
  var_samp?: Maybe<User_Locations_Var_Samp_Fields>
  variance?: Maybe<User_Locations_Variance_Fields>
}

/** aggregate fields of "user_locations" */
export type User_Locations_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Locations_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "user_locations" */
export type User_Locations_Aggregate_Order_By = {
  avg?: Maybe<User_Locations_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<User_Locations_Max_Order_By>
  min?: Maybe<User_Locations_Min_Order_By>
  stddev?: Maybe<User_Locations_Stddev_Order_By>
  stddev_pop?: Maybe<User_Locations_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<User_Locations_Stddev_Samp_Order_By>
  sum?: Maybe<User_Locations_Sum_Order_By>
  var_pop?: Maybe<User_Locations_Var_Pop_Order_By>
  var_samp?: Maybe<User_Locations_Var_Samp_Order_By>
  variance?: Maybe<User_Locations_Variance_Order_By>
}

/** input type for inserting array relation for remote table "user_locations" */
export type User_Locations_Arr_Rel_Insert_Input = {
  data: Array<User_Locations_Insert_Input>
  /** on conflict condition */
  on_conflict?: Maybe<User_Locations_On_Conflict>
}

/** aggregate avg on columns */
export type User_Locations_Avg_Fields = {
  __typename?: 'user_locations_avg_fields'
  lat?: Maybe<Scalars['Float']>
  lng?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "user_locations" */
export type User_Locations_Avg_Order_By = {
  lat?: Maybe<Order_By>
  lng?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "user_locations". All fields are combined with a logical 'AND'. */
export type User_Locations_Bool_Exp = {
  _and?: Maybe<Array<User_Locations_Bool_Exp>>
  _not?: Maybe<User_Locations_Bool_Exp>
  _or?: Maybe<Array<User_Locations_Bool_Exp>>
  country_long_name?: Maybe<String_Comparison_Exp>
  country_short_name?: Maybe<String_Comparison_Exp>
  formatted_address?: Maybe<String_Comparison_Exp>
  id?: Maybe<Uuid_Comparison_Exp>
  lat?: Maybe<Numeric_Comparison_Exp>
  lng?: Maybe<Numeric_Comparison_Exp>
  type?: Maybe<E_User_Locations_Enum_Comparison_Exp>
  user?: Maybe<Users_Bool_Exp>
  user_id?: Maybe<Int_Comparison_Exp>
}

/** unique or primary key constraints on table "user_locations" */
export enum User_Locations_Constraint {
  /** unique or primary key constraint */
  UserLocationsPkey = 'user_locations_pkey',
}

/** input type for incrementing numeric columns in table "user_locations" */
export type User_Locations_Inc_Input = {
  lat?: Maybe<Scalars['numeric']>
  lng?: Maybe<Scalars['numeric']>
  user_id?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "user_locations" */
export type User_Locations_Insert_Input = {
  country_long_name?: Maybe<Scalars['String']>
  country_short_name?: Maybe<Scalars['String']>
  formatted_address?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['uuid']>
  lat?: Maybe<Scalars['numeric']>
  lng?: Maybe<Scalars['numeric']>
  type?: Maybe<E_User_Locations_Enum>
  user?: Maybe<Users_Obj_Rel_Insert_Input>
  user_id?: Maybe<Scalars['Int']>
}

/** aggregate max on columns */
export type User_Locations_Max_Fields = {
  __typename?: 'user_locations_max_fields'
  country_long_name?: Maybe<Scalars['String']>
  country_short_name?: Maybe<Scalars['String']>
  formatted_address?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['uuid']>
  lat?: Maybe<Scalars['numeric']>
  lng?: Maybe<Scalars['numeric']>
  user_id?: Maybe<Scalars['Int']>
}

/** order by max() on columns of table "user_locations" */
export type User_Locations_Max_Order_By = {
  country_long_name?: Maybe<Order_By>
  country_short_name?: Maybe<Order_By>
  formatted_address?: Maybe<Order_By>
  id?: Maybe<Order_By>
  lat?: Maybe<Order_By>
  lng?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** aggregate min on columns */
export type User_Locations_Min_Fields = {
  __typename?: 'user_locations_min_fields'
  country_long_name?: Maybe<Scalars['String']>
  country_short_name?: Maybe<Scalars['String']>
  formatted_address?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['uuid']>
  lat?: Maybe<Scalars['numeric']>
  lng?: Maybe<Scalars['numeric']>
  user_id?: Maybe<Scalars['Int']>
}

/** order by min() on columns of table "user_locations" */
export type User_Locations_Min_Order_By = {
  country_long_name?: Maybe<Order_By>
  country_short_name?: Maybe<Order_By>
  formatted_address?: Maybe<Order_By>
  id?: Maybe<Order_By>
  lat?: Maybe<Order_By>
  lng?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** response of any mutation on the table "user_locations" */
export type User_Locations_Mutation_Response = {
  __typename?: 'user_locations_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<User_Locations>
}

/** on conflict condition type for table "user_locations" */
export type User_Locations_On_Conflict = {
  constraint: User_Locations_Constraint
  update_columns?: Array<User_Locations_Update_Column>
  where?: Maybe<User_Locations_Bool_Exp>
}

/** Ordering options when selecting data from "user_locations". */
export type User_Locations_Order_By = {
  country_long_name?: Maybe<Order_By>
  country_short_name?: Maybe<Order_By>
  formatted_address?: Maybe<Order_By>
  id?: Maybe<Order_By>
  lat?: Maybe<Order_By>
  lng?: Maybe<Order_By>
  type?: Maybe<Order_By>
  user?: Maybe<Users_Order_By>
  user_id?: Maybe<Order_By>
}

/** primary key columns input for table: user_locations */
export type User_Locations_Pk_Columns_Input = {
  type: E_User_Locations_Enum
  user_id: Scalars['Int']
}

/** select columns of table "user_locations" */
export enum User_Locations_Select_Column {
  /** column name */
  CountryLongName = 'country_long_name',
  /** column name */
  CountryShortName = 'country_short_name',
  /** column name */
  FormattedAddress = 'formatted_address',
  /** column name */
  Id = 'id',
  /** column name */
  Lat = 'lat',
  /** column name */
  Lng = 'lng',
  /** column name */
  Type = 'type',
  /** column name */
  UserId = 'user_id',
}

/** input type for updating data in table "user_locations" */
export type User_Locations_Set_Input = {
  country_long_name?: Maybe<Scalars['String']>
  country_short_name?: Maybe<Scalars['String']>
  formatted_address?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['uuid']>
  lat?: Maybe<Scalars['numeric']>
  lng?: Maybe<Scalars['numeric']>
  type?: Maybe<E_User_Locations_Enum>
  user_id?: Maybe<Scalars['Int']>
}

/** aggregate stddev on columns */
export type User_Locations_Stddev_Fields = {
  __typename?: 'user_locations_stddev_fields'
  lat?: Maybe<Scalars['Float']>
  lng?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "user_locations" */
export type User_Locations_Stddev_Order_By = {
  lat?: Maybe<Order_By>
  lng?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type User_Locations_Stddev_Pop_Fields = {
  __typename?: 'user_locations_stddev_pop_fields'
  lat?: Maybe<Scalars['Float']>
  lng?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "user_locations" */
export type User_Locations_Stddev_Pop_Order_By = {
  lat?: Maybe<Order_By>
  lng?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type User_Locations_Stddev_Samp_Fields = {
  __typename?: 'user_locations_stddev_samp_fields'
  lat?: Maybe<Scalars['Float']>
  lng?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "user_locations" */
export type User_Locations_Stddev_Samp_Order_By = {
  lat?: Maybe<Order_By>
  lng?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type User_Locations_Sum_Fields = {
  __typename?: 'user_locations_sum_fields'
  lat?: Maybe<Scalars['numeric']>
  lng?: Maybe<Scalars['numeric']>
  user_id?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "user_locations" */
export type User_Locations_Sum_Order_By = {
  lat?: Maybe<Order_By>
  lng?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** update columns of table "user_locations" */
export enum User_Locations_Update_Column {
  /** column name */
  CountryLongName = 'country_long_name',
  /** column name */
  CountryShortName = 'country_short_name',
  /** column name */
  FormattedAddress = 'formatted_address',
  /** column name */
  Id = 'id',
  /** column name */
  Lat = 'lat',
  /** column name */
  Lng = 'lng',
  /** column name */
  Type = 'type',
  /** column name */
  UserId = 'user_id',
}

/** aggregate var_pop on columns */
export type User_Locations_Var_Pop_Fields = {
  __typename?: 'user_locations_var_pop_fields'
  lat?: Maybe<Scalars['Float']>
  lng?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "user_locations" */
export type User_Locations_Var_Pop_Order_By = {
  lat?: Maybe<Order_By>
  lng?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type User_Locations_Var_Samp_Fields = {
  __typename?: 'user_locations_var_samp_fields'
  lat?: Maybe<Scalars['Float']>
  lng?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "user_locations" */
export type User_Locations_Var_Samp_Order_By = {
  lat?: Maybe<Order_By>
  lng?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type User_Locations_Variance_Fields = {
  __typename?: 'user_locations_variance_fields'
  lat?: Maybe<Scalars['Float']>
  lng?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "user_locations" */
export type User_Locations_Variance_Order_By = {
  lat?: Maybe<Order_By>
  lng?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** columns and relationships of "user_socials" */
export type User_Socials = {
  __typename?: 'user_socials'
  facebook?: Maybe<Scalars['String']>
  instagram?: Maybe<Scalars['String']>
  spotify?: Maybe<Scalars['String']>
  tiktok?: Maybe<Scalars['String']>
  twitter?: Maybe<Scalars['String']>
  /** An object relationship */
  user: Users
  user_id: Scalars['Int']
  youtube?: Maybe<Scalars['String']>
}

/** aggregated selection of "user_socials" */
export type User_Socials_Aggregate = {
  __typename?: 'user_socials_aggregate'
  aggregate?: Maybe<User_Socials_Aggregate_Fields>
  nodes: Array<User_Socials>
}

/** aggregate fields of "user_socials" */
export type User_Socials_Aggregate_Fields = {
  __typename?: 'user_socials_aggregate_fields'
  avg?: Maybe<User_Socials_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<User_Socials_Max_Fields>
  min?: Maybe<User_Socials_Min_Fields>
  stddev?: Maybe<User_Socials_Stddev_Fields>
  stddev_pop?: Maybe<User_Socials_Stddev_Pop_Fields>
  stddev_samp?: Maybe<User_Socials_Stddev_Samp_Fields>
  sum?: Maybe<User_Socials_Sum_Fields>
  var_pop?: Maybe<User_Socials_Var_Pop_Fields>
  var_samp?: Maybe<User_Socials_Var_Samp_Fields>
  variance?: Maybe<User_Socials_Variance_Fields>
}

/** aggregate fields of "user_socials" */
export type User_Socials_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Socials_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type User_Socials_Avg_Fields = {
  __typename?: 'user_socials_avg_fields'
  user_id?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "user_socials". All fields are combined with a logical 'AND'. */
export type User_Socials_Bool_Exp = {
  _and?: Maybe<Array<User_Socials_Bool_Exp>>
  _not?: Maybe<User_Socials_Bool_Exp>
  _or?: Maybe<Array<User_Socials_Bool_Exp>>
  facebook?: Maybe<String_Comparison_Exp>
  instagram?: Maybe<String_Comparison_Exp>
  spotify?: Maybe<String_Comparison_Exp>
  tiktok?: Maybe<String_Comparison_Exp>
  twitter?: Maybe<String_Comparison_Exp>
  user?: Maybe<Users_Bool_Exp>
  user_id?: Maybe<Int_Comparison_Exp>
  youtube?: Maybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "user_socials" */
export enum User_Socials_Constraint {
  /** unique or primary key constraint */
  UserSocialsPkey = 'user_socials_pkey',
}

/** input type for incrementing numeric columns in table "user_socials" */
export type User_Socials_Inc_Input = {
  user_id?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "user_socials" */
export type User_Socials_Insert_Input = {
  facebook?: Maybe<Scalars['String']>
  instagram?: Maybe<Scalars['String']>
  spotify?: Maybe<Scalars['String']>
  tiktok?: Maybe<Scalars['String']>
  twitter?: Maybe<Scalars['String']>
  user?: Maybe<Users_Obj_Rel_Insert_Input>
  user_id?: Maybe<Scalars['Int']>
  youtube?: Maybe<Scalars['String']>
}

/** aggregate max on columns */
export type User_Socials_Max_Fields = {
  __typename?: 'user_socials_max_fields'
  facebook?: Maybe<Scalars['String']>
  instagram?: Maybe<Scalars['String']>
  spotify?: Maybe<Scalars['String']>
  tiktok?: Maybe<Scalars['String']>
  twitter?: Maybe<Scalars['String']>
  user_id?: Maybe<Scalars['Int']>
  youtube?: Maybe<Scalars['String']>
}

/** aggregate min on columns */
export type User_Socials_Min_Fields = {
  __typename?: 'user_socials_min_fields'
  facebook?: Maybe<Scalars['String']>
  instagram?: Maybe<Scalars['String']>
  spotify?: Maybe<Scalars['String']>
  tiktok?: Maybe<Scalars['String']>
  twitter?: Maybe<Scalars['String']>
  user_id?: Maybe<Scalars['Int']>
  youtube?: Maybe<Scalars['String']>
}

/** response of any mutation on the table "user_socials" */
export type User_Socials_Mutation_Response = {
  __typename?: 'user_socials_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<User_Socials>
}

/** input type for inserting object relation for remote table "user_socials" */
export type User_Socials_Obj_Rel_Insert_Input = {
  data: User_Socials_Insert_Input
  /** on conflict condition */
  on_conflict?: Maybe<User_Socials_On_Conflict>
}

/** on conflict condition type for table "user_socials" */
export type User_Socials_On_Conflict = {
  constraint: User_Socials_Constraint
  update_columns?: Array<User_Socials_Update_Column>
  where?: Maybe<User_Socials_Bool_Exp>
}

/** Ordering options when selecting data from "user_socials". */
export type User_Socials_Order_By = {
  facebook?: Maybe<Order_By>
  instagram?: Maybe<Order_By>
  spotify?: Maybe<Order_By>
  tiktok?: Maybe<Order_By>
  twitter?: Maybe<Order_By>
  user?: Maybe<Users_Order_By>
  user_id?: Maybe<Order_By>
  youtube?: Maybe<Order_By>
}

/** primary key columns input for table: user_socials */
export type User_Socials_Pk_Columns_Input = {
  user_id: Scalars['Int']
}

/** select columns of table "user_socials" */
export enum User_Socials_Select_Column {
  /** column name */
  Facebook = 'facebook',
  /** column name */
  Instagram = 'instagram',
  /** column name */
  Spotify = 'spotify',
  /** column name */
  Tiktok = 'tiktok',
  /** column name */
  Twitter = 'twitter',
  /** column name */
  UserId = 'user_id',
  /** column name */
  Youtube = 'youtube',
}

/** input type for updating data in table "user_socials" */
export type User_Socials_Set_Input = {
  facebook?: Maybe<Scalars['String']>
  instagram?: Maybe<Scalars['String']>
  spotify?: Maybe<Scalars['String']>
  tiktok?: Maybe<Scalars['String']>
  twitter?: Maybe<Scalars['String']>
  user_id?: Maybe<Scalars['Int']>
  youtube?: Maybe<Scalars['String']>
}

/** aggregate stddev on columns */
export type User_Socials_Stddev_Fields = {
  __typename?: 'user_socials_stddev_fields'
  user_id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type User_Socials_Stddev_Pop_Fields = {
  __typename?: 'user_socials_stddev_pop_fields'
  user_id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type User_Socials_Stddev_Samp_Fields = {
  __typename?: 'user_socials_stddev_samp_fields'
  user_id?: Maybe<Scalars['Float']>
}

/** aggregate sum on columns */
export type User_Socials_Sum_Fields = {
  __typename?: 'user_socials_sum_fields'
  user_id?: Maybe<Scalars['Int']>
}

/** update columns of table "user_socials" */
export enum User_Socials_Update_Column {
  /** column name */
  Facebook = 'facebook',
  /** column name */
  Instagram = 'instagram',
  /** column name */
  Spotify = 'spotify',
  /** column name */
  Tiktok = 'tiktok',
  /** column name */
  Twitter = 'twitter',
  /** column name */
  UserId = 'user_id',
  /** column name */
  Youtube = 'youtube',
}

/** aggregate var_pop on columns */
export type User_Socials_Var_Pop_Fields = {
  __typename?: 'user_socials_var_pop_fields'
  user_id?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type User_Socials_Var_Samp_Fields = {
  __typename?: 'user_socials_var_samp_fields'
  user_id?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type User_Socials_Variance_Fields = {
  __typename?: 'user_socials_variance_fields'
  user_id?: Maybe<Scalars['Float']>
}

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users'
  /** An object relationship */
  activity?: Maybe<User_Activity>
  avatar?: Maybe<Scalars['String']>
  bio?: Maybe<Scalars['String']>
  birthday?: Maybe<Scalars['date']>
  /** An array relationship */
  chat_messages: Array<Chat_Messages>
  /** An aggregate relationship */
  chat_messages_aggregate: Chat_Messages_Aggregate
  created_at?: Maybe<Scalars['timestamptz']>
  current_setup?: Maybe<Scalars['String']>
  /** An array relationship */
  disciplines: Array<User_Disciplines>
  /** An aggregate relationship */
  disciplines_aggregate: User_Disciplines_Aggregate
  email: Scalars['String']
  favorite_tricks?: Maybe<Scalars['jsonb']>
  full_name: Scalars['String']
  id: Scalars['Int']
  interests?: Maybe<Scalars['jsonb']>
  /** A computed field, executes function "user_is_registered_for_upcoming_stg" */
  is_registered_for_upcoming_stg?: Maybe<Scalars['Boolean']>
  last_online_at?: Maybe<Scalars['timestamptz']>
  /** An array relationship */
  liked_by: Array<Likes_User_User>
  /** An aggregate relationship */
  liked_by_aggregate: Likes_User_User_Aggregate
  /** An array relationship */
  liked_users: Array<Likes_User_User>
  /** An aggregate relationship */
  liked_users_aggregate: Likes_User_User_Aggregate
  /** An array relationship */
  locations: Array<User_Locations>
  /** An aggregate relationship */
  locations_aggregate: User_Locations_Aggregate
  nbds?: Maybe<Scalars['jsonb']>
  password: Scalars['String']
  /** An array relationship */
  posts: Array<Posts>
  /** An aggregate relationship */
  posts_aggregate: Posts_Aggregate
  profession?: Maybe<Scalars['String']>
  /** An array relationship */
  public_trick_todos: Array<V_Public_User_Trick_Todos>
  /** An aggregate relationship */
  public_trick_todos_aggregate: V_Public_User_Trick_Todos_Aggregate
  /** An array relationship */
  refresh_tokens: Array<Refresh_Tokens>
  /** An aggregate relationship */
  refresh_tokens_aggregate: Refresh_Tokens_Aggregate
  role?: Maybe<E_User_Roles_Enum>
  /** An object relationship */
  socials?: Maybe<User_Socials>
  /** An array relationship */
  stg_sets: Array<Stg_Sets>
  /** An aggregate relationship */
  stg_sets_aggregate: Stg_Sets_Aggregate
  /** An array relationship */
  stg_submissions: Array<Stg_Submissions>
  /** An aggregate relationship */
  stg_submissions_aggregate: Stg_Submissions_Aggregate
  teams?: Maybe<Scalars['jsonb']>
  trick_todos?: Maybe<Scalars['jsonb']>
  updated_at?: Maybe<Scalars['timestamptz']>
  username: Scalars['String']
  verified_email: Scalars['Boolean']
  willing_to_host: Scalars['Boolean']
}

/** columns and relationships of "users" */
export type UsersChat_MessagesArgs = {
  distinct_on?: Maybe<Array<Chat_Messages_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Chat_Messages_Order_By>>
  where?: Maybe<Chat_Messages_Bool_Exp>
}

/** columns and relationships of "users" */
export type UsersChat_Messages_AggregateArgs = {
  distinct_on?: Maybe<Array<Chat_Messages_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Chat_Messages_Order_By>>
  where?: Maybe<Chat_Messages_Bool_Exp>
}

/** columns and relationships of "users" */
export type UsersDisciplinesArgs = {
  distinct_on?: Maybe<Array<User_Disciplines_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Disciplines_Order_By>>
  where?: Maybe<User_Disciplines_Bool_Exp>
}

/** columns and relationships of "users" */
export type UsersDisciplines_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Disciplines_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Disciplines_Order_By>>
  where?: Maybe<User_Disciplines_Bool_Exp>
}

/** columns and relationships of "users" */
export type UsersFavorite_TricksArgs = {
  path?: Maybe<Scalars['String']>
}

/** columns and relationships of "users" */
export type UsersInterestsArgs = {
  path?: Maybe<Scalars['String']>
}

/** columns and relationships of "users" */
export type UsersLiked_ByArgs = {
  distinct_on?: Maybe<Array<Likes_User_User_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Likes_User_User_Order_By>>
  where?: Maybe<Likes_User_User_Bool_Exp>
}

/** columns and relationships of "users" */
export type UsersLiked_By_AggregateArgs = {
  distinct_on?: Maybe<Array<Likes_User_User_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Likes_User_User_Order_By>>
  where?: Maybe<Likes_User_User_Bool_Exp>
}

/** columns and relationships of "users" */
export type UsersLiked_UsersArgs = {
  distinct_on?: Maybe<Array<Likes_User_User_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Likes_User_User_Order_By>>
  where?: Maybe<Likes_User_User_Bool_Exp>
}

/** columns and relationships of "users" */
export type UsersLiked_Users_AggregateArgs = {
  distinct_on?: Maybe<Array<Likes_User_User_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Likes_User_User_Order_By>>
  where?: Maybe<Likes_User_User_Bool_Exp>
}

/** columns and relationships of "users" */
export type UsersLocationsArgs = {
  distinct_on?: Maybe<Array<User_Locations_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Locations_Order_By>>
  where?: Maybe<User_Locations_Bool_Exp>
}

/** columns and relationships of "users" */
export type UsersLocations_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Locations_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Locations_Order_By>>
  where?: Maybe<User_Locations_Bool_Exp>
}

/** columns and relationships of "users" */
export type UsersNbdsArgs = {
  path?: Maybe<Scalars['String']>
}

/** columns and relationships of "users" */
export type UsersPostsArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Posts_Order_By>>
  where?: Maybe<Posts_Bool_Exp>
}

/** columns and relationships of "users" */
export type UsersPosts_AggregateArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Posts_Order_By>>
  where?: Maybe<Posts_Bool_Exp>
}

/** columns and relationships of "users" */
export type UsersPublic_Trick_TodosArgs = {
  distinct_on?: Maybe<Array<V_Public_User_Trick_Todos_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<V_Public_User_Trick_Todos_Order_By>>
  where?: Maybe<V_Public_User_Trick_Todos_Bool_Exp>
}

/** columns and relationships of "users" */
export type UsersPublic_Trick_Todos_AggregateArgs = {
  distinct_on?: Maybe<Array<V_Public_User_Trick_Todos_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<V_Public_User_Trick_Todos_Order_By>>
  where?: Maybe<V_Public_User_Trick_Todos_Bool_Exp>
}

/** columns and relationships of "users" */
export type UsersRefresh_TokensArgs = {
  distinct_on?: Maybe<Array<Refresh_Tokens_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Refresh_Tokens_Order_By>>
  where?: Maybe<Refresh_Tokens_Bool_Exp>
}

/** columns and relationships of "users" */
export type UsersRefresh_Tokens_AggregateArgs = {
  distinct_on?: Maybe<Array<Refresh_Tokens_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Refresh_Tokens_Order_By>>
  where?: Maybe<Refresh_Tokens_Bool_Exp>
}

/** columns and relationships of "users" */
export type UsersStg_SetsArgs = {
  distinct_on?: Maybe<Array<Stg_Sets_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Stg_Sets_Order_By>>
  where?: Maybe<Stg_Sets_Bool_Exp>
}

/** columns and relationships of "users" */
export type UsersStg_Sets_AggregateArgs = {
  distinct_on?: Maybe<Array<Stg_Sets_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Stg_Sets_Order_By>>
  where?: Maybe<Stg_Sets_Bool_Exp>
}

/** columns and relationships of "users" */
export type UsersStg_SubmissionsArgs = {
  distinct_on?: Maybe<Array<Stg_Submissions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Stg_Submissions_Order_By>>
  where?: Maybe<Stg_Submissions_Bool_Exp>
}

/** columns and relationships of "users" */
export type UsersStg_Submissions_AggregateArgs = {
  distinct_on?: Maybe<Array<Stg_Submissions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Stg_Submissions_Order_By>>
  where?: Maybe<Stg_Submissions_Bool_Exp>
}

/** columns and relationships of "users" */
export type UsersTeamsArgs = {
  path?: Maybe<Scalars['String']>
}

/** columns and relationships of "users" */
export type UsersTrick_TodosArgs = {
  path?: Maybe<Scalars['String']>
}

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate'
  aggregate?: Maybe<Users_Aggregate_Fields>
  nodes: Array<Users>
}

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields'
  avg?: Maybe<Users_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Users_Max_Fields>
  min?: Maybe<Users_Min_Fields>
  stddev?: Maybe<Users_Stddev_Fields>
  stddev_pop?: Maybe<Users_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Users_Stddev_Samp_Fields>
  sum?: Maybe<Users_Sum_Fields>
  var_pop?: Maybe<Users_Var_Pop_Fields>
  var_samp?: Maybe<Users_Var_Samp_Fields>
  variance?: Maybe<Users_Variance_Fields>
}

/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** append existing jsonb value of filtered columns with new jsonb value */
export type Users_Append_Input = {
  favorite_tricks?: Maybe<Scalars['jsonb']>
  interests?: Maybe<Scalars['jsonb']>
  nbds?: Maybe<Scalars['jsonb']>
  teams?: Maybe<Scalars['jsonb']>
  trick_todos?: Maybe<Scalars['jsonb']>
}

/** aggregate avg on columns */
export type Users_Avg_Fields = {
  __typename?: 'users_avg_fields'
  id?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Users_Bool_Exp>>
  _not?: Maybe<Users_Bool_Exp>
  _or?: Maybe<Array<Users_Bool_Exp>>
  activity?: Maybe<User_Activity_Bool_Exp>
  avatar?: Maybe<String_Comparison_Exp>
  bio?: Maybe<String_Comparison_Exp>
  birthday?: Maybe<Date_Comparison_Exp>
  chat_messages?: Maybe<Chat_Messages_Bool_Exp>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  current_setup?: Maybe<String_Comparison_Exp>
  disciplines?: Maybe<User_Disciplines_Bool_Exp>
  email?: Maybe<String_Comparison_Exp>
  favorite_tricks?: Maybe<Jsonb_Comparison_Exp>
  full_name?: Maybe<String_Comparison_Exp>
  id?: Maybe<Int_Comparison_Exp>
  interests?: Maybe<Jsonb_Comparison_Exp>
  is_registered_for_upcoming_stg?: Maybe<Boolean_Comparison_Exp>
  last_online_at?: Maybe<Timestamptz_Comparison_Exp>
  liked_by?: Maybe<Likes_User_User_Bool_Exp>
  liked_users?: Maybe<Likes_User_User_Bool_Exp>
  locations?: Maybe<User_Locations_Bool_Exp>
  nbds?: Maybe<Jsonb_Comparison_Exp>
  password?: Maybe<String_Comparison_Exp>
  posts?: Maybe<Posts_Bool_Exp>
  profession?: Maybe<String_Comparison_Exp>
  public_trick_todos?: Maybe<V_Public_User_Trick_Todos_Bool_Exp>
  refresh_tokens?: Maybe<Refresh_Tokens_Bool_Exp>
  role?: Maybe<E_User_Roles_Enum_Comparison_Exp>
  socials?: Maybe<User_Socials_Bool_Exp>
  stg_sets?: Maybe<Stg_Sets_Bool_Exp>
  stg_submissions?: Maybe<Stg_Submissions_Bool_Exp>
  teams?: Maybe<Jsonb_Comparison_Exp>
  trick_todos?: Maybe<Jsonb_Comparison_Exp>
  updated_at?: Maybe<Timestamptz_Comparison_Exp>
  username?: Maybe<String_Comparison_Exp>
  verified_email?: Maybe<Boolean_Comparison_Exp>
  willing_to_host?: Maybe<Boolean_Comparison_Exp>
}

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey',
  /** unique or primary key constraint */
  UsersRnKey = 'users_rn_key',
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Users_Delete_At_Path_Input = {
  favorite_tricks?: Maybe<Array<Scalars['String']>>
  interests?: Maybe<Array<Scalars['String']>>
  nbds?: Maybe<Array<Scalars['String']>>
  teams?: Maybe<Array<Scalars['String']>>
  trick_todos?: Maybe<Array<Scalars['String']>>
}

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Users_Delete_Elem_Input = {
  favorite_tricks?: Maybe<Scalars['Int']>
  interests?: Maybe<Scalars['Int']>
  nbds?: Maybe<Scalars['Int']>
  teams?: Maybe<Scalars['Int']>
  trick_todos?: Maybe<Scalars['Int']>
}

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Users_Delete_Key_Input = {
  favorite_tricks?: Maybe<Scalars['String']>
  interests?: Maybe<Scalars['String']>
  nbds?: Maybe<Scalars['String']>
  teams?: Maybe<Scalars['String']>
  trick_todos?: Maybe<Scalars['String']>
}

/** input type for incrementing numeric columns in table "users" */
export type Users_Inc_Input = {
  id?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  activity?: Maybe<User_Activity_Obj_Rel_Insert_Input>
  avatar?: Maybe<Scalars['String']>
  bio?: Maybe<Scalars['String']>
  birthday?: Maybe<Scalars['date']>
  chat_messages?: Maybe<Chat_Messages_Arr_Rel_Insert_Input>
  created_at?: Maybe<Scalars['timestamptz']>
  current_setup?: Maybe<Scalars['String']>
  disciplines?: Maybe<User_Disciplines_Arr_Rel_Insert_Input>
  email?: Maybe<Scalars['String']>
  favorite_tricks?: Maybe<Scalars['jsonb']>
  full_name?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['Int']>
  interests?: Maybe<Scalars['jsonb']>
  last_online_at?: Maybe<Scalars['timestamptz']>
  liked_by?: Maybe<Likes_User_User_Arr_Rel_Insert_Input>
  liked_users?: Maybe<Likes_User_User_Arr_Rel_Insert_Input>
  locations?: Maybe<User_Locations_Arr_Rel_Insert_Input>
  nbds?: Maybe<Scalars['jsonb']>
  password?: Maybe<Scalars['String']>
  posts?: Maybe<Posts_Arr_Rel_Insert_Input>
  profession?: Maybe<Scalars['String']>
  public_trick_todos?: Maybe<V_Public_User_Trick_Todos_Arr_Rel_Insert_Input>
  refresh_tokens?: Maybe<Refresh_Tokens_Arr_Rel_Insert_Input>
  role?: Maybe<E_User_Roles_Enum>
  socials?: Maybe<User_Socials_Obj_Rel_Insert_Input>
  stg_sets?: Maybe<Stg_Sets_Arr_Rel_Insert_Input>
  stg_submissions?: Maybe<Stg_Submissions_Arr_Rel_Insert_Input>
  teams?: Maybe<Scalars['jsonb']>
  trick_todos?: Maybe<Scalars['jsonb']>
  updated_at?: Maybe<Scalars['timestamptz']>
  username?: Maybe<Scalars['String']>
  verified_email?: Maybe<Scalars['Boolean']>
  willing_to_host?: Maybe<Scalars['Boolean']>
}

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields'
  avatar?: Maybe<Scalars['String']>
  bio?: Maybe<Scalars['String']>
  birthday?: Maybe<Scalars['date']>
  created_at?: Maybe<Scalars['timestamptz']>
  current_setup?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  full_name?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['Int']>
  last_online_at?: Maybe<Scalars['timestamptz']>
  password?: Maybe<Scalars['String']>
  profession?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
  username?: Maybe<Scalars['String']>
}

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields'
  avatar?: Maybe<Scalars['String']>
  bio?: Maybe<Scalars['String']>
  birthday?: Maybe<Scalars['date']>
  created_at?: Maybe<Scalars['timestamptz']>
  current_setup?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  full_name?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['Int']>
  last_online_at?: Maybe<Scalars['timestamptz']>
  password?: Maybe<Scalars['String']>
  profession?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
  username?: Maybe<Scalars['String']>
}

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Users>
}

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input
  /** on conflict condition */
  on_conflict?: Maybe<Users_On_Conflict>
}

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint
  update_columns?: Array<Users_Update_Column>
  where?: Maybe<Users_Bool_Exp>
}

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  activity?: Maybe<User_Activity_Order_By>
  avatar?: Maybe<Order_By>
  bio?: Maybe<Order_By>
  birthday?: Maybe<Order_By>
  chat_messages_aggregate?: Maybe<Chat_Messages_Aggregate_Order_By>
  created_at?: Maybe<Order_By>
  current_setup?: Maybe<Order_By>
  disciplines_aggregate?: Maybe<User_Disciplines_Aggregate_Order_By>
  email?: Maybe<Order_By>
  favorite_tricks?: Maybe<Order_By>
  full_name?: Maybe<Order_By>
  id?: Maybe<Order_By>
  interests?: Maybe<Order_By>
  is_registered_for_upcoming_stg?: Maybe<Order_By>
  last_online_at?: Maybe<Order_By>
  liked_by_aggregate?: Maybe<Likes_User_User_Aggregate_Order_By>
  liked_users_aggregate?: Maybe<Likes_User_User_Aggregate_Order_By>
  locations_aggregate?: Maybe<User_Locations_Aggregate_Order_By>
  nbds?: Maybe<Order_By>
  password?: Maybe<Order_By>
  posts_aggregate?: Maybe<Posts_Aggregate_Order_By>
  profession?: Maybe<Order_By>
  public_trick_todos_aggregate?: Maybe<V_Public_User_Trick_Todos_Aggregate_Order_By>
  refresh_tokens_aggregate?: Maybe<Refresh_Tokens_Aggregate_Order_By>
  role?: Maybe<Order_By>
  socials?: Maybe<User_Socials_Order_By>
  stg_sets_aggregate?: Maybe<Stg_Sets_Aggregate_Order_By>
  stg_submissions_aggregate?: Maybe<Stg_Submissions_Aggregate_Order_By>
  teams?: Maybe<Order_By>
  trick_todos?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  username?: Maybe<Order_By>
  verified_email?: Maybe<Order_By>
  willing_to_host?: Maybe<Order_By>
}

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['Int']
}

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Users_Prepend_Input = {
  favorite_tricks?: Maybe<Scalars['jsonb']>
  interests?: Maybe<Scalars['jsonb']>
  nbds?: Maybe<Scalars['jsonb']>
  teams?: Maybe<Scalars['jsonb']>
  trick_todos?: Maybe<Scalars['jsonb']>
}

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Avatar = 'avatar',
  /** column name */
  Bio = 'bio',
  /** column name */
  Birthday = 'birthday',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CurrentSetup = 'current_setup',
  /** column name */
  Email = 'email',
  /** column name */
  FavoriteTricks = 'favorite_tricks',
  /** column name */
  FullName = 'full_name',
  /** column name */
  Id = 'id',
  /** column name */
  Interests = 'interests',
  /** column name */
  LastOnlineAt = 'last_online_at',
  /** column name */
  Nbds = 'nbds',
  /** column name */
  Password = 'password',
  /** column name */
  Profession = 'profession',
  /** column name */
  Role = 'role',
  /** column name */
  Teams = 'teams',
  /** column name */
  TrickTodos = 'trick_todos',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Username = 'username',
  /** column name */
  VerifiedEmail = 'verified_email',
  /** column name */
  WillingToHost = 'willing_to_host',
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  avatar?: Maybe<Scalars['String']>
  bio?: Maybe<Scalars['String']>
  birthday?: Maybe<Scalars['date']>
  created_at?: Maybe<Scalars['timestamptz']>
  current_setup?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  favorite_tricks?: Maybe<Scalars['jsonb']>
  full_name?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['Int']>
  interests?: Maybe<Scalars['jsonb']>
  last_online_at?: Maybe<Scalars['timestamptz']>
  nbds?: Maybe<Scalars['jsonb']>
  password?: Maybe<Scalars['String']>
  profession?: Maybe<Scalars['String']>
  role?: Maybe<E_User_Roles_Enum>
  teams?: Maybe<Scalars['jsonb']>
  trick_todos?: Maybe<Scalars['jsonb']>
  updated_at?: Maybe<Scalars['timestamptz']>
  username?: Maybe<Scalars['String']>
  verified_email?: Maybe<Scalars['Boolean']>
  willing_to_host?: Maybe<Scalars['Boolean']>
}

/** aggregate stddev on columns */
export type Users_Stddev_Fields = {
  __typename?: 'users_stddev_fields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type Users_Stddev_Pop_Fields = {
  __typename?: 'users_stddev_pop_fields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type Users_Stddev_Samp_Fields = {
  __typename?: 'users_stddev_samp_fields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate sum on columns */
export type Users_Sum_Fields = {
  __typename?: 'users_sum_fields'
  id?: Maybe<Scalars['Int']>
}

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  Avatar = 'avatar',
  /** column name */
  Bio = 'bio',
  /** column name */
  Birthday = 'birthday',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CurrentSetup = 'current_setup',
  /** column name */
  Email = 'email',
  /** column name */
  FavoriteTricks = 'favorite_tricks',
  /** column name */
  FullName = 'full_name',
  /** column name */
  Id = 'id',
  /** column name */
  Interests = 'interests',
  /** column name */
  LastOnlineAt = 'last_online_at',
  /** column name */
  Nbds = 'nbds',
  /** column name */
  Password = 'password',
  /** column name */
  Profession = 'profession',
  /** column name */
  Role = 'role',
  /** column name */
  Teams = 'teams',
  /** column name */
  TrickTodos = 'trick_todos',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Username = 'username',
  /** column name */
  VerifiedEmail = 'verified_email',
  /** column name */
  WillingToHost = 'willing_to_host',
}

/** aggregate var_pop on columns */
export type Users_Var_Pop_Fields = {
  __typename?: 'users_var_pop_fields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type Users_Var_Samp_Fields = {
  __typename?: 'users_var_samp_fields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type Users_Variance_Fields = {
  __typename?: 'users_variance_fields'
  id?: Maybe<Scalars['Float']>
}

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>
  _gt?: Maybe<Scalars['uuid']>
  _gte?: Maybe<Scalars['uuid']>
  _in?: Maybe<Array<Scalars['uuid']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['uuid']>
  _lte?: Maybe<Scalars['uuid']>
  _neq?: Maybe<Scalars['uuid']>
  _nin?: Maybe<Array<Scalars['uuid']>>
}

/** columns and relationships of "v_posts_sorted" */
export type V_Posts_Sorted = {
  __typename?: 'v_posts_sorted'
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  /** An object relationship */
  post?: Maybe<Posts>
}

/** aggregated selection of "v_posts_sorted" */
export type V_Posts_Sorted_Aggregate = {
  __typename?: 'v_posts_sorted_aggregate'
  aggregate?: Maybe<V_Posts_Sorted_Aggregate_Fields>
  nodes: Array<V_Posts_Sorted>
}

/** aggregate fields of "v_posts_sorted" */
export type V_Posts_Sorted_Aggregate_Fields = {
  __typename?: 'v_posts_sorted_aggregate_fields'
  avg?: Maybe<V_Posts_Sorted_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<V_Posts_Sorted_Max_Fields>
  min?: Maybe<V_Posts_Sorted_Min_Fields>
  stddev?: Maybe<V_Posts_Sorted_Stddev_Fields>
  stddev_pop?: Maybe<V_Posts_Sorted_Stddev_Pop_Fields>
  stddev_samp?: Maybe<V_Posts_Sorted_Stddev_Samp_Fields>
  sum?: Maybe<V_Posts_Sorted_Sum_Fields>
  var_pop?: Maybe<V_Posts_Sorted_Var_Pop_Fields>
  var_samp?: Maybe<V_Posts_Sorted_Var_Samp_Fields>
  variance?: Maybe<V_Posts_Sorted_Variance_Fields>
}

/** aggregate fields of "v_posts_sorted" */
export type V_Posts_Sorted_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<V_Posts_Sorted_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type V_Posts_Sorted_Avg_Fields = {
  __typename?: 'v_posts_sorted_avg_fields'
  id?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "v_posts_sorted". All fields are combined with a logical 'AND'. */
export type V_Posts_Sorted_Bool_Exp = {
  _and?: Maybe<Array<V_Posts_Sorted_Bool_Exp>>
  _not?: Maybe<V_Posts_Sorted_Bool_Exp>
  _or?: Maybe<Array<V_Posts_Sorted_Bool_Exp>>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  id?: Maybe<Int_Comparison_Exp>
  post?: Maybe<Posts_Bool_Exp>
}

/** aggregate max on columns */
export type V_Posts_Sorted_Max_Fields = {
  __typename?: 'v_posts_sorted_max_fields'
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
}

/** aggregate min on columns */
export type V_Posts_Sorted_Min_Fields = {
  __typename?: 'v_posts_sorted_min_fields'
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
}

/** Ordering options when selecting data from "v_posts_sorted". */
export type V_Posts_Sorted_Order_By = {
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  post?: Maybe<Posts_Order_By>
}

/** select columns of table "v_posts_sorted" */
export enum V_Posts_Sorted_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
}

/** aggregate stddev on columns */
export type V_Posts_Sorted_Stddev_Fields = {
  __typename?: 'v_posts_sorted_stddev_fields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type V_Posts_Sorted_Stddev_Pop_Fields = {
  __typename?: 'v_posts_sorted_stddev_pop_fields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type V_Posts_Sorted_Stddev_Samp_Fields = {
  __typename?: 'v_posts_sorted_stddev_samp_fields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate sum on columns */
export type V_Posts_Sorted_Sum_Fields = {
  __typename?: 'v_posts_sorted_sum_fields'
  id?: Maybe<Scalars['Int']>
}

/** aggregate var_pop on columns */
export type V_Posts_Sorted_Var_Pop_Fields = {
  __typename?: 'v_posts_sorted_var_pop_fields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type V_Posts_Sorted_Var_Samp_Fields = {
  __typename?: 'v_posts_sorted_var_samp_fields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type V_Posts_Sorted_Variance_Fields = {
  __typename?: 'v_posts_sorted_variance_fields'
  id?: Maybe<Scalars['Float']>
}

/** columns and relationships of "v_public_user_trick_todos" */
export type V_Public_User_Trick_Todos = {
  __typename?: 'v_public_user_trick_todos'
  id?: Maybe<Scalars['Int']>
  todo?: Maybe<Scalars['jsonb']>
}

/** columns and relationships of "v_public_user_trick_todos" */
export type V_Public_User_Trick_TodosTodoArgs = {
  path?: Maybe<Scalars['String']>
}

/** aggregated selection of "v_public_user_trick_todos" */
export type V_Public_User_Trick_Todos_Aggregate = {
  __typename?: 'v_public_user_trick_todos_aggregate'
  aggregate?: Maybe<V_Public_User_Trick_Todos_Aggregate_Fields>
  nodes: Array<V_Public_User_Trick_Todos>
}

/** aggregate fields of "v_public_user_trick_todos" */
export type V_Public_User_Trick_Todos_Aggregate_Fields = {
  __typename?: 'v_public_user_trick_todos_aggregate_fields'
  avg?: Maybe<V_Public_User_Trick_Todos_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<V_Public_User_Trick_Todos_Max_Fields>
  min?: Maybe<V_Public_User_Trick_Todos_Min_Fields>
  stddev?: Maybe<V_Public_User_Trick_Todos_Stddev_Fields>
  stddev_pop?: Maybe<V_Public_User_Trick_Todos_Stddev_Pop_Fields>
  stddev_samp?: Maybe<V_Public_User_Trick_Todos_Stddev_Samp_Fields>
  sum?: Maybe<V_Public_User_Trick_Todos_Sum_Fields>
  var_pop?: Maybe<V_Public_User_Trick_Todos_Var_Pop_Fields>
  var_samp?: Maybe<V_Public_User_Trick_Todos_Var_Samp_Fields>
  variance?: Maybe<V_Public_User_Trick_Todos_Variance_Fields>
}

/** aggregate fields of "v_public_user_trick_todos" */
export type V_Public_User_Trick_Todos_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<V_Public_User_Trick_Todos_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "v_public_user_trick_todos" */
export type V_Public_User_Trick_Todos_Aggregate_Order_By = {
  avg?: Maybe<V_Public_User_Trick_Todos_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<V_Public_User_Trick_Todos_Max_Order_By>
  min?: Maybe<V_Public_User_Trick_Todos_Min_Order_By>
  stddev?: Maybe<V_Public_User_Trick_Todos_Stddev_Order_By>
  stddev_pop?: Maybe<V_Public_User_Trick_Todos_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<V_Public_User_Trick_Todos_Stddev_Samp_Order_By>
  sum?: Maybe<V_Public_User_Trick_Todos_Sum_Order_By>
  var_pop?: Maybe<V_Public_User_Trick_Todos_Var_Pop_Order_By>
  var_samp?: Maybe<V_Public_User_Trick_Todos_Var_Samp_Order_By>
  variance?: Maybe<V_Public_User_Trick_Todos_Variance_Order_By>
}

/** input type for inserting array relation for remote table "v_public_user_trick_todos" */
export type V_Public_User_Trick_Todos_Arr_Rel_Insert_Input = {
  data: Array<V_Public_User_Trick_Todos_Insert_Input>
}

/** aggregate avg on columns */
export type V_Public_User_Trick_Todos_Avg_Fields = {
  __typename?: 'v_public_user_trick_todos_avg_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "v_public_user_trick_todos" */
export type V_Public_User_Trick_Todos_Avg_Order_By = {
  id?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "v_public_user_trick_todos". All fields are combined with a logical 'AND'. */
export type V_Public_User_Trick_Todos_Bool_Exp = {
  _and?: Maybe<Array<V_Public_User_Trick_Todos_Bool_Exp>>
  _not?: Maybe<V_Public_User_Trick_Todos_Bool_Exp>
  _or?: Maybe<Array<V_Public_User_Trick_Todos_Bool_Exp>>
  id?: Maybe<Int_Comparison_Exp>
  todo?: Maybe<Jsonb_Comparison_Exp>
}

/** input type for inserting data into table "v_public_user_trick_todos" */
export type V_Public_User_Trick_Todos_Insert_Input = {
  id?: Maybe<Scalars['Int']>
  todo?: Maybe<Scalars['jsonb']>
}

/** aggregate max on columns */
export type V_Public_User_Trick_Todos_Max_Fields = {
  __typename?: 'v_public_user_trick_todos_max_fields'
  id?: Maybe<Scalars['Int']>
}

/** order by max() on columns of table "v_public_user_trick_todos" */
export type V_Public_User_Trick_Todos_Max_Order_By = {
  id?: Maybe<Order_By>
}

/** aggregate min on columns */
export type V_Public_User_Trick_Todos_Min_Fields = {
  __typename?: 'v_public_user_trick_todos_min_fields'
  id?: Maybe<Scalars['Int']>
}

/** order by min() on columns of table "v_public_user_trick_todos" */
export type V_Public_User_Trick_Todos_Min_Order_By = {
  id?: Maybe<Order_By>
}

/** Ordering options when selecting data from "v_public_user_trick_todos". */
export type V_Public_User_Trick_Todos_Order_By = {
  id?: Maybe<Order_By>
  todo?: Maybe<Order_By>
}

/** select columns of table "v_public_user_trick_todos" */
export enum V_Public_User_Trick_Todos_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Todo = 'todo',
}

/** aggregate stddev on columns */
export type V_Public_User_Trick_Todos_Stddev_Fields = {
  __typename?: 'v_public_user_trick_todos_stddev_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "v_public_user_trick_todos" */
export type V_Public_User_Trick_Todos_Stddev_Order_By = {
  id?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type V_Public_User_Trick_Todos_Stddev_Pop_Fields = {
  __typename?: 'v_public_user_trick_todos_stddev_pop_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "v_public_user_trick_todos" */
export type V_Public_User_Trick_Todos_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type V_Public_User_Trick_Todos_Stddev_Samp_Fields = {
  __typename?: 'v_public_user_trick_todos_stddev_samp_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "v_public_user_trick_todos" */
export type V_Public_User_Trick_Todos_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type V_Public_User_Trick_Todos_Sum_Fields = {
  __typename?: 'v_public_user_trick_todos_sum_fields'
  id?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "v_public_user_trick_todos" */
export type V_Public_User_Trick_Todos_Sum_Order_By = {
  id?: Maybe<Order_By>
}

/** aggregate var_pop on columns */
export type V_Public_User_Trick_Todos_Var_Pop_Fields = {
  __typename?: 'v_public_user_trick_todos_var_pop_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "v_public_user_trick_todos" */
export type V_Public_User_Trick_Todos_Var_Pop_Order_By = {
  id?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type V_Public_User_Trick_Todos_Var_Samp_Fields = {
  __typename?: 'v_public_user_trick_todos_var_samp_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "v_public_user_trick_todos" */
export type V_Public_User_Trick_Todos_Var_Samp_Order_By = {
  id?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type V_Public_User_Trick_Todos_Variance_Fields = {
  __typename?: 'v_public_user_trick_todos_variance_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "v_public_user_trick_todos" */
export type V_Public_User_Trick_Todos_Variance_Order_By = {
  id?: Maybe<Order_By>
}

/** columns and relationships of "v_users_online" */
export type V_Users_Online = {
  __typename?: 'v_users_online'
  id?: Maybe<Scalars['Int']>
  /** An object relationship */
  user?: Maybe<Users>
}

/** aggregated selection of "v_users_online" */
export type V_Users_Online_Aggregate = {
  __typename?: 'v_users_online_aggregate'
  aggregate?: Maybe<V_Users_Online_Aggregate_Fields>
  nodes: Array<V_Users_Online>
}

/** aggregate fields of "v_users_online" */
export type V_Users_Online_Aggregate_Fields = {
  __typename?: 'v_users_online_aggregate_fields'
  avg?: Maybe<V_Users_Online_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<V_Users_Online_Max_Fields>
  min?: Maybe<V_Users_Online_Min_Fields>
  stddev?: Maybe<V_Users_Online_Stddev_Fields>
  stddev_pop?: Maybe<V_Users_Online_Stddev_Pop_Fields>
  stddev_samp?: Maybe<V_Users_Online_Stddev_Samp_Fields>
  sum?: Maybe<V_Users_Online_Sum_Fields>
  var_pop?: Maybe<V_Users_Online_Var_Pop_Fields>
  var_samp?: Maybe<V_Users_Online_Var_Samp_Fields>
  variance?: Maybe<V_Users_Online_Variance_Fields>
}

/** aggregate fields of "v_users_online" */
export type V_Users_Online_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<V_Users_Online_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type V_Users_Online_Avg_Fields = {
  __typename?: 'v_users_online_avg_fields'
  id?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "v_users_online". All fields are combined with a logical 'AND'. */
export type V_Users_Online_Bool_Exp = {
  _and?: Maybe<Array<V_Users_Online_Bool_Exp>>
  _not?: Maybe<V_Users_Online_Bool_Exp>
  _or?: Maybe<Array<V_Users_Online_Bool_Exp>>
  id?: Maybe<Int_Comparison_Exp>
  user?: Maybe<Users_Bool_Exp>
}

/** aggregate max on columns */
export type V_Users_Online_Max_Fields = {
  __typename?: 'v_users_online_max_fields'
  id?: Maybe<Scalars['Int']>
}

/** aggregate min on columns */
export type V_Users_Online_Min_Fields = {
  __typename?: 'v_users_online_min_fields'
  id?: Maybe<Scalars['Int']>
}

/** Ordering options when selecting data from "v_users_online". */
export type V_Users_Online_Order_By = {
  id?: Maybe<Order_By>
  user?: Maybe<Users_Order_By>
}

/** select columns of table "v_users_online" */
export enum V_Users_Online_Select_Column {
  /** column name */
  Id = 'id',
}

/** aggregate stddev on columns */
export type V_Users_Online_Stddev_Fields = {
  __typename?: 'v_users_online_stddev_fields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type V_Users_Online_Stddev_Pop_Fields = {
  __typename?: 'v_users_online_stddev_pop_fields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type V_Users_Online_Stddev_Samp_Fields = {
  __typename?: 'v_users_online_stddev_samp_fields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate sum on columns */
export type V_Users_Online_Sum_Fields = {
  __typename?: 'v_users_online_sum_fields'
  id?: Maybe<Scalars['Int']>
}

/** aggregate var_pop on columns */
export type V_Users_Online_Var_Pop_Fields = {
  __typename?: 'v_users_online_var_pop_fields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type V_Users_Online_Var_Samp_Fields = {
  __typename?: 'v_users_online_var_samp_fields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type V_Users_Online_Variance_Fields = {
  __typename?: 'v_users_online_variance_fields'
  id?: Maybe<Scalars['Float']>
}

export type AuthdUserFragment = { __typename?: 'users' } & Pick<
  Users,
  | 'id'
  | 'full_name'
  | 'username'
  | 'avatar'
  | 'email'
  | 'verified_email'
  | 'role'
  | 'is_registered_for_upcoming_stg'
> & {
    activity?: Maybe<
      { __typename?: 'user_activity' } & Pick<User_Activity, 'app' | 'posts_page' | 'chat_page'>
    >
  }

export type BasicFieldsUserFragment = { __typename?: 'users' } & Pick<
  Users,
  | 'id'
  | 'full_name'
  | 'username'
  | 'bio'
  | 'avatar'
  | 'profession'
  | 'created_at'
  | 'updated_at'
  | 'role'
  | 'is_registered_for_upcoming_stg'
> & {
    activity?: Maybe<{ __typename?: 'user_activity' } & Pick<User_Activity, 'app'>>
    locations: Array<
      { __typename?: 'user_locations' } & Pick<
        User_Locations,
        | 'id'
        | 'type'
        | 'lat'
        | 'lng'
        | 'country_long_name'
        | 'country_short_name'
        | 'formatted_address'
      >
    >
    socials?: Maybe<
      { __typename?: 'user_socials' } & Pick<
        User_Socials,
        'facebook' | 'twitter' | 'instagram' | 'youtube' | 'tiktok' | 'spotify'
      >
    >
  }

export type ChatMessageFragment = { __typename: 'chat_messages' } & Pick<
  Chat_Messages,
  'id' | 'text' | 'author_id' | 'created_at'
> & {
    author?: Maybe<
      { __typename?: 'users' } & Pick<Users, 'id' | 'full_name' | 'username'> & {
          activity?: Maybe<{ __typename?: 'user_activity' } & Pick<User_Activity, 'app'>>
        }
    >
    likes: Array<
      { __typename: 'likes_chat_message_user' } & Pick<
        Likes_Chat_Message_User,
        'chat_message_id' | 'liked_by_user_id'
      > & { user: { __typename?: 'users' } & Pick<Users, 'id' | 'full_name' | 'username'> }
    >
  }

export type PostMessageFragment = { __typename: 'post_messages' } & Pick<
  Post_Messages,
  'id' | 'text' | 'author_id' | 'post_id' | 'created_at'
> & {
    author?: Maybe<{ __typename?: 'users' } & Pick<Users, 'id' | 'full_name' | 'username'>>
    likes: Array<
      { __typename?: 'likes_post_message_user' } & Pick<
        Likes_Post_Message_User,
        'liked_by_user_id'
      > & { user: { __typename?: 'users' } & Pick<Users, 'full_name'> }
    >
    post?: Maybe<
      { __typename?: 'posts' } & Pick<Posts, 'id'> & {
          messages: Array<
            { __typename?: 'post_messages' } & Pick<Post_Messages, 'id' | 'text'> & {
                author?: Maybe<
                  { __typename?: 'users' } & Pick<Users, 'id' | 'full_name' | 'username'>
                >
                likes: Array<
                  { __typename?: 'likes_post_message_user' } & Pick<
                    Likes_Post_Message_User,
                    'liked_by_user_id'
                  > & { user: { __typename?: 'users' } & Pick<Users, 'full_name'> }
                >
              }
          >
        }
    >
  }

export type PostFragment = { __typename: 'posts' } & Pick<
  Posts,
  | 'id'
  | 'body'
  | 'created_at'
  | 'updated_at'
  | 'posted_by_id'
  | 'image_url'
  | 'video_asset_id'
  | 'video_playback_id'
  | 'oembed'
> & {
    tags: Array<{ __typename?: 'post_tags' } & Pick<Post_Tags, 'tag'>>
    posted_by?: Maybe<
      { __typename?: 'users' } & Pick<Users, 'id' | 'full_name' | 'username' | 'avatar'>
    >
    likes: Array<
      { __typename?: 'likes_post_user' } & Pick<Likes_Post_User, 'liked_by_user_id'> & {
          user: { __typename?: 'users' } & Pick<Users, 'full_name'>
        }
    >
    messages: Array<
      { __typename?: 'post_messages' } & Pick<
        Post_Messages,
        'id' | 'text' | 'created_at' | 'author_id'
      > & {
          author?: Maybe<
            { __typename?: 'users' } & Pick<Users, 'id' | 'full_name' | 'username' | 'avatar'>
          >
          likes: Array<
            { __typename?: 'likes_post_message_user' } & Pick<
              Likes_Post_Message_User,
              'liked_by_user_id'
            > & { user: { __typename?: 'users' } & Pick<Users, 'full_name'> }
          >
        }
    >
  }

export type StgByIdFragment = { __typename?: 'stgs' } & Pick<
  Stgs,
  'id' | 'status' | 'created_at' | 'updated_at'
> & {
    sets: Array<{ __typename?: 'stg_sets' } & TinyStgSetFragment>
    submissions: Array<{ __typename?: 'stg_submissions' } & TinyStgSubmissionFragment>
  }

export type StgSetMessageFragment = { __typename: 'stg_set_messages' } & Pick<
  Stg_Set_Messages,
  'id' | 'text' | 'author_id' | 'stg_set_id' | 'created_at'
> & {
    author?: Maybe<
      { __typename?: 'users' } & Pick<Users, 'id' | 'full_name' | 'username' | 'avatar'>
    >
    likes: Array<
      { __typename?: 'likes_stg_set_message_user' } & Pick<
        Likes_Stg_Set_Message_User,
        'liked_by_user_id'
      > & { user: { __typename?: 'users' } & Pick<Users, 'full_name'> }
    >
    set?: Maybe<
      { __typename?: 'stg_sets' } & Pick<Stg_Sets, 'id'> & {
          messages: Array<
            { __typename?: 'stg_set_messages' } & Pick<Stg_Set_Messages, 'id' | 'text'> & {
                author?: Maybe<
                  { __typename?: 'users' } & Pick<Users, 'id' | 'full_name' | 'username' | 'avatar'>
                >
                likes: Array<
                  { __typename?: 'likes_stg_set_message_user' } & Pick<
                    Likes_Stg_Set_Message_User,
                    'liked_by_user_id'
                  > & { user: { __typename?: 'users' } & Pick<Users, 'full_name'> }
                >
              }
          >
        }
    >
  }

export type StgSetFragment = { __typename?: 'stg_sets' } & Pick<
  Stg_Sets,
  | 'id'
  | 'stg_id'
  | 'video_asset_id'
  | 'video_playback_id'
  | 'title'
  | 'instructions'
  | 'created_at'
  | 'set_by_id'
> & {
    stg?: Maybe<
      { __typename?: 'stgs' } & Pick<Stgs, 'id' | 'status'> & {
          players: Array<{ __typename?: 'stg_players' } & Pick<Stg_Players, 'player_id'>>
          sets: Array<
            { __typename?: 'stg_sets' } & Pick<Stg_Sets, 'id' | 'set_by_id'> & {
                set_by?: Maybe<{ __typename?: 'users' } & Pick<Users, 'id'>>
              }
          >
        }
    >
    set_by?: Maybe<
      { __typename?: 'users' } & Pick<Users, 'id' | 'full_name' | 'username' | 'avatar'> & {
          locations: Array<
            { __typename?: 'user_locations' } & Pick<
              User_Locations,
              | 'id'
              | 'type'
              | 'lat'
              | 'lng'
              | 'country_long_name'
              | 'country_short_name'
              | 'formatted_address'
            >
          >
        }
    >
    submissions_where_landed_aggregate: { __typename?: 'stg_submissions_aggregate' } & {
      aggregate?: Maybe<
        { __typename?: 'stg_submissions_aggregate_fields' } & Pick<
          Stg_Submissions_Aggregate_Fields,
          'count'
        >
      >
    }
    submissions_where_landed: Array<
      { __typename?: 'stg_submissions' } & Pick<
        Stg_Submissions,
        | 'id'
        | 'created_at'
        | 'video_asset_id'
        | 'video_playback_id'
        | 'stg_id'
        | 'stg_set_id'
        | 'submitted_by_id'
      > & {
          set_landed?: Maybe<{ __typename?: 'stg_sets' } & Pick<Stg_Sets, 'title'>>
          submitted_by?: Maybe<
            { __typename?: 'users' } & Pick<Users, 'id' | 'full_name' | 'username' | 'avatar'> & {
                locations: Array<
                  { __typename?: 'user_locations' } & Pick<
                    User_Locations,
                    | 'id'
                    | 'type'
                    | 'lat'
                    | 'lng'
                    | 'country_long_name'
                    | 'country_short_name'
                    | 'formatted_address'
                  >
                >
              }
          >
          messages: Array<{ __typename?: 'stg_submission_messages' } & StgSubmissionMessageFragment>
          likes: Array<
            { __typename?: 'likes_stg_submission_user' } & Pick<
              Likes_Stg_Submission_User,
              'liked_by_user_id'
            > & { user: { __typename?: 'users' } & Pick<Users, 'full_name'> }
          >
        }
    >
    likes: Array<
      { __typename?: 'likes_stg_set_user' } & Pick<Likes_Stg_Set_User, 'liked_by_user_id'> & {
          user: { __typename?: 'users' } & Pick<Users, 'full_name'>
        }
    >
    messages: Array<{ __typename?: 'stg_set_messages' } & StgSetMessageFragment>
  }

export type StgSubmissionMessageFragment = { __typename: 'stg_submission_messages' } & Pick<
  Stg_Submission_Messages,
  'id' | 'text' | 'author_id' | 'stg_submission_id' | 'created_at'
> & {
    author?: Maybe<
      { __typename?: 'users' } & Pick<Users, 'id' | 'full_name' | 'username' | 'avatar'>
    >
    likes: Array<
      { __typename?: 'likes_stg_submission_message_user' } & Pick<
        Likes_Stg_Submission_Message_User,
        'liked_by_user_id'
      > & { user: { __typename?: 'users' } & Pick<Users, 'full_name'> }
    >
    submission?: Maybe<
      { __typename?: 'stg_submissions' } & Pick<Stg_Submissions, 'id'> & {
          messages: Array<
            { __typename?: 'stg_submission_messages' } & Pick<
              Stg_Submission_Messages,
              'id' | 'text'
            > & {
                author?: Maybe<
                  { __typename?: 'users' } & Pick<Users, 'id' | 'full_name' | 'username' | 'avatar'>
                >
                likes: Array<
                  { __typename?: 'likes_stg_submission_message_user' } & Pick<
                    Likes_Stg_Submission_Message_User,
                    'liked_by_user_id'
                  > & { user: { __typename?: 'users' } & Pick<Users, 'full_name'> }
                >
              }
          >
        }
    >
  }

export type StgSubmissionFragment = { __typename?: 'stg_submissions' } & Pick<
  Stg_Submissions,
  'id' | 'stg_id' | 'video_asset_id' | 'video_playback_id' | 'created_at' | 'submitted_by_id'
> & {
    stg?: Maybe<
      { __typename?: 'stgs' } & Pick<Stgs, 'id' | 'status'> & {
          sets: Array<
            { __typename?: 'stg_sets' } & Pick<Stg_Sets, 'id' | 'set_by_id'> & {
                set_by?: Maybe<{ __typename?: 'users' } & Pick<Users, 'id'>>
              }
          >
        }
    >
    submitted_by?: Maybe<
      { __typename?: 'users' } & Pick<Users, 'id' | 'full_name' | 'username' | 'avatar'> & {
          locations: Array<
            { __typename?: 'user_locations' } & Pick<
              User_Locations,
              | 'id'
              | 'type'
              | 'lat'
              | 'lng'
              | 'country_long_name'
              | 'country_short_name'
              | 'formatted_address'
            >
          >
        }
    >
    set_landed?: Maybe<{ __typename?: 'stg_sets' } & TinyStgSetFragment>
    likes: Array<
      { __typename?: 'likes_stg_submission_user' } & Pick<
        Likes_Stg_Submission_User,
        'liked_by_user_id'
      > & { user: { __typename?: 'users' } & Pick<Users, 'full_name'> }
    >
    messages: Array<{ __typename?: 'stg_submission_messages' } & StgSubmissionMessageFragment>
  }

export type StgFragment = { __typename?: 'stgs' } & Pick<
  Stgs,
  'id' | 'status' | 'created_at' | 'updated_at'
> & {
    players: Array<
      { __typename?: 'stg_players' } & Pick<Stg_Players, 'player_id'> & {
          player?: Maybe<
            { __typename?: 'users' } & Pick<
              Users,
              'id' | 'full_name' | 'username' | 'avatar' | 'bio'
            > & {
                disciplines: Array<
                  { __typename?: 'user_disciplines' } & Pick<User_Disciplines, 'discipline'>
                >
                socials?: Maybe<
                  { __typename?: 'user_socials' } & Pick<
                    User_Socials,
                    'facebook' | 'twitter' | 'instagram' | 'youtube' | 'tiktok' | 'spotify'
                  >
                >
                locations: Array<
                  { __typename?: 'user_locations' } & Pick<
                    User_Locations,
                    | 'id'
                    | 'type'
                    | 'lat'
                    | 'lng'
                    | 'country_long_name'
                    | 'country_short_name'
                    | 'formatted_address'
                  >
                >
              }
          >
        }
    >
    sets: Array<{ __typename?: 'stg_sets' } & TinyStgSetFragment>
    submissions: Array<{ __typename?: 'stg_submissions' } & TinyStgSubmissionFragment>
  }

export type SummaryPostFragment = { __typename: 'posts' } & Pick<
  Posts,
  | 'id'
  | 'body'
  | 'created_at'
  | 'updated_at'
  | 'posted_by_id'
  | 'image_url'
  | 'video_asset_id'
  | 'video_playback_id'
  | 'oembed'
> & {
    tags: Array<{ __typename?: 'post_tags' } & Pick<Post_Tags, 'tag'>>
    posted_by?: Maybe<
      { __typename?: 'users' } & Pick<Users, 'id' | 'full_name' | 'username' | 'avatar'>
    >
    likes: Array<
      { __typename?: 'likes_post_user' } & Pick<Likes_Post_User, 'liked_by_user_id'> & {
          user: { __typename?: 'users' } & Pick<Users, 'full_name'>
        }
    >
    messages: Array<
      { __typename?: 'post_messages' } & Pick<
        Post_Messages,
        'id' | 'text' | 'created_at' | 'author_id'
      > & {
          author?: Maybe<
            { __typename?: 'users' } & Pick<Users, 'id' | 'full_name' | 'username' | 'avatar'>
          >
          likes: Array<
            { __typename?: 'likes_post_message_user' } & Pick<
              Likes_Post_Message_User,
              'liked_by_user_id'
            > & { user: { __typename?: 'users' } & Pick<Users, 'full_name'> }
          >
        }
    >
    messages_aggregate: { __typename?: 'post_messages_aggregate' } & {
      aggregate?: Maybe<
        { __typename?: 'post_messages_aggregate_fields' } & Pick<
          Post_Messages_Aggregate_Fields,
          'count'
        >
      >
    }
  }

export type TinyStgSetFragment = { __typename?: 'stg_sets' } & Pick<
  Stg_Sets,
  | 'id'
  | 'stg_id'
  | 'video_asset_id'
  | 'video_playback_id'
  | 'title'
  | 'instructions'
  | 'set_by_id'
  | 'created_at'
> & {
    set_by?: Maybe<
      { __typename?: 'users' } & Pick<Users, 'id' | 'full_name' | 'username' | 'avatar'> & {
          locations: Array<
            { __typename?: 'user_locations' } & Pick<
              User_Locations,
              | 'id'
              | 'type'
              | 'lat'
              | 'lng'
              | 'country_long_name'
              | 'country_short_name'
              | 'formatted_address'
            >
          >
        }
    >
    submissions_where_landed: Array<
      { __typename?: 'stg_submissions' } & {
        submitted_by?: Maybe<
          { __typename?: 'users' } & Pick<Users, 'full_name' | 'username' | 'avatar'>
        >
      }
    >
    submissions_where_landed_aggregate: { __typename?: 'stg_submissions_aggregate' } & {
      aggregate?: Maybe<
        { __typename?: 'stg_submissions_aggregate_fields' } & Pick<
          Stg_Submissions_Aggregate_Fields,
          'count'
        >
      >
    }
    likes: Array<
      { __typename?: 'likes_stg_set_user' } & Pick<Likes_Stg_Set_User, 'liked_by_user_id'> & {
          user: { __typename?: 'users' } & Pick<Users, 'full_name'>
        }
    >
    messages: Array<{ __typename?: 'stg_set_messages' } & StgSetMessageFragment>
  }

export type TinyStgSubmissionFragment = { __typename?: 'stg_submissions' } & Pick<
  Stg_Submissions,
  'id' | 'stg_id' | 'video_asset_id' | 'video_playback_id' | 'created_at' | 'submitted_by_id'
> & {
    submitted_by?: Maybe<
      { __typename?: 'users' } & Pick<Users, 'id' | 'full_name' | 'username' | 'avatar' | 'bio'> & {
          disciplines: Array<
            { __typename?: 'user_disciplines' } & Pick<User_Disciplines, 'discipline'>
          >
          socials?: Maybe<
            { __typename?: 'user_socials' } & Pick<
              User_Socials,
              'facebook' | 'twitter' | 'instagram' | 'youtube' | 'tiktok' | 'spotify'
            >
          >
          locations: Array<
            { __typename?: 'user_locations' } & Pick<
              User_Locations,
              | 'id'
              | 'type'
              | 'lat'
              | 'lng'
              | 'country_long_name'
              | 'country_short_name'
              | 'formatted_address'
            >
          >
        }
    >
    set_landed?: Maybe<{ __typename?: 'stg_sets' } & TinyStgSetFragment>
    likes: Array<
      { __typename?: 'likes_stg_submission_user' } & Pick<
        Likes_Stg_Submission_User,
        'liked_by_user_id'
      > & { user: { __typename?: 'users' } & Pick<Users, 'full_name'> }
    >
    messages_aggregate: { __typename?: 'stg_submission_messages_aggregate' } & {
      aggregate?: Maybe<
        { __typename?: 'stg_submission_messages_aggregate_fields' } & Pick<
          Stg_Submission_Messages_Aggregate_Fields,
          'count'
        >
      >
    }
    messages: Array<{ __typename?: 'stg_submission_messages' } & StgSubmissionMessageFragment>
  }

export type TinyUserFragment = { __typename?: 'users' } & Pick<
  Users,
  'id' | 'full_name' | 'username' | 'avatar' | 'bio' | 'profession' | 'created_at' | 'updated_at'
> & {
    activity?: Maybe<{ __typename?: 'user_activity' } & Pick<User_Activity, 'app'>>
    locations: Array<
      { __typename?: 'user_locations' } & Pick<
        User_Locations,
        'type' | 'country_long_name' | 'country_short_name' | 'formatted_address'
      >
    >
    socials?: Maybe<
      { __typename?: 'user_socials' } & Pick<
        User_Socials,
        'facebook' | 'twitter' | 'instagram' | 'youtube' | 'tiktok' | 'spotify'
      >
    >
    disciplines: Array<{ __typename?: 'user_disciplines' } & Pick<User_Disciplines, 'discipline'>>
  }

export type UserFragment = { __typename?: 'users' } & Pick<
  Users,
  | 'id'
  | 'full_name'
  | 'username'
  | 'avatar'
  | 'current_setup'
  | 'bio'
  | 'profession'
  | 'birthday'
  | 'created_at'
  | 'updated_at'
  | 'willing_to_host'
  | 'nbds'
  | 'teams'
  | 'favorite_tricks'
  | 'interests'
  | 'role'
  | 'is_registered_for_upcoming_stg'
> & {
    disciplines: Array<{ __typename?: 'user_disciplines' } & Pick<User_Disciplines, 'discipline'>>
    public_trick_todos: Array<
      { __typename?: 'v_public_user_trick_todos' } & Pick<V_Public_User_Trick_Todos, 'todo'>
    >
    locations: Array<
      { __typename?: 'user_locations' } & Pick<
        User_Locations,
        | 'id'
        | 'type'
        | 'lat'
        | 'lng'
        | 'country_long_name'
        | 'country_short_name'
        | 'formatted_address'
      >
    >
    liked_users: Array<
      { __typename?: 'likes_user_user' } & Pick<Likes_User_User, 'liked_by_user_id'> & {
          liked_by: { __typename?: 'users' } & Pick<
            Users,
            'id' | 'full_name' | 'username' | 'avatar'
          >
        }
    >
    liked_by: Array<
      { __typename?: 'likes_user_user' } & Pick<Likes_User_User, 'liked_user_id'> & {
          liked_user: { __typename?: 'users' } & Pick<
            Users,
            'id' | 'full_name' | 'username' | 'avatar'
          >
        }
    >
    socials?: Maybe<
      { __typename?: 'user_socials' } & Pick<
        User_Socials,
        'facebook' | 'twitter' | 'instagram' | 'youtube' | 'tiktok' | 'spotify'
      >
    >
    posts: Array<{ __typename?: 'posts' } & SummaryPostFragment>
  }

export type DeleteMessageByIdMutationVariables = Exact<{
  id: Scalars['Int']
}>

export type DeleteMessageByIdMutation = { __typename?: 'mutation_root' } & {
  delete_chat_messages_by_pk?: Maybe<{ __typename?: 'chat_messages' } & ChatMessageFragment>
  delete_stg_set_messages_by_pk?: Maybe<{ __typename?: 'stg_set_messages' } & StgSetMessageFragment>
  delete_stg_submission_messages_by_pk?: Maybe<
    { __typename?: 'stg_submission_messages' } & StgSubmissionMessageFragment
  >
  delete_post_messages_by_pk?: Maybe<{ __typename?: 'post_messages' } & PostMessageFragment>
}

export type DeletePostByIdMutationVariables = Exact<{
  post_id: Scalars['Int']
}>

export type DeletePostByIdMutation = { __typename?: 'mutation_root' } & {
  delete_posts_by_pk?: Maybe<{ __typename?: 'posts' } & SummaryPostFragment>
}

export type DeletePostTagsByPostIdMutationVariables = Exact<{
  post_id: Scalars['Int']
}>

export type DeletePostTagsByPostIdMutation = { __typename?: 'mutation_root' } & {
  delete_post_tags?: Maybe<
    { __typename?: 'post_tags_mutation_response' } & Pick<
      Post_Tags_Mutation_Response,
      'affected_rows'
    >
  >
}

export type DeleteStgPlayerMutationVariables = Exact<{
  stg_id: Scalars['Int']
}>

export type DeleteStgPlayerMutation = { __typename?: 'mutation_root' } & {
  delete_stg_players?: Maybe<
    { __typename?: 'stg_players_mutation_response' } & Pick<
      Stg_Players_Mutation_Response,
      'affected_rows'
    > & {
        returning: Array<
          { __typename?: 'stg_players' } & {
            stg?: Maybe<
              { __typename?: 'stgs' } & Pick<Stgs, 'id'> & {
                  players: Array<
                    { __typename?: 'stg_players' } & {
                      player?: Maybe<
                        { __typename?: 'users' } & Pick<
                          Users,
                          'id' | 'full_name' | 'username' | 'avatar'
                        >
                      >
                    }
                  >
                }
            >
          }
        >
      }
  >
}

export type DeleteStgSubmissionByIdMutationVariables = Exact<{
  id: Scalars['Int']
}>

export type DeleteStgSubmissionByIdMutation = { __typename?: 'mutation_root' } & {
  delete_stg_submissions_by_pk?: Maybe<
    { __typename?: 'stg_submissions' } & Pick<Stg_Submissions, 'id'> & {
        stg?: Maybe<{ __typename?: 'stgs' } & StgFragment>
      }
  >
}

export type DeleteUpcomingStgSetMutationVariables = Exact<{ [key: string]: never }>

export type DeleteUpcomingStgSetMutation = { __typename?: 'mutation_root' } & {
  delete_stg_sets?: Maybe<
    { __typename?: 'stg_sets_mutation_response' } & {
      returning: Array<
        { __typename?: 'stg_sets' } & Pick<
          Stg_Sets,
          'id' | 'instructions' | 'video_asset_id' | 'video_playback_id'
        > & {
            set_by?: Maybe<{ __typename?: 'users' } & Pick<Users, 'full_name' | 'username' | 'id'>>
            stg?: Maybe<
              { __typename?: 'stgs' } & Pick<Stgs, 'id' | 'status'> & {
                  sets: Array<
                    { __typename?: 'stg_sets' } & Pick<
                      Stg_Sets,
                      'id' | 'instructions' | 'video_asset_id' | 'video_playback_id'
                    > & {
                        set_by?: Maybe<
                          { __typename?: 'users' } & Pick<Users, 'full_name' | 'username' | 'id'>
                        >
                      }
                  >
                  submissions: Array<
                    { __typename?: 'stg_submissions' } & Pick<
                      Stg_Submissions,
                      'id' | 'video_asset_id' | 'video_playback_id' | 'created_at'
                    > & {
                        submitted_by?: Maybe<
                          { __typename?: 'users' } & Pick<Users, 'full_name' | 'username' | 'id'>
                        >
                      }
                  >
                }
            >
          }
      >
    }
  >
}

export type DeleteUserDisciplinesMutationVariables = Exact<{ [key: string]: never }>

export type DeleteUserDisciplinesMutation = { __typename?: 'mutation_root' } & {
  delete_user_disciplines?: Maybe<
    { __typename?: 'user_disciplines_mutation_response' } & Pick<
      User_Disciplines_Mutation_Response,
      'affected_rows'
    >
  >
}

export type DeleteUserLocationByTypeMutationVariables = Exact<{
  type: E_User_Locations_Enum
}>

export type DeleteUserLocationByTypeMutation = { __typename?: 'mutation_root' } & {
  delete_user_locations?: Maybe<
    { __typename?: 'user_locations_mutation_response' } & Pick<
      User_Locations_Mutation_Response,
      'affected_rows'
    > & {
        returning: Array<{ __typename?: 'user_locations' } & Pick<User_Locations, 'lat' | 'lng'>>
      }
  >
}

export type InsertChatMessageMutationVariables = Exact<{
  text: Scalars['String']
}>

export type InsertChatMessageMutation = { __typename?: 'mutation_root' } & {
  insert_chat_messages_one?: Maybe<{ __typename?: 'chat_messages' } & ChatMessageFragment>
}

export type InsertPostMessageMutationVariables = Exact<{
  post_id: Scalars['Int']
  text: Scalars['String']
}>

export type InsertPostMessageMutation = { __typename?: 'mutation_root' } & {
  insert_post_messages_one?: Maybe<{ __typename?: 'post_messages' } & PostMessageFragment>
}

export type InsertPostTagsMutationVariables = Exact<{
  objects: Array<Post_Tags_Insert_Input> | Post_Tags_Insert_Input
}>

export type InsertPostTagsMutation = { __typename?: 'mutation_root' } & {
  insert_post_tags?: Maybe<
    { __typename?: 'post_tags_mutation_response' } & {
      returning: Array<{ __typename?: 'post_tags' } & Pick<Post_Tags, 'post_id' | 'tag'>>
    }
  >
}

export type InsertPostMutationVariables = Exact<{
  body: Scalars['String']
  image_url?: Maybe<Scalars['String']>
  tags?: Maybe<Post_Tags_Arr_Rel_Insert_Input>
  oembed?: Maybe<Scalars['jsonb']>
  video_asset_id?: Maybe<Scalars['String']>
  video_playback_id?: Maybe<Scalars['String']>
}>

export type InsertPostMutation = { __typename?: 'mutation_root' } & {
  insert_posts_one?: Maybe<{ __typename?: 'posts' } & PostFragment>
}

export type InsertStgPlayerMutationVariables = Exact<{
  stg_id: Scalars['Int']
}>

export type InsertStgPlayerMutation = { __typename?: 'mutation_root' } & {
  insert_stg_players_one?: Maybe<
    { __typename?: 'stg_players' } & {
      stg?: Maybe<
        { __typename?: 'stgs' } & Pick<Stgs, 'id'> & {
            players: Array<
              { __typename?: 'stg_players' } & {
                player?: Maybe<
                  { __typename?: 'users' } & Pick<Users, 'id' | 'full_name' | 'username' | 'avatar'>
                >
              }
            >
          }
      >
    }
  >
}

export type InsertStgSetMessageMutationVariables = Exact<{
  stg_set_id: Scalars['Int']
  text: Scalars['String']
}>

export type InsertStgSetMessageMutation = { __typename?: 'mutation_root' } & {
  insert_stg_set_messages_one?: Maybe<{ __typename?: 'stg_set_messages' } & StgSetMessageFragment>
}

export type InsertStgSetMutationVariables = Exact<{
  stg_id: Scalars['Int']
  title: Scalars['String']
  instructions: Scalars['String']
  video_asset_id: Scalars['String']
  video_playback_id: Scalars['String']
}>

export type InsertStgSetMutation = { __typename?: 'mutation_root' } & {
  insert_stg_sets_one?: Maybe<
    { __typename?: 'stg_sets' } & Pick<Stg_Sets, 'id'> & {
        stg?: Maybe<{ __typename?: 'stgs' } & StgFragment>
      }
  >
}

export type InsertStgSubmissionMessageMutationVariables = Exact<{
  stg_submission_id: Scalars['Int']
  text: Scalars['String']
}>

export type InsertStgSubmissionMessageMutation = { __typename?: 'mutation_root' } & {
  insert_stg_submission_messages_one?: Maybe<
    { __typename?: 'stg_submission_messages' } & StgSubmissionMessageFragment
  >
}

export type InsertStgSubmissionMutationVariables = Exact<{
  stg_set_id: Scalars['Int']
  stg_id: Scalars['Int']
  video_asset_id: Scalars['String']
  video_playback_id: Scalars['String']
}>

export type InsertStgSubmissionMutation = { __typename?: 'mutation_root' } & {
  insert_stg_submissions_one?: Maybe<
    { __typename?: 'stg_submissions' } & Pick<Stg_Submissions, 'id'> & {
        stg?: Maybe<{ __typename?: 'stgs' } & StgFragment>
      }
  >
}

export type InsertUserDisciplinesMutationVariables = Exact<{
  objects: Array<User_Disciplines_Insert_Input> | User_Disciplines_Insert_Input
}>

export type InsertUserDisciplinesMutation = { __typename?: 'mutation_root' } & {
  insert_user_disciplines?: Maybe<
    { __typename?: 'user_disciplines_mutation_response' } & {
      returning: Array<{ __typename?: 'user_disciplines' } & Pick<User_Disciplines, 'discipline'>>
    }
  >
}

export type LikeChatMessageMutationVariables = Exact<{
  chat_message_id: Scalars['Int']
}>

export type LikeChatMessageMutation = { __typename?: 'mutation_root' } & {
  insert_likes_chat_message_user_one?: Maybe<
    { __typename: 'likes_chat_message_user' } & {
      chat_message: { __typename?: 'chat_messages' } & ChatMessageFragment
      user: { __typename?: 'users' } & Pick<Users, 'id'>
    }
  >
}

export type LikePostMessageMutationVariables = Exact<{
  post_message_id: Scalars['Int']
}>

export type LikePostMessageMutation = { __typename?: 'mutation_root' } & {
  insert_likes_post_message_user_one?: Maybe<
    { __typename: 'likes_post_message_user' } & {
      post_message: { __typename?: 'post_messages' } & PostMessageFragment
      user: { __typename?: 'users' } & Pick<Users, 'full_name'>
    }
  >
}

export type LikePostMutationVariables = Exact<{
  post_id: Scalars['Int']
}>

export type LikePostMutation = { __typename?: 'mutation_root' } & {
  insert_likes_post_user_one?: Maybe<
    { __typename: 'likes_post_user' } & Pick<Likes_Post_User, 'post_id' | 'liked_by_user_id'> & {
        post: { __typename?: 'posts' } & PostFragment
      }
  >
}

export type LikeStgSetMessageMutationVariables = Exact<{
  stg_set_message_id: Scalars['Int']
}>

export type LikeStgSetMessageMutation = { __typename?: 'mutation_root' } & {
  insert_likes_stg_set_message_user_one?: Maybe<
    { __typename: 'likes_stg_set_message_user' } & {
      set_message: { __typename?: 'stg_set_messages' } & StgSetMessageFragment
      user: { __typename?: 'users' } & Pick<Users, 'full_name'>
    }
  >
}

export type LikeStgSetMutationVariables = Exact<{
  stg_set_id: Scalars['Int']
}>

export type LikeStgSetMutation = { __typename?: 'mutation_root' } & {
  insert_likes_stg_set_user_one?: Maybe<
    { __typename: 'likes_stg_set_user' } & Pick<
      Likes_Stg_Set_User,
      'stg_set_id' | 'liked_by_user_id'
    > & { stg_set: { __typename?: 'stg_sets' } & TinyStgSetFragment }
  >
}

export type LikeStgSubmissionMessageMutationVariables = Exact<{
  stg_submission_message_id: Scalars['Int']
}>

export type LikeStgSubmissionMessageMutation = { __typename?: 'mutation_root' } & {
  insert_likes_stg_submission_message_user_one?: Maybe<
    { __typename: 'likes_stg_submission_message_user' } & {
      submission_message: { __typename?: 'stg_submission_messages' } & StgSubmissionMessageFragment
      user: { __typename?: 'users' } & Pick<Users, 'full_name'>
    }
  >
}

export type LikeStgSubmissionMutationVariables = Exact<{
  stg_submission_id: Scalars['Int']
}>

export type LikeStgSubmissionMutation = { __typename?: 'mutation_root' } & {
  insert_likes_stg_submission_user_one?: Maybe<
    { __typename: 'likes_stg_submission_user' } & Pick<
      Likes_Stg_Submission_User,
      'stg_submission_id' | 'liked_by_user_id'
    > & { stg_submission: { __typename?: 'stg_submissions' } & TinyStgSubmissionFragment }
  >
}

export type LikeUserMutationVariables = Exact<{
  liked_user_id: Scalars['Int']
}>

export type LikeUserMutation = { __typename?: 'mutation_root' } & {
  insert_likes_user_user_one?: Maybe<
    { __typename?: 'likes_user_user' } & { liked_user: { __typename?: 'users' } & UserFragment }
  >
}

export type UnlikeChatMessageMutationVariables = Exact<{
  chat_message_id: Scalars['Int']
}>

export type UnlikeChatMessageMutation = { __typename?: 'mutation_root' } & {
  delete_likes_chat_message_user?: Maybe<
    { __typename?: 'likes_chat_message_user_mutation_response' } & {
      returning: Array<
        { __typename: 'likes_chat_message_user' } & {
          chat_message: { __typename?: 'chat_messages' } & ChatMessageFragment
          user: { __typename?: 'users' } & Pick<Users, 'id'>
        }
      >
    }
  >
}

export type UnlikePostMessageMutationVariables = Exact<{
  post_message_id: Scalars['Int']
}>

export type UnlikePostMessageMutation = { __typename?: 'mutation_root' } & {
  delete_likes_post_message_user?: Maybe<
    { __typename?: 'likes_post_message_user_mutation_response' } & {
      returning: Array<
        { __typename: 'likes_post_message_user' } & {
          post_message: { __typename?: 'post_messages' } & PostMessageFragment
          user: { __typename?: 'users' } & Pick<Users, 'full_name'>
        }
      >
    }
  >
}

export type UnlikePostMutationVariables = Exact<{
  post_id: Scalars['Int']
}>

export type UnlikePostMutation = { __typename?: 'mutation_root' } & {
  delete_likes_post_user?: Maybe<
    { __typename?: 'likes_post_user_mutation_response' } & {
      returning: Array<
        { __typename: 'likes_post_user' } & Pick<
          Likes_Post_User,
          'post_id' | 'liked_by_user_id'
        > & { post: { __typename?: 'posts' } & PostFragment }
      >
    }
  >
}

export type UnlikeStgSetMessageMutationVariables = Exact<{
  stg_set_message_id: Scalars['Int']
}>

export type UnlikeStgSetMessageMutation = { __typename?: 'mutation_root' } & {
  delete_likes_stg_set_message_user?: Maybe<
    { __typename?: 'likes_stg_set_message_user_mutation_response' } & {
      returning: Array<
        { __typename: 'likes_stg_set_message_user' } & {
          set_message: { __typename?: 'stg_set_messages' } & StgSetMessageFragment
          user: { __typename?: 'users' } & Pick<Users, 'full_name'>
        }
      >
    }
  >
}

export type UnlikeStgSetMutationVariables = Exact<{
  stg_set_id: Scalars['Int']
}>

export type UnlikeStgSetMutation = { __typename?: 'mutation_root' } & {
  delete_likes_stg_set_user?: Maybe<
    { __typename?: 'likes_stg_set_user_mutation_response' } & {
      returning: Array<
        { __typename: 'likes_stg_set_user' } & Pick<
          Likes_Stg_Set_User,
          'stg_set_id' | 'liked_by_user_id'
        > & { stg_set: { __typename?: 'stg_sets' } & TinyStgSetFragment }
      >
    }
  >
}

export type UnlikeStgSubmissionMessageMutationVariables = Exact<{
  stg_submission_message_id: Scalars['Int']
}>

export type UnlikeStgSubmissionMessageMutation = { __typename?: 'mutation_root' } & {
  delete_likes_stg_submission_message_user?: Maybe<
    { __typename?: 'likes_stg_submission_message_user_mutation_response' } & {
      returning: Array<
        { __typename: 'likes_stg_submission_message_user' } & {
          submission_message: {
            __typename?: 'stg_submission_messages'
          } & StgSubmissionMessageFragment
          user: { __typename?: 'users' } & Pick<Users, 'full_name'>
        }
      >
    }
  >
}

export type UnlikeStgSubmissionMutationVariables = Exact<{
  stg_submission_id: Scalars['Int']
}>

export type UnlikeStgSubmissionMutation = { __typename?: 'mutation_root' } & {
  delete_likes_stg_submission_user?: Maybe<
    { __typename?: 'likes_stg_submission_user_mutation_response' } & {
      returning: Array<
        { __typename: 'likes_stg_submission_user' } & {
          stg_submission: { __typename?: 'stg_submissions' } & Pick<Stg_Submissions, 'id'> & {
              likes: Array<
                { __typename?: 'likes_stg_submission_user' } & {
                  user: { __typename?: 'users' } & Pick<Users, 'id'>
                }
              >
            }
          user: { __typename?: 'users' } & Pick<Users, 'id'>
        }
      >
    }
  >
}

export type UnlikeUserMutationVariables = Exact<{
  liked_user_id: Scalars['Int']
}>

export type UnlikeUserMutation = { __typename?: 'mutation_root' } & {
  delete_likes_user_user?: Maybe<
    { __typename?: 'likes_user_user_mutation_response' } & {
      returning: Array<
        { __typename?: 'likes_user_user' } & { liked_user: { __typename?: 'users' } & UserFragment }
      >
    }
  >
}

export type UpdatePostByIdMutationVariables = Exact<{
  post_id: Scalars['Int']
  body: Scalars['String']
}>

export type UpdatePostByIdMutation = { __typename?: 'mutation_root' } & {
  update_posts_by_pk?: Maybe<{ __typename?: 'posts' } & PostFragment>
}

export type UpdateStgSetMutationVariables = Exact<{
  title: Scalars['String']
  instructions: Scalars['String']
}>

export type UpdateStgSetMutation = { __typename?: 'mutation_root' } & {
  update_stg_sets?: Maybe<
    { __typename?: 'stg_sets_mutation_response' } & Pick<
      Stg_Sets_Mutation_Response,
      'affected_rows'
    > & {
        returning: Array<
          { __typename?: 'stg_sets' } & { stg?: Maybe<{ __typename?: 'stgs' } & StgFragment> }
        >
      }
  >
}

export type UpdateUserMutationVariables = Exact<{
  full_name?: Maybe<Scalars['String']>
  username?: Maybe<Scalars['String']>
  bio?: Maybe<Scalars['String']>
  profession?: Maybe<Scalars['String']>
  birthday?: Maybe<Scalars['date']>
  nbds?: Maybe<Scalars['jsonb']>
  teams?: Maybe<Scalars['jsonb']>
  favorite_tricks?: Maybe<Scalars['jsonb']>
  trick_todos?: Maybe<Scalars['jsonb']>
  interests?: Maybe<Scalars['jsonb']>
  avatar?: Maybe<Scalars['String']>
  current_setup?: Maybe<Scalars['String']>
}>

export type UpdateUserMutation = { __typename?: 'mutation_root' } & {
  update_users?: Maybe<
    { __typename?: 'users_mutation_response' } & {
      returning: Array<{ __typename?: 'users' } & AuthdUserFragment>
    }
  >
}

export type UpsertUserSocialsMutationVariables = Exact<{
  facebook?: Maybe<Scalars['String']>
  twitter?: Maybe<Scalars['String']>
  instagram?: Maybe<Scalars['String']>
  youtube?: Maybe<Scalars['String']>
  tiktok?: Maybe<Scalars['String']>
  spotify?: Maybe<Scalars['String']>
}>

export type UpsertUserSocialsMutation = { __typename?: 'mutation_root' } & {
  insert_user_socials?: Maybe<
    { __typename?: 'user_socials_mutation_response' } & Pick<
      User_Socials_Mutation_Response,
      'affected_rows'
    > & {
        returning: Array<
          { __typename?: 'user_socials' } & Pick<
            User_Socials,
            'user_id' | 'facebook' | 'twitter' | 'instagram' | 'youtube' | 'tiktok' | 'spotify'
          >
        >
      }
  >
}

export type UpsertUserLocationMutationVariables = Exact<{
  type: E_User_Locations_Enum
  lat: Scalars['numeric']
  lng: Scalars['numeric']
  country_long_name: Scalars['String']
  country_short_name: Scalars['String']
  formatted_address: Scalars['String']
}>

export type UpsertUserLocationMutation = { __typename?: 'mutation_root' } & {
  insert_user_locations_one?: Maybe<
    { __typename?: 'user_locations' } & Pick<
      User_Locations,
      'type' | 'lat' | 'lng' | 'country_long_name' | 'country_short_name' | 'formatted_address'
    > & {
        user: { __typename?: 'users' } & Pick<Users, 'full_name'> & {
            locations: Array<
              { __typename?: 'user_locations' } & Pick<
                User_Locations,
                | 'id'
                | 'type'
                | 'lat'
                | 'lng'
                | 'country_long_name'
                | 'country_short_name'
                | 'formatted_address'
              >
            >
          }
      }
  >
}

export type AuthdUserByIdQueryVariables = Exact<{
  id: Scalars['Int']
}>

export type AuthdUserByIdQuery = { __typename?: 'query_root' } & {
  users_by_pk?: Maybe<{ __typename?: 'users' } & AuthdUserFragment>
}

export type ChatMessagesAggregateQueryVariables = Exact<{ [key: string]: never }>

export type ChatMessagesAggregateQuery = { __typename?: 'query_root' } & {
  chat_messages_aggregate: { __typename?: 'chat_messages_aggregate' } & {
    aggregate?: Maybe<
      { __typename?: 'chat_messages_aggregate_fields' } & Pick<
        Chat_Messages_Aggregate_Fields,
        'count'
      >
    >
  }
}

export type ChatMessagesQueryVariables = Exact<{ [key: string]: never }>

export type ChatMessagesQuery = { __typename?: 'query_root' } & {
  chat_messages: Array<{ __typename: 'chat_messages' } & ChatMessageFragment>
}

export type UpcomingStgQueryVariables = Exact<{ [key: string]: never }>

export type UpcomingStgQuery = { __typename?: 'query_root' } & {
  stgs: Array<
    { __typename?: 'stgs' } & Pick<Stgs, 'id' | 'status' | 'created_at' | 'updated_at'> & {
        sets: Array<
          { __typename?: 'stg_sets' } & Pick<Stg_Sets, 'set_by_id'> & {
              set_by?: Maybe<{ __typename?: 'users' } & Pick<Users, 'id' | 'full_name'>>
            }
        >
      }
  >
}

export type PostByIdQueryVariables = Exact<{
  id: Scalars['Int']
}>

export type PostByIdQuery = { __typename?: 'query_root' } & {
  posts_by_pk?: Maybe<{ __typename?: 'posts' } & PostFragment>
}

export type PostTagOptionsQueryVariables = Exact<{ [key: string]: never }>

export type PostTagOptionsQuery = { __typename?: 'query_root' } & {
  e_post_tags: Array<{ __typename?: 'e_post_tags' } & Pick<E_Post_Tags, 'type'>>
}

export type PostsWhereAggregateQueryVariables = Exact<{
  where?: Maybe<V_Posts_Sorted_Bool_Exp>
}>

export type PostsWhereAggregateQuery = { __typename?: 'query_root' } & {
  v_posts_sorted_aggregate: { __typename?: 'v_posts_sorted_aggregate' } & {
    aggregate?: Maybe<
      { __typename?: 'v_posts_sorted_aggregate_fields' } & Pick<
        V_Posts_Sorted_Aggregate_Fields,
        'count'
      >
    >
  }
}

export type PostsWhereQueryVariables = Exact<{
  where?: Maybe<V_Posts_Sorted_Bool_Exp>
  limit: Scalars['Int']
}>

export type PostsWhereQuery = { __typename?: 'query_root' } & {
  v_posts_sorted: Array<
    { __typename?: 'v_posts_sorted' } & {
      post?: Maybe<{ __typename?: 'posts' } & SummaryPostFragment>
    }
  >
}

export type PreviousStgQueryVariables = Exact<{ [key: string]: never }>

export type PreviousStgQuery = { __typename?: 'query_root' } & {
  stgs: Array<{ __typename?: 'stgs' } & StgFragment>
}

export type StgByIdQueryVariables = Exact<{
  id: Scalars['Int']
}>

export type StgByIdQuery = { __typename?: 'query_root' } & {
  stgs_by_pk?: Maybe<{ __typename?: 'stgs' } & StgByIdFragment>
}

export type StgSetByIdQueryVariables = Exact<{
  id: Scalars['Int']
}>

export type StgSetByIdQuery = { __typename?: 'query_root' } & {
  stg_sets_by_pk?: Maybe<{ __typename?: 'stg_sets' } & StgSetFragment>
}

export type StgSubmissionByIdQueryVariables = Exact<{
  id: Scalars['Int']
}>

export type StgSubmissionByIdQuery = { __typename?: 'query_root' } & {
  stg_submissions_by_pk?: Maybe<{ __typename?: 'stg_submissions' } & StgSubmissionFragment>
}

export type StgsWhereQueryVariables = Exact<{
  where?: Maybe<Stgs_Bool_Exp>
}>

export type StgsWhereQuery = { __typename?: 'query_root' } & {
  stgs: Array<{ __typename?: 'stgs' } & StgFragment>
}

export type UnseenChatMessagesCountQueryVariables = Exact<{
  chat_page_activity?: Maybe<Scalars['timestamptz']>
}>

export type UnseenChatMessagesCountQuery = { __typename?: 'query_root' } & {
  chat_messages_aggregate: { __typename?: 'chat_messages_aggregate' } & {
    aggregate?: Maybe<
      { __typename?: 'chat_messages_aggregate_fields' } & Pick<
        Chat_Messages_Aggregate_Fields,
        'count'
      >
    >
  }
}

export type UnseenPostsCountQueryVariables = Exact<{
  posts_page_activity?: Maybe<Scalars['timestamptz']>
}>

export type UnseenPostsCountQuery = { __typename?: 'query_root' } & {
  posts_aggregate: { __typename?: 'posts_aggregate' } & {
    aggregate?: Maybe<
      { __typename?: 'posts_aggregate_fields' } & Pick<Posts_Aggregate_Fields, 'count'>
    >
  }
}

export type UnseenUsersCountQueryVariables = Exact<{
  users_page_activity?: Maybe<Scalars['timestamptz']>
}>

export type UnseenUsersCountQuery = { __typename?: 'query_root' } & {
  users_aggregate: { __typename?: 'users_aggregate' } & {
    aggregate?: Maybe<
      { __typename?: 'users_aggregate_fields' } & Pick<Users_Aggregate_Fields, 'count'>
    >
  }
}

export type UserByIdQueryVariables = Exact<{
  id: Scalars['Int']
}>

export type UserByIdQuery = { __typename?: 'query_root' } & {
  users_by_pk?: Maybe<{ __typename?: 'users' } & UserFragment>
}

export type UserByUsernameQueryVariables = Exact<{
  username: Scalars['String']
}>

export type UserByUsernameQuery = { __typename?: 'query_root' } & {
  users: Array<{ __typename?: 'users' } & UserFragment>
}

export type UserDisciplineOptionsQueryVariables = Exact<{ [key: string]: never }>

export type UserDisciplineOptionsQuery = { __typename?: 'query_root' } & {
  e_user_disciplines: Array<
    { __typename?: 'e_user_disciplines' } & Pick<E_User_Disciplines, 'type'>
  >
}

export type LocationsByTypeQueryVariables = Exact<{
  type: E_User_Locations_Enum
}>

export type LocationsByTypeQuery = { __typename?: 'query_root' } & {
  user_locations: Array<
    { __typename?: 'user_locations' } & Pick<User_Locations, 'lat' | 'lng'> & {
        user: { __typename?: 'users' } & TinyUserFragment
      }
  >
}

export type UserProfileByUserIdQueryVariables = Exact<{
  id: Scalars['Int']
}>

export type UserProfileByUserIdQuery = { __typename?: 'query_root' } & {
  users_by_pk?: Maybe<{ __typename?: 'users' } & Pick<Users, 'trick_todos'> & UserFragment>
}

export type UsersAggregateQueryVariables = Exact<{ [key: string]: never }>

export type UsersAggregateQuery = { __typename?: 'query_root' } & {
  users_aggregate: { __typename?: 'users_aggregate' } & {
    aggregate?: Maybe<
      { __typename?: 'users_aggregate_fields' } & Pick<Users_Aggregate_Fields, 'count'>
    >
  }
}

export type UsersSearchAggregateQueryVariables = Exact<{
  where?: Maybe<Users_Bool_Exp>
}>

export type UsersSearchAggregateQuery = { __typename?: 'query_root' } & {
  users_aggregate: { __typename?: 'users_aggregate' } & {
    aggregate?: Maybe<
      { __typename?: 'users_aggregate_fields' } & Pick<Users_Aggregate_Fields, 'count'>
    >
  }
}

export type UsersSearchQueryVariables = Exact<{
  where: Users_Bool_Exp
  limit: Scalars['Int']
  offset: Scalars['Int']
}>

export type UsersSearchQuery = { __typename?: 'query_root' } & {
  users: Array<{ __typename?: 'users' } & BasicFieldsUserFragment>
}

export type UsersQueryVariables = Exact<{ [key: string]: never }>

export type UsersQuery = { __typename?: 'query_root' } & {
  users: Array<{ __typename?: 'users' } & TinyUserFragment>
}

export type UserByUsernameSubscriptionVariables = Exact<{
  username: Scalars['String']
}>

export type UserByUsernameSubscription = { __typename?: 'subscription_root' } & {
  users: Array<{ __typename?: 'users' } & UserFragment>
}

export type AuthdUserByIdSubscriptionVariables = Exact<{
  id: Scalars['Int']
}>

export type AuthdUserByIdSubscription = { __typename?: 'subscription_root' } & {
  users_by_pk?: Maybe<{ __typename?: 'users' } & AuthdUserFragment>
}

export type ChatMessagesAggregateSubscriptionVariables = Exact<{ [key: string]: never }>

export type ChatMessagesAggregateSubscription = { __typename?: 'subscription_root' } & {
  chat_messages_aggregate: { __typename?: 'chat_messages_aggregate' } & {
    aggregate?: Maybe<
      { __typename?: 'chat_messages_aggregate_fields' } & Pick<
        Chat_Messages_Aggregate_Fields,
        'count'
      >
    >
  }
}

export type ChatMessagesSubscriptionVariables = Exact<{ [key: string]: never }>

export type ChatMessagesSubscription = { __typename?: 'subscription_root' } & {
  chat_messages: Array<{ __typename: 'chat_messages' } & ChatMessageFragment>
}

export type PostByIdSubscriptionVariables = Exact<{
  id: Scalars['Int']
}>

export type PostByIdSubscription = { __typename?: 'subscription_root' } & {
  posts_by_pk?: Maybe<{ __typename?: 'posts' } & PostFragment>
}

export type PostsWhereAggregateSubscriptionVariables = Exact<{
  where?: Maybe<V_Posts_Sorted_Bool_Exp>
}>

export type PostsWhereAggregateSubscription = { __typename?: 'subscription_root' } & {
  v_posts_sorted_aggregate: { __typename?: 'v_posts_sorted_aggregate' } & {
    aggregate?: Maybe<
      { __typename?: 'v_posts_sorted_aggregate_fields' } & Pick<
        V_Posts_Sorted_Aggregate_Fields,
        'count'
      >
    >
  }
}

export type PostsWhereSubscriptionVariables = Exact<{
  where?: Maybe<V_Posts_Sorted_Bool_Exp>
  limit: Scalars['Int']
}>

export type PostsWhereSubscription = { __typename?: 'subscription_root' } & {
  v_posts_sorted: Array<
    { __typename?: 'v_posts_sorted' } & {
      post?: Maybe<{ __typename?: 'posts' } & SummaryPostFragment>
    }
  >
}

export type PreviousStgSubscriptionVariables = Exact<{ [key: string]: never }>

export type PreviousStgSubscription = { __typename?: 'subscription_root' } & {
  stgs: Array<{ __typename?: 'stgs' } & StgFragment>
}

export type StgByIdSubscriptionVariables = Exact<{
  id: Scalars['Int']
}>

export type StgByIdSubscription = { __typename?: 'subscription_root' } & {
  stgs_by_pk?: Maybe<{ __typename?: 'stgs' } & StgByIdFragment>
}

export type StgSetByIdSubscriptionVariables = Exact<{
  id: Scalars['Int']
}>

export type StgSetByIdSubscription = { __typename?: 'subscription_root' } & {
  stg_sets_by_pk?: Maybe<{ __typename?: 'stg_sets' } & StgSetFragment>
}

export type StgSubmissionByIdSubscriptionVariables = Exact<{
  id: Scalars['Int']
}>

export type StgSubmissionByIdSubscription = { __typename?: 'subscription_root' } & {
  stg_submissions_by_pk?: Maybe<{ __typename?: 'stg_submissions' } & StgSubmissionFragment>
}

export type StgsWhereSubscriptionVariables = Exact<{
  where?: Maybe<Stgs_Bool_Exp>
}>

export type StgsWhereSubscription = { __typename?: 'subscription_root' } & {
  stgs: Array<{ __typename?: 'stgs' } & StgFragment>
}

export type UnseenChatMessagesCountSubscriptionVariables = Exact<{
  chat_page_activity?: Maybe<Scalars['timestamptz']>
}>

export type UnseenChatMessagesCountSubscription = { __typename?: 'subscription_root' } & {
  chat_messages_aggregate: { __typename?: 'chat_messages_aggregate' } & {
    aggregate?: Maybe<
      { __typename?: 'chat_messages_aggregate_fields' } & Pick<
        Chat_Messages_Aggregate_Fields,
        'count'
      >
    >
  }
}

export type UnseenPostsCountSubscriptionVariables = Exact<{
  posts_page_activity?: Maybe<Scalars['timestamptz']>
}>

export type UnseenPostsCountSubscription = { __typename?: 'subscription_root' } & {
  posts_aggregate: { __typename?: 'posts_aggregate' } & {
    aggregate?: Maybe<
      { __typename?: 'posts_aggregate_fields' } & Pick<Posts_Aggregate_Fields, 'count'>
    >
  }
}

export type UnseenUsersCountSubscriptionVariables = Exact<{
  users_page_activity?: Maybe<Scalars['timestamptz']>
}>

export type UnseenUsersCountSubscription = { __typename?: 'subscription_root' } & {
  users_aggregate: { __typename?: 'users_aggregate' } & {
    aggregate?: Maybe<
      { __typename?: 'users_aggregate_fields' } & Pick<Users_Aggregate_Fields, 'count'>
    >
  }
}

export type UpcomingStgSubscriptionVariables = Exact<{ [key: string]: never }>

export type UpcomingStgSubscription = { __typename?: 'subscription_root' } & {
  stgs: Array<
    { __typename?: 'stgs' } & Pick<Stgs, 'id' | 'status' | 'created_at' | 'updated_at'> & {
        sets: Array<
          { __typename?: 'stg_sets' } & Pick<Stg_Sets, 'set_by_id'> & {
              set_by?: Maybe<{ __typename?: 'users' } & Pick<Users, 'id' | 'full_name'>>
            }
        >
      }
  >
}

export type UsersAggregateSubscriptionVariables = Exact<{ [key: string]: never }>

export type UsersAggregateSubscription = { __typename?: 'subscription_root' } & {
  users_aggregate: { __typename?: 'users_aggregate' } & {
    aggregate?: Maybe<
      { __typename?: 'users_aggregate_fields' } & Pick<Users_Aggregate_Fields, 'count'>
    >
  }
}

export type UsersSubscriptionVariables = Exact<{ [key: string]: never }>

export type UsersSubscription = { __typename?: 'subscription_root' } & {
  users: Array<{ __typename?: 'users' } & BasicFieldsUserFragment>
}

export const AuthdUserFragmentDoc = gql`
  fragment AuthdUser on users {
    id
    full_name
    username
    avatar
    email
    verified_email
    role
    is_registered_for_upcoming_stg
    activity {
      app
      posts_page
      chat_page
    }
  }
`
export const BasicFieldsUserFragmentDoc = gql`
  fragment BasicFieldsUser on users {
    id
    full_name
    username
    bio
    avatar
    profession
    created_at
    updated_at
    role
    is_registered_for_upcoming_stg
    activity {
      app
    }
    locations {
      id
      type
      lat
      lng
      country_long_name
      country_short_name
      formatted_address
    }
    socials {
      facebook
      twitter
      instagram
      youtube
      tiktok
      spotify
    }
  }
`
export const ChatMessageFragmentDoc = gql`
  fragment ChatMessage on chat_messages {
    id
    text
    author_id
    author {
      id
      full_name
      username
      activity {
        app
      }
    }
    likes {
      chat_message_id
      liked_by_user_id
      user {
        id
        full_name
        username
      }
      __typename
    }
    created_at
    __typename
  }
`
export const PostMessageFragmentDoc = gql`
  fragment PostMessage on post_messages {
    id
    text
    author_id
    author {
      id
      full_name
      username
    }
    likes {
      liked_by_user_id
      user {
        full_name
      }
    }
    post_id
    post {
      id
      messages(order_by: { created_at: asc }) {
        id
        text
        author {
          id
          full_name
          username
        }
        likes {
          liked_by_user_id
          user {
            full_name
          }
        }
      }
    }
    created_at
    __typename
  }
`
export const PostFragmentDoc = gql`
  fragment Post on posts {
    id
    body
    tags {
      tag
    }
    created_at
    updated_at
    posted_by_id
    posted_by {
      id
      full_name
      username
      avatar
    }
    likes {
      liked_by_user_id
      user {
        full_name
      }
    }
    messages(order_by: { created_at: asc }) {
      id
      text
      created_at
      author_id
      author {
        id
        full_name
        username
        avatar
      }
      likes {
        liked_by_user_id
        user {
          full_name
        }
      }
    }
    image_url
    video_asset_id
    video_playback_id
    oembed
    __typename
  }
`
export const StgSetMessageFragmentDoc = gql`
  fragment StgSetMessage on stg_set_messages {
    id
    text
    author_id
    author {
      id
      full_name
      username
      avatar
    }
    likes {
      liked_by_user_id
      user {
        full_name
      }
    }
    stg_set_id
    set {
      id
      messages(order_by: { created_at: asc }) {
        id
        text
        author {
          id
          full_name
          username
          avatar
        }
        likes {
          liked_by_user_id
          user {
            full_name
          }
        }
      }
    }
    created_at
    __typename
  }
`
export const TinyStgSetFragmentDoc = gql`
  fragment TinyStgSet on stg_sets {
    id
    stg_id
    video_asset_id
    video_playback_id
    title
    instructions
    set_by_id
    created_at
    set_by {
      id
      full_name
      username
      avatar
      locations {
        id
        type
        lat
        lng
        country_long_name
        country_short_name
        formatted_address
      }
    }
    submissions_where_landed {
      submitted_by {
        full_name
        username
        avatar
      }
    }
    submissions_where_landed_aggregate {
      aggregate {
        count
      }
    }
    likes {
      liked_by_user_id
      user {
        full_name
      }
    }
    messages(order_by: { created_at: asc }) {
      ...StgSetMessage
    }
  }
  ${StgSetMessageFragmentDoc}
`
export const StgSubmissionMessageFragmentDoc = gql`
  fragment StgSubmissionMessage on stg_submission_messages {
    id
    text
    author_id
    author {
      id
      full_name
      username
      avatar
    }
    likes {
      liked_by_user_id
      user {
        full_name
      }
    }
    stg_submission_id
    submission {
      id
      messages(order_by: { created_at: asc }) {
        id
        text
        author {
          id
          full_name
          username
          avatar
        }
        likes {
          liked_by_user_id
          user {
            full_name
          }
        }
      }
    }
    created_at
    __typename
  }
`
export const TinyStgSubmissionFragmentDoc = gql`
  fragment TinyStgSubmission on stg_submissions {
    id
    stg_id
    video_asset_id
    video_playback_id
    created_at
    stg_id
    submitted_by_id
    submitted_by {
      id
      full_name
      username
      avatar
      bio
      disciplines {
        discipline
      }
      socials {
        facebook
        twitter
        instagram
        youtube
        tiktok
        spotify
      }
      locations {
        id
        type
        lat
        lng
        country_long_name
        country_short_name
        formatted_address
      }
    }
    set_landed {
      ...TinyStgSet
    }
    likes {
      liked_by_user_id
      user {
        full_name
      }
    }
    messages_aggregate {
      aggregate {
        count
      }
    }
    messages(order_by: { created_at: asc }) {
      ...StgSubmissionMessage
    }
  }
  ${TinyStgSetFragmentDoc}
  ${StgSubmissionMessageFragmentDoc}
`
export const StgByIdFragmentDoc = gql`
  fragment StgById on stgs {
    id
    status
    created_at
    updated_at
    sets {
      ...TinyStgSet
    }
    submissions {
      ...TinyStgSubmission
    }
  }
  ${TinyStgSetFragmentDoc}
  ${TinyStgSubmissionFragmentDoc}
`
export const StgSetFragmentDoc = gql`
  fragment StgSet on stg_sets {
    id
    stg_id
    video_asset_id
    video_playback_id
    title
    instructions
    created_at
    stg {
      id
      status
      players {
        player_id
      }
      sets {
        id
        set_by_id
        set_by {
          id
        }
      }
    }
    set_by_id
    set_by {
      id
      full_name
      username
      avatar
      locations {
        id
        type
        lat
        lng
        country_long_name
        country_short_name
        formatted_address
      }
    }
    submissions_where_landed_aggregate {
      aggregate {
        count
      }
    }
    submissions_where_landed {
      id
      created_at
      video_asset_id
      video_playback_id
      stg_id
      stg_set_id
      set_landed {
        title
      }
      submitted_by_id
      submitted_by {
        id
        full_name
        username
        avatar
        locations {
          id
          type
          lat
          lng
          country_long_name
          country_short_name
          formatted_address
        }
      }
      messages(order_by: { created_at: asc }) {
        ...StgSubmissionMessage
      }
      likes {
        liked_by_user_id
        user {
          full_name
        }
      }
    }
    likes {
      liked_by_user_id
      user {
        full_name
      }
    }
    messages(order_by: { created_at: asc }) {
      ...StgSetMessage
    }
  }
  ${StgSubmissionMessageFragmentDoc}
  ${StgSetMessageFragmentDoc}
`
export const StgSubmissionFragmentDoc = gql`
  fragment StgSubmission on stg_submissions {
    id
    stg_id
    video_asset_id
    video_playback_id
    created_at
    stg {
      id
      status
      sets {
        id
        set_by_id
        set_by {
          id
        }
      }
    }
    submitted_by_id
    submitted_by {
      id
      full_name
      username
      avatar
      locations {
        id
        type
        lat
        lng
        country_long_name
        country_short_name
        formatted_address
      }
    }
    set_landed {
      ...TinyStgSet
    }
    likes {
      liked_by_user_id
      user {
        full_name
      }
    }
    messages(order_by: { created_at: asc }) {
      ...StgSubmissionMessage
    }
  }
  ${TinyStgSetFragmentDoc}
  ${StgSubmissionMessageFragmentDoc}
`
export const StgFragmentDoc = gql`
  fragment Stg on stgs {
    id
    status
    created_at
    updated_at
    players {
      player_id
      player {
        id
        full_name
        username
        avatar
        bio
        disciplines {
          discipline
        }
        socials {
          facebook
          twitter
          instagram
          youtube
          tiktok
          spotify
        }
        locations {
          id
          type
          lat
          lng
          country_long_name
          country_short_name
          formatted_address
        }
      }
    }
    sets(order_by: { created_at: asc }) {
      ...TinyStgSet
    }
    submissions(order_by: { created_at: desc }) {
      ...TinyStgSubmission
    }
  }
  ${TinyStgSetFragmentDoc}
  ${TinyStgSubmissionFragmentDoc}
`
export const TinyUserFragmentDoc = gql`
  fragment TinyUser on users {
    id
    full_name
    username
    avatar
    bio
    profession
    created_at
    updated_at
    activity {
      app
    }
    locations {
      type
      country_long_name
      country_short_name
      formatted_address
    }
    socials {
      facebook
      twitter
      instagram
      youtube
      tiktok
      spotify
    }
    disciplines {
      discipline
    }
  }
`
export const SummaryPostFragmentDoc = gql`
  fragment SummaryPost on posts {
    id
    body
    tags {
      tag
    }
    created_at
    updated_at
    posted_by_id
    posted_by {
      id
      full_name
      username
      avatar
    }
    likes {
      liked_by_user_id
      user {
        full_name
      }
    }
    messages(order_by: { created_at: asc }) {
      id
      text
      created_at
      author_id
      author {
        id
        full_name
        username
        avatar
      }
      likes {
        liked_by_user_id
        user {
          full_name
        }
      }
    }
    messages_aggregate {
      aggregate {
        count
      }
    }
    image_url
    video_asset_id
    video_playback_id
    oembed
    __typename
  }
`
export const UserFragmentDoc = gql`
  fragment User on users {
    id
    full_name
    username
    avatar
    current_setup
    bio
    profession
    birthday
    created_at
    updated_at
    willing_to_host
    disciplines {
      discipline
    }
    public_trick_todos {
      todo
    }
    nbds
    teams
    favorite_tricks
    interests
    role
    is_registered_for_upcoming_stg
    locations {
      id
      type
      lat
      lng
      country_long_name
      country_short_name
      formatted_address
    }
    liked_users {
      liked_by_user_id
      liked_by {
        id
        full_name
        username
        avatar
      }
    }
    liked_by {
      liked_user_id
      liked_user {
        id
        full_name
        username
        avatar
      }
    }
    socials {
      facebook
      twitter
      instagram
      youtube
      tiktok
      spotify
    }
    posts(order_by: { created_at: desc }) {
      ...SummaryPost
    }
  }
  ${SummaryPostFragmentDoc}
`
export const DeleteMessageByIdMutationDocument = gql`
  mutation DeleteMessageByIdMutation($id: Int!) {
    delete_chat_messages_by_pk(id: $id) {
      ...ChatMessage
    }
    delete_stg_set_messages_by_pk(id: $id) {
      ...StgSetMessage
    }
    delete_stg_submission_messages_by_pk(id: $id) {
      ...StgSubmissionMessage
    }
    delete_post_messages_by_pk(id: $id) {
      ...PostMessage
    }
  }
  ${ChatMessageFragmentDoc}
  ${StgSetMessageFragmentDoc}
  ${StgSubmissionMessageFragmentDoc}
  ${PostMessageFragmentDoc}
`
export type DeleteMessageByIdMutationMutationFn = Apollo.MutationFunction<
  DeleteMessageByIdMutation,
  DeleteMessageByIdMutationVariables
>

/**
 * __useDeleteMessageByIdMutation__
 *
 * To run a mutation, you first call `useDeleteMessageByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteMessageByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteMessageByIdMutation, { data, loading, error }] = useDeleteMessageByIdMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteMessageByIdMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteMessageByIdMutation,
    DeleteMessageByIdMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<DeleteMessageByIdMutation, DeleteMessageByIdMutationVariables>(
    DeleteMessageByIdMutationDocument,
    options,
  )
}
export type DeleteMessageByIdMutationHookResult = ReturnType<typeof useDeleteMessageByIdMutation>
export type DeleteMessageByIdMutationMutationResult =
  Apollo.MutationResult<DeleteMessageByIdMutation>
export type DeleteMessageByIdMutationMutationOptions = Apollo.BaseMutationOptions<
  DeleteMessageByIdMutation,
  DeleteMessageByIdMutationVariables
>
export const DeletePostByIdMutationDocument = gql`
  mutation DeletePostByIdMutation($post_id: Int!) {
    delete_posts_by_pk(id: $post_id) {
      ...SummaryPost
    }
  }
  ${SummaryPostFragmentDoc}
`
export type DeletePostByIdMutationMutationFn = Apollo.MutationFunction<
  DeletePostByIdMutation,
  DeletePostByIdMutationVariables
>

/**
 * __useDeletePostByIdMutation__
 *
 * To run a mutation, you first call `useDeletePostByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePostByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePostByIdMutation, { data, loading, error }] = useDeletePostByIdMutation({
 *   variables: {
 *      post_id: // value for 'post_id'
 *   },
 * });
 */
export function useDeletePostByIdMutation(
  baseOptions?: Apollo.MutationHookOptions<DeletePostByIdMutation, DeletePostByIdMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<DeletePostByIdMutation, DeletePostByIdMutationVariables>(
    DeletePostByIdMutationDocument,
    options,
  )
}
export type DeletePostByIdMutationHookResult = ReturnType<typeof useDeletePostByIdMutation>
export type DeletePostByIdMutationMutationResult = Apollo.MutationResult<DeletePostByIdMutation>
export type DeletePostByIdMutationMutationOptions = Apollo.BaseMutationOptions<
  DeletePostByIdMutation,
  DeletePostByIdMutationVariables
>
export const DeletePostTagsByPostIdMutationDocument = gql`
  mutation DeletePostTagsByPostIdMutation($post_id: Int!) {
    delete_post_tags(where: { post_id: { _eq: $post_id } }) {
      affected_rows
    }
  }
`
export type DeletePostTagsByPostIdMutationMutationFn = Apollo.MutationFunction<
  DeletePostTagsByPostIdMutation,
  DeletePostTagsByPostIdMutationVariables
>

/**
 * __useDeletePostTagsByPostIdMutation__
 *
 * To run a mutation, you first call `useDeletePostTagsByPostIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePostTagsByPostIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePostTagsByPostIdMutation, { data, loading, error }] = useDeletePostTagsByPostIdMutation({
 *   variables: {
 *      post_id: // value for 'post_id'
 *   },
 * });
 */
export function useDeletePostTagsByPostIdMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeletePostTagsByPostIdMutation,
    DeletePostTagsByPostIdMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    DeletePostTagsByPostIdMutation,
    DeletePostTagsByPostIdMutationVariables
  >(DeletePostTagsByPostIdMutationDocument, options)
}
export type DeletePostTagsByPostIdMutationHookResult = ReturnType<
  typeof useDeletePostTagsByPostIdMutation
>
export type DeletePostTagsByPostIdMutationMutationResult =
  Apollo.MutationResult<DeletePostTagsByPostIdMutation>
export type DeletePostTagsByPostIdMutationMutationOptions = Apollo.BaseMutationOptions<
  DeletePostTagsByPostIdMutation,
  DeletePostTagsByPostIdMutationVariables
>
export const DeleteStgPlayerMutationDocument = gql`
  mutation DeleteStgPlayerMutation($stg_id: Int!) {
    delete_stg_players(where: { stg: { status: { _eq: upcoming } } }) {
      returning {
        stg {
          id
          players {
            player {
              id
              full_name
              username
              avatar
            }
          }
        }
      }
      affected_rows
    }
  }
`
export type DeleteStgPlayerMutationMutationFn = Apollo.MutationFunction<
  DeleteStgPlayerMutation,
  DeleteStgPlayerMutationVariables
>

/**
 * __useDeleteStgPlayerMutation__
 *
 * To run a mutation, you first call `useDeleteStgPlayerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteStgPlayerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteStgPlayerMutation, { data, loading, error }] = useDeleteStgPlayerMutation({
 *   variables: {
 *      stg_id: // value for 'stg_id'
 *   },
 * });
 */
export function useDeleteStgPlayerMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteStgPlayerMutation,
    DeleteStgPlayerMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<DeleteStgPlayerMutation, DeleteStgPlayerMutationVariables>(
    DeleteStgPlayerMutationDocument,
    options,
  )
}
export type DeleteStgPlayerMutationHookResult = ReturnType<typeof useDeleteStgPlayerMutation>
export type DeleteStgPlayerMutationMutationResult = Apollo.MutationResult<DeleteStgPlayerMutation>
export type DeleteStgPlayerMutationMutationOptions = Apollo.BaseMutationOptions<
  DeleteStgPlayerMutation,
  DeleteStgPlayerMutationVariables
>
export const DeleteStgSubmissionByIdMutationDocument = gql`
  mutation DeleteStgSubmissionByIdMutation($id: Int!) {
    delete_stg_submissions_by_pk(id: $id) {
      id
      stg {
        ...Stg
      }
    }
  }
  ${StgFragmentDoc}
`
export type DeleteStgSubmissionByIdMutationMutationFn = Apollo.MutationFunction<
  DeleteStgSubmissionByIdMutation,
  DeleteStgSubmissionByIdMutationVariables
>

/**
 * __useDeleteStgSubmissionByIdMutation__
 *
 * To run a mutation, you first call `useDeleteStgSubmissionByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteStgSubmissionByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteStgSubmissionByIdMutation, { data, loading, error }] = useDeleteStgSubmissionByIdMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteStgSubmissionByIdMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteStgSubmissionByIdMutation,
    DeleteStgSubmissionByIdMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    DeleteStgSubmissionByIdMutation,
    DeleteStgSubmissionByIdMutationVariables
  >(DeleteStgSubmissionByIdMutationDocument, options)
}
export type DeleteStgSubmissionByIdMutationHookResult = ReturnType<
  typeof useDeleteStgSubmissionByIdMutation
>
export type DeleteStgSubmissionByIdMutationMutationResult =
  Apollo.MutationResult<DeleteStgSubmissionByIdMutation>
export type DeleteStgSubmissionByIdMutationMutationOptions = Apollo.BaseMutationOptions<
  DeleteStgSubmissionByIdMutation,
  DeleteStgSubmissionByIdMutationVariables
>
export const DeleteUpcomingStgSetMutationDocument = gql`
  mutation DeleteUpcomingStgSetMutation {
    delete_stg_sets(where: { stg: { status: { _eq: upcoming } } }) {
      returning {
        id
        instructions
        video_asset_id
        video_playback_id
        set_by {
          full_name
          username
          id
        }
        stg {
          id
          status
          sets {
            id
            instructions
            video_asset_id
            video_playback_id
            set_by {
              full_name
              username
              id
            }
          }
          submissions {
            id
            video_asset_id
            video_playback_id
            created_at
            submitted_by {
              full_name
              username
              id
            }
          }
        }
      }
    }
  }
`
export type DeleteUpcomingStgSetMutationMutationFn = Apollo.MutationFunction<
  DeleteUpcomingStgSetMutation,
  DeleteUpcomingStgSetMutationVariables
>

/**
 * __useDeleteUpcomingStgSetMutation__
 *
 * To run a mutation, you first call `useDeleteUpcomingStgSetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUpcomingStgSetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUpcomingStgSetMutation, { data, loading, error }] = useDeleteUpcomingStgSetMutation({
 *   variables: {
 *   },
 * });
 */
export function useDeleteUpcomingStgSetMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteUpcomingStgSetMutation,
    DeleteUpcomingStgSetMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<DeleteUpcomingStgSetMutation, DeleteUpcomingStgSetMutationVariables>(
    DeleteUpcomingStgSetMutationDocument,
    options,
  )
}
export type DeleteUpcomingStgSetMutationHookResult = ReturnType<
  typeof useDeleteUpcomingStgSetMutation
>
export type DeleteUpcomingStgSetMutationMutationResult =
  Apollo.MutationResult<DeleteUpcomingStgSetMutation>
export type DeleteUpcomingStgSetMutationMutationOptions = Apollo.BaseMutationOptions<
  DeleteUpcomingStgSetMutation,
  DeleteUpcomingStgSetMutationVariables
>
export const DeleteUserDisciplinesMutationDocument = gql`
  mutation DeleteUserDisciplinesMutation {
    delete_user_disciplines(where: {}) {
      affected_rows
    }
  }
`
export type DeleteUserDisciplinesMutationMutationFn = Apollo.MutationFunction<
  DeleteUserDisciplinesMutation,
  DeleteUserDisciplinesMutationVariables
>

/**
 * __useDeleteUserDisciplinesMutation__
 *
 * To run a mutation, you first call `useDeleteUserDisciplinesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserDisciplinesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserDisciplinesMutation, { data, loading, error }] = useDeleteUserDisciplinesMutation({
 *   variables: {
 *   },
 * });
 */
export function useDeleteUserDisciplinesMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteUserDisciplinesMutation,
    DeleteUserDisciplinesMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<DeleteUserDisciplinesMutation, DeleteUserDisciplinesMutationVariables>(
    DeleteUserDisciplinesMutationDocument,
    options,
  )
}
export type DeleteUserDisciplinesMutationHookResult = ReturnType<
  typeof useDeleteUserDisciplinesMutation
>
export type DeleteUserDisciplinesMutationMutationResult =
  Apollo.MutationResult<DeleteUserDisciplinesMutation>
export type DeleteUserDisciplinesMutationMutationOptions = Apollo.BaseMutationOptions<
  DeleteUserDisciplinesMutation,
  DeleteUserDisciplinesMutationVariables
>
export const DeleteUserLocationByTypeMutationDocument = gql`
  mutation DeleteUserLocationByTypeMutation($type: e_user_locations_enum!) {
    delete_user_locations(where: { type: { _eq: $type } }) {
      returning {
        lat
        lng
      }
      affected_rows
    }
  }
`
export type DeleteUserLocationByTypeMutationMutationFn = Apollo.MutationFunction<
  DeleteUserLocationByTypeMutation,
  DeleteUserLocationByTypeMutationVariables
>

/**
 * __useDeleteUserLocationByTypeMutation__
 *
 * To run a mutation, you first call `useDeleteUserLocationByTypeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserLocationByTypeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserLocationByTypeMutation, { data, loading, error }] = useDeleteUserLocationByTypeMutation({
 *   variables: {
 *      type: // value for 'type'
 *   },
 * });
 */
export function useDeleteUserLocationByTypeMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteUserLocationByTypeMutation,
    DeleteUserLocationByTypeMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    DeleteUserLocationByTypeMutation,
    DeleteUserLocationByTypeMutationVariables
  >(DeleteUserLocationByTypeMutationDocument, options)
}
export type DeleteUserLocationByTypeMutationHookResult = ReturnType<
  typeof useDeleteUserLocationByTypeMutation
>
export type DeleteUserLocationByTypeMutationMutationResult =
  Apollo.MutationResult<DeleteUserLocationByTypeMutation>
export type DeleteUserLocationByTypeMutationMutationOptions = Apollo.BaseMutationOptions<
  DeleteUserLocationByTypeMutation,
  DeleteUserLocationByTypeMutationVariables
>
export const InsertChatMessageMutationDocument = gql`
  mutation InsertChatMessageMutation($text: String!) {
    insert_chat_messages_one(object: { text: $text }) {
      ...ChatMessage
    }
  }
  ${ChatMessageFragmentDoc}
`
export type InsertChatMessageMutationMutationFn = Apollo.MutationFunction<
  InsertChatMessageMutation,
  InsertChatMessageMutationVariables
>

/**
 * __useInsertChatMessageMutation__
 *
 * To run a mutation, you first call `useInsertChatMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertChatMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertChatMessageMutation, { data, loading, error }] = useInsertChatMessageMutation({
 *   variables: {
 *      text: // value for 'text'
 *   },
 * });
 */
export function useInsertChatMessageMutation(
  baseOptions?: Apollo.MutationHookOptions<
    InsertChatMessageMutation,
    InsertChatMessageMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<InsertChatMessageMutation, InsertChatMessageMutationVariables>(
    InsertChatMessageMutationDocument,
    options,
  )
}
export type InsertChatMessageMutationHookResult = ReturnType<typeof useInsertChatMessageMutation>
export type InsertChatMessageMutationMutationResult =
  Apollo.MutationResult<InsertChatMessageMutation>
export type InsertChatMessageMutationMutationOptions = Apollo.BaseMutationOptions<
  InsertChatMessageMutation,
  InsertChatMessageMutationVariables
>
export const InsertPostMessageMutationDocument = gql`
  mutation InsertPostMessageMutation($post_id: Int!, $text: String!) {
    insert_post_messages_one(object: { post_id: $post_id, text: $text }) {
      ...PostMessage
    }
  }
  ${PostMessageFragmentDoc}
`
export type InsertPostMessageMutationMutationFn = Apollo.MutationFunction<
  InsertPostMessageMutation,
  InsertPostMessageMutationVariables
>

/**
 * __useInsertPostMessageMutation__
 *
 * To run a mutation, you first call `useInsertPostMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertPostMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertPostMessageMutation, { data, loading, error }] = useInsertPostMessageMutation({
 *   variables: {
 *      post_id: // value for 'post_id'
 *      text: // value for 'text'
 *   },
 * });
 */
export function useInsertPostMessageMutation(
  baseOptions?: Apollo.MutationHookOptions<
    InsertPostMessageMutation,
    InsertPostMessageMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<InsertPostMessageMutation, InsertPostMessageMutationVariables>(
    InsertPostMessageMutationDocument,
    options,
  )
}
export type InsertPostMessageMutationHookResult = ReturnType<typeof useInsertPostMessageMutation>
export type InsertPostMessageMutationMutationResult =
  Apollo.MutationResult<InsertPostMessageMutation>
export type InsertPostMessageMutationMutationOptions = Apollo.BaseMutationOptions<
  InsertPostMessageMutation,
  InsertPostMessageMutationVariables
>
export const InsertPostTagsMutationDocument = gql`
  mutation InsertPostTagsMutation($objects: [post_tags_insert_input!]!) {
    insert_post_tags(objects: $objects) {
      returning {
        post_id
        tag
      }
    }
  }
`
export type InsertPostTagsMutationMutationFn = Apollo.MutationFunction<
  InsertPostTagsMutation,
  InsertPostTagsMutationVariables
>

/**
 * __useInsertPostTagsMutation__
 *
 * To run a mutation, you first call `useInsertPostTagsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertPostTagsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertPostTagsMutation, { data, loading, error }] = useInsertPostTagsMutation({
 *   variables: {
 *      objects: // value for 'objects'
 *   },
 * });
 */
export function useInsertPostTagsMutation(
  baseOptions?: Apollo.MutationHookOptions<InsertPostTagsMutation, InsertPostTagsMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<InsertPostTagsMutation, InsertPostTagsMutationVariables>(
    InsertPostTagsMutationDocument,
    options,
  )
}
export type InsertPostTagsMutationHookResult = ReturnType<typeof useInsertPostTagsMutation>
export type InsertPostTagsMutationMutationResult = Apollo.MutationResult<InsertPostTagsMutation>
export type InsertPostTagsMutationMutationOptions = Apollo.BaseMutationOptions<
  InsertPostTagsMutation,
  InsertPostTagsMutationVariables
>
export const InsertPostMutationDocument = gql`
  mutation InsertPostMutation(
    $body: String!
    $image_url: String
    $tags: post_tags_arr_rel_insert_input
    $oembed: jsonb
    $video_asset_id: String
    $video_playback_id: String
  ) {
    insert_posts_one(
      object: {
        body: $body
        tags: $tags
        image_url: $image_url
        video_playback_id: $video_playback_id
        video_asset_id: $video_asset_id
        oembed: $oembed
      }
    ) {
      ...Post
    }
  }
  ${PostFragmentDoc}
`
export type InsertPostMutationMutationFn = Apollo.MutationFunction<
  InsertPostMutation,
  InsertPostMutationVariables
>

/**
 * __useInsertPostMutation__
 *
 * To run a mutation, you first call `useInsertPostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertPostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertPostMutation, { data, loading, error }] = useInsertPostMutation({
 *   variables: {
 *      body: // value for 'body'
 *      image_url: // value for 'image_url'
 *      tags: // value for 'tags'
 *      oembed: // value for 'oembed'
 *      video_asset_id: // value for 'video_asset_id'
 *      video_playback_id: // value for 'video_playback_id'
 *   },
 * });
 */
export function useInsertPostMutation(
  baseOptions?: Apollo.MutationHookOptions<InsertPostMutation, InsertPostMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<InsertPostMutation, InsertPostMutationVariables>(
    InsertPostMutationDocument,
    options,
  )
}
export type InsertPostMutationHookResult = ReturnType<typeof useInsertPostMutation>
export type InsertPostMutationMutationResult = Apollo.MutationResult<InsertPostMutation>
export type InsertPostMutationMutationOptions = Apollo.BaseMutationOptions<
  InsertPostMutation,
  InsertPostMutationVariables
>
export const InsertStgPlayerMutationDocument = gql`
  mutation InsertStgPlayerMutation($stg_id: Int!) {
    insert_stg_players_one(object: { stg_id: $stg_id }) {
      stg {
        id
        players {
          player {
            id
            full_name
            username
            avatar
          }
        }
      }
    }
  }
`
export type InsertStgPlayerMutationMutationFn = Apollo.MutationFunction<
  InsertStgPlayerMutation,
  InsertStgPlayerMutationVariables
>

/**
 * __useInsertStgPlayerMutation__
 *
 * To run a mutation, you first call `useInsertStgPlayerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertStgPlayerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertStgPlayerMutation, { data, loading, error }] = useInsertStgPlayerMutation({
 *   variables: {
 *      stg_id: // value for 'stg_id'
 *   },
 * });
 */
export function useInsertStgPlayerMutation(
  baseOptions?: Apollo.MutationHookOptions<
    InsertStgPlayerMutation,
    InsertStgPlayerMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<InsertStgPlayerMutation, InsertStgPlayerMutationVariables>(
    InsertStgPlayerMutationDocument,
    options,
  )
}
export type InsertStgPlayerMutationHookResult = ReturnType<typeof useInsertStgPlayerMutation>
export type InsertStgPlayerMutationMutationResult = Apollo.MutationResult<InsertStgPlayerMutation>
export type InsertStgPlayerMutationMutationOptions = Apollo.BaseMutationOptions<
  InsertStgPlayerMutation,
  InsertStgPlayerMutationVariables
>
export const InsertStgSetMessageMutationDocument = gql`
  mutation InsertStgSetMessageMutation($stg_set_id: Int!, $text: String!) {
    insert_stg_set_messages_one(object: { stg_set_id: $stg_set_id, text: $text }) {
      ...StgSetMessage
    }
  }
  ${StgSetMessageFragmentDoc}
`
export type InsertStgSetMessageMutationMutationFn = Apollo.MutationFunction<
  InsertStgSetMessageMutation,
  InsertStgSetMessageMutationVariables
>

/**
 * __useInsertStgSetMessageMutation__
 *
 * To run a mutation, you first call `useInsertStgSetMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertStgSetMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertStgSetMessageMutation, { data, loading, error }] = useInsertStgSetMessageMutation({
 *   variables: {
 *      stg_set_id: // value for 'stg_set_id'
 *      text: // value for 'text'
 *   },
 * });
 */
export function useInsertStgSetMessageMutation(
  baseOptions?: Apollo.MutationHookOptions<
    InsertStgSetMessageMutation,
    InsertStgSetMessageMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<InsertStgSetMessageMutation, InsertStgSetMessageMutationVariables>(
    InsertStgSetMessageMutationDocument,
    options,
  )
}
export type InsertStgSetMessageMutationHookResult = ReturnType<
  typeof useInsertStgSetMessageMutation
>
export type InsertStgSetMessageMutationMutationResult =
  Apollo.MutationResult<InsertStgSetMessageMutation>
export type InsertStgSetMessageMutationMutationOptions = Apollo.BaseMutationOptions<
  InsertStgSetMessageMutation,
  InsertStgSetMessageMutationVariables
>
export const InsertStgSetMutationDocument = gql`
  mutation InsertStgSetMutation(
    $stg_id: Int!
    $title: String!
    $instructions: String!
    $video_asset_id: String!
    $video_playback_id: String!
  ) {
    insert_stg_sets_one(
      object: {
        stg_id: $stg_id
        title: $title
        instructions: $instructions
        video_asset_id: $video_asset_id
        video_playback_id: $video_playback_id
      }
    ) {
      id
      stg {
        ...Stg
      }
    }
  }
  ${StgFragmentDoc}
`
export type InsertStgSetMutationMutationFn = Apollo.MutationFunction<
  InsertStgSetMutation,
  InsertStgSetMutationVariables
>

/**
 * __useInsertStgSetMutation__
 *
 * To run a mutation, you first call `useInsertStgSetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertStgSetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertStgSetMutation, { data, loading, error }] = useInsertStgSetMutation({
 *   variables: {
 *      stg_id: // value for 'stg_id'
 *      title: // value for 'title'
 *      instructions: // value for 'instructions'
 *      video_asset_id: // value for 'video_asset_id'
 *      video_playback_id: // value for 'video_playback_id'
 *   },
 * });
 */
export function useInsertStgSetMutation(
  baseOptions?: Apollo.MutationHookOptions<InsertStgSetMutation, InsertStgSetMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<InsertStgSetMutation, InsertStgSetMutationVariables>(
    InsertStgSetMutationDocument,
    options,
  )
}
export type InsertStgSetMutationHookResult = ReturnType<typeof useInsertStgSetMutation>
export type InsertStgSetMutationMutationResult = Apollo.MutationResult<InsertStgSetMutation>
export type InsertStgSetMutationMutationOptions = Apollo.BaseMutationOptions<
  InsertStgSetMutation,
  InsertStgSetMutationVariables
>
export const InsertStgSubmissionMessageMutationDocument = gql`
  mutation InsertStgSubmissionMessageMutation($stg_submission_id: Int!, $text: String!) {
    insert_stg_submission_messages_one(
      object: { stg_submission_id: $stg_submission_id, text: $text }
    ) {
      ...StgSubmissionMessage
    }
  }
  ${StgSubmissionMessageFragmentDoc}
`
export type InsertStgSubmissionMessageMutationMutationFn = Apollo.MutationFunction<
  InsertStgSubmissionMessageMutation,
  InsertStgSubmissionMessageMutationVariables
>

/**
 * __useInsertStgSubmissionMessageMutation__
 *
 * To run a mutation, you first call `useInsertStgSubmissionMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertStgSubmissionMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertStgSubmissionMessageMutation, { data, loading, error }] = useInsertStgSubmissionMessageMutation({
 *   variables: {
 *      stg_submission_id: // value for 'stg_submission_id'
 *      text: // value for 'text'
 *   },
 * });
 */
export function useInsertStgSubmissionMessageMutation(
  baseOptions?: Apollo.MutationHookOptions<
    InsertStgSubmissionMessageMutation,
    InsertStgSubmissionMessageMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    InsertStgSubmissionMessageMutation,
    InsertStgSubmissionMessageMutationVariables
  >(InsertStgSubmissionMessageMutationDocument, options)
}
export type InsertStgSubmissionMessageMutationHookResult = ReturnType<
  typeof useInsertStgSubmissionMessageMutation
>
export type InsertStgSubmissionMessageMutationMutationResult =
  Apollo.MutationResult<InsertStgSubmissionMessageMutation>
export type InsertStgSubmissionMessageMutationMutationOptions = Apollo.BaseMutationOptions<
  InsertStgSubmissionMessageMutation,
  InsertStgSubmissionMessageMutationVariables
>
export const InsertStgSubmissionMutationDocument = gql`
  mutation InsertStgSubmissionMutation(
    $stg_set_id: Int!
    $stg_id: Int!
    $video_asset_id: String!
    $video_playback_id: String!
  ) {
    insert_stg_submissions_one(
      object: {
        stg_set_id: $stg_set_id
        stg_id: $stg_id
        video_asset_id: $video_asset_id
        video_playback_id: $video_playback_id
      }
    ) {
      id
      stg {
        ...Stg
      }
    }
  }
  ${StgFragmentDoc}
`
export type InsertStgSubmissionMutationMutationFn = Apollo.MutationFunction<
  InsertStgSubmissionMutation,
  InsertStgSubmissionMutationVariables
>

/**
 * __useInsertStgSubmissionMutation__
 *
 * To run a mutation, you first call `useInsertStgSubmissionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertStgSubmissionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertStgSubmissionMutation, { data, loading, error }] = useInsertStgSubmissionMutation({
 *   variables: {
 *      stg_set_id: // value for 'stg_set_id'
 *      stg_id: // value for 'stg_id'
 *      video_asset_id: // value for 'video_asset_id'
 *      video_playback_id: // value for 'video_playback_id'
 *   },
 * });
 */
export function useInsertStgSubmissionMutation(
  baseOptions?: Apollo.MutationHookOptions<
    InsertStgSubmissionMutation,
    InsertStgSubmissionMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<InsertStgSubmissionMutation, InsertStgSubmissionMutationVariables>(
    InsertStgSubmissionMutationDocument,
    options,
  )
}
export type InsertStgSubmissionMutationHookResult = ReturnType<
  typeof useInsertStgSubmissionMutation
>
export type InsertStgSubmissionMutationMutationResult =
  Apollo.MutationResult<InsertStgSubmissionMutation>
export type InsertStgSubmissionMutationMutationOptions = Apollo.BaseMutationOptions<
  InsertStgSubmissionMutation,
  InsertStgSubmissionMutationVariables
>
export const InsertUserDisciplinesMutationDocument = gql`
  mutation InsertUserDisciplinesMutation($objects: [user_disciplines_insert_input!]!) {
    insert_user_disciplines(objects: $objects) {
      returning {
        discipline
      }
    }
  }
`
export type InsertUserDisciplinesMutationMutationFn = Apollo.MutationFunction<
  InsertUserDisciplinesMutation,
  InsertUserDisciplinesMutationVariables
>

/**
 * __useInsertUserDisciplinesMutation__
 *
 * To run a mutation, you first call `useInsertUserDisciplinesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertUserDisciplinesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertUserDisciplinesMutation, { data, loading, error }] = useInsertUserDisciplinesMutation({
 *   variables: {
 *      objects: // value for 'objects'
 *   },
 * });
 */
export function useInsertUserDisciplinesMutation(
  baseOptions?: Apollo.MutationHookOptions<
    InsertUserDisciplinesMutation,
    InsertUserDisciplinesMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<InsertUserDisciplinesMutation, InsertUserDisciplinesMutationVariables>(
    InsertUserDisciplinesMutationDocument,
    options,
  )
}
export type InsertUserDisciplinesMutationHookResult = ReturnType<
  typeof useInsertUserDisciplinesMutation
>
export type InsertUserDisciplinesMutationMutationResult =
  Apollo.MutationResult<InsertUserDisciplinesMutation>
export type InsertUserDisciplinesMutationMutationOptions = Apollo.BaseMutationOptions<
  InsertUserDisciplinesMutation,
  InsertUserDisciplinesMutationVariables
>
export const LikeChatMessageMutationDocument = gql`
  mutation LikeChatMessageMutation($chat_message_id: Int!) {
    insert_likes_chat_message_user_one(
      object: { chat_message_id: $chat_message_id }
      on_conflict: { constraint: likes_chat_message_user_pkey, update_columns: [] }
    ) {
      chat_message {
        ...ChatMessage
      }
      user {
        id
      }
      __typename
    }
  }
  ${ChatMessageFragmentDoc}
`
export type LikeChatMessageMutationMutationFn = Apollo.MutationFunction<
  LikeChatMessageMutation,
  LikeChatMessageMutationVariables
>

/**
 * __useLikeChatMessageMutation__
 *
 * To run a mutation, you first call `useLikeChatMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLikeChatMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [likeChatMessageMutation, { data, loading, error }] = useLikeChatMessageMutation({
 *   variables: {
 *      chat_message_id: // value for 'chat_message_id'
 *   },
 * });
 */
export function useLikeChatMessageMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LikeChatMessageMutation,
    LikeChatMessageMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<LikeChatMessageMutation, LikeChatMessageMutationVariables>(
    LikeChatMessageMutationDocument,
    options,
  )
}
export type LikeChatMessageMutationHookResult = ReturnType<typeof useLikeChatMessageMutation>
export type LikeChatMessageMutationMutationResult = Apollo.MutationResult<LikeChatMessageMutation>
export type LikeChatMessageMutationMutationOptions = Apollo.BaseMutationOptions<
  LikeChatMessageMutation,
  LikeChatMessageMutationVariables
>
export const LikePostMessageMutationDocument = gql`
  mutation LikePostMessageMutation($post_message_id: Int!) {
    insert_likes_post_message_user_one(
      object: { post_message_id: $post_message_id }
      on_conflict: { constraint: likes_post_message_user_pkey, update_columns: [] }
    ) {
      post_message {
        ...PostMessage
      }
      user {
        full_name
      }
      __typename
    }
  }
  ${PostMessageFragmentDoc}
`
export type LikePostMessageMutationMutationFn = Apollo.MutationFunction<
  LikePostMessageMutation,
  LikePostMessageMutationVariables
>

/**
 * __useLikePostMessageMutation__
 *
 * To run a mutation, you first call `useLikePostMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLikePostMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [likePostMessageMutation, { data, loading, error }] = useLikePostMessageMutation({
 *   variables: {
 *      post_message_id: // value for 'post_message_id'
 *   },
 * });
 */
export function useLikePostMessageMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LikePostMessageMutation,
    LikePostMessageMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<LikePostMessageMutation, LikePostMessageMutationVariables>(
    LikePostMessageMutationDocument,
    options,
  )
}
export type LikePostMessageMutationHookResult = ReturnType<typeof useLikePostMessageMutation>
export type LikePostMessageMutationMutationResult = Apollo.MutationResult<LikePostMessageMutation>
export type LikePostMessageMutationMutationOptions = Apollo.BaseMutationOptions<
  LikePostMessageMutation,
  LikePostMessageMutationVariables
>
export const LikePostMutationDocument = gql`
  mutation LikePostMutation($post_id: Int!) {
    insert_likes_post_user_one(
      object: { post_id: $post_id }
      on_conflict: { constraint: likes_post_user_pkey, update_columns: [] }
    ) {
      post_id
      post {
        ...Post
      }
      liked_by_user_id
      __typename
    }
  }
  ${PostFragmentDoc}
`
export type LikePostMutationMutationFn = Apollo.MutationFunction<
  LikePostMutation,
  LikePostMutationVariables
>

/**
 * __useLikePostMutation__
 *
 * To run a mutation, you first call `useLikePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLikePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [likePostMutation, { data, loading, error }] = useLikePostMutation({
 *   variables: {
 *      post_id: // value for 'post_id'
 *   },
 * });
 */
export function useLikePostMutation(
  baseOptions?: Apollo.MutationHookOptions<LikePostMutation, LikePostMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<LikePostMutation, LikePostMutationVariables>(
    LikePostMutationDocument,
    options,
  )
}
export type LikePostMutationHookResult = ReturnType<typeof useLikePostMutation>
export type LikePostMutationMutationResult = Apollo.MutationResult<LikePostMutation>
export type LikePostMutationMutationOptions = Apollo.BaseMutationOptions<
  LikePostMutation,
  LikePostMutationVariables
>
export const LikeStgSetMessageMutationDocument = gql`
  mutation LikeStgSetMessageMutation($stg_set_message_id: Int!) {
    insert_likes_stg_set_message_user_one(
      object: { stg_set_message_id: $stg_set_message_id }
      on_conflict: { constraint: likes_stg_set_message_user_pkey, update_columns: [] }
    ) {
      set_message {
        ...StgSetMessage
      }
      user {
        full_name
      }
      __typename
    }
  }
  ${StgSetMessageFragmentDoc}
`
export type LikeStgSetMessageMutationMutationFn = Apollo.MutationFunction<
  LikeStgSetMessageMutation,
  LikeStgSetMessageMutationVariables
>

/**
 * __useLikeStgSetMessageMutation__
 *
 * To run a mutation, you first call `useLikeStgSetMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLikeStgSetMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [likeStgSetMessageMutation, { data, loading, error }] = useLikeStgSetMessageMutation({
 *   variables: {
 *      stg_set_message_id: // value for 'stg_set_message_id'
 *   },
 * });
 */
export function useLikeStgSetMessageMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LikeStgSetMessageMutation,
    LikeStgSetMessageMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<LikeStgSetMessageMutation, LikeStgSetMessageMutationVariables>(
    LikeStgSetMessageMutationDocument,
    options,
  )
}
export type LikeStgSetMessageMutationHookResult = ReturnType<typeof useLikeStgSetMessageMutation>
export type LikeStgSetMessageMutationMutationResult =
  Apollo.MutationResult<LikeStgSetMessageMutation>
export type LikeStgSetMessageMutationMutationOptions = Apollo.BaseMutationOptions<
  LikeStgSetMessageMutation,
  LikeStgSetMessageMutationVariables
>
export const LikeStgSetMutationDocument = gql`
  mutation LikeStgSetMutation($stg_set_id: Int!) {
    insert_likes_stg_set_user_one(
      object: { stg_set_id: $stg_set_id }
      on_conflict: { constraint: likes_stg_set_user_pkey, update_columns: [] }
    ) {
      stg_set_id
      stg_set {
        ...TinyStgSet
      }
      liked_by_user_id
      __typename
    }
  }
  ${TinyStgSetFragmentDoc}
`
export type LikeStgSetMutationMutationFn = Apollo.MutationFunction<
  LikeStgSetMutation,
  LikeStgSetMutationVariables
>

/**
 * __useLikeStgSetMutation__
 *
 * To run a mutation, you first call `useLikeStgSetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLikeStgSetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [likeStgSetMutation, { data, loading, error }] = useLikeStgSetMutation({
 *   variables: {
 *      stg_set_id: // value for 'stg_set_id'
 *   },
 * });
 */
export function useLikeStgSetMutation(
  baseOptions?: Apollo.MutationHookOptions<LikeStgSetMutation, LikeStgSetMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<LikeStgSetMutation, LikeStgSetMutationVariables>(
    LikeStgSetMutationDocument,
    options,
  )
}
export type LikeStgSetMutationHookResult = ReturnType<typeof useLikeStgSetMutation>
export type LikeStgSetMutationMutationResult = Apollo.MutationResult<LikeStgSetMutation>
export type LikeStgSetMutationMutationOptions = Apollo.BaseMutationOptions<
  LikeStgSetMutation,
  LikeStgSetMutationVariables
>
export const LikeStgSubmissionMessageMutationDocument = gql`
  mutation LikeStgSubmissionMessageMutation($stg_submission_message_id: Int!) {
    insert_likes_stg_submission_message_user_one(
      object: { stg_submission_message_id: $stg_submission_message_id }
      on_conflict: { constraint: likes_stg_submission_message_user_pkey, update_columns: [] }
    ) {
      submission_message {
        ...StgSubmissionMessage
      }
      user {
        full_name
      }
      __typename
    }
  }
  ${StgSubmissionMessageFragmentDoc}
`
export type LikeStgSubmissionMessageMutationMutationFn = Apollo.MutationFunction<
  LikeStgSubmissionMessageMutation,
  LikeStgSubmissionMessageMutationVariables
>

/**
 * __useLikeStgSubmissionMessageMutation__
 *
 * To run a mutation, you first call `useLikeStgSubmissionMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLikeStgSubmissionMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [likeStgSubmissionMessageMutation, { data, loading, error }] = useLikeStgSubmissionMessageMutation({
 *   variables: {
 *      stg_submission_message_id: // value for 'stg_submission_message_id'
 *   },
 * });
 */
export function useLikeStgSubmissionMessageMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LikeStgSubmissionMessageMutation,
    LikeStgSubmissionMessageMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    LikeStgSubmissionMessageMutation,
    LikeStgSubmissionMessageMutationVariables
  >(LikeStgSubmissionMessageMutationDocument, options)
}
export type LikeStgSubmissionMessageMutationHookResult = ReturnType<
  typeof useLikeStgSubmissionMessageMutation
>
export type LikeStgSubmissionMessageMutationMutationResult =
  Apollo.MutationResult<LikeStgSubmissionMessageMutation>
export type LikeStgSubmissionMessageMutationMutationOptions = Apollo.BaseMutationOptions<
  LikeStgSubmissionMessageMutation,
  LikeStgSubmissionMessageMutationVariables
>
export const LikeStgSubmissionMutationDocument = gql`
  mutation LikeStgSubmissionMutation($stg_submission_id: Int!) {
    insert_likes_stg_submission_user_one(
      object: { stg_submission_id: $stg_submission_id }
      on_conflict: { constraint: likes_stg_submission_user_pkey, update_columns: [] }
    ) {
      stg_submission_id
      stg_submission {
        ...TinyStgSubmission
      }
      liked_by_user_id
      __typename
    }
  }
  ${TinyStgSubmissionFragmentDoc}
`
export type LikeStgSubmissionMutationMutationFn = Apollo.MutationFunction<
  LikeStgSubmissionMutation,
  LikeStgSubmissionMutationVariables
>

/**
 * __useLikeStgSubmissionMutation__
 *
 * To run a mutation, you first call `useLikeStgSubmissionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLikeStgSubmissionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [likeStgSubmissionMutation, { data, loading, error }] = useLikeStgSubmissionMutation({
 *   variables: {
 *      stg_submission_id: // value for 'stg_submission_id'
 *   },
 * });
 */
export function useLikeStgSubmissionMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LikeStgSubmissionMutation,
    LikeStgSubmissionMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<LikeStgSubmissionMutation, LikeStgSubmissionMutationVariables>(
    LikeStgSubmissionMutationDocument,
    options,
  )
}
export type LikeStgSubmissionMutationHookResult = ReturnType<typeof useLikeStgSubmissionMutation>
export type LikeStgSubmissionMutationMutationResult =
  Apollo.MutationResult<LikeStgSubmissionMutation>
export type LikeStgSubmissionMutationMutationOptions = Apollo.BaseMutationOptions<
  LikeStgSubmissionMutation,
  LikeStgSubmissionMutationVariables
>
export const LikeUserMutationDocument = gql`
  mutation LikeUserMutation($liked_user_id: Int!) {
    insert_likes_user_user_one(
      object: { liked_user_id: $liked_user_id }
      on_conflict: { constraint: likes_user_user_pkey, update_columns: [] }
    ) {
      liked_user {
        ...User
      }
    }
  }
  ${UserFragmentDoc}
`
export type LikeUserMutationMutationFn = Apollo.MutationFunction<
  LikeUserMutation,
  LikeUserMutationVariables
>

/**
 * __useLikeUserMutation__
 *
 * To run a mutation, you first call `useLikeUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLikeUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [likeUserMutation, { data, loading, error }] = useLikeUserMutation({
 *   variables: {
 *      liked_user_id: // value for 'liked_user_id'
 *   },
 * });
 */
export function useLikeUserMutation(
  baseOptions?: Apollo.MutationHookOptions<LikeUserMutation, LikeUserMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<LikeUserMutation, LikeUserMutationVariables>(
    LikeUserMutationDocument,
    options,
  )
}
export type LikeUserMutationHookResult = ReturnType<typeof useLikeUserMutation>
export type LikeUserMutationMutationResult = Apollo.MutationResult<LikeUserMutation>
export type LikeUserMutationMutationOptions = Apollo.BaseMutationOptions<
  LikeUserMutation,
  LikeUserMutationVariables
>
export const UnlikeChatMessageMutationDocument = gql`
  mutation UnlikeChatMessageMutation($chat_message_id: Int!) {
    delete_likes_chat_message_user(where: { chat_message_id: { _eq: $chat_message_id } }) {
      returning {
        chat_message {
          ...ChatMessage
        }
        user {
          id
        }
        __typename
      }
    }
  }
  ${ChatMessageFragmentDoc}
`
export type UnlikeChatMessageMutationMutationFn = Apollo.MutationFunction<
  UnlikeChatMessageMutation,
  UnlikeChatMessageMutationVariables
>

/**
 * __useUnlikeChatMessageMutation__
 *
 * To run a mutation, you first call `useUnlikeChatMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnlikeChatMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unlikeChatMessageMutation, { data, loading, error }] = useUnlikeChatMessageMutation({
 *   variables: {
 *      chat_message_id: // value for 'chat_message_id'
 *   },
 * });
 */
export function useUnlikeChatMessageMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UnlikeChatMessageMutation,
    UnlikeChatMessageMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<UnlikeChatMessageMutation, UnlikeChatMessageMutationVariables>(
    UnlikeChatMessageMutationDocument,
    options,
  )
}
export type UnlikeChatMessageMutationHookResult = ReturnType<typeof useUnlikeChatMessageMutation>
export type UnlikeChatMessageMutationMutationResult =
  Apollo.MutationResult<UnlikeChatMessageMutation>
export type UnlikeChatMessageMutationMutationOptions = Apollo.BaseMutationOptions<
  UnlikeChatMessageMutation,
  UnlikeChatMessageMutationVariables
>
export const UnlikePostMessageMutationDocument = gql`
  mutation UnlikePostMessageMutation($post_message_id: Int!) {
    delete_likes_post_message_user(where: { post_message_id: { _eq: $post_message_id } }) {
      returning {
        post_message {
          ...PostMessage
        }
        user {
          full_name
        }
        __typename
      }
    }
  }
  ${PostMessageFragmentDoc}
`
export type UnlikePostMessageMutationMutationFn = Apollo.MutationFunction<
  UnlikePostMessageMutation,
  UnlikePostMessageMutationVariables
>

/**
 * __useUnlikePostMessageMutation__
 *
 * To run a mutation, you first call `useUnlikePostMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnlikePostMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unlikePostMessageMutation, { data, loading, error }] = useUnlikePostMessageMutation({
 *   variables: {
 *      post_message_id: // value for 'post_message_id'
 *   },
 * });
 */
export function useUnlikePostMessageMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UnlikePostMessageMutation,
    UnlikePostMessageMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<UnlikePostMessageMutation, UnlikePostMessageMutationVariables>(
    UnlikePostMessageMutationDocument,
    options,
  )
}
export type UnlikePostMessageMutationHookResult = ReturnType<typeof useUnlikePostMessageMutation>
export type UnlikePostMessageMutationMutationResult =
  Apollo.MutationResult<UnlikePostMessageMutation>
export type UnlikePostMessageMutationMutationOptions = Apollo.BaseMutationOptions<
  UnlikePostMessageMutation,
  UnlikePostMessageMutationVariables
>
export const UnlikePostMutationDocument = gql`
  mutation UnlikePostMutation($post_id: Int!) {
    delete_likes_post_user(where: { post_id: { _eq: $post_id } }) {
      returning {
        post_id
        post {
          ...Post
        }
        liked_by_user_id
        __typename
      }
    }
  }
  ${PostFragmentDoc}
`
export type UnlikePostMutationMutationFn = Apollo.MutationFunction<
  UnlikePostMutation,
  UnlikePostMutationVariables
>

/**
 * __useUnlikePostMutation__
 *
 * To run a mutation, you first call `useUnlikePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnlikePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unlikePostMutation, { data, loading, error }] = useUnlikePostMutation({
 *   variables: {
 *      post_id: // value for 'post_id'
 *   },
 * });
 */
export function useUnlikePostMutation(
  baseOptions?: Apollo.MutationHookOptions<UnlikePostMutation, UnlikePostMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<UnlikePostMutation, UnlikePostMutationVariables>(
    UnlikePostMutationDocument,
    options,
  )
}
export type UnlikePostMutationHookResult = ReturnType<typeof useUnlikePostMutation>
export type UnlikePostMutationMutationResult = Apollo.MutationResult<UnlikePostMutation>
export type UnlikePostMutationMutationOptions = Apollo.BaseMutationOptions<
  UnlikePostMutation,
  UnlikePostMutationVariables
>
export const UnlikeStgSetMessageMutationDocument = gql`
  mutation UnlikeStgSetMessageMutation($stg_set_message_id: Int!) {
    delete_likes_stg_set_message_user(where: { stg_set_message_id: { _eq: $stg_set_message_id } }) {
      returning {
        set_message {
          ...StgSetMessage
        }
        user {
          full_name
        }
        __typename
      }
    }
  }
  ${StgSetMessageFragmentDoc}
`
export type UnlikeStgSetMessageMutationMutationFn = Apollo.MutationFunction<
  UnlikeStgSetMessageMutation,
  UnlikeStgSetMessageMutationVariables
>

/**
 * __useUnlikeStgSetMessageMutation__
 *
 * To run a mutation, you first call `useUnlikeStgSetMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnlikeStgSetMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unlikeStgSetMessageMutation, { data, loading, error }] = useUnlikeStgSetMessageMutation({
 *   variables: {
 *      stg_set_message_id: // value for 'stg_set_message_id'
 *   },
 * });
 */
export function useUnlikeStgSetMessageMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UnlikeStgSetMessageMutation,
    UnlikeStgSetMessageMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<UnlikeStgSetMessageMutation, UnlikeStgSetMessageMutationVariables>(
    UnlikeStgSetMessageMutationDocument,
    options,
  )
}
export type UnlikeStgSetMessageMutationHookResult = ReturnType<
  typeof useUnlikeStgSetMessageMutation
>
export type UnlikeStgSetMessageMutationMutationResult =
  Apollo.MutationResult<UnlikeStgSetMessageMutation>
export type UnlikeStgSetMessageMutationMutationOptions = Apollo.BaseMutationOptions<
  UnlikeStgSetMessageMutation,
  UnlikeStgSetMessageMutationVariables
>
export const UnlikeStgSetMutationDocument = gql`
  mutation UnlikeStgSetMutation($stg_set_id: Int!) {
    delete_likes_stg_set_user(where: { stg_set_id: { _eq: $stg_set_id } }) {
      returning {
        stg_set_id
        stg_set {
          ...TinyStgSet
        }
        liked_by_user_id
        __typename
      }
    }
  }
  ${TinyStgSetFragmentDoc}
`
export type UnlikeStgSetMutationMutationFn = Apollo.MutationFunction<
  UnlikeStgSetMutation,
  UnlikeStgSetMutationVariables
>

/**
 * __useUnlikeStgSetMutation__
 *
 * To run a mutation, you first call `useUnlikeStgSetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnlikeStgSetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unlikeStgSetMutation, { data, loading, error }] = useUnlikeStgSetMutation({
 *   variables: {
 *      stg_set_id: // value for 'stg_set_id'
 *   },
 * });
 */
export function useUnlikeStgSetMutation(
  baseOptions?: Apollo.MutationHookOptions<UnlikeStgSetMutation, UnlikeStgSetMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<UnlikeStgSetMutation, UnlikeStgSetMutationVariables>(
    UnlikeStgSetMutationDocument,
    options,
  )
}
export type UnlikeStgSetMutationHookResult = ReturnType<typeof useUnlikeStgSetMutation>
export type UnlikeStgSetMutationMutationResult = Apollo.MutationResult<UnlikeStgSetMutation>
export type UnlikeStgSetMutationMutationOptions = Apollo.BaseMutationOptions<
  UnlikeStgSetMutation,
  UnlikeStgSetMutationVariables
>
export const UnlikeStgSubmissionMessageMutationDocument = gql`
  mutation UnlikeStgSubmissionMessageMutation($stg_submission_message_id: Int!) {
    delete_likes_stg_submission_message_user(
      where: { stg_submission_message_id: { _eq: $stg_submission_message_id } }
    ) {
      returning {
        submission_message {
          ...StgSubmissionMessage
        }
        user {
          full_name
        }
        __typename
      }
    }
  }
  ${StgSubmissionMessageFragmentDoc}
`
export type UnlikeStgSubmissionMessageMutationMutationFn = Apollo.MutationFunction<
  UnlikeStgSubmissionMessageMutation,
  UnlikeStgSubmissionMessageMutationVariables
>

/**
 * __useUnlikeStgSubmissionMessageMutation__
 *
 * To run a mutation, you first call `useUnlikeStgSubmissionMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnlikeStgSubmissionMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unlikeStgSubmissionMessageMutation, { data, loading, error }] = useUnlikeStgSubmissionMessageMutation({
 *   variables: {
 *      stg_submission_message_id: // value for 'stg_submission_message_id'
 *   },
 * });
 */
export function useUnlikeStgSubmissionMessageMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UnlikeStgSubmissionMessageMutation,
    UnlikeStgSubmissionMessageMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    UnlikeStgSubmissionMessageMutation,
    UnlikeStgSubmissionMessageMutationVariables
  >(UnlikeStgSubmissionMessageMutationDocument, options)
}
export type UnlikeStgSubmissionMessageMutationHookResult = ReturnType<
  typeof useUnlikeStgSubmissionMessageMutation
>
export type UnlikeStgSubmissionMessageMutationMutationResult =
  Apollo.MutationResult<UnlikeStgSubmissionMessageMutation>
export type UnlikeStgSubmissionMessageMutationMutationOptions = Apollo.BaseMutationOptions<
  UnlikeStgSubmissionMessageMutation,
  UnlikeStgSubmissionMessageMutationVariables
>
export const UnlikeStgSubmissionMutationDocument = gql`
  mutation UnlikeStgSubmissionMutation($stg_submission_id: Int!) {
    delete_likes_stg_submission_user(where: { stg_submission_id: { _eq: $stg_submission_id } }) {
      returning {
        stg_submission {
          id
          likes {
            user {
              id
            }
          }
        }
        user {
          id
        }
        __typename
      }
    }
  }
`
export type UnlikeStgSubmissionMutationMutationFn = Apollo.MutationFunction<
  UnlikeStgSubmissionMutation,
  UnlikeStgSubmissionMutationVariables
>

/**
 * __useUnlikeStgSubmissionMutation__
 *
 * To run a mutation, you first call `useUnlikeStgSubmissionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnlikeStgSubmissionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unlikeStgSubmissionMutation, { data, loading, error }] = useUnlikeStgSubmissionMutation({
 *   variables: {
 *      stg_submission_id: // value for 'stg_submission_id'
 *   },
 * });
 */
export function useUnlikeStgSubmissionMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UnlikeStgSubmissionMutation,
    UnlikeStgSubmissionMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<UnlikeStgSubmissionMutation, UnlikeStgSubmissionMutationVariables>(
    UnlikeStgSubmissionMutationDocument,
    options,
  )
}
export type UnlikeStgSubmissionMutationHookResult = ReturnType<
  typeof useUnlikeStgSubmissionMutation
>
export type UnlikeStgSubmissionMutationMutationResult =
  Apollo.MutationResult<UnlikeStgSubmissionMutation>
export type UnlikeStgSubmissionMutationMutationOptions = Apollo.BaseMutationOptions<
  UnlikeStgSubmissionMutation,
  UnlikeStgSubmissionMutationVariables
>
export const UnlikeUserMutationDocument = gql`
  mutation UnlikeUserMutation($liked_user_id: Int!) {
    delete_likes_user_user(where: { liked_user_id: { _eq: $liked_user_id } }) {
      returning {
        liked_user {
          ...User
        }
      }
    }
  }
  ${UserFragmentDoc}
`
export type UnlikeUserMutationMutationFn = Apollo.MutationFunction<
  UnlikeUserMutation,
  UnlikeUserMutationVariables
>

/**
 * __useUnlikeUserMutation__
 *
 * To run a mutation, you first call `useUnlikeUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnlikeUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unlikeUserMutation, { data, loading, error }] = useUnlikeUserMutation({
 *   variables: {
 *      liked_user_id: // value for 'liked_user_id'
 *   },
 * });
 */
export function useUnlikeUserMutation(
  baseOptions?: Apollo.MutationHookOptions<UnlikeUserMutation, UnlikeUserMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<UnlikeUserMutation, UnlikeUserMutationVariables>(
    UnlikeUserMutationDocument,
    options,
  )
}
export type UnlikeUserMutationHookResult = ReturnType<typeof useUnlikeUserMutation>
export type UnlikeUserMutationMutationResult = Apollo.MutationResult<UnlikeUserMutation>
export type UnlikeUserMutationMutationOptions = Apollo.BaseMutationOptions<
  UnlikeUserMutation,
  UnlikeUserMutationVariables
>
export const UpdatePostByIdMutationDocument = gql`
  mutation UpdatePostByIdMutation($post_id: Int!, $body: String!) {
    update_posts_by_pk(pk_columns: { id: $post_id }, _set: { body: $body }) {
      ...Post
    }
  }
  ${PostFragmentDoc}
`
export type UpdatePostByIdMutationMutationFn = Apollo.MutationFunction<
  UpdatePostByIdMutation,
  UpdatePostByIdMutationVariables
>

/**
 * __useUpdatePostByIdMutation__
 *
 * To run a mutation, you first call `useUpdatePostByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePostByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePostByIdMutation, { data, loading, error }] = useUpdatePostByIdMutation({
 *   variables: {
 *      post_id: // value for 'post_id'
 *      body: // value for 'body'
 *   },
 * });
 */
export function useUpdatePostByIdMutation(
  baseOptions?: Apollo.MutationHookOptions<UpdatePostByIdMutation, UpdatePostByIdMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<UpdatePostByIdMutation, UpdatePostByIdMutationVariables>(
    UpdatePostByIdMutationDocument,
    options,
  )
}
export type UpdatePostByIdMutationHookResult = ReturnType<typeof useUpdatePostByIdMutation>
export type UpdatePostByIdMutationMutationResult = Apollo.MutationResult<UpdatePostByIdMutation>
export type UpdatePostByIdMutationMutationOptions = Apollo.BaseMutationOptions<
  UpdatePostByIdMutation,
  UpdatePostByIdMutationVariables
>
export const UpdateStgSetMutationDocument = gql`
  mutation UpdateStgSetMutation($title: String!, $instructions: String!) {
    update_stg_sets(
      where: { stg: { status: { _eq: upcoming } } }
      _set: { title: $title, instructions: $instructions }
    ) {
      affected_rows
      returning {
        stg {
          ...Stg
        }
      }
    }
  }
  ${StgFragmentDoc}
`
export type UpdateStgSetMutationMutationFn = Apollo.MutationFunction<
  UpdateStgSetMutation,
  UpdateStgSetMutationVariables
>

/**
 * __useUpdateStgSetMutation__
 *
 * To run a mutation, you first call `useUpdateStgSetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateStgSetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateStgSetMutation, { data, loading, error }] = useUpdateStgSetMutation({
 *   variables: {
 *      title: // value for 'title'
 *      instructions: // value for 'instructions'
 *   },
 * });
 */
export function useUpdateStgSetMutation(
  baseOptions?: Apollo.MutationHookOptions<UpdateStgSetMutation, UpdateStgSetMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<UpdateStgSetMutation, UpdateStgSetMutationVariables>(
    UpdateStgSetMutationDocument,
    options,
  )
}
export type UpdateStgSetMutationHookResult = ReturnType<typeof useUpdateStgSetMutation>
export type UpdateStgSetMutationMutationResult = Apollo.MutationResult<UpdateStgSetMutation>
export type UpdateStgSetMutationMutationOptions = Apollo.BaseMutationOptions<
  UpdateStgSetMutation,
  UpdateStgSetMutationVariables
>
export const UpdateUserMutationDocument = gql`
  mutation UpdateUserMutation(
    $full_name: String
    $username: String
    $bio: String
    $profession: String
    $birthday: date
    $nbds: jsonb
    $teams: jsonb
    $favorite_tricks: jsonb
    $trick_todos: jsonb
    $interests: jsonb
    $avatar: String
    $current_setup: String
  ) {
    update_users(
      where: {}
      _set: {
        full_name: $full_name
        username: $username
        bio: $bio
        profession: $profession
        birthday: $birthday
        nbds: $nbds
        teams: $teams
        favorite_tricks: $favorite_tricks
        trick_todos: $trick_todos
        interests: $interests
        avatar: $avatar
        current_setup: $current_setup
      }
    ) {
      returning {
        ...AuthdUser
      }
    }
  }
  ${AuthdUserFragmentDoc}
`
export type UpdateUserMutationMutationFn = Apollo.MutationFunction<
  UpdateUserMutation,
  UpdateUserMutationVariables
>

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      full_name: // value for 'full_name'
 *      username: // value for 'username'
 *      bio: // value for 'bio'
 *      profession: // value for 'profession'
 *      birthday: // value for 'birthday'
 *      nbds: // value for 'nbds'
 *      teams: // value for 'teams'
 *      favorite_tricks: // value for 'favorite_tricks'
 *      trick_todos: // value for 'trick_todos'
 *      interests: // value for 'interests'
 *      avatar: // value for 'avatar'
 *      current_setup: // value for 'current_setup'
 *   },
 * });
 */
export function useUpdateUserMutation(
  baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(
    UpdateUserMutationDocument,
    options,
  )
}
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>
export type UpdateUserMutationMutationResult = Apollo.MutationResult<UpdateUserMutation>
export type UpdateUserMutationMutationOptions = Apollo.BaseMutationOptions<
  UpdateUserMutation,
  UpdateUserMutationVariables
>
export const UpsertUserSocialsMutationDocument = gql`
  mutation UpsertUserSocialsMutation(
    $facebook: String
    $twitter: String
    $instagram: String
    $youtube: String
    $tiktok: String
    $spotify: String
  ) {
    insert_user_socials(
      objects: {
        facebook: $facebook
        twitter: $twitter
        instagram: $instagram
        youtube: $youtube
        tiktok: $tiktok
        spotify: $spotify
      }
      on_conflict: {
        constraint: user_socials_pkey
        update_columns: [facebook, twitter, instagram, youtube, tiktok, spotify]
      }
    ) {
      affected_rows
      returning {
        user_id
        facebook
        twitter
        instagram
        youtube
        tiktok
        spotify
      }
    }
  }
`
export type UpsertUserSocialsMutationMutationFn = Apollo.MutationFunction<
  UpsertUserSocialsMutation,
  UpsertUserSocialsMutationVariables
>

/**
 * __useUpsertUserSocialsMutation__
 *
 * To run a mutation, you first call `useUpsertUserSocialsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpsertUserSocialsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [upsertUserSocialsMutation, { data, loading, error }] = useUpsertUserSocialsMutation({
 *   variables: {
 *      facebook: // value for 'facebook'
 *      twitter: // value for 'twitter'
 *      instagram: // value for 'instagram'
 *      youtube: // value for 'youtube'
 *      tiktok: // value for 'tiktok'
 *      spotify: // value for 'spotify'
 *   },
 * });
 */
export function useUpsertUserSocialsMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpsertUserSocialsMutation,
    UpsertUserSocialsMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<UpsertUserSocialsMutation, UpsertUserSocialsMutationVariables>(
    UpsertUserSocialsMutationDocument,
    options,
  )
}
export type UpsertUserSocialsMutationHookResult = ReturnType<typeof useUpsertUserSocialsMutation>
export type UpsertUserSocialsMutationMutationResult =
  Apollo.MutationResult<UpsertUserSocialsMutation>
export type UpsertUserSocialsMutationMutationOptions = Apollo.BaseMutationOptions<
  UpsertUserSocialsMutation,
  UpsertUserSocialsMutationVariables
>
export const UpsertUserLocationMutationDocument = gql`
  mutation UpsertUserLocationMutation(
    $type: e_user_locations_enum!
    $lat: numeric!
    $lng: numeric!
    $country_long_name: String!
    $country_short_name: String!
    $formatted_address: String!
  ) {
    insert_user_locations_one(
      object: {
        type: $type
        lat: $lat
        lng: $lng
        country_long_name: $country_long_name
        country_short_name: $country_short_name
        formatted_address: $formatted_address
      }
      on_conflict: {
        constraint: user_locations_pkey
        update_columns: [type, lat, lng, country_long_name, country_short_name, formatted_address]
      }
    ) {
      type
      lat
      lng
      country_long_name
      country_short_name
      formatted_address
      user {
        full_name
        locations {
          id
          type
          lat
          lng
          country_long_name
          country_short_name
          formatted_address
        }
      }
    }
  }
`
export type UpsertUserLocationMutationMutationFn = Apollo.MutationFunction<
  UpsertUserLocationMutation,
  UpsertUserLocationMutationVariables
>

/**
 * __useUpsertUserLocationMutation__
 *
 * To run a mutation, you first call `useUpsertUserLocationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpsertUserLocationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [upsertUserLocationMutation, { data, loading, error }] = useUpsertUserLocationMutation({
 *   variables: {
 *      type: // value for 'type'
 *      lat: // value for 'lat'
 *      lng: // value for 'lng'
 *      country_long_name: // value for 'country_long_name'
 *      country_short_name: // value for 'country_short_name'
 *      formatted_address: // value for 'formatted_address'
 *   },
 * });
 */
export function useUpsertUserLocationMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpsertUserLocationMutation,
    UpsertUserLocationMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<UpsertUserLocationMutation, UpsertUserLocationMutationVariables>(
    UpsertUserLocationMutationDocument,
    options,
  )
}
export type UpsertUserLocationMutationHookResult = ReturnType<typeof useUpsertUserLocationMutation>
export type UpsertUserLocationMutationMutationResult =
  Apollo.MutationResult<UpsertUserLocationMutation>
export type UpsertUserLocationMutationMutationOptions = Apollo.BaseMutationOptions<
  UpsertUserLocationMutation,
  UpsertUserLocationMutationVariables
>
export const AuthdUserByIdQueryDocument = gql`
  query AuthdUserByIdQuery($id: Int!) {
    users_by_pk(id: $id) {
      ...AuthdUser
    }
  }
  ${AuthdUserFragmentDoc}
`

/**
 * __useAuthdUserByIdQuery__
 *
 * To run a query within a React component, call `useAuthdUserByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useAuthdUserByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAuthdUserByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useAuthdUserByIdQuery(
  baseOptions: Apollo.QueryHookOptions<AuthdUserByIdQuery, AuthdUserByIdQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AuthdUserByIdQuery, AuthdUserByIdQueryVariables>(
    AuthdUserByIdQueryDocument,
    options,
  )
}
export function useAuthdUserByIdQueryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AuthdUserByIdQuery, AuthdUserByIdQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AuthdUserByIdQuery, AuthdUserByIdQueryVariables>(
    AuthdUserByIdQueryDocument,
    options,
  )
}
export type AuthdUserByIdQueryHookResult = ReturnType<typeof useAuthdUserByIdQuery>
export type AuthdUserByIdQueryLazyQueryHookResult = ReturnType<
  typeof useAuthdUserByIdQueryLazyQuery
>
export type AuthdUserByIdQueryQueryResult = Apollo.QueryResult<
  AuthdUserByIdQuery,
  AuthdUserByIdQueryVariables
>
export const ChatMessagesAggregateQueryDocument = gql`
  query ChatMessagesAggregateQuery {
    chat_messages_aggregate {
      aggregate {
        count
      }
    }
  }
`

/**
 * __useChatMessagesAggregateQuery__
 *
 * To run a query within a React component, call `useChatMessagesAggregateQuery` and pass it any options that fit your needs.
 * When your component renders, `useChatMessagesAggregateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChatMessagesAggregateQuery({
 *   variables: {
 *   },
 * });
 */
export function useChatMessagesAggregateQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ChatMessagesAggregateQuery,
    ChatMessagesAggregateQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<ChatMessagesAggregateQuery, ChatMessagesAggregateQueryVariables>(
    ChatMessagesAggregateQueryDocument,
    options,
  )
}
export function useChatMessagesAggregateQueryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ChatMessagesAggregateQuery,
    ChatMessagesAggregateQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<ChatMessagesAggregateQuery, ChatMessagesAggregateQueryVariables>(
    ChatMessagesAggregateQueryDocument,
    options,
  )
}
export type ChatMessagesAggregateQueryHookResult = ReturnType<typeof useChatMessagesAggregateQuery>
export type ChatMessagesAggregateQueryLazyQueryHookResult = ReturnType<
  typeof useChatMessagesAggregateQueryLazyQuery
>
export type ChatMessagesAggregateQueryQueryResult = Apollo.QueryResult<
  ChatMessagesAggregateQuery,
  ChatMessagesAggregateQueryVariables
>
export const ChatMessagesQueryDocument = gql`
  query ChatMessagesQuery {
    chat_messages(order_by: { created_at: asc }) {
      ...ChatMessage
      __typename
    }
  }
  ${ChatMessageFragmentDoc}
`

/**
 * __useChatMessagesQuery__
 *
 * To run a query within a React component, call `useChatMessagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useChatMessagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChatMessagesQuery({
 *   variables: {
 *   },
 * });
 */
export function useChatMessagesQuery(
  baseOptions?: Apollo.QueryHookOptions<ChatMessagesQuery, ChatMessagesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<ChatMessagesQuery, ChatMessagesQueryVariables>(
    ChatMessagesQueryDocument,
    options,
  )
}
export function useChatMessagesQueryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ChatMessagesQuery, ChatMessagesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<ChatMessagesQuery, ChatMessagesQueryVariables>(
    ChatMessagesQueryDocument,
    options,
  )
}
export type ChatMessagesQueryHookResult = ReturnType<typeof useChatMessagesQuery>
export type ChatMessagesQueryLazyQueryHookResult = ReturnType<typeof useChatMessagesQueryLazyQuery>
export type ChatMessagesQueryQueryResult = Apollo.QueryResult<
  ChatMessagesQuery,
  ChatMessagesQueryVariables
>
export const UpcomingStgQueryDocument = gql`
  query UpcomingStgQuery {
    stgs(where: { status: { _eq: upcoming } }) {
      id
      status
      created_at
      updated_at
      sets(order_by: { created_at: asc }) {
        set_by_id
        set_by {
          id
          full_name
          full_name
        }
      }
    }
  }
`

/**
 * __useUpcomingStgQuery__
 *
 * To run a query within a React component, call `useUpcomingStgQuery` and pass it any options that fit your needs.
 * When your component renders, `useUpcomingStgQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUpcomingStgQuery({
 *   variables: {
 *   },
 * });
 */
export function useUpcomingStgQuery(
  baseOptions?: Apollo.QueryHookOptions<UpcomingStgQuery, UpcomingStgQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<UpcomingStgQuery, UpcomingStgQueryVariables>(
    UpcomingStgQueryDocument,
    options,
  )
}
export function useUpcomingStgQueryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<UpcomingStgQuery, UpcomingStgQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<UpcomingStgQuery, UpcomingStgQueryVariables>(
    UpcomingStgQueryDocument,
    options,
  )
}
export type UpcomingStgQueryHookResult = ReturnType<typeof useUpcomingStgQuery>
export type UpcomingStgQueryLazyQueryHookResult = ReturnType<typeof useUpcomingStgQueryLazyQuery>
export type UpcomingStgQueryQueryResult = Apollo.QueryResult<
  UpcomingStgQuery,
  UpcomingStgQueryVariables
>
export const PostByIdQueryDocument = gql`
  query PostByIdQuery($id: Int!) {
    posts_by_pk(id: $id) {
      ...Post
    }
  }
  ${PostFragmentDoc}
`

/**
 * __usePostByIdQuery__
 *
 * To run a query within a React component, call `usePostByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePostByIdQuery(
  baseOptions: Apollo.QueryHookOptions<PostByIdQuery, PostByIdQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<PostByIdQuery, PostByIdQueryVariables>(PostByIdQueryDocument, options)
}
export function usePostByIdQueryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<PostByIdQuery, PostByIdQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<PostByIdQuery, PostByIdQueryVariables>(PostByIdQueryDocument, options)
}
export type PostByIdQueryHookResult = ReturnType<typeof usePostByIdQuery>
export type PostByIdQueryLazyQueryHookResult = ReturnType<typeof usePostByIdQueryLazyQuery>
export type PostByIdQueryQueryResult = Apollo.QueryResult<PostByIdQuery, PostByIdQueryVariables>
export const PostTagOptionsQueryDocument = gql`
  query PostTagOptionsQuery {
    e_post_tags {
      type
    }
  }
`

/**
 * __usePostTagOptionsQuery__
 *
 * To run a query within a React component, call `usePostTagOptionsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostTagOptionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostTagOptionsQuery({
 *   variables: {
 *   },
 * });
 */
export function usePostTagOptionsQuery(
  baseOptions?: Apollo.QueryHookOptions<PostTagOptionsQuery, PostTagOptionsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<PostTagOptionsQuery, PostTagOptionsQueryVariables>(
    PostTagOptionsQueryDocument,
    options,
  )
}
export function usePostTagOptionsQueryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<PostTagOptionsQuery, PostTagOptionsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<PostTagOptionsQuery, PostTagOptionsQueryVariables>(
    PostTagOptionsQueryDocument,
    options,
  )
}
export type PostTagOptionsQueryHookResult = ReturnType<typeof usePostTagOptionsQuery>
export type PostTagOptionsQueryLazyQueryHookResult = ReturnType<
  typeof usePostTagOptionsQueryLazyQuery
>
export type PostTagOptionsQueryQueryResult = Apollo.QueryResult<
  PostTagOptionsQuery,
  PostTagOptionsQueryVariables
>
export const PostsWhereAggregateQueryDocument = gql`
  query PostsWhereAggregateQuery($where: v_posts_sorted_bool_exp) {
    v_posts_sorted_aggregate(where: $where) {
      aggregate {
        count
      }
    }
  }
`

/**
 * __usePostsWhereAggregateQuery__
 *
 * To run a query within a React component, call `usePostsWhereAggregateQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostsWhereAggregateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostsWhereAggregateQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function usePostsWhereAggregateQuery(
  baseOptions?: Apollo.QueryHookOptions<
    PostsWhereAggregateQuery,
    PostsWhereAggregateQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<PostsWhereAggregateQuery, PostsWhereAggregateQueryVariables>(
    PostsWhereAggregateQueryDocument,
    options,
  )
}
export function usePostsWhereAggregateQueryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PostsWhereAggregateQuery,
    PostsWhereAggregateQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<PostsWhereAggregateQuery, PostsWhereAggregateQueryVariables>(
    PostsWhereAggregateQueryDocument,
    options,
  )
}
export type PostsWhereAggregateQueryHookResult = ReturnType<typeof usePostsWhereAggregateQuery>
export type PostsWhereAggregateQueryLazyQueryHookResult = ReturnType<
  typeof usePostsWhereAggregateQueryLazyQuery
>
export type PostsWhereAggregateQueryQueryResult = Apollo.QueryResult<
  PostsWhereAggregateQuery,
  PostsWhereAggregateQueryVariables
>
export const PostsWhereQueryDocument = gql`
  query PostsWhereQuery($where: v_posts_sorted_bool_exp, $limit: Int!) {
    v_posts_sorted(where: $where, limit: $limit) {
      post {
        ...SummaryPost
      }
    }
  }
  ${SummaryPostFragmentDoc}
`

/**
 * __usePostsWhereQuery__
 *
 * To run a query within a React component, call `usePostsWhereQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostsWhereQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostsWhereQuery({
 *   variables: {
 *      where: // value for 'where'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function usePostsWhereQuery(
  baseOptions: Apollo.QueryHookOptions<PostsWhereQuery, PostsWhereQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<PostsWhereQuery, PostsWhereQueryVariables>(
    PostsWhereQueryDocument,
    options,
  )
}
export function usePostsWhereQueryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<PostsWhereQuery, PostsWhereQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<PostsWhereQuery, PostsWhereQueryVariables>(
    PostsWhereQueryDocument,
    options,
  )
}
export type PostsWhereQueryHookResult = ReturnType<typeof usePostsWhereQuery>
export type PostsWhereQueryLazyQueryHookResult = ReturnType<typeof usePostsWhereQueryLazyQuery>
export type PostsWhereQueryQueryResult = Apollo.QueryResult<
  PostsWhereQuery,
  PostsWhereQueryVariables
>
export const PreviousStgQueryDocument = gql`
  query PreviousStgQuery {
    stgs(where: { status: { _eq: previous } }) {
      ...Stg
    }
  }
  ${StgFragmentDoc}
`

/**
 * __usePreviousStgQuery__
 *
 * To run a query within a React component, call `usePreviousStgQuery` and pass it any options that fit your needs.
 * When your component renders, `usePreviousStgQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePreviousStgQuery({
 *   variables: {
 *   },
 * });
 */
export function usePreviousStgQuery(
  baseOptions?: Apollo.QueryHookOptions<PreviousStgQuery, PreviousStgQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<PreviousStgQuery, PreviousStgQueryVariables>(
    PreviousStgQueryDocument,
    options,
  )
}
export function usePreviousStgQueryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<PreviousStgQuery, PreviousStgQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<PreviousStgQuery, PreviousStgQueryVariables>(
    PreviousStgQueryDocument,
    options,
  )
}
export type PreviousStgQueryHookResult = ReturnType<typeof usePreviousStgQuery>
export type PreviousStgQueryLazyQueryHookResult = ReturnType<typeof usePreviousStgQueryLazyQuery>
export type PreviousStgQueryQueryResult = Apollo.QueryResult<
  PreviousStgQuery,
  PreviousStgQueryVariables
>
export const StgByIdQueryDocument = gql`
  query StgByIdQuery($id: Int!) {
    stgs_by_pk(id: $id) {
      ...StgById
    }
  }
  ${StgByIdFragmentDoc}
`

/**
 * __useStgByIdQuery__
 *
 * To run a query within a React component, call `useStgByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useStgByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStgByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useStgByIdQuery(
  baseOptions: Apollo.QueryHookOptions<StgByIdQuery, StgByIdQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<StgByIdQuery, StgByIdQueryVariables>(StgByIdQueryDocument, options)
}
export function useStgByIdQueryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<StgByIdQuery, StgByIdQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<StgByIdQuery, StgByIdQueryVariables>(StgByIdQueryDocument, options)
}
export type StgByIdQueryHookResult = ReturnType<typeof useStgByIdQuery>
export type StgByIdQueryLazyQueryHookResult = ReturnType<typeof useStgByIdQueryLazyQuery>
export type StgByIdQueryQueryResult = Apollo.QueryResult<StgByIdQuery, StgByIdQueryVariables>
export const StgSetByIdQueryDocument = gql`
  query StgSetByIdQuery($id: Int!) {
    stg_sets_by_pk(id: $id) {
      ...StgSet
    }
  }
  ${StgSetFragmentDoc}
`

/**
 * __useStgSetByIdQuery__
 *
 * To run a query within a React component, call `useStgSetByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useStgSetByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStgSetByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useStgSetByIdQuery(
  baseOptions: Apollo.QueryHookOptions<StgSetByIdQuery, StgSetByIdQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<StgSetByIdQuery, StgSetByIdQueryVariables>(
    StgSetByIdQueryDocument,
    options,
  )
}
export function useStgSetByIdQueryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<StgSetByIdQuery, StgSetByIdQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<StgSetByIdQuery, StgSetByIdQueryVariables>(
    StgSetByIdQueryDocument,
    options,
  )
}
export type StgSetByIdQueryHookResult = ReturnType<typeof useStgSetByIdQuery>
export type StgSetByIdQueryLazyQueryHookResult = ReturnType<typeof useStgSetByIdQueryLazyQuery>
export type StgSetByIdQueryQueryResult = Apollo.QueryResult<
  StgSetByIdQuery,
  StgSetByIdQueryVariables
>
export const StgSubmissionByIdQueryDocument = gql`
  query StgSubmissionByIdQuery($id: Int!) {
    stg_submissions_by_pk(id: $id) {
      ...StgSubmission
    }
  }
  ${StgSubmissionFragmentDoc}
`

/**
 * __useStgSubmissionByIdQuery__
 *
 * To run a query within a React component, call `useStgSubmissionByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useStgSubmissionByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStgSubmissionByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useStgSubmissionByIdQuery(
  baseOptions: Apollo.QueryHookOptions<StgSubmissionByIdQuery, StgSubmissionByIdQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<StgSubmissionByIdQuery, StgSubmissionByIdQueryVariables>(
    StgSubmissionByIdQueryDocument,
    options,
  )
}
export function useStgSubmissionByIdQueryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    StgSubmissionByIdQuery,
    StgSubmissionByIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<StgSubmissionByIdQuery, StgSubmissionByIdQueryVariables>(
    StgSubmissionByIdQueryDocument,
    options,
  )
}
export type StgSubmissionByIdQueryHookResult = ReturnType<typeof useStgSubmissionByIdQuery>
export type StgSubmissionByIdQueryLazyQueryHookResult = ReturnType<
  typeof useStgSubmissionByIdQueryLazyQuery
>
export type StgSubmissionByIdQueryQueryResult = Apollo.QueryResult<
  StgSubmissionByIdQuery,
  StgSubmissionByIdQueryVariables
>
export const StgsWhereQueryDocument = gql`
  query StgsWhereQuery($where: stgs_bool_exp) {
    stgs(where: $where) {
      ...Stg
    }
  }
  ${StgFragmentDoc}
`

/**
 * __useStgsWhereQuery__
 *
 * To run a query within a React component, call `useStgsWhereQuery` and pass it any options that fit your needs.
 * When your component renders, `useStgsWhereQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStgsWhereQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useStgsWhereQuery(
  baseOptions?: Apollo.QueryHookOptions<StgsWhereQuery, StgsWhereQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<StgsWhereQuery, StgsWhereQueryVariables>(StgsWhereQueryDocument, options)
}
export function useStgsWhereQueryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<StgsWhereQuery, StgsWhereQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<StgsWhereQuery, StgsWhereQueryVariables>(
    StgsWhereQueryDocument,
    options,
  )
}
export type StgsWhereQueryHookResult = ReturnType<typeof useStgsWhereQuery>
export type StgsWhereQueryLazyQueryHookResult = ReturnType<typeof useStgsWhereQueryLazyQuery>
export type StgsWhereQueryQueryResult = Apollo.QueryResult<StgsWhereQuery, StgsWhereQueryVariables>
export const UnseenChatMessagesCountQueryDocument = gql`
  query UnseenChatMessagesCountQuery($chat_page_activity: timestamptz) {
    chat_messages_aggregate(where: { created_at: { _gt: $chat_page_activity } }) {
      aggregate {
        count
      }
    }
  }
`

/**
 * __useUnseenChatMessagesCountQuery__
 *
 * To run a query within a React component, call `useUnseenChatMessagesCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useUnseenChatMessagesCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUnseenChatMessagesCountQuery({
 *   variables: {
 *      chat_page_activity: // value for 'chat_page_activity'
 *   },
 * });
 */
export function useUnseenChatMessagesCountQuery(
  baseOptions?: Apollo.QueryHookOptions<
    UnseenChatMessagesCountQuery,
    UnseenChatMessagesCountQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<UnseenChatMessagesCountQuery, UnseenChatMessagesCountQueryVariables>(
    UnseenChatMessagesCountQueryDocument,
    options,
  )
}
export function useUnseenChatMessagesCountQueryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    UnseenChatMessagesCountQuery,
    UnseenChatMessagesCountQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<UnseenChatMessagesCountQuery, UnseenChatMessagesCountQueryVariables>(
    UnseenChatMessagesCountQueryDocument,
    options,
  )
}
export type UnseenChatMessagesCountQueryHookResult = ReturnType<
  typeof useUnseenChatMessagesCountQuery
>
export type UnseenChatMessagesCountQueryLazyQueryHookResult = ReturnType<
  typeof useUnseenChatMessagesCountQueryLazyQuery
>
export type UnseenChatMessagesCountQueryQueryResult = Apollo.QueryResult<
  UnseenChatMessagesCountQuery,
  UnseenChatMessagesCountQueryVariables
>
export const UnseenPostsCountQueryDocument = gql`
  query UnseenPostsCountQuery($posts_page_activity: timestamptz) {
    posts_aggregate(where: { created_at: { _gt: $posts_page_activity } }) {
      aggregate {
        count
      }
    }
  }
`

/**
 * __useUnseenPostsCountQuery__
 *
 * To run a query within a React component, call `useUnseenPostsCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useUnseenPostsCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUnseenPostsCountQuery({
 *   variables: {
 *      posts_page_activity: // value for 'posts_page_activity'
 *   },
 * });
 */
export function useUnseenPostsCountQuery(
  baseOptions?: Apollo.QueryHookOptions<UnseenPostsCountQuery, UnseenPostsCountQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<UnseenPostsCountQuery, UnseenPostsCountQueryVariables>(
    UnseenPostsCountQueryDocument,
    options,
  )
}
export function useUnseenPostsCountQueryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<UnseenPostsCountQuery, UnseenPostsCountQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<UnseenPostsCountQuery, UnseenPostsCountQueryVariables>(
    UnseenPostsCountQueryDocument,
    options,
  )
}
export type UnseenPostsCountQueryHookResult = ReturnType<typeof useUnseenPostsCountQuery>
export type UnseenPostsCountQueryLazyQueryHookResult = ReturnType<
  typeof useUnseenPostsCountQueryLazyQuery
>
export type UnseenPostsCountQueryQueryResult = Apollo.QueryResult<
  UnseenPostsCountQuery,
  UnseenPostsCountQueryVariables
>
export const UnseenUsersCountQueryDocument = gql`
  query UnseenUsersCountQuery($users_page_activity: timestamptz) {
    users_aggregate(where: { created_at: { _gt: $users_page_activity } }) {
      aggregate {
        count
      }
    }
  }
`

/**
 * __useUnseenUsersCountQuery__
 *
 * To run a query within a React component, call `useUnseenUsersCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useUnseenUsersCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUnseenUsersCountQuery({
 *   variables: {
 *      users_page_activity: // value for 'users_page_activity'
 *   },
 * });
 */
export function useUnseenUsersCountQuery(
  baseOptions?: Apollo.QueryHookOptions<UnseenUsersCountQuery, UnseenUsersCountQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<UnseenUsersCountQuery, UnseenUsersCountQueryVariables>(
    UnseenUsersCountQueryDocument,
    options,
  )
}
export function useUnseenUsersCountQueryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<UnseenUsersCountQuery, UnseenUsersCountQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<UnseenUsersCountQuery, UnseenUsersCountQueryVariables>(
    UnseenUsersCountQueryDocument,
    options,
  )
}
export type UnseenUsersCountQueryHookResult = ReturnType<typeof useUnseenUsersCountQuery>
export type UnseenUsersCountQueryLazyQueryHookResult = ReturnType<
  typeof useUnseenUsersCountQueryLazyQuery
>
export type UnseenUsersCountQueryQueryResult = Apollo.QueryResult<
  UnseenUsersCountQuery,
  UnseenUsersCountQueryVariables
>
export const UserByIdQueryDocument = gql`
  query UserByIdQuery($id: Int!) {
    users_by_pk(id: $id) {
      ...User
    }
  }
  ${UserFragmentDoc}
`

/**
 * __useUserByIdQuery__
 *
 * To run a query within a React component, call `useUserByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUserByIdQuery(
  baseOptions: Apollo.QueryHookOptions<UserByIdQuery, UserByIdQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<UserByIdQuery, UserByIdQueryVariables>(UserByIdQueryDocument, options)
}
export function useUserByIdQueryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<UserByIdQuery, UserByIdQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<UserByIdQuery, UserByIdQueryVariables>(UserByIdQueryDocument, options)
}
export type UserByIdQueryHookResult = ReturnType<typeof useUserByIdQuery>
export type UserByIdQueryLazyQueryHookResult = ReturnType<typeof useUserByIdQueryLazyQuery>
export type UserByIdQueryQueryResult = Apollo.QueryResult<UserByIdQuery, UserByIdQueryVariables>
export const UserByUsernameQueryDocument = gql`
  query UserByUsernameQuery($username: String!) {
    users(where: { username: { _eq: $username } }) {
      ...User
    }
  }
  ${UserFragmentDoc}
`

/**
 * __useUserByUsernameQuery__
 *
 * To run a query within a React component, call `useUserByUsernameQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserByUsernameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserByUsernameQuery({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useUserByUsernameQuery(
  baseOptions: Apollo.QueryHookOptions<UserByUsernameQuery, UserByUsernameQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<UserByUsernameQuery, UserByUsernameQueryVariables>(
    UserByUsernameQueryDocument,
    options,
  )
}
export function useUserByUsernameQueryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<UserByUsernameQuery, UserByUsernameQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<UserByUsernameQuery, UserByUsernameQueryVariables>(
    UserByUsernameQueryDocument,
    options,
  )
}
export type UserByUsernameQueryHookResult = ReturnType<typeof useUserByUsernameQuery>
export type UserByUsernameQueryLazyQueryHookResult = ReturnType<
  typeof useUserByUsernameQueryLazyQuery
>
export type UserByUsernameQueryQueryResult = Apollo.QueryResult<
  UserByUsernameQuery,
  UserByUsernameQueryVariables
>
export const UserDisciplineOptionsQueryDocument = gql`
  query UserDisciplineOptionsQuery {
    e_user_disciplines {
      type
    }
  }
`

/**
 * __useUserDisciplineOptionsQuery__
 *
 * To run a query within a React component, call `useUserDisciplineOptionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserDisciplineOptionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserDisciplineOptionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserDisciplineOptionsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    UserDisciplineOptionsQuery,
    UserDisciplineOptionsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<UserDisciplineOptionsQuery, UserDisciplineOptionsQueryVariables>(
    UserDisciplineOptionsQueryDocument,
    options,
  )
}
export function useUserDisciplineOptionsQueryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    UserDisciplineOptionsQuery,
    UserDisciplineOptionsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<UserDisciplineOptionsQuery, UserDisciplineOptionsQueryVariables>(
    UserDisciplineOptionsQueryDocument,
    options,
  )
}
export type UserDisciplineOptionsQueryHookResult = ReturnType<typeof useUserDisciplineOptionsQuery>
export type UserDisciplineOptionsQueryLazyQueryHookResult = ReturnType<
  typeof useUserDisciplineOptionsQueryLazyQuery
>
export type UserDisciplineOptionsQueryQueryResult = Apollo.QueryResult<
  UserDisciplineOptionsQuery,
  UserDisciplineOptionsQueryVariables
>
export const LocationsByTypeDocument = gql`
  query LocationsByType($type: e_user_locations_enum!) {
    user_locations(where: { type: { _eq: $type } }) {
      lat
      lng
      user {
        ...TinyUser
      }
    }
  }
  ${TinyUserFragmentDoc}
`

/**
 * __useLocationsByTypeQuery__
 *
 * To run a query within a React component, call `useLocationsByTypeQuery` and pass it any options that fit your needs.
 * When your component renders, `useLocationsByTypeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLocationsByTypeQuery({
 *   variables: {
 *      type: // value for 'type'
 *   },
 * });
 */
export function useLocationsByTypeQuery(
  baseOptions: Apollo.QueryHookOptions<LocationsByTypeQuery, LocationsByTypeQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<LocationsByTypeQuery, LocationsByTypeQueryVariables>(
    LocationsByTypeDocument,
    options,
  )
}
export function useLocationsByTypeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<LocationsByTypeQuery, LocationsByTypeQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<LocationsByTypeQuery, LocationsByTypeQueryVariables>(
    LocationsByTypeDocument,
    options,
  )
}
export type LocationsByTypeQueryHookResult = ReturnType<typeof useLocationsByTypeQuery>
export type LocationsByTypeLazyQueryHookResult = ReturnType<typeof useLocationsByTypeLazyQuery>
export type LocationsByTypeQueryResult = Apollo.QueryResult<
  LocationsByTypeQuery,
  LocationsByTypeQueryVariables
>
export const UserProfileByUserIdQueryDocument = gql`
  query UserProfileByUserIdQuery($id: Int!) {
    users_by_pk(id: $id) {
      ...User
      trick_todos
    }
  }
  ${UserFragmentDoc}
`

/**
 * __useUserProfileByUserIdQuery__
 *
 * To run a query within a React component, call `useUserProfileByUserIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserProfileByUserIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserProfileByUserIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUserProfileByUserIdQuery(
  baseOptions: Apollo.QueryHookOptions<UserProfileByUserIdQuery, UserProfileByUserIdQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<UserProfileByUserIdQuery, UserProfileByUserIdQueryVariables>(
    UserProfileByUserIdQueryDocument,
    options,
  )
}
export function useUserProfileByUserIdQueryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    UserProfileByUserIdQuery,
    UserProfileByUserIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<UserProfileByUserIdQuery, UserProfileByUserIdQueryVariables>(
    UserProfileByUserIdQueryDocument,
    options,
  )
}
export type UserProfileByUserIdQueryHookResult = ReturnType<typeof useUserProfileByUserIdQuery>
export type UserProfileByUserIdQueryLazyQueryHookResult = ReturnType<
  typeof useUserProfileByUserIdQueryLazyQuery
>
export type UserProfileByUserIdQueryQueryResult = Apollo.QueryResult<
  UserProfileByUserIdQuery,
  UserProfileByUserIdQueryVariables
>
export const UsersAggregateQueryDocument = gql`
  query UsersAggregateQuery {
    users_aggregate {
      aggregate {
        count
      }
    }
  }
`

/**
 * __useUsersAggregateQuery__
 *
 * To run a query within a React component, call `useUsersAggregateQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersAggregateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersAggregateQuery({
 *   variables: {
 *   },
 * });
 */
export function useUsersAggregateQuery(
  baseOptions?: Apollo.QueryHookOptions<UsersAggregateQuery, UsersAggregateQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<UsersAggregateQuery, UsersAggregateQueryVariables>(
    UsersAggregateQueryDocument,
    options,
  )
}
export function useUsersAggregateQueryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<UsersAggregateQuery, UsersAggregateQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<UsersAggregateQuery, UsersAggregateQueryVariables>(
    UsersAggregateQueryDocument,
    options,
  )
}
export type UsersAggregateQueryHookResult = ReturnType<typeof useUsersAggregateQuery>
export type UsersAggregateQueryLazyQueryHookResult = ReturnType<
  typeof useUsersAggregateQueryLazyQuery
>
export type UsersAggregateQueryQueryResult = Apollo.QueryResult<
  UsersAggregateQuery,
  UsersAggregateQueryVariables
>
export const UsersSearchAggregateQueryDocument = gql`
  query UsersSearchAggregateQuery($where: users_bool_exp) {
    users_aggregate(where: $where) {
      aggregate {
        count
      }
    }
  }
`

/**
 * __useUsersSearchAggregateQuery__
 *
 * To run a query within a React component, call `useUsersSearchAggregateQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersSearchAggregateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersSearchAggregateQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUsersSearchAggregateQuery(
  baseOptions?: Apollo.QueryHookOptions<
    UsersSearchAggregateQuery,
    UsersSearchAggregateQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<UsersSearchAggregateQuery, UsersSearchAggregateQueryVariables>(
    UsersSearchAggregateQueryDocument,
    options,
  )
}
export function useUsersSearchAggregateQueryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    UsersSearchAggregateQuery,
    UsersSearchAggregateQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<UsersSearchAggregateQuery, UsersSearchAggregateQueryVariables>(
    UsersSearchAggregateQueryDocument,
    options,
  )
}
export type UsersSearchAggregateQueryHookResult = ReturnType<typeof useUsersSearchAggregateQuery>
export type UsersSearchAggregateQueryLazyQueryHookResult = ReturnType<
  typeof useUsersSearchAggregateQueryLazyQuery
>
export type UsersSearchAggregateQueryQueryResult = Apollo.QueryResult<
  UsersSearchAggregateQuery,
  UsersSearchAggregateQueryVariables
>
export const UsersSearchQueryDocument = gql`
  query UsersSearchQuery($where: users_bool_exp!, $limit: Int!, $offset: Int!) {
    users(where: $where, order_by: { created_at: desc }, limit: $limit, offset: $offset) {
      ...BasicFieldsUser
    }
  }
  ${BasicFieldsUserFragmentDoc}
`

/**
 * __useUsersSearchQuery__
 *
 * To run a query within a React component, call `useUsersSearchQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersSearchQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersSearchQuery({
 *   variables: {
 *      where: // value for 'where'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useUsersSearchQuery(
  baseOptions: Apollo.QueryHookOptions<UsersSearchQuery, UsersSearchQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<UsersSearchQuery, UsersSearchQueryVariables>(
    UsersSearchQueryDocument,
    options,
  )
}
export function useUsersSearchQueryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<UsersSearchQuery, UsersSearchQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<UsersSearchQuery, UsersSearchQueryVariables>(
    UsersSearchQueryDocument,
    options,
  )
}
export type UsersSearchQueryHookResult = ReturnType<typeof useUsersSearchQuery>
export type UsersSearchQueryLazyQueryHookResult = ReturnType<typeof useUsersSearchQueryLazyQuery>
export type UsersSearchQueryQueryResult = Apollo.QueryResult<
  UsersSearchQuery,
  UsersSearchQueryVariables
>
export const UsersQueryDocument = gql`
  query UsersQuery {
    users(order_by: { full_name: asc }) {
      ...TinyUser
    }
  }
  ${TinyUserFragmentDoc}
`

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useUsersQuery(
  baseOptions?: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<UsersQuery, UsersQueryVariables>(UsersQueryDocument, options)
}
export function useUsersQueryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<UsersQuery, UsersQueryVariables>(UsersQueryDocument, options)
}
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>
export type UsersQueryLazyQueryHookResult = ReturnType<typeof useUsersQueryLazyQuery>
export type UsersQueryQueryResult = Apollo.QueryResult<UsersQuery, UsersQueryVariables>
export const UserByUsernameSubscriptionDocument = gql`
  subscription UserByUsernameSubscription($username: String!) {
    users(where: { username: { _eq: $username } }) {
      ...User
    }
  }
  ${UserFragmentDoc}
`

/**
 * __useUserByUsernameSubscription__
 *
 * To run a query within a React component, call `useUserByUsernameSubscription` and pass it any options that fit your needs.
 * When your component renders, `useUserByUsernameSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserByUsernameSubscription({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useUserByUsernameSubscription(
  baseOptions: Apollo.SubscriptionHookOptions<
    UserByUsernameSubscription,
    UserByUsernameSubscriptionVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSubscription<UserByUsernameSubscription, UserByUsernameSubscriptionVariables>(
    UserByUsernameSubscriptionDocument,
    options,
  )
}
export type UserByUsernameSubscriptionHookResult = ReturnType<typeof useUserByUsernameSubscription>
export type UserByUsernameSubscriptionSubscriptionResult =
  Apollo.SubscriptionResult<UserByUsernameSubscription>
export const AuthdUserByIdSubscriptionDocument = gql`
  subscription AuthdUserByIdSubscription($id: Int!) {
    users_by_pk(id: $id) {
      ...AuthdUser
    }
  }
  ${AuthdUserFragmentDoc}
`

/**
 * __useAuthdUserByIdSubscription__
 *
 * To run a query within a React component, call `useAuthdUserByIdSubscription` and pass it any options that fit your needs.
 * When your component renders, `useAuthdUserByIdSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAuthdUserByIdSubscription({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useAuthdUserByIdSubscription(
  baseOptions: Apollo.SubscriptionHookOptions<
    AuthdUserByIdSubscription,
    AuthdUserByIdSubscriptionVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSubscription<AuthdUserByIdSubscription, AuthdUserByIdSubscriptionVariables>(
    AuthdUserByIdSubscriptionDocument,
    options,
  )
}
export type AuthdUserByIdSubscriptionHookResult = ReturnType<typeof useAuthdUserByIdSubscription>
export type AuthdUserByIdSubscriptionSubscriptionResult =
  Apollo.SubscriptionResult<AuthdUserByIdSubscription>
export const ChatMessagesAggregateSubscriptionDocument = gql`
  subscription ChatMessagesAggregateSubscription {
    chat_messages_aggregate {
      aggregate {
        count
      }
    }
  }
`

/**
 * __useChatMessagesAggregateSubscription__
 *
 * To run a query within a React component, call `useChatMessagesAggregateSubscription` and pass it any options that fit your needs.
 * When your component renders, `useChatMessagesAggregateSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChatMessagesAggregateSubscription({
 *   variables: {
 *   },
 * });
 */
export function useChatMessagesAggregateSubscription(
  baseOptions?: Apollo.SubscriptionHookOptions<
    ChatMessagesAggregateSubscription,
    ChatMessagesAggregateSubscriptionVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSubscription<
    ChatMessagesAggregateSubscription,
    ChatMessagesAggregateSubscriptionVariables
  >(ChatMessagesAggregateSubscriptionDocument, options)
}
export type ChatMessagesAggregateSubscriptionHookResult = ReturnType<
  typeof useChatMessagesAggregateSubscription
>
export type ChatMessagesAggregateSubscriptionSubscriptionResult =
  Apollo.SubscriptionResult<ChatMessagesAggregateSubscription>
export const ChatMessagesSubscriptionDocument = gql`
  subscription ChatMessagesSubscription {
    chat_messages(order_by: { created_at: asc }) {
      ...ChatMessage
      __typename
    }
  }
  ${ChatMessageFragmentDoc}
`

/**
 * __useChatMessagesSubscription__
 *
 * To run a query within a React component, call `useChatMessagesSubscription` and pass it any options that fit your needs.
 * When your component renders, `useChatMessagesSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChatMessagesSubscription({
 *   variables: {
 *   },
 * });
 */
export function useChatMessagesSubscription(
  baseOptions?: Apollo.SubscriptionHookOptions<
    ChatMessagesSubscription,
    ChatMessagesSubscriptionVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSubscription<ChatMessagesSubscription, ChatMessagesSubscriptionVariables>(
    ChatMessagesSubscriptionDocument,
    options,
  )
}
export type ChatMessagesSubscriptionHookResult = ReturnType<typeof useChatMessagesSubscription>
export type ChatMessagesSubscriptionSubscriptionResult =
  Apollo.SubscriptionResult<ChatMessagesSubscription>
export const PostByIdSubscriptionDocument = gql`
  subscription PostByIdSubscription($id: Int!) {
    posts_by_pk(id: $id) {
      ...Post
    }
  }
  ${PostFragmentDoc}
`

/**
 * __usePostByIdSubscription__
 *
 * To run a query within a React component, call `usePostByIdSubscription` and pass it any options that fit your needs.
 * When your component renders, `usePostByIdSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostByIdSubscription({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePostByIdSubscription(
  baseOptions: Apollo.SubscriptionHookOptions<PostByIdSubscription, PostByIdSubscriptionVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSubscription<PostByIdSubscription, PostByIdSubscriptionVariables>(
    PostByIdSubscriptionDocument,
    options,
  )
}
export type PostByIdSubscriptionHookResult = ReturnType<typeof usePostByIdSubscription>
export type PostByIdSubscriptionSubscriptionResult = Apollo.SubscriptionResult<PostByIdSubscription>
export const PostsWhereAggregateSubscriptionDocument = gql`
  subscription PostsWhereAggregateSubscription($where: v_posts_sorted_bool_exp) {
    v_posts_sorted_aggregate(where: $where) {
      aggregate {
        count
      }
    }
  }
`

/**
 * __usePostsWhereAggregateSubscription__
 *
 * To run a query within a React component, call `usePostsWhereAggregateSubscription` and pass it any options that fit your needs.
 * When your component renders, `usePostsWhereAggregateSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostsWhereAggregateSubscription({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function usePostsWhereAggregateSubscription(
  baseOptions?: Apollo.SubscriptionHookOptions<
    PostsWhereAggregateSubscription,
    PostsWhereAggregateSubscriptionVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSubscription<
    PostsWhereAggregateSubscription,
    PostsWhereAggregateSubscriptionVariables
  >(PostsWhereAggregateSubscriptionDocument, options)
}
export type PostsWhereAggregateSubscriptionHookResult = ReturnType<
  typeof usePostsWhereAggregateSubscription
>
export type PostsWhereAggregateSubscriptionSubscriptionResult =
  Apollo.SubscriptionResult<PostsWhereAggregateSubscription>
export const PostsWhereSubscriptionDocument = gql`
  subscription PostsWhereSubscription($where: v_posts_sorted_bool_exp, $limit: Int!) {
    v_posts_sorted(where: $where, limit: $limit) {
      post {
        ...SummaryPost
      }
    }
  }
  ${SummaryPostFragmentDoc}
`

/**
 * __usePostsWhereSubscription__
 *
 * To run a query within a React component, call `usePostsWhereSubscription` and pass it any options that fit your needs.
 * When your component renders, `usePostsWhereSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostsWhereSubscription({
 *   variables: {
 *      where: // value for 'where'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function usePostsWhereSubscription(
  baseOptions: Apollo.SubscriptionHookOptions<
    PostsWhereSubscription,
    PostsWhereSubscriptionVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSubscription<PostsWhereSubscription, PostsWhereSubscriptionVariables>(
    PostsWhereSubscriptionDocument,
    options,
  )
}
export type PostsWhereSubscriptionHookResult = ReturnType<typeof usePostsWhereSubscription>
export type PostsWhereSubscriptionSubscriptionResult =
  Apollo.SubscriptionResult<PostsWhereSubscription>
export const PreviousStgSubscriptionDocument = gql`
  subscription PreviousStgSubscription {
    stgs(where: { status: { _eq: previous } }) {
      ...Stg
    }
  }
  ${StgFragmentDoc}
`

/**
 * __usePreviousStgSubscription__
 *
 * To run a query within a React component, call `usePreviousStgSubscription` and pass it any options that fit your needs.
 * When your component renders, `usePreviousStgSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePreviousStgSubscription({
 *   variables: {
 *   },
 * });
 */
export function usePreviousStgSubscription(
  baseOptions?: Apollo.SubscriptionHookOptions<
    PreviousStgSubscription,
    PreviousStgSubscriptionVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSubscription<PreviousStgSubscription, PreviousStgSubscriptionVariables>(
    PreviousStgSubscriptionDocument,
    options,
  )
}
export type PreviousStgSubscriptionHookResult = ReturnType<typeof usePreviousStgSubscription>
export type PreviousStgSubscriptionSubscriptionResult =
  Apollo.SubscriptionResult<PreviousStgSubscription>
export const StgByIdSubscriptionDocument = gql`
  subscription StgByIdSubscription($id: Int!) {
    stgs_by_pk(id: $id) {
      ...StgById
    }
  }
  ${StgByIdFragmentDoc}
`

/**
 * __useStgByIdSubscription__
 *
 * To run a query within a React component, call `useStgByIdSubscription` and pass it any options that fit your needs.
 * When your component renders, `useStgByIdSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStgByIdSubscription({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useStgByIdSubscription(
  baseOptions: Apollo.SubscriptionHookOptions<StgByIdSubscription, StgByIdSubscriptionVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSubscription<StgByIdSubscription, StgByIdSubscriptionVariables>(
    StgByIdSubscriptionDocument,
    options,
  )
}
export type StgByIdSubscriptionHookResult = ReturnType<typeof useStgByIdSubscription>
export type StgByIdSubscriptionSubscriptionResult = Apollo.SubscriptionResult<StgByIdSubscription>
export const StgSetByIdSubscriptionDocument = gql`
  subscription StgSetByIdSubscription($id: Int!) {
    stg_sets_by_pk(id: $id) {
      ...StgSet
    }
  }
  ${StgSetFragmentDoc}
`

/**
 * __useStgSetByIdSubscription__
 *
 * To run a query within a React component, call `useStgSetByIdSubscription` and pass it any options that fit your needs.
 * When your component renders, `useStgSetByIdSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStgSetByIdSubscription({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useStgSetByIdSubscription(
  baseOptions: Apollo.SubscriptionHookOptions<
    StgSetByIdSubscription,
    StgSetByIdSubscriptionVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSubscription<StgSetByIdSubscription, StgSetByIdSubscriptionVariables>(
    StgSetByIdSubscriptionDocument,
    options,
  )
}
export type StgSetByIdSubscriptionHookResult = ReturnType<typeof useStgSetByIdSubscription>
export type StgSetByIdSubscriptionSubscriptionResult =
  Apollo.SubscriptionResult<StgSetByIdSubscription>
export const StgSubmissionByIdSubscriptionDocument = gql`
  subscription StgSubmissionByIdSubscription($id: Int!) {
    stg_submissions_by_pk(id: $id) {
      ...StgSubmission
    }
  }
  ${StgSubmissionFragmentDoc}
`

/**
 * __useStgSubmissionByIdSubscription__
 *
 * To run a query within a React component, call `useStgSubmissionByIdSubscription` and pass it any options that fit your needs.
 * When your component renders, `useStgSubmissionByIdSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStgSubmissionByIdSubscription({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useStgSubmissionByIdSubscription(
  baseOptions: Apollo.SubscriptionHookOptions<
    StgSubmissionByIdSubscription,
    StgSubmissionByIdSubscriptionVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSubscription<
    StgSubmissionByIdSubscription,
    StgSubmissionByIdSubscriptionVariables
  >(StgSubmissionByIdSubscriptionDocument, options)
}
export type StgSubmissionByIdSubscriptionHookResult = ReturnType<
  typeof useStgSubmissionByIdSubscription
>
export type StgSubmissionByIdSubscriptionSubscriptionResult =
  Apollo.SubscriptionResult<StgSubmissionByIdSubscription>
export const StgsWhereSubscriptionDocument = gql`
  subscription StgsWhereSubscription($where: stgs_bool_exp) {
    stgs(where: $where) {
      ...Stg
    }
  }
  ${StgFragmentDoc}
`

/**
 * __useStgsWhereSubscription__
 *
 * To run a query within a React component, call `useStgsWhereSubscription` and pass it any options that fit your needs.
 * When your component renders, `useStgsWhereSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStgsWhereSubscription({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useStgsWhereSubscription(
  baseOptions?: Apollo.SubscriptionHookOptions<
    StgsWhereSubscription,
    StgsWhereSubscriptionVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSubscription<StgsWhereSubscription, StgsWhereSubscriptionVariables>(
    StgsWhereSubscriptionDocument,
    options,
  )
}
export type StgsWhereSubscriptionHookResult = ReturnType<typeof useStgsWhereSubscription>
export type StgsWhereSubscriptionSubscriptionResult =
  Apollo.SubscriptionResult<StgsWhereSubscription>
export const UnseenChatMessagesCountSubscriptionDocument = gql`
  subscription UnseenChatMessagesCountSubscription($chat_page_activity: timestamptz) {
    chat_messages_aggregate(where: { created_at: { _gt: $chat_page_activity } }) {
      aggregate {
        count
      }
    }
  }
`

/**
 * __useUnseenChatMessagesCountSubscription__
 *
 * To run a query within a React component, call `useUnseenChatMessagesCountSubscription` and pass it any options that fit your needs.
 * When your component renders, `useUnseenChatMessagesCountSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUnseenChatMessagesCountSubscription({
 *   variables: {
 *      chat_page_activity: // value for 'chat_page_activity'
 *   },
 * });
 */
export function useUnseenChatMessagesCountSubscription(
  baseOptions?: Apollo.SubscriptionHookOptions<
    UnseenChatMessagesCountSubscription,
    UnseenChatMessagesCountSubscriptionVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSubscription<
    UnseenChatMessagesCountSubscription,
    UnseenChatMessagesCountSubscriptionVariables
  >(UnseenChatMessagesCountSubscriptionDocument, options)
}
export type UnseenChatMessagesCountSubscriptionHookResult = ReturnType<
  typeof useUnseenChatMessagesCountSubscription
>
export type UnseenChatMessagesCountSubscriptionSubscriptionResult =
  Apollo.SubscriptionResult<UnseenChatMessagesCountSubscription>
export const UnseenPostsCountSubscriptionDocument = gql`
  subscription UnseenPostsCountSubscription($posts_page_activity: timestamptz) {
    posts_aggregate(where: { created_at: { _gt: $posts_page_activity } }) {
      aggregate {
        count
      }
    }
  }
`

/**
 * __useUnseenPostsCountSubscription__
 *
 * To run a query within a React component, call `useUnseenPostsCountSubscription` and pass it any options that fit your needs.
 * When your component renders, `useUnseenPostsCountSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUnseenPostsCountSubscription({
 *   variables: {
 *      posts_page_activity: // value for 'posts_page_activity'
 *   },
 * });
 */
export function useUnseenPostsCountSubscription(
  baseOptions?: Apollo.SubscriptionHookOptions<
    UnseenPostsCountSubscription,
    UnseenPostsCountSubscriptionVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSubscription<
    UnseenPostsCountSubscription,
    UnseenPostsCountSubscriptionVariables
  >(UnseenPostsCountSubscriptionDocument, options)
}
export type UnseenPostsCountSubscriptionHookResult = ReturnType<
  typeof useUnseenPostsCountSubscription
>
export type UnseenPostsCountSubscriptionSubscriptionResult =
  Apollo.SubscriptionResult<UnseenPostsCountSubscription>
export const UnseenUsersCountSubscriptionDocument = gql`
  subscription UnseenUsersCountSubscription($users_page_activity: timestamptz) {
    users_aggregate(where: { created_at: { _gt: $users_page_activity } }) {
      aggregate {
        count
      }
    }
  }
`

/**
 * __useUnseenUsersCountSubscription__
 *
 * To run a query within a React component, call `useUnseenUsersCountSubscription` and pass it any options that fit your needs.
 * When your component renders, `useUnseenUsersCountSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUnseenUsersCountSubscription({
 *   variables: {
 *      users_page_activity: // value for 'users_page_activity'
 *   },
 * });
 */
export function useUnseenUsersCountSubscription(
  baseOptions?: Apollo.SubscriptionHookOptions<
    UnseenUsersCountSubscription,
    UnseenUsersCountSubscriptionVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSubscription<
    UnseenUsersCountSubscription,
    UnseenUsersCountSubscriptionVariables
  >(UnseenUsersCountSubscriptionDocument, options)
}
export type UnseenUsersCountSubscriptionHookResult = ReturnType<
  typeof useUnseenUsersCountSubscription
>
export type UnseenUsersCountSubscriptionSubscriptionResult =
  Apollo.SubscriptionResult<UnseenUsersCountSubscription>
export const UpcomingStgSubscriptionDocument = gql`
  subscription UpcomingStgSubscription {
    stgs(where: { status: { _eq: upcoming } }) {
      id
      status
      created_at
      updated_at
      sets(order_by: { created_at: asc }) {
        set_by_id
        set_by {
          id
          full_name
          full_name
        }
      }
    }
  }
`

/**
 * __useUpcomingStgSubscription__
 *
 * To run a query within a React component, call `useUpcomingStgSubscription` and pass it any options that fit your needs.
 * When your component renders, `useUpcomingStgSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUpcomingStgSubscription({
 *   variables: {
 *   },
 * });
 */
export function useUpcomingStgSubscription(
  baseOptions?: Apollo.SubscriptionHookOptions<
    UpcomingStgSubscription,
    UpcomingStgSubscriptionVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSubscription<UpcomingStgSubscription, UpcomingStgSubscriptionVariables>(
    UpcomingStgSubscriptionDocument,
    options,
  )
}
export type UpcomingStgSubscriptionHookResult = ReturnType<typeof useUpcomingStgSubscription>
export type UpcomingStgSubscriptionSubscriptionResult =
  Apollo.SubscriptionResult<UpcomingStgSubscription>
export const UsersAggregateSubscriptionDocument = gql`
  subscription UsersAggregateSubscription {
    users_aggregate {
      aggregate {
        count
      }
    }
  }
`

/**
 * __useUsersAggregateSubscription__
 *
 * To run a query within a React component, call `useUsersAggregateSubscription` and pass it any options that fit your needs.
 * When your component renders, `useUsersAggregateSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersAggregateSubscription({
 *   variables: {
 *   },
 * });
 */
export function useUsersAggregateSubscription(
  baseOptions?: Apollo.SubscriptionHookOptions<
    UsersAggregateSubscription,
    UsersAggregateSubscriptionVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSubscription<UsersAggregateSubscription, UsersAggregateSubscriptionVariables>(
    UsersAggregateSubscriptionDocument,
    options,
  )
}
export type UsersAggregateSubscriptionHookResult = ReturnType<typeof useUsersAggregateSubscription>
export type UsersAggregateSubscriptionSubscriptionResult =
  Apollo.SubscriptionResult<UsersAggregateSubscription>
export const UsersSubscriptionDocument = gql`
  subscription UsersSubscription {
    users {
      ...BasicFieldsUser
    }
  }
  ${BasicFieldsUserFragmentDoc}
`

/**
 * __useUsersSubscription__
 *
 * To run a query within a React component, call `useUsersSubscription` and pass it any options that fit your needs.
 * When your component renders, `useUsersSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersSubscription({
 *   variables: {
 *   },
 * });
 */
export function useUsersSubscription(
  baseOptions?: Apollo.SubscriptionHookOptions<UsersSubscription, UsersSubscriptionVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSubscription<UsersSubscription, UsersSubscriptionVariables>(
    UsersSubscriptionDocument,
    options,
  )
}
export type UsersSubscriptionHookResult = ReturnType<typeof useUsersSubscription>
export type UsersSubscriptionSubscriptionResult = Apollo.SubscriptionResult<UsersSubscription>
