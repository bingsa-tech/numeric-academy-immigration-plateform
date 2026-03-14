CREATE TABLE users (
id SERIAL PRIMARY KEY,
email VARCHAR(100) UNIQUE NOT NULL,
password_hash TEXT NOT NULL,
role VARCHAR(20) DEFAULT 'student',
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE students (

id SERIAL PRIMARY KEY,

user_id INTEGER REFERENCES users(id),

first_name VARCHAR(100),
last_name VARCHAR(100),

country VARCHAR(100),

education_level VARCHAR(100),

gpa NUMERIC(3,2),

english_test_score INTEGER,

created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);

CREATE TABLE universities (

id SERIAL PRIMARY KEY,

name VARCHAR(255),

country VARCHAR(100),

city VARCHAR(100),

ranking INTEGER

);

CREATE TABLE programs (

id SERIAL PRIMARY KEY,

university_id INTEGER REFERENCES universities(id),

name VARCHAR(255),

degree_level VARCHAR(50),

tuition_fee INTEGER

);

CREATE TABLE applications (

id SERIAL PRIMARY KEY,

student_id INTEGER REFERENCES students(id),

program_id INTEGER REFERENCES programs(id),

status VARCHAR(50) DEFAULT 'pending',

admission_score NUMERIC(5,2),

created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);


CREATE TABLE documents (

id SERIAL PRIMARY KEY,

student_id INTEGER REFERENCES students(id),

document_type VARCHAR(100),

file_url TEXT,

uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);