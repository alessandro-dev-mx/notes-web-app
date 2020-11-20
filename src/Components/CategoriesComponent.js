import React, { useState, useEffect } from 'react'
import Category from './Category'
import axios from 'axios'

function CategoriesComponent() {
    const url = 'http://localhost:8000/graphql'
    const [categories, setCategories] = useState(null)

    
    // Variable to save all html code for the component
    let componentContent = null
    
    // Use Effect to post to GraphQL only once...
    useEffect(() => {
        
        // Graphql body for fetching all categories from back-end
        let request = {
            query: `
                query Categories {
                    categories {
                        id
                        name
                        description
                    }
                }
            `
        }

        // Do POST request to fetch categories
        axios.post(url, request).then(response => {
            setCategories(response.data)
        })
    }, [url])

    if (categories) {
        console.log(categories)
        componentContent = categories.data.categories.map((note, key) => 
            <div key={key}>
                <Category
                    name={note.name}
                    description={note.description}/>
            </div>
        )
    }

    return (
        <div>
            {componentContent}
        </div>
    )

}

export default CategoriesComponent