CREATE SCHEMA IF NOT EXISTS SIT;

CREATE TABLE SIT.professor(
    id INT NOT NULL PRIMARY KEY,
    name TEXT
);

INSERT INTO SIT.professor(id, name, subject) VALUES(1, 'John');
INSERT INTO SIT.professor(id, name, subject) VALUES(2, 'Jane');
INSERT INTO SIT.professor(id, name, subject) VALUES(3, 'Doe');
SELECT * FROM SIT.professor;

