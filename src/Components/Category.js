import React from 'react'
import { Link } from 'react-router-dom'

function Category(props) {

    return (
        <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-3">
            <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                    {props.name}
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                    {props.description}
                </p>
            </div>
            <div className="px-6 py-2 whitespace-nowrap text-right text-sm font-medium">
                <Link
                    to={{
                        pathname: "/UpdateCategory",
                        updateProps: {
                            name: props.name,
                            description: props.description
                        }
                    }}
                    className="text-indigo-600 hover:text-indigo-900">Edit</Link>
            </div>
        </div>
    )

}

export default Category
