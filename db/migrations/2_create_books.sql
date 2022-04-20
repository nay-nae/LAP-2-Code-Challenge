DROP TABLE IF EXISTS books;

CREATE TABLE posts (
    id serial PRIMARY KEY,
    title, varchar(50),
    year_of_publication, int,
    abstract varchar(500),
    author_id int
);
