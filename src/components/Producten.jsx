import ButtonPlusMin from "./ButtonPlusMin";
export default function Producten ({
        productName,
        icon,
        stateSetter,
        stateValue}) {
    function ofNull (stateValue){
        if (stateValue === 0) {
            return true;
        }
    }
    return(
        <article>
            <p>{icon} {productName}</p>
            <ButtonPlusMin
                buttonText = " - "
                buttonDisabled = {ofNull(stateValue)}
                buttonActie = {() => stateSetter(stateValue - 1)}>
            </ButtonPlusMin>
            <p>{stateValue}</p>
            <ButtonPlusMin
                buttonText = " + "
                buttonActie = {() => stateSetter(stateValue + 1)}>
            </ButtonPlusMin>
        </article>
    )
}
