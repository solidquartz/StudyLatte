-- seeds/02_urls.sql
-- Seed Rick
INSERT INTO study_rooms  (title, topic,description, sound, max_capacity, isPriavte, pomodoro,entered_users)
 VALUES ('React mood','react','i am full-stack developer',false, 8,false,true, ARRAY['sae','aky','ricardo']);

 INSERT INTO study_rooms  (title, topic, description,sound, max_capacity, isPriavte, pomodoro)
 VALUES ('Ruby on rails','coding','new to coding',false, 8,false,true);