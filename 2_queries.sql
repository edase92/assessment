-- Base Tables
WITH join_table AS ( 
  SELECT
    u.id AS user_id, 
    first_name, 
    last_name, 
    user_group, 
    e.id, 
    event_name, 
    date AS event_date
  FROM
    `xxxx.bewerberaufgaben.user_data` u
  LEFT JOIN
    `xxxx.bewerberaufgaben.event_data` e
    ON u.id = e.user_id
), daily_counts AS (
  SELECT
    DISTINCT CONCAT(user_id, ' - ', first_name, ' ', last_name) AS full_id,
    event_date,
    COUNTIF(event_name = 'page_view') AS page_views
  FROM
    join_table
  GROUP BY
    1, 2
  ORDER BY
    1, 2
), daily_counts_user_groups AS (
  SELECT
    user_group,
    event_date,
    COUNTIF(event_name = 'page_view') AS page_views
  FROM
    join_table
  GROUP BY
    1, 2
  ORDER BY
    1, 2
)

-- Aufgabe 2.1. a)
-- Variante 1 
SELECT
  DISTINCT CONCAT(user_id, ' - ', first_name, ' ', last_name) AS full_id,
  EXTRACT(DAY FROM event_date) AS day_of_month,
  COUNTIF(event_name = 'page_view') AS page_views
FROM
  join_table
GROUP BY
  1, 2
ORDER BY
  1 ASC, day_of_month ASC

-- Aufgabe 2.1. a)
-- Variante 2 (aggregiert)
SELECT
  full_id, 
  ARRAY_AGG(event_date IGNORE NULLS ORDER BY event_date ASC) AS event_date, 
  ARRAY_AGG(page_views ORDER BY event_date ASC) AS page_views, 
FROM
  daily_counts
GROUP BY
  1
ORDER BY
  1

-- Aufgabe 2.1. a)
-- Variante 3 (Pro Nutzer und pro Tag)
SELECT
  DISTINCT CONCAT(user_id, ' - ', first_name, ' ', last_name) AS dimension_value,
  COUNTIF(event_name = 'page_view') AS count_page_views
FROM
  join_table
WHERE
  CONCAT(user_id, ' - ', first_name, ' ', last_name) IS NOT NULL
GROUP BY
  1
UNION ALL
SELECT
  DISTINCT CAST(event_date AS STRING) AS dimension_value,
  COUNTIF(event_name = 'page_view') AS count_page_views
FROM
  join_table
WHERE
  CAST(event_date AS STRING) IS NOT NULL
GROUP BY
  1

-- Aufgabe 2.1. b)
-- Variante 1 (Nutzer oder Tage, mit mehr als zwei page views)
SELECT 
  DISTINCT CONCAT(user_id, ' - ', first_name, ' ', last_name) AS dimension, 
  COUNT(event_name) AS count_page_views 
FROM join_table 
  WHERE event_name = 'page_view' 
GROUP BY 
  dimension
HAVING 
  COUNT(event_name) >= 2
UNION ALL
SELECT 
  CAST(event_date AS STRING) AS dimension, 
  COUNT(event_name) AS count_page_views 
FROM join_table 
WHERE 
  event_name = 'page_view' 
GROUP BY dimension 
HAVING 
  COUNT(event_name) >= 2

-- Aufgabe 2.1. b)
-- Variante 2 (Nutzer und Tage, mit mehr als zwei page views)
SELECT
  DISTINCT CONCAT(user_id, ' - ', first_name, ' ', last_name) AS full_id,
  EXTRACT(DAY FROM event_date) AS day_of_month,
  COUNTIF(event_name = 'page_view') AS page_views
FROM
  join_table
GROUP BY
  1, 2
HAVING
  page_views >= 2
ORDER BY
  1 ASC, day_of_month ASC

-- Aufgabe 2
SELECT
  user_group, 
  ARRAY_AGG(event_date IGNORE NULLS ORDER BY event_date ASC) AS event_date, 
  ARRAY_AGG(page_views ORDER BY event_date ASC) AS page_views, 
  -- SUM(page_views) AS total_page_views
FROM
  daily_counts_user_groups
WHERE
  event_date IS NOT NULL
GROUP BY
  1 
