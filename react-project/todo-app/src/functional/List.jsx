import React from 'react'

export default function List(props) {
    console.log(props);
    return (
        <section className='mt-5'>
            <ul className="list-group">
                {/* {
                    props.todos.length > 0 ? props.todos.map((value, index) => {
                        return <li className="list-group-item" key={index}>{value}</li>
                    }) :
                        <li className="list-group-item">No Todo</li>
                } */}

                {
                    props.todos.length > 0 ? props.todos.map((value, index) => (
                        <li className="list-group-item" key={index}>{value}</li>
                    )) :
                        <li className="list-group-item">No Todo</li>
                }
            </ul>
        </section>
    )
}
