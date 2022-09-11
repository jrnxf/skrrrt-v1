
DROP VIEW "public"."v_users_online";

DROP FUNCTION public.user_is_online;

DROP table "public"."user_activity";

alter table "public"."user_locations" drop column "id" cascade;
