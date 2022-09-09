SET check_function_bodies = false;
CREATE FUNCTION public.set_current_timestamp_updated_at() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$;
CREATE TABLE public.user_activity (
    users_page timestamp with time zone,
    chat_page timestamp with time zone,
    posts_page timestamp with time zone,
    app timestamp with time zone,
    user_id integer NOT NULL
);
COMMENT ON COLUMN public.user_activity.app IS 'general activity with the app';
CREATE FUNCTION public.user_is_online(user_activity_row public.user_activity) RETURNS boolean
    LANGUAGE sql STABLE
    AS $$
SELECT user_activity_row.app >= NOW() - INTERVAL '6 MINUTE'; -- I update in app every 5 minutes
$$;
CREATE TABLE public.users (
    full_name text NOT NULL,
    email text NOT NULL,
    username text NOT NULL,
    bio text,
    profession text,
    nbds jsonb,
    avatar text,
    current_setup text,
    password text NOT NULL,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now(),
    birthday date,
    role text DEFAULT 'USER'::text,
    teams jsonb,
    favorite_tricks jsonb,
    interests jsonb,
    verified_email boolean DEFAULT false NOT NULL,
    last_online_at timestamp with time zone,
    willing_to_host boolean DEFAULT false NOT NULL,
    trick_todos jsonb,
    id integer NOT NULL
);
CREATE FUNCTION public.user_is_registered_for_upcoming_stg(user_row public.users) RETURNS boolean
    LANGUAGE sql STABLE
    AS $$
  SELECT
  CASE WHEN EXISTS
  (
	SELECT stg_sets.* FROM public.stg_sets
	JOIN public.stgs ON stg_sets.stg_id=stgs.id
	JOIN public.users ON stg_sets.set_by_id=users.id
	WHERE users.id = user_row.id
	AND stgs.status = 'upcoming'
  )
  THEN TRUE
  ELSE FALSE
  END
