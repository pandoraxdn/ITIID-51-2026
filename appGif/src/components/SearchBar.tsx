import type { KeyboardEvent } from 'react';
import type { FormData } from "../hooks/useFormReducer";

interface Props {
    placeholder:        string;
    buttonText?:        string;
    state:              FormData;
    handleInputChange:  ( fieldName: keyof FormData, value: string ) => void;
    handleSubmit:       () => void;
    sendQuery:          (data: FormData) => void,
    addTerm:            (value: string) => void;
}

export const SearchBar = ({ placeholder, buttonText = "Buscar", state, handleInputChange, handleSubmit, sendQuery, addTerm }: Props) => {

    const sendPetition = () => {
        sendQuery(state);
        addTerm( state.query );
        handleSubmit();
    }

    const handleKeyDown = ( event: KeyboardEvent<HTMLElement> ) => {
       ( event.key === "Enter" ) && sendPetition(); 
    }

    return (
        <div
            className="search-container"
        >
            <input
                type="text"
                placeholder={ placeholder }
                value={ state.query }
                onChange={ (event) => handleInputChange("query",event.target.value) }
                onKeyDown={ handleKeyDown }
            />
            <button
                onClick={ sendPetition }
            >
                { buttonText }
            </button>
        </div>
    );
};
