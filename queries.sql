CREATE TABLE book_reviews(
    book_id INTEGER REFERENCES books(book_id) PRIMARY KEY,
    review_text TEXT,
    rating VARCHAR(50),
    review_date VARCHAR(50)
);