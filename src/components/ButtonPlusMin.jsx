
export default function ButtonPlusMin ({buttonText, buttonActie, buttonDisabled}) {
    return (
        <button
            onClick = {buttonActie}
            disabled = {buttonDisabled}
        >
            {buttonText}
        </button>
    )
}