$$;
CREATE TABLE public.chat_messages (
    text text NOT NULL,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now(),
    id integer NOT NULL,
    author_id integer
);
CREATE SEQUENCE public.chat_messages_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.chat_messages_id_seq OWNED BY public.chat_messages.id;
CREATE TABLE public.e_post_tags (
    type text NOT NULL
);
CREATE TABLE public.e_stg_statuses (
    type text NOT NULL
);
CREATE TABLE public.e_user_disciplines (
    type text NOT NULL
);
CREATE TABLE public.e_user_locations (
    type text NOT NULL
);
CREATE TABLE public.e_user_roles (
    type text NOT NULL
);
CREATE TABLE public.likes_chat_message_user (
    chat_message_id integer NOT NULL,
    liked_by_user_id integer NOT NULL
);
CREATE TABLE public.likes_post_message_user (
    post_message_id integer NOT NULL,
    liked_by_user_id integer NOT NULL
);
CREATE TABLE public.likes_post_user (
    post_id integer NOT NULL,
    liked_by_user_id integer NOT NULL
);
CREATE TABLE public.likes_stg_set_message_user (
    stg_set_message_id integer NOT NULL,
    liked_by_user_id integer NOT NULL
);
CREATE TABLE public.likes_stg_set_user (
    stg_set_id integer NOT NULL,
    liked_by_user_id integer NOT NULL
);
CREATE TABLE public.likes_stg_submission_message_user (
    stg_submission_message_id integer NOT NULL,
    liked_by_user_id integer NOT NULL
);
CREATE TABLE public.likes_stg_submission_user (
    stg_submission_id integer NOT NULL,
    liked_by_user_id integer NOT NULL
);
CREATE TABLE public.likes_user_user (
    liked_by_user_id integer NOT NULL,
    liked_user_id integer NOT NULL
);
CREATE TABLE public.post_messages (
    text text NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    post_id integer,
    id integer NOT NULL,
    author_id integer
);
CREATE SEQUENCE public.post_messages_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.post_messages_id_seq OWNED BY public.post_messages.id;
CREATE TABLE public.post_tags (
    tag text NOT NULL,
    post_id integer NOT NULL
);
CREATE TABLE public.posts (
    body text NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    video_asset_id text,
    video_playback_id text,
    image_url text,
    video_asset_status text,
    embed_url text,
    embed_html text,
    oembed jsonb,
    id integer NOT NULL,
    posted_by_id integer
);
CREATE SEQUENCE public.posts_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.posts_id_seq OWNED BY public.posts.id;
CREATE TABLE public.refresh_tokens (
    token uuid NOT NULL,
    token_expiry timestamp with time zone NOT NULL,
    user_id integer
);
CREATE TABLE public.stg_players (
    stg_id integer NOT NULL,
    player_id integer NOT NULL
);
CREATE TABLE public.stg_results (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    rank integer,
    sets_landed integer,
    last_submitted_at timestamp with time zone,
    stg_id integer,
    player_id integer
);
CREATE TABLE public.stg_set_messages (
    text text NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    id integer NOT NULL,
    stg_set_id integer,
    author_id integer
);
CREATE SEQUENCE public.stg_set_messages_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.stg_set_messages_id_seq OWNED BY public.stg_set_messages.id;
CREATE TABLE public.stg_sets (
    instructions text NOT NULL,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now(),
    title text,
    video_asset_id text,
    video_playback_id text,
    video_asset_status text,
    id integer NOT NULL,
    stg_id integer,
    set_by_id integer
);
CREATE SEQUENCE public.stg_sets_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.stg_sets_id_seq OWNED BY public.stg_sets.id;
CREATE TABLE public.stg_submission_messages (
    text text NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    id integer NOT NULL,
    stg_submission_id integer,
    author_id integer
);
CREATE SEQUENCE public.stg_submission_messages_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.stg_submission_messages_id_seq OWNED BY public.stg_submission_messages.id;
CREATE TABLE public.stg_submissions (
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    video_asset_id text,
    video_playback_id text,
    video_asset_status text,
    stg_set_id integer,
    id integer NOT NULL,
    stg_id integer,
    submitted_by_id integer
);
CREATE SEQUENCE public.stg_submissions_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.stg_submissions_id_seq OWNED BY public.stg_submissions.id;
CREATE TABLE public.stgs (
    status text NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    id integer NOT NULL
);
CREATE SEQUENCE public.stgs_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.stgs_id_seq OWNED BY public.stgs.id;
CREATE TABLE public.user_disciplines (
    discipline text NOT NULL,
    user_id integer NOT NULL
);
CREATE TABLE public.user_locations (
    type text NOT NULL,
    lat numeric NOT NULL,
    lng numeric NOT NULL,
    country_long_name text NOT NULL,
    country_short_name text NOT NULL,
    formatted_address text NOT NULL,
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    user_id integer NOT NULL
);
CREATE TABLE public.user_socials (
    facebook text,
    instagram text,
    twitter text,
    youtube text,
    tiktok text,
    spotify text,
    user_id integer NOT NULL
);
CREATE SEQUENCE public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
CREATE VIEW public.v_posts_sorted AS
SELECT
    NULL::integer AS id,
    NULL::timestamp with time zone AS created_at;
CREATE VIEW public.v_public_user_trick_todos AS
 SELECT users.id,
    todo.value AS todo
   FROM (public.users
     CROSS JOIN LATERAL jsonb_array_elements(users.trick_todos) todo(value))
  WHERE (((todo.value ->> 'private'::text))::boolean IS FALSE);
CREATE VIEW public.v_users_online AS
 SELECT users.id
   FROM (public.users
     JOIN public.user_activity ON ((users.id = user_activity.user_id)))
  WHERE (user_activity.app >= (now() - '00:01:00'::interval));
ALTER TABLE ONLY public.chat_messages ALTER COLUMN id SET DEFAULT nextval('public.chat_messages_id_seq'::regclass);
ALTER TABLE ONLY public.post_messages ALTER COLUMN id SET DEFAULT nextval('public.post_messages_id_seq'::regclass);
ALTER TABLE ONLY public.posts ALTER COLUMN id SET DEFAULT nextval('public.posts_id_seq'::regclass);
ALTER TABLE ONLY public.stg_set_messages ALTER COLUMN id SET DEFAULT nextval('public.stg_set_messages_id_seq'::regclass);
ALTER TABLE ONLY public.stg_sets ALTER COLUMN id SET DEFAULT nextval('public.stg_sets_id_seq'::regclass);
ALTER TABLE ONLY public.stg_submission_messages ALTER COLUMN id SET DEFAULT nextval('public.stg_submission_messages_id_seq'::regclass);
ALTER TABLE ONLY public.stg_submissions ALTER COLUMN id SET DEFAULT nextval('public.stg_submissions_id_seq'::regclass);
ALTER TABLE ONLY public.stgs ALTER COLUMN id SET DEFAULT nextval('public.stgs_id_seq'::regclass);
ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
ALTER TABLE ONLY public.chat_messages
    ADD CONSTRAINT chat_messages_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.chat_messages
    ADD CONSTRAINT chat_messages_rn_key UNIQUE (id);
