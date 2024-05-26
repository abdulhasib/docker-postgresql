INSERT INTO public."user"(username, password, refresh_token)
	VALUES ('one', 'one', '1'),
	 ('two', 'two', '2'),
	 ('three', 'three', '3'),
	 ('four', 'four', '4');

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

INSERT INTO public."customer_address"(address1, city, postalcode)
	VALUES ('1 One Road', 'City1', 'AJ1 1AS'),
	 ('2 Mile Drive', 'Burb', 'BK1 1ZS'),
	 ('3 Kite Road', 'Toronto', 'TN1 1AS'),
	 ('4 Plight Street', 'Coconut', 'AC1 JA5');

INSERT INTO public."customer_address_change_log"(customer_address_id, user_id, data)
	VALUES (1, 1, '{"fieldname":"city","previousValue":"City5","newValue":"City1"}'),
	 (2, 2, '{"fieldname":"postalcode","previousValue":"CK1 1ZS","newValue":"BK1 1ZS"}'),
	 (3, 4, '{"fieldname":"address1","4 Kite Road":"Trace","newValue":"3 Kite Road"}'),
	 (4, 1, '{"fieldname":"city","previousValue":"Hazelnut","newValue":"Coconut" }');