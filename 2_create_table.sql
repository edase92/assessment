CREATE TABLE bewerberaufgaben.user_data (
    id INT64,
    first_name STRING,
    last_name STRING,
    user_group STRING
);


CREATE TABLE bewerberaufgaben.event_data (
    id INT64,
    event_name STRING,
    date DATE,
    user_id INT64,
    -- FOREIGN KEY (user_id) REFERENCES user_data(id)
);

INSERT INTO bewerberaufgaben.user_data (id, first_name, last_name, user_group)
VALUES (1, 'Hans', 'Mayer', 'artist'),
  (2, 'Maria', 'Huber', 'developer'),
  (3, 'Eva', 'Maier', 'analyst'),
  (4, 'Eva', 'Maier', 'developer');
  
  
INSERT INTO bewerberaufgaben.event_data(id, event_name, date, user_id)
VALUES (1, 'page_view', '2023-01-02', 1),
  (2, 'page_view', '2023-01-01', 3),
  (3, 'page_view', '2023-01-02', 2),
  (5, 'page_view', '2023-01-02', 1),
  (6, 'page_view', '2023-01-04', 1),
  (7, 'paint_picture', '2023-01-05', 2),
  (8, 'page_view', '2023-01-04', 3),
  (9, 'page_view', '2023-01-06', 1),
  (10, 'page_view', '2023-01-08', 2),
  (11, 'page_view', '2023-01-02', 3);
