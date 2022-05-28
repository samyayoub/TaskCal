import React from 'react';
import { useTimer, useStopwatch } from 'react-timer-hook';


function MyTimer({ expiryTimeStamp })   {
    const   {
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        resume,
        restart,
    }   = useTimer({    expiryTimeStamp, onExpire: () => console.warn('onExpire called')    });

    return  (
        <div className="timer">
            <h1>Timer</h1>
            <div className='timerVariables'>
                <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
            </div>
            <p>
                {isRunning ? 'Running' : 'Not running'}
            </p>
            <button onClick={start}>Start</button>
            <button onClick={pause}>Pause</button>
            <button onClick={resume}>Resume</button>
            <button onClick={() => {
                // Restarts to 5 minutes timer
                const time = new Date();
                time.setSeconds(time.getSeconds() + 300);
                restart(time)
            }}>Restart</button>
        </div>
    );
}

function MyStopWatch()  {
    const   {
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        reset,
    } = useStopwatch({ autoStart: false });

    return (
        <div className='timer'>
            <h1>StopWatch</h1>
            <div className='timerVariables'>
                <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
            </div>
            <p>{isRunning ? 'Running' : 'Not running'}</p>
            <button onClick={start}>Start</button>
            <button onClick={pause}>Pause</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default function Timer() {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 600); // 10 minutes timer
    return (
        <div>
            <MyTimer expiryTimeStamp={time} />
            <MyStopWatch />
        </div>
    );
}