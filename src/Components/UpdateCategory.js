import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function UpdateCategory(props) {
    
    const url = 'http://localhost:8000/graphql'
    const [name, setName] = useState(props.location.updateProps.name)
    const [description, setDescription] = useState(props.location.updateProps.description)


    const handleSubmit = (e) => {

        let request = {
            query: `
            mutation UpdateCategory {
                upsertCategory(noteData: {name: "${name}", description: "${description}"}) {
                    note {
                        id
                        name
                        description
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
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700">
                                Name
                            </label>
                            <div className="mt-1 flex rounded-md shadow-sm">
                                <input
                                    type="text"
                                    id="name"
                                    onChange={(e) => setName(e.target.value)}
                                    name="name"
                                    className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 p-2"
                                    placeholder={props.location.updateProps.name} />
                            </div>
                        </div>
                    </div>

                    <div>
                        <label
                            htmlFor="description"
                            className="block text-sm font-medium text-gray-700">
                            Description
                        </label>
                        <div className="mt-1">
                            <textarea
                                id="description"
                                name="description"
                                onChange={(e) => setDescription(e.target.value)}
                                rows="3"
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md p-2"
                                placeholder={props.location.updateProps.description}>
                            </textarea>
                        </div>
                    </div>

                </div>

                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <Link to="/Categories" onClick={handleSubmit} className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Save
                    </Link>
                </div>

            </div>

        </form>
    )
}

export default UpdateCategory
