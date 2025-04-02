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

-- Aufgabe 1. a)
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

-- Aufgabe 1. a)
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

-- Aufgabe 1. a)
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

-- Aufgabe 1. b)
