import uuid from 'uuid/v4';

export const commentReducer = (state, action) => {
    if(!state) state = [];
    var comment = typeof action !== 'function' ? action : undefined;
    if (comment && comment.parentid) {
    var selectedComment = findObjectByLabel(state, comment.parentid);
    selectedComment.comments.push(
        {
            username: "Bruna",
            text: comment.text,
            parentid: selectedComment.id,
            comments: [],
            id: uuid()
        }
    )
        console.log("CASE 1", state)
        return state;
    } else {
        if (comment) {
            console.log("CASE 2", state)
            return [...state, {
                username: "Bruna",
                text: comment.text,
                comments: [],
                id: uuid()
            }
            ]
        } else {
            console.log("CASE 3", state)
            return state
        }
    }

}

var findObjectByLabel = function (array, parentId) {
    console.log(array, parentId)
    for (var obj of array) {
        if (obj.id === parentId) { return obj; }
        else if (obj.hasOwnProperty("comments") && obj.comments.length > 0) {
            var foundComment = findObjectByLabel(obj.comments, parentId);
            if (foundComment) { return foundComment; }
        }
        return null;
    }
};