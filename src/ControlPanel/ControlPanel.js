import React from "react";

function ControlPanel() {
    return (
        <div className = "ControlPanel">
            <button>Eval Back</button>
            <button>Eval</button>
            <button>Eval to Break Point</button>
            <button>Eval Eval One Line</button>
            <button>Start at the Beginning</button>
        </div>
    )
}

export default ControlPanel;