import React from "react";
export default function Input ({
    idAttribute,
    nameAttribute,
    inputType,
    stateValue,
    stateSetter,
    labelText}) {
    return (
        <label htmlFor = {idAttribute}>
            {labelText}
            <input
            type = {inputType}
            name = {nameAttribute}
            value = {stateValue}
            onChange = {(e) => stateSetter(e.target.value)}
            id = {idAttribute}
            />
        </label>
    )
}