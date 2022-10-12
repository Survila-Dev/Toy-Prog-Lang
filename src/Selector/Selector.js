import "./Selector.css"
import dropdownIcon from "./1063883_arrow_arrow down_down_drop_stroke arrow_icon.svg"
import { FLCode } from "../FuncLang/dist/FLCode"
import gifExample from "./example_gif.gif";

import React from "react";

function Selector({updateEditorContent, interpretorState, updateInterpretorState, intervalObj, updateCodeInAutoRun}) {

    const [showOptions, changeShowOptions] = React.useState(false);
    const [optionWidth, changeOptionWidth] = React.useState("70%");
    const [optionSelectorHeight, updateOptionSelectorHeight] = React.useState(0.8 * window.innerHeight)
    const [currentSelection, updateCurrentSelection] = React.useState(0)

    React.useEffect(() => {
        document.addEventListener("click", closeAllSelect);
        resizeOptions();
        window.addEventListener("resize", resizeOptions)
    }, [])

    function resizeOptions() {

        const newOptionWidth =
            document.getElementsByClassName("selectorbutton")[0].offsetWidth
        const newOptionSelectorHeight = window.innerHeight
            - document.getElementsByClassName("selectorbutton")[0].offsetHeight
            - document.getElementsByClassName("navbar")[0].offsetHeight
            - 20;
            

        console.log(newOptionWidth)
        changeOptionWidth(newOptionWidth)
        updateOptionSelectorHeight(newOptionSelectorHeight)
    }

    function closeAllSelect(event) {
        const className = event.target.className;

        if (showOptions &&
            className !== "selectorbutton" &&
            className !== "optionarticle" &&
            className !== "clickignore") {
            changeShowOptions(false)
        }
    }

    function handleSelectorClick(event) {
        changeShowOptions((prevState) => !prevState)
        const articleElements = document.getElementsByClassName("optionarticle");
        clearInterval(intervalObj);
        updateCodeInAutoRun(false);

    }

    function handleOptionClick(event) {
        changeShowOptions(false)
        
        console.log("Started the option click")
        // Save current interpretor state to the local storage
        localStorage.setItem(
            `snippet${currentSelection}`,
            JSON.stringify(interpretorState));

        console.log(`snippet${currentSelection}`)
        console.log("Saved the current state to local storage")
        updateCurrentSelection(event.target.id);

        console.log("Updated the current selection value")
        console.log(`snippet${event.target.id}`)

        // Get the new interpretor state from the local storage
        const newValue = JSON.parse(
            localStorage.getItem(
                `snippet${event.target.id}`)
        )

        console.log("Selected value");
        console.log(newValue.currentCode.internalText);
        // newValue.callStack = [];

        updateInterpretorState(
            {
                ...newValue,
                globalStack: [],
                currentCode: new FLCode(newValue.currentCode.internalText, 200),
                lineMarking: {currentEvalLine: null, currentErrorLine: null},
                nominalStackSize: 0,
            });

        // updateInterpretorState((prevState) => {
        //     return {
        //         ...prevState,
        //         globalStack: []
        //     }
        // }
        // )

        updateEditorContent(newValue.currentCode.internalText);

        console.log("Got the new interpretor value from local storage")
    }

    const options = []

    for (let i = 0; i < 6; i++) {
        options.push(
            <article
                className = "option_article"
                
                id = {i}
                key = {i}
                onClick = {handleOptionClick}
            >
                <img src = {gifExample}></img>
                <div className = "option-article_content">
                    <div>
                        <h3>I am also here</h3>
                        <p>I am also here</p>
                    </div>
                    <div className = "option-article_tags">
                        <div>IF</div>
                        <div>FOR</div>
                        <div>WHILE</div>
                    </div>
                </div>
            </article>
        )
    }
    return (
        <>
            <div className = "selector">
                <div className = "selectorbutton" onClick = {handleSelectorClick}>
                    <div className = "clickignore">
                        <h2 className = "clickignore">Selector</h2>
                        <p className = "h2_sub clickignore">Select pre-written code snippets</p>
                    </div>
                    <div className = "clickignore select__dropdown-symbol__div">
                        <img className = "clickignore select__dropdown-symbol" src = {dropdownIcon} alt = "v"/>
                    </div>
                </div>
                {showOptions?
                    <div className = "selector-options" style = {{width: optionWidth, height: optionSelectorHeight}}>
                        {options}
                    </div>: <></>
                }
            </div>
            {showOptions? <div className = "selector__popup-cover"></div> : <></>}
        </>
    )
}

export default Selector;