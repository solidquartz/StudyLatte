-- seeds/02_urls.sql
-- Seed Rick
INSERT INTO study_rooms  (title, topic,description, sound, max_capacity, isPriavte, pomodoro,entered_users)
 VALUES ('React mood','react','i am a full-stack developer',false, 8,false,true, ARRAY['spongebob','patrick','squidward','hi','hello','kiki','777']);

INSERT INTO study_rooms  (title, topic,description, sound, max_capacity, isPriavte, pomodoro,entered_users)
 VALUES ('Ruby on rails mood','ruby','new to coding',false, 8,false,true, ARRAY['lucky','king','queen','pop']);

INSERT INTO study_rooms  (title, topic,description, sound, max_capacity, isPriavte, pomodoro,entered_users)
 VALUES ('LightHouse students','Java script','very hard....',false, 8,false,true, ARRAY['ava','james']);

 INSERT INTO study_rooms  (title, topic,description, sound, max_capacity, isPriavte, pomodoro,entered_users)
 VALUES ('Learning English','English','I am an ESL student...',false, 8,false,true, ARRAY['Saeee','1234','juju','coolKid']);

  INSERT INTO study_rooms  (title, topic,description, sound, max_capacity, isPriavte, pomodoro,entered_users)
 VALUES ('Law study zone','Law','lets study law for fun',false, 8,false,true, ARRAY['Ricardo the lawyer','patrick','squidward','hi','hello','kiki','777']);