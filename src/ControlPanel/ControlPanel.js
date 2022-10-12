import "./ControlPanel.css"

import React from "react";

function ControlPanel({runOneStep, runAuto, runToBreakPoint, startAtCodeStart, stopRun, handleClear, codeInAutoRun}) {
    return (
        <div className = "controlpanel">
            <div className = "control-panel__leftside">
                <button className = "calltoaction" onClick = {runAuto} disabled = {codeInAutoRun}>RUN</button>
                <button onClick = {stopRun}>STOP</button>
                <button onClick = {runOneStep} disabled = {codeInAutoRun}>RUN One Line</button>
                <button onClick = {startAtCodeStart}>Start at the Beginning</button>
                
            </div>
            <div>
                <button onClick = {handleClear}>Clear</button>
            </div>
        </div>
    )
}

export default ControlPanel;