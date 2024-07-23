-- Create the database
CREATE DATABASE jokesdb;

-- Switch to the new database
USE jokesdb;

-- Create the jokes table
CREATE TABLE jokes (
    id INT PRIMARY KEY IDENTITY(1,1),
    question NVARCHAR(255),
    answer NVARCHAR(255),
    rating INT
);

-- Insert some dummy data
INSERT INTO jokes (question, answer, rating) VALUES ('What do you call cheese that isn''t yours?', 'Nacho cheese', 5);
INSERT INTO jokes (question, answer, rating) VALUES ('Why don''t skeletons fight each other?', 'They don''t have the guts.', 4);
INSERT INTO jokes (question, answer, rating) VALUES ('What do you call fake spaghetti?', 'An impasta.', 3);
INSERT INTO jokes (question, answer, rating) VALUES ('Why don''t programmers like nature?', 'It has too many bugs.', 4);
INSERT INTO jokes (question, answer, rating) VALUES ('How do you organize a space party?', 'You planet.', 5);
