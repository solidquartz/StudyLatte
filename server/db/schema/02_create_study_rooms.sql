-- schema/02_create_study_rooms.sql
DROP TABLE IF EXISTS study_rooms CASCADE;
-- CREATE uuid
-- CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
-- url with short version
-- url random generator : url VARCHAR(255) DEFAULT substring(md5(random()::text),1,7)
-- url with longer version
-- url uuid DEFAULT uuid_generate_v4 ()   


-- CREATE study_rooms

CREATE TABLE study_rooms (
  id SERIAL PRIMARY KEY NOT NULL,

  title VARCHAR(255) NOT NULL,
  description VARCHAR(255),
  topic VARCHAR(255) NOT NULL,

  
  sound BOOLEAN ,
  max_capacity INTEGER,
  isPriavte BOOLEAN,

  password VARCHAR(255),
  

  music VARCHAR(255) ,
  background_img VARCHAR(255),



  study_time INTEGER,
  break_time INTEGER,
  long_break_time INTEGER,
  pomodoro BOOLEAN,


  entered_users TEXT[] DEFAULT ARRAY[]::TEXT[],
  url VARCHAR(255),
  
  created_time TIMESTAMP DEFAULT NOW(),
  start_time TIMESTAMP


);