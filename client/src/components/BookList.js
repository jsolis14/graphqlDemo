import React, { useState, useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';

const getBooksQuery = gql`
    {
        books{
            name
            genre
            id
        }
    }`

export default function BookList() {
    const { loading, error, data } = useQuery(getBooksQuery);

    function dispayBooks() {
        if (loading) {
            return <div>Loading Books</div>
        } else {
            return data.books.map(book => {
                return (
                    <li key={book.id}>{book.name}</li>
                )
            })
        }
    }

    console.log(data)
    return (
        <div>
            <ul id="book-list">
                {dispayBooks()}
            </ul>
        </div>
    )
}
