import React from 'react';
import { useQuery, gql } from '@apollo/client';

const getAuthorsQuery = gql`{
    authors{
        name
        id
    }
}`

export default function AddBook() {
    const { loading, error, data } = useQuery(getAuthorsQuery)
    console.log(data)

    function displayAuthors() {
        if (loading) {
            return <option disabled>Loading Authors...</option>
        } else {
            return data.authors.map(author => {
                return (
                    <option key={author.id} value={author.id}>{author.name}</option>
                )
            })
        }
    }
    return (
        <form id="add-book">
            <div className="field">
                <label>Book name:</label>
                <input type="text" />
            </div>
            <div className="field">
                <label>Genre:</label>
                <input type="text" />
            </div>
            <div className="field">
                <label>Author:</label>
                <select>
                    <option>Select author</option>
                    {displayAuthors()}
                </select>
            </div>
            <button>+</button>

        </form>
    )
}
