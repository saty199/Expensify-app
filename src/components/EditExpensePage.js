import React from 'react';

const EditExpensePage=(props)=>{
    console.log(props)
    return (
        <div>
        Editing the document {props.match.params.id}
        </div>
    );
}

export default EditExpensePage;