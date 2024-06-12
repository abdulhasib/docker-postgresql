INSERT INTO public."user"(username, email, password)
	VALUES ('test1', 'test1@test.com', '$2b$10$gTtYojOOA58ycUihI.jfauGGHfy0bB9v/fOk5Z4kwIArd30jlFgA6'),
	 ('test2', 'test2@test.com', '$2b$10$RsJXgJARspy24bwUKmSsKOm.JEn9ISDRunLX3iuWU3J6MhoFDrqaC'),
	 ('test3', 'test3@test.com', '$2b$10$Q6O/6cCWKOVsDsvjnBB4NuczSCmXW3utYEdwL0Md2QgcQ.8zl3CZq'),
	 ('test4', 'test4@test.com', '$2b$10$dcotT5XqPXuHDp8WGKVbsOYhXrqv3iL/uB3NvJA6YM.uOOqEwJOIu');

INSERT INTO public."customer_name"(firstname, lastname)
	VALUES ('John', 'Smith'),
	 ('Adam', 'Moon'),
	 ('Tracey', 'Lacey'),
	 ('Anton', 'Davies');

INSERT INTO public."customer_name_change_log"(customer_name_id, user_id, data)
	VALUES (1, 1, '{"fieldname":"firstname","previousValue":"Jon","newValue":"John"}'),
	 (2, 2, '{"fieldname":"lastname","previousValue":"Mon","newValue":"Moon"}'),
	 (3, 4, '{"fieldname":"firstname","previousValue":"Trace","newValue":"Tracey"}'),
	 (4, 1, '{"fieldname":"firstname","previousValue":"Antony","newValue":"Anton" }');

-- INSERT INTO public."customer_address"(address1, city, postalcode)
-- 	VALUES ('1 One Road', 'City1', 'AJ1 1AS'),
-- 	 ('2 Mile Drive', 'Burb', 'BK1 1ZS'),
-- 	 ('3 Kite Road', 'Toronto', 'TN1 1AS'),
-- 	 ('4 Plight Street', 'Coconut', 'AC1 JA5');

-- INSERT INTO public."customer_address_change_log"(customer_address_id, user_id, data)
-- 	VALUES (1, 1, '{"fieldname":"city","previousValue":"City5","newValue":"City1"}'),
-- 	 (2, 2, '{"fieldname":"postalcode","previousValue":"CK1 1ZS","newValue":"BK1 1ZS"}'),
-- 	 (3, 4, '{"fieldname":"address1","4 Kite Road":"Trace","newValue":"3 Kite Road"}'),
-- 	 (4, 1, '{"fieldname":"city","previousValue":"Hazelnut","newValue":"Coconut" }');