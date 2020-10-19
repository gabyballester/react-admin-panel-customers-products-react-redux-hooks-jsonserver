//cada reducer tendrá su estado inicial
const initialState = {
    customers: [],
    error: null,
    loading: false
}

// le paso state inicial
export default function (state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}