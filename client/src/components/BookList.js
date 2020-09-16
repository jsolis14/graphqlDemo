import React, { useState, useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';

const getBooksQuery = gql`
    {
        books{
            name
            genre
        }
    }`

export default function BookList() {
    const { loading, error, data } = useQuery(getBooksQuery);

    if (loading) return <p>Loading...</p>;
    if (error) {
        console.log(error)
        return <p>error</p>
    }


    console.log(data)
    return (
        <div>
            <ul id="book-list">
                <li>Book Name</li>
            </ul>
        </div>
    )
}
