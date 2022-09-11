alter table "public"."user_locations" alter column "id" set default public.gen_random_uuid();
alter table "public"."user_locations" alter column "id" drop not null;
alter table "public"."user_locations" add column "id" uuid;
