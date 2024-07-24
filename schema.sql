IF NOT EXISTS (SELECT * FROM sys.databases WHERE name = 'jokesdb')
BEGIN
    CREATE DATABASE jokesdb;
END

USE jokesdb;

IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='jokes' AND xtype='U')
BEGIN
    CREATE TABLE jokes (
        id INT PRIMARY KEY IDENTITY(1,1),
        question NVARCHAR(255),
        answer NVARCHAR(255),
        rating INT
    );
END

-- Insert dummy data
INSERT INTO jokes (question, answer, rating) VALUES ('What do you call cheese that isn''t yours?', 'Nacho cheese', 5);
INSERT INTO jokes (question, answer, rating) VALUES ('Why don''t skeletons fight each other?', 'They don''t have the guts.', 4);
INSERT INTO jokes (question, answer, rating) VALUES ('What do you call fake spaghetti?', 'An impasta.', 3);
INSERT INTO jokes (question, answer, rating) VALUES ('Why don''t programmers like nature?', 'It has too many bugs.', 4);
INSERT INTO jokes (question, answer, rating) VALUES ('How do you organize a space party?', 'You planet.', 5);
