> # PERN
****Full Stack Postgres,Express,React,Node****

ticket 1315 connect postgres and node server

****Prerequisites:****
- [x] Express
- [x] React
- [x] Node
- [x] REST API
- [x] Basic Javascript

> ## PostgreSQL

****Some Handy Commands****

- [x] 'psql -U postgres' to login into postgres default user as superadmin.
- [x] '\l' to list all database
- [x] '\c DBname' move inside a database
- [x] '\dt' show table inside database
- [x] 'CREATE DATABASE todo_pern'; creates a database named todo_pern.
- [x] CREATE TABLE todo(..Schema..); create a table todo with Schema as mentioned.
- [x] SELECT * FROM TABLENAME(todo); to show all the records in the table.

> ### * Some facts I observed during Todo app development
- [x] VALUES($1),[varname] the varname value replaces the $1 in VALUES.
- [x] RETURNING * in pool.query helps to return back the data that we are inserting.
