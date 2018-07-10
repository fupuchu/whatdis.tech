CREATE TABLE IF NOT EXISTS users (
  userid SERIAL PRIMARY KEY,
  created_date date DEFAULT CURRENT_TIMESTAMP,
  created_time time DEFAULT CURRENT_TIMESTAMP,
  username varchar(255),
  first_name varchar(255),
  last_name varchar(255),
  email varchar(255),
  password varchar(255),
  location varchar (255)
);

CREATE TABLE IF NOT EXISTS categories (
  category_id SERIAL PRIMARY KEY,
  created_date date DEFAULT CURRENT_TIMESTAMP,
  created_time time DEFAULT CURRENT_TIMESTAMP,
  category_name varchar(255)
);

CREATE TABLE IF NOT EXISTS terminology(
  terminology_id SERIAL PRIMARY KEY,
  category_id int,
  FOREIGN KEY (category_id) REFERENCES categories(category_id),
  created_date date DEFAULT CURRENT_TIMESTAMP,
  created_time time DEFAULT CURRENT_TIMESTAMP,
  terminology_title varchar(255)
);

CREATE TABLE IF NOT EXISTS description (
  desc_id SERIAL PRIMARY KEY,
  terminology_id int,
  FOREIGN KEY (terminology_id) REFERENCES terminology(terminology_id),
  terminology_title varchar(255),
  created_date date DEFAULT CURRENT_TIMESTAMP,
  created_time time DEFAULT CURRENT_TIMESTAMP,
  desc_text varchar(255),
  desc_vote integer
);

CREATE TABLE IF NOT EXISTS user_has_vote (
  userid int,
  terminology_id int,
  created_date date DEFAULT CURRENT_TIMESTAMP,
  created_time time DEFAULT CURRENT_TIMESTAMP
);