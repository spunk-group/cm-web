const initialState = {
    modalopen: false,
    darkMode: '',
    highcontrast: '',
    rtlmode: false
}
const Mainreducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MODAL_OPEN': {
            return {
                ...state,
                modalopen: action.payload
            }
        }
        case 'DARK_MODE': {
            localStorage.setItem('darkMode', action.payload)
            return {
                ...state,
                darkMode: action.payload
            }
        }
        case 'HIGH_CONTRAST': {

            return {
                ...state,
                highcontrast: action.payload
            }
        }
        case 'rtl_mode': {
            return {
                ...state,
                rtlmode: action.payload
            }
        }
        default: {
            return state
        }
    }

}
export default Mainreducer;