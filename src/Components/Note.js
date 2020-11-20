import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Note(props) {

    const url = 'http://localhost:8000/graphql'

    const deleteNote = () => {

        // Graphql body for fetching all notes from back-end
        let request = {
            query: `
                mutation deleteNote {
                    deleteNote(noteId: ${props.noteId}) {
                        ok
                    }
                }
            `
        }

        // Do POST request to fetch notes
        axios.post(url, request).then(response => {
            console.log('Note deleted')
        })

        setTimeout(() => {
            
            // Graphql body for fetching all notes from back-end
            let requestNotes = {
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
    
            // Do POST requestNotes to fetch notes
            axios.post(url, requestNotes).then(response => {
                props.handleNotes(response.data)
            })

        }, 250)

    }

    return (
        <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-3">
            <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                    {props.title}
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                    {props.content}
                </p>
            </div>
            <div className="px-6 py-2 whitespace-nowrap text-right text-sm font-medium">
                <span className="text-red-600 hover:text-red-900 px-3" onClick={deleteNote}>
                    Delete
                </span>
                <Link
                    to={{
                        pathname: "/UpdateNote",
                        updateProps: {
                            noteId: props.noteId,
                            title: props.title,
                            content: props.content
                        }
                    }}
                    className="text-indigo-600 hover:text-indigo-900">Edit</Link>
            </div>
        </div>
    )

}

export default Note
