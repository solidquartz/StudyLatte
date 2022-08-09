-- seeds/02_urls.sql
-- Seed Rick
INSERT INTO study_rooms  (title, topic, sound, max_capacity, isPriavte, pomodoro,entered_users)
 VALUES ('Example study room','react',false, 8,false,true, ARRAY[1,2,3]);