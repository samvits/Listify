import React from 'react'

export const About = () => {
    return (
            <div className="about" style={{margin:'10px'}}>
                   <header style={{fontWeight:'bolder',fontSize:'30px'}}> LISTIFY - About The Project</header>
                    <p>Listify is a single page application based on ReactJS which has functionalities of adding, storing as well as removing of data in the form of notes. React is a free and open-source front-end JavaScript library for building user interfaces on UI components. It is maintained by Meta and has a community of individual developers and companies.</p>
                    <ul>Features of Listify
                        <li>Add items to the list.</li>
                        <li>Remove items from the list.</li>
                        <li>Save the list to Local Storage when the state changes.</li>
                        <li>Load the list of items from Local Storage when the site is loaded again.</li>
                        <li>Single page application which switches to other sections without any reloading.</li>
                    </ul>
            </div>
    )
}
