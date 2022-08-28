DROP TABLE IF EXISTS todolist;

CREATE TABLE todolist (
    id SERIAL,
    list_name TEXT
);

INSERT INTO todolist (list_name) VALUES ('Study React');
INSERT INTO todolist (list_name) VALUES ('Study React again');
INSERT INTO todolist (list_name) VALUES ('Study React again and again');
INSERT INTO todolist (list_name) VALUES ('MVP presentation');