ALTER TABLE ONLY public.e_post_tags
    ADD CONSTRAINT e_post_tags_pkey PRIMARY KEY (type);
ALTER TABLE ONLY public.e_stg_statuses
    ADD CONSTRAINT e_stg_statuses_pkey PRIMARY KEY (type);
ALTER TABLE ONLY public.e_user_disciplines
    ADD CONSTRAINT e_user_disciplines_pkey PRIMARY KEY (type);
ALTER TABLE ONLY public.e_user_locations
    ADD CONSTRAINT e_user_locations_pkey PRIMARY KEY (type);
ALTER TABLE ONLY public.e_user_roles
    ADD CONSTRAINT e_user_roles_pkey PRIMARY KEY (type);
ALTER TABLE ONLY public.likes_chat_message_user
    ADD CONSTRAINT likes_chat_message_user_pkey PRIMARY KEY (chat_message_id, liked_by_user_id);
ALTER TABLE ONLY public.likes_post_message_user
    ADD CONSTRAINT likes_post_message_user_pkey PRIMARY KEY (post_message_id, liked_by_user_id);
ALTER TABLE ONLY public.likes_post_user
    ADD CONSTRAINT likes_post_user_pkey PRIMARY KEY (post_id, liked_by_user_id);
ALTER TABLE ONLY public.likes_stg_set_message_user
    ADD CONSTRAINT likes_stg_set_message_user_pkey PRIMARY KEY (stg_set_message_id, liked_by_user_id);
ALTER TABLE ONLY public.likes_stg_set_user
    ADD CONSTRAINT likes_stg_set_user_pkey PRIMARY KEY (stg_set_id, liked_by_user_id);
ALTER TABLE ONLY public.likes_stg_submission_message_user
    ADD CONSTRAINT likes_stg_submission_message_user_pkey PRIMARY KEY (stg_submission_message_id, liked_by_user_id);
ALTER TABLE ONLY public.likes_stg_submission_user
    ADD CONSTRAINT likes_stg_submission_user_pkey PRIMARY KEY (stg_submission_id, liked_by_user_id);
ALTER TABLE ONLY public.likes_user_user
    ADD CONSTRAINT likes_user_user_pkey PRIMARY KEY (liked_by_user_id, liked_user_id);
ALTER TABLE ONLY public.post_messages
    ADD CONSTRAINT post_messages_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.post_messages
    ADD CONSTRAINT post_messages_rn_key UNIQUE (id);
ALTER TABLE ONLY public.post_tags
    ADD CONSTRAINT post_tags_pkey PRIMARY KEY (tag, post_id);
ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_rn_key UNIQUE (id);
ALTER TABLE ONLY public.refresh_tokens
    ADD CONSTRAINT refresh_tokens_pkey PRIMARY KEY (token);
ALTER TABLE ONLY public.stg_players
    ADD CONSTRAINT stg_players_pkey PRIMARY KEY (stg_id, player_id);
ALTER TABLE ONLY public.stg_results
    ADD CONSTRAINT stg_results_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.stg_set_messages
    ADD CONSTRAINT stg_set_messages_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.stg_set_messages
    ADD CONSTRAINT stg_set_messages_rn_key UNIQUE (id);
ALTER TABLE ONLY public.stg_sets
    ADD CONSTRAINT stg_sets_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.stg_sets
    ADD CONSTRAINT stg_sets_rn_key UNIQUE (id);
ALTER TABLE ONLY public.stg_submission_messages
    ADD CONSTRAINT stg_submission_messages_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.stg_submission_messages
    ADD CONSTRAINT stg_submission_messages_rn_key UNIQUE (id);
ALTER TABLE ONLY public.stg_submissions
    ADD CONSTRAINT stg_submissions_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.stg_submissions
    ADD CONSTRAINT stg_submissions_rn_key UNIQUE (id);
ALTER TABLE ONLY public.stgs
    ADD CONSTRAINT stgs_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.stgs
    ADD CONSTRAINT stgs_rn_key UNIQUE (id);
ALTER TABLE ONLY public.user_activity
    ADD CONSTRAINT user_activity_pkey PRIMARY KEY (user_id);
