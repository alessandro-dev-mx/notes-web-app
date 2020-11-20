import React, { useState, useEffect } from 'react'
import Note from './Note'
import axios from 'axios'

function Notes() {
    const url = 'http://localhost:8000/graphql'
    const [notes, setNotes] = useState(null)

    
    // Variable to save all html code for the component
    let componentContent = null
    
    // Use Effect to post to GraphQL only once...
    useEffect(() => {
        
        // Graphql body for fetching all notes from back-end
        let request = {
            query: `
                query Notes {
                    notes {
                        id
                        title
                        content
                    }
                }
            `
        }

        // Do POST request to fetch notes
        axios.post(url, request).then(response => {
            setNotes(response.data)
        })
    }, [url])

    if (notes) {
        console.log(notes)
        componentContent = notes.data.notes.map((note, key) => 
            <div key={key}>
                <Note
                    title={note.title}
                    content={note.content}
                    noteId={note.id}/>
            </div>
        )
    }

    return (
        <div>
            {componentContent}
        </div>
    )

}

export default Notes