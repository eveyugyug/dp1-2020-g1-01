export default function (state = null, action) {
    switch (action.type) {
            case "USER_SELECTED": 
                    console.log("esta funcionando el reducer")
                    return action.payload; //de aqui pillamos el objeto y se lo pasamos al index
                    break;
    } return state;
    
}