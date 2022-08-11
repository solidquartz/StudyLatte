-- seeds/02_urls.sql
-- Seed Rick
INSERT INTO study_rooms  (title, topic, sound, max_capacity, isPriavte, pomodoro,entered_users)
 VALUES ('Example study room','react',false, 8,false,true, ARRAY['sae','aky','ricardo']);

 INSERT INTO study_rooms  (title, topic, sound, max_capacity, isPriavte, pomodoro)
 VALUES ('Example study room','react',false, 8,false,true);