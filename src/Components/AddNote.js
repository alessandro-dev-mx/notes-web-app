import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function AddNote() {
    
    const url = 'http://localhost:8000/graphql'
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')


    const handleSubmit = (e) => {

        let request = {
            query: `
            mutation AddNote {
                addNote(noteData: {title: "${title}", content: "${content}"}) {
                    note {
                        id
                        title
                    }
                }
            }
            `
        }

        // Do POST request to fetch notes
        axios.post(url, request).then(response => {
            console.log(response)
        })
        
    }

    return (
        <form onSubmit={() => handleSubmit()}>

            <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                    <div className="grid grid-cols-3 gap-6">
                        <div className="col-span-3 sm:col-span-2">
                            <label
                                htmlFor="title"
                                className="block text-sm font-medium text-gray-700">
                                Title
                            </label>
                            <div className="mt-1 flex rounded-md shadow-sm">
                                <input
                                    type="text"
                                    id="title"
                                    onChange={(e) => setTitle(e.target.value)}
                                    name="title"
                                    className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 p-2"
                                    placeholder="What's the note about?" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <label
                            htmlFor="content"
                            className="block text-sm font-medium text-gray-700">
                            About
                        </label>
                        <div className="mt-1">
                            <textarea
                                id="content"
                                name="content"
                                onChange={(e) => setContent(e.target.value)}
                                rows="3"
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md p-2"
                                placeholder="">
                            </textarea>
                        </div>
                    </div>

                </div>

                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <Link to="/" onClick={handleSubmit} className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Save
                    </Link>
                </div>

            </div>

        </form>
    )
}

export default AddNote
