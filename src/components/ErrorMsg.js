import SadIcon from "../assets/icons/sad_icon.png";

const ErrorMsg = ( { errorMsg } ) => {
    return (
        <div className="error-msg">
            <img src={ SadIcon } alt="Icon with sad face" />
            <span >{ errorMsg }</span>
        </div>
    )
}

export default ErrorMsg;