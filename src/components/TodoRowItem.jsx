export function TodoRowItem(){

    // Adding variables
    const rowNumber = 1
    const rowDescription = 'Feed Dog'
    const rowAssigned = 'Eric' 
    return (
        <tr>
                <td>{rowNumber}</td>
                <td>{rowDescription}</td>
                <td>Me</td>
        </tr>
    )
}

// export default TodoRowItem