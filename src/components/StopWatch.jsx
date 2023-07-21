import React from 'react'

export default function StopWatch() {
    const [time , setTime] = useState(0);
    const [timerOn , setTimerOn] = useState(false);
    
    useEffect(() => {
        let interval = null;
        if(timerOn){
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 10)
            }, 10);
        }else{
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [timerOn])

        setTime(0);
        setTimerOn(false);
    }
     
    time = new Date(time);  
    let centiseconds = ("0" + (Math.floor(time.getMilliseconds() / 10) % 100)).slice(-2);
    let seconds = ("0" + (Math.floor(time.getSeconds()) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(time.getMinutes()) % 60)).slice(-2);
    let hours = ("0" + Math.floor(time.getHours())).slice(-2);

    if(hours === '00'){
        hours = '';
    }else{
        hours = hours + ':';
    }

  return (
    <div>

    </div>
  )
}
