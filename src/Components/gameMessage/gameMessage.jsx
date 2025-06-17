import PropTypes from "prop-types"
import Styles from "./gameMessage.module.css"

export default function Message({ status }){

    return(
        <div>
            {status === 'hit' && (
                <p className={Styles.hit} >Target Hit !</p>
            )}
            {status === 'miss' && (
                <p className={Styles.miss}>Target Miss !</p>
            )}
        </div>
    )
}

Message.propTypes = {
    status: PropTypes.string.isRequired
}