import React, { useContext } from "react";
import { Context } from "../container/Context";
import BreakSessionControl from "./BreakSessionControl";
import Clock from "./Clock";

function Timer() {
    const { audioSrc, audioRef } = useContext(Context);

    return (
        <div className="timer">
            <BreakSessionControl />
            <Clock />
            <audio
                id="beep"
                preload="auto"
                src={audioSrc}
                className="clip"
                ref={audioRef}
            />
        </div>
    );
}

export default Timer;