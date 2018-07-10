INSERT INTO categories (category_name)
VALUES ('database'), ('web development'), ('front-end'), ('back-end');

INSERT INTO terminology (terminology_title, category_id)
VALUES ('HTML' , '2'), ('SQL', '1'), ('CSS' , '2'), ('PHP', '4'), ('React', '3');

INSERT INTO description (desc_text , desc_vote, terminology_id, terminology_title)
VALUES 
('a sort of fruit?', '1', '2', 'SQL'),
('HTML is a database to store data', '2', '2', 'HTML'),
('HTML? SIMI QUESTION LA?', '50', '2', 'HTML'),
('probably some bitcoin', '11', '2', 'HTML'),
('HTML is...uhhh', '25', '2', 'HTML'),
('HTML stands for SIBEH QUESTION LEH', '30', '2', 'HTML');

INSERT INTO user_has_vote (userid, terminology_id)
VALUES ('2' , '1')