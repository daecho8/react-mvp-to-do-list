DROP TABLE IF EXISTS todolist;

CREATE TABLE todolist (
    id SERIAL,
    list_name TEXT
);

INSERT INTO todolist (list_name) VALUES ('AAA');
INSERT INTO todolist (list_name) VALUES ('BBB');
INSERT INTO todolist (list_name) VALUES ('CCC');
INSERT INTO todolist (list_name) VALUES ('DDD');
