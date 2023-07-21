import React, { useState, useRef } from 'react';

function Stopwatch() {
    const [running, setRunning] = useState(false);
    const [time, setTime] = useState(0);
    const intervalRef = useRef();

    const handleStartStop = () => {
        if (running) {
            clearInterval(intervalRef.current);
        } else {
            const startTime = Date.now() - time;
            intervalRef.current = setInterval(() => {
                setTime(Date.now() - startTime);
            }, 10);
        }
        setRunning(!running);
    };

    const handleReset = () => {
        clearInterval(intervalRef.current);
        setRunning(false);
        setTime(0);
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60000);
        const seconds = Math.floor((time % 60000) / 1000);
        const milliseconds = Math.floor((time % 1000) / 10);

        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(2, '0')}`;
    };

    return (
        <div className='min-h-screen bg-[url(/src/assets/space.jpg)] bg-cover flex items-center justify-center'>
            <div className='relative'>
                <div className='absolute top-[-50%] left-[-50%] w-[200%] h-[200%] backdrop-filter backdrop-blur-md bg-opacity-10 rounded-full'></div>
                <div className='relative flex-col flex items-center justify-center text-white font-bold'>
                    <h1 className='text-4xl'>Stopwatch</h1>
                    <div className="timer text-8xl">{formatTime(time)}</div>
                    <div className="buttons space-x-10 text-2xl">
                        <button onClick={handleStartStop}
                        className='bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full'
                        >{running ? 'Stop' : 'Start'}</button>
                        <button onClick={handleReset}
                        className='bg-purple-700 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded-full'
                        >Reset</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stopwatch;
