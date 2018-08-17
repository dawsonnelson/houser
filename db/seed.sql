CREATE TABLE houses (
    id serial primary key,
    name varchar(40),
    age integer,
    color text

);

INSERT INTO houses( name, age, color) values ('red house', 20, 'red');
INSERT INTO houses( name, age, color) values ('green house', 60, 'green');
INSERT INTO houses( name, age, color) values ('blue house', 40, 'blue');