ALTER TABLE ONLY public.user_disciplines
    ADD CONSTRAINT user_disciplines_pkey PRIMARY KEY (discipline, user_id);
ALTER TABLE ONLY public.user_locations
    ADD CONSTRAINT user_locations_pkey PRIMARY KEY (type, user_id);
ALTER TABLE ONLY public.user_socials
    ADD CONSTRAINT user_socials_pkey PRIMARY KEY (user_id);
ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_rn_key UNIQUE (id);
CREATE OR REPLACE VIEW public.v_posts_sorted AS
 SELECT posts.id,
    posts.created_at
   FROM (public.posts
     LEFT JOIN public.post_messages m ON ((m.post_id = posts.id)))
  GROUP BY posts.id
  ORDER BY COALESCE(max(m.created_at), posts.created_at) DESC;
CREATE TRIGGER set_public_messages_updated_at BEFORE UPDATE ON public.chat_messages FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_messages_updated_at ON public.chat_messages IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_post_messages_updated_at BEFORE UPDATE ON public.post_messages FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_post_messages_updated_at ON public.post_messages IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_posts_updated_at BEFORE UPDATE ON public.posts FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_posts_updated_at ON public.posts IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_stg_set_messages_updated_at BEFORE UPDATE ON public.stg_set_messages FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_stg_set_messages_updated_at ON public.stg_set_messages IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_stg_sets_updated_at BEFORE UPDATE ON public.stg_sets FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_stg_sets_updated_at ON public.stg_sets IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_stg_submission_messages_updated_at BEFORE UPDATE ON public.stg_submission_messages FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_stg_submission_messages_updated_at ON public.stg_submission_messages IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_stg_submissions_updated_at BEFORE UPDATE ON public.stg_submissions FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_stg_submissions_updated_at ON public.stg_submissions IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_stgs_updated_at BEFORE UPDATE ON public.stgs FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_stgs_updated_at ON public.stgs IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_users_updated_at BEFORE UPDATE ON public.users FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_users_updated_at ON public.users IS 'trigger to set value of column "updated_at" to current timestamp on row update';
ALTER TABLE ONLY public.likes_chat_message_user
    ADD CONSTRAINT likes_message_user_chat_message_id_fkey FOREIGN KEY (chat_message_id) REFERENCES public.chat_messages(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.likes_chat_message_user
    ADD CONSTRAINT likes_message_user_liked_by_user_id_fkey FOREIGN KEY (liked_by_user_id) REFERENCES public.users(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.likes_post_message_user
    ADD CONSTRAINT likes_post_message_user_liked_by_user_id_fkey FOREIGN KEY (liked_by_user_id) REFERENCES public.users(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.likes_post_message_user
    ADD CONSTRAINT likes_post_message_user_post_message_id_fkey FOREIGN KEY (post_message_id) REFERENCES public.post_messages(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.likes_post_user
    ADD CONSTRAINT likes_post_user_liked_by_user_id_fkey FOREIGN KEY (liked_by_user_id) REFERENCES public.users(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.likes_post_user
    ADD CONSTRAINT likes_post_user_post_id_fkey FOREIGN KEY (post_id) REFERENCES public.posts(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.likes_stg_set_message_user
    ADD CONSTRAINT likes_stg_set_message_user_liked_by_user_id_fkey FOREIGN KEY (liked_by_user_id) REFERENCES public.users(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.likes_stg_set_message_user
    ADD CONSTRAINT likes_stg_set_message_user_stg_set_message_id_fkey FOREIGN KEY (stg_set_message_id) REFERENCES public.stg_set_messages(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.likes_stg_set_user
    ADD CONSTRAINT likes_stg_set_user_liked_by_user_id_fkey FOREIGN KEY (liked_by_user_id) REFERENCES public.users(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.likes_stg_set_user
    ADD CONSTRAINT likes_stg_set_user_stg_set_id_fkey FOREIGN KEY (stg_set_id) REFERENCES public.stg_sets(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.likes_stg_submission_message_user
    ADD CONSTRAINT likes_stg_submission_message_user_liked_by_user_id_fkey FOREIGN KEY (liked_by_user_id) REFERENCES public.users(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.likes_stg_submission_message_user
    ADD CONSTRAINT likes_stg_submission_message_user_stg_submission_message_id_fke FOREIGN KEY (stg_submission_message_id) REFERENCES public.stg_submission_messages(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.likes_stg_submission_user
    ADD CONSTRAINT likes_stg_submission_user_liked_by_user_id_fkey FOREIGN KEY (liked_by_user_id) REFERENCES public.users(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.likes_stg_submission_user
    ADD CONSTRAINT likes_stg_submission_user_stg_submission_id_fkey FOREIGN KEY (stg_submission_id) REFERENCES public.stg_submissions(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.likes_user_user
    ADD CONSTRAINT likes_user_user_liked_by_user_id_fkey FOREIGN KEY (liked_by_user_id) REFERENCES public.users(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.likes_user_user
    ADD CONSTRAINT likes_user_user_liked_user_id_fkey FOREIGN KEY (liked_user_id) REFERENCES public.users(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.user_locations
    ADD CONSTRAINT locations_type_fkey FOREIGN KEY (type) REFERENCES public.e_user_locations(type) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.user_locations
    ADD CONSTRAINT locations_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.chat_messages
    ADD CONSTRAINT messages_author_id_fkey FOREIGN KEY (author_id) REFERENCES public.users(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.post_messages
    ADD CONSTRAINT post_messages_author_id_fkey FOREIGN KEY (author_id) REFERENCES public.users(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.post_messages
    ADD CONSTRAINT post_messages_post_id_fkey FOREIGN KEY (post_id) REFERENCES public.posts(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.post_tags
    ADD CONSTRAINT post_tags_post_id_fkey FOREIGN KEY (post_id) REFERENCES public.posts(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.post_tags
    ADD CONSTRAINT post_tags_tag_fkey FOREIGN KEY (tag) REFERENCES public.e_post_tags(type) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_posted_by_id_fkey FOREIGN KEY (posted_by_id) REFERENCES public.users(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.refresh_tokens
    ADD CONSTRAINT refresh_tokens_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.stg_players
    ADD CONSTRAINT stg_players_player_id_fkey FOREIGN KEY (player_id) REFERENCES public.users(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.stg_players
    ADD CONSTRAINT stg_players_stg_id_fkey FOREIGN KEY (stg_id) REFERENCES public.stgs(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.stg_results
    ADD CONSTRAINT stg_results_player_id_fkey FOREIGN KEY (player_id) REFERENCES public.users(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.stg_results
    ADD CONSTRAINT stg_results_stg_id_fkey FOREIGN KEY (stg_id) REFERENCES public.stgs(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.stg_set_messages
    ADD CONSTRAINT stg_set_messages_author_id_fkey FOREIGN KEY (author_id) REFERENCES public.users(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.stg_set_messages
    ADD CONSTRAINT stg_set_messages_stg_set_id_fkey FOREIGN KEY (stg_set_id) REFERENCES public.stg_sets(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.stg_sets
    ADD CONSTRAINT stg_sets_set_by_id_fkey FOREIGN KEY (set_by_id) REFERENCES public.users(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.stg_sets
    ADD CONSTRAINT stg_sets_stg_id_fkey FOREIGN KEY (stg_id) REFERENCES public.stgs(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.stg_submission_messages
    ADD CONSTRAINT stg_submission_messages_author_id_fkey FOREIGN KEY (author_id) REFERENCES public.users(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.stg_submission_messages
    ADD CONSTRAINT stg_submission_messages_stg_submission_id_fkey FOREIGN KEY (stg_submission_id) REFERENCES public.stg_submissions(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.stg_submissions
    ADD CONSTRAINT stg_submissions_stg_id_fkey FOREIGN KEY (stg_id) REFERENCES public.stgs(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.stg_submissions
    ADD CONSTRAINT stg_submissions_stg_set_id_fkey FOREIGN KEY (stg_set_id) REFERENCES public.stg_sets(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.stg_submissions
    ADD CONSTRAINT stg_submissions_submitted_by_id_fkey FOREIGN KEY (submitted_by_id) REFERENCES public.users(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.stgs
    ADD CONSTRAINT stgs_status_fkey FOREIGN KEY (status) REFERENCES public.e_stg_statuses(type) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.user_activity
    ADD CONSTRAINT user_activity_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.user_disciplines
    ADD CONSTRAINT user_disciplines_discipline_fkey FOREIGN KEY (discipline) REFERENCES public.e_user_disciplines(type) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.user_disciplines
    ADD CONSTRAINT user_disciplines_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.user_socials
    ADD CONSTRAINT user_socials_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_role_fkey FOREIGN KEY (role) REFERENCES public.e_user_roles(type);
