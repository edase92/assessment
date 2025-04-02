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
