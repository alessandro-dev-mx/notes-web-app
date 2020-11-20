import React from 'react'
import CategoriesComponent from '../Components/CategoriesComponent'
import { Link } from 'react-router-dom'

function Categories() {
    return (
        <div>
            <CategoriesComponent />
            <div className="mt-8 lex lg:mt-0 lg:flex-shrink-0 flex justify-center">
                <div className="inline-flex rounded-md shadow">
                    <Link
                        to="/AddCategory"
                        className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                        Add Category
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Categories
