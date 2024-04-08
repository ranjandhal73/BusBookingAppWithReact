import {useState} from 'react'

function DispayUser({userDetails, onDelete, onEdit}){
    // const [isDelete, setIsDelete] = useState(false)
    const deleteHandler = () =>{
        // setIsDelete(true)
        onDelete(userDetails.id)
    }

    // if (isDelete) {
    //     return null; // Render nothing if the item is deleted
    //   }

    const editHandler = () =>{
        onEdit(userDetails.id)
    }
    
    return(
        <>
            <div className="mb-2" id={userDetails.id}>
                {`${userDetails.uName} - ${userDetails.email} - ${userDetails.phone} - ${userDetails.bus.toUpperCase()}`}
                <button onClick={deleteHandler}
                className="bg-red-700 py-1 px-2 mr-2 text-white rounded"
                >
                    Delete
                </button>
                <button onClick={editHandler}
                className="bg-blue-700 py-1 px-2  text-white rounded">
                    Edit
                </button>
            </div>
        </>
    )
}
export default DispayUser;