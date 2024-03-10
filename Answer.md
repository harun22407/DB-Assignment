<!-- Answer of question no. 1 -->

1:-
In the table, the connection between "Product" and "Product_Category" known as a "One to Many" relationship.

The "category_id" in the "product" table serves as a foreign key. This foreign key points to the primary key designated as "id" in the "table establishing a one to many relationship. This means that multiple records of products can be linked to one product category.
For instance if we have a product category like "Soap " we can include products such, as "Lux," "Dove," and "Pears."





***************************************************************************************************************************************************


<!-- Answer of question no. 2 -->



2:-
We can do the following things to ensure that each product in the "Product" table has a valid category assigned to it.

Foreign Key Constraint:  We can set up a relationship rule, on the "category_id" field in the "Product" table that links back to the primary key in the “product_category” table. This ensures that any value inputted in the "category_id" field of the "Product" table must match an existing category in the "Product_Category" table.
Data Validation:  Validation checks within the application layer to ensure a category is chosen when adding or updating a product. This may involve displaying a menu with categories on the user interface or verifying the input against a list of accepted categories in the backend system.
Database Triggers: Utilize database triggers to enforce rules for maintaining data integrity and preventing entries into the "Product" table. For instance a trigger before inserting data can validate the value before adding a new product entry.
Data Entry Forms: Implement data entry forms that restrict users to selecting categories from a predefined list when adding or updating products. This helps prevent data entry from occurring.
