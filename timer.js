const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth();
const date = new Date();
const deadLine = new Date(currentYear, currentMonth, 10,18,00,00).getTime();

const clock  = () => {
    //the date now
  const now = new Date().getTime();
    // this distance between deadline and date now
  const dis = deadLine - now;
  const currentDay = Math.floor(dis / (day));
  const currentHour = Math.floor((dis % (day)) / (hour));
  const currentMin = Math.floor((dis % (hour)) / (minute));
  const currentSecond = Math.floor((dis % (minute)) / second);
  // console.log(currentDay);
    ( currentDay >= 2 && currentDay <= 6 ) ?
        document.getElementById(`res`).innerHTML =`${currentDay} days left`
      : (currentDay === 1) ?
        document.getElementById(`res`).innerHTML = `${currentDay} day and ${currentHour}: ${currentMin}: ${currentSecond} left`
      : ( currentDay < 1 && currentDay >= 0 ) ?
        document.getElementById(`res`).innerHTML =`${currentHour}:${currentMin}:${currentSecond} left`
      :
        document.getElementById(`res`).innerHTML =  `nothing`


    }
    setInterval(clock, second)
