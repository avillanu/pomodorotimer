class Pomodoro extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    status: 0,  
    time: 1500,
    break: 5,
    session:25,
    seconds_left:0,
    break_session:0
    }    
          this.startTimer = this.startTimer.bind(this);
          this.incBreak = this.incBreak.bind(this);
          this.decBreak = this.decBreak.bind(this);
          this.incSession = this.incSession.bind(this);    
          this.decSession = this.decSession.bind(this);
          this.resetTimer = this.resetTimer.bind(this);
          this.timer = this.timer.bind(this);
          this.convertTime = this.convertTime.bind(this);
}

  resetTimer(){
    var beep = document.getElementById("beep"); 
      clearTimeout();
        beep.pause()
        beep.currentTime = 0;
        this.setState({
           seconds_left: 25*60,
           break: 5,
           session:25,
           status:0,
           break_session:0   
           });
      clearInterval(this.theTimer);
      document.getElementById('time-left').innerHTML = '25:00'
      document.getElementById('timer-label').innerHTML = 'Session'
    
    
  }
  convertTime () {
    var minutes_left_calc = Math.floor(this.state.seconds_left / 60);
   
    var seconds_left_calc = this.state.seconds_left - minutes_left_calc * 60;
      switch (seconds_left_calc){
          case 9:
          seconds_left_calc = '09';
          break;
          case 8:
          seconds_left_calc = '08';
          break;
          case 7:
          seconds_left_calc = '07';
          break;
          case 6:
          seconds_left_calc = '06';
          break;
          case 5:
          seconds_left_calc = '05';
          break;
           case 4:
          seconds_left_calc = '04';
          break;
          case 3:
          seconds_left_calc = '03';
          break;
          case 2:
          seconds_left_calc = '02';
          break;
          case 1:
          seconds_left_calc = '01';
          break;
          case 0:
          seconds_left_calc = '00';
          break;        
      }  
      switch (minutes_left_calc){
          case 9:
          minutes_left_calc = '09';
          break;
          case 8:
          minutes_left_calc = '08';
          break;
          case 7:
          minutes_left_calc = '07';
          break;
          case 6:
          minutes_left_calc = '06';
          break;
          case 5:
          minutes_left_calc = '05';
          break;
          case 4:
          minutes_left_calc = '04';
          break;
          case 3:
          minutes_left_calc = '03';
          break;
          case 2:
          minutes_left_calc = '02';
          break;
          case 1:
          minutes_left_calc = '01';
          break;
          case 0:
          minutes_left_calc = '00';
          break;
          case 9:
          minutes_left_calc = '09';
          break;
          case 9:
          minutes_left_calc = '09';
          break;         
      }
return minutes_left_calc + ":" + seconds_left_calc;
  }
timer() { 
    var minutes_left_calc = Math.floor(this.state.seconds_left / 60);
    var seconds_left_calc = this.state.seconds_left - minutes_left_calc * 60;
      switch (seconds_left_calc){
          case 9:
          seconds_left_calc = '09';
          break;
          case 8:
          seconds_left_calc = '08';
          break;
          case 7:
          seconds_left_calc = '07';
          break;
          case 6:
          seconds_left_calc = '06';
          break;
          case 5:
          seconds_left_calc = '05';
          break;
           case 4:
          seconds_left_calc = '04';
          break;
          case 3:
          seconds_left_calc = '03';
          break;
          case 2:
          seconds_left_calc = '02';
          break;
          case 1:
          seconds_left_calc = '01';
          break;
          case 0:
          seconds_left_calc = '00';
          break;    
      }
      switch (minutes_left_calc){
          case 9:
          minutes_left_calc = '09';
          break;
          case 8:
          minutes_left_calc = '08';
          break;
          case 7:
          minutes_left_calc = '07';
          break;
          case 6:
          minutes_left_calc = '06';
          break;
          case 5:
          minutes_left_calc = '05';
          break;
          case 4:
          minutes_left_calc = '04';
          break;
          case 3:
          minutes_left_calc = '03';
          break;
          case 2:
          minutes_left_calc = '02';
          break;
          case 1:
          minutes_left_calc = '01';
          break;
          case 0:
          minutes_left_calc = '00';
          break;
          case 9:
          minutes_left_calc = '09';
          break;
          case 9:
          minutes_left_calc = '09';
          break;         
      }
    document.getElementById('time-left').innerHTML = minutes_left_calc + ":" + seconds_left_calc;
 this.state.seconds_left-=1;
       var minutes_left_calc = Math.floor(this.state.seconds_left / 60);
    var seconds_left_calc = this.state.seconds_left - minutes_left_calc * 60;
      switch (seconds_left_calc){
          case 9:
          seconds_left_calc = '09';
          break;
          case 8:
          seconds_left_calc = '08';
          break;
          case 7:
          seconds_left_calc = '07';
          break;
          case 6:
          seconds_left_calc = '06';
          break;
          case 5:
          seconds_left_calc = '05';
          break;
           case 4:
          seconds_left_calc = '04';
          break;
          case 3:
          seconds_left_calc = '03';
          break;
          case 2:
          seconds_left_calc = '02';
          break;
          case 1:
          seconds_left_calc = '01';
          break;
          case 0:
          seconds_left_calc = '00';
          break; 
      }
      switch (minutes_left_calc){
          case 9:
          minutes_left_calc = '09';
          break;
          case 8:
          minutes_left_calc = '08';
          break;
          case 7:
          minutes_left_calc = '07';
          break;
          case 6:
          minutes_left_calc = '06';
          break;
          case 5:
          minutes_left_calc = '05';
          break;
          case 4:
          minutes_left_calc = '04';
          break;
          case 3:
          minutes_left_calc = '03';
          break;
          case 2:
          minutes_left_calc = '02';
          break;
          case 1:
          minutes_left_calc = '01';
          break;
          case 0:
          minutes_left_calc = '00';
          break;
          case 9:
          minutes_left_calc = '09';
          break;
          case 9:
          minutes_left_calc = '09';
          break;         
      }
    document.getElementById('time-left').innerHTML = minutes_left_calc + ":" + seconds_left_calc;
    var beep = document.getElementById("beep"); 
    if (this.state.seconds_left <= 0)
    {
      if (this.state.break_session === 0){
    document.getElementById('time-left').innerHTML = '00:00';
      document.getElementById("timer-label").innerHTML = "Break Time";
      this.setState({
           break_session: 1,
           status:0,
           seconds_left: this.state.break * 60 + 1,
           });
        beep.play();  
            clearInterval(this.theTimer);
          this.theTimer = setInterval(this.timer, 1000);}
        
        else if (this.state.break_session ===1){
          document.getElementById('time-left').innerHTML = '00:00';
          document.getElementById("timer-label").innerHTML = "Session"; 
          this.setState({
           break_session: 0,
           status:0,
           seconds_left: this.state.session * 60 + 1,
           });
          beep.play();  
            clearInterval(this.theTimer);
          this.theTimer = setInterval(this.timer, 1000);}
          this.setState({
           time: this.state.seconds_left,
           status: 0
           });
        document.getElementById('time-left').innerHTML = '00:00';
    }
}  
startTimer (){
 if (this.state.status === 1)
    {
        clearInterval(this.theTimer);

       this.setState({
           status: 2
           });
    }
 else if (this.state.status === 2){

  
    this.theTimer = setInterval(this.timer, 1000);
      this.setState({
           status: 1,
           });
  }
    
else {
    this.setState({
           status: 1,
           seconds_left: this.state.session * 60
           });
    this.theTimer = setInterval(this.timer, 1000);
    
    }
  }
  incBreak(){
     if (this.state.break < 60)  {
           var newBreak = this.state.break;
           newBreak += 1;
           this.setState({
           break: newBreak
           });}}
  
  decBreak(){if (this.state.break > 1){
           var newBreak = this.state.break;
           newBreak -= 1;
           this.setState({
           break: newBreak
           });}}
  
  incSession(){if (this.state.session < 60) {newSession =                     this.state.session;
           newSession += 1;
           this.setState({
           session: newSession  
           });}}
  
  
  decSession(){
          if (this.state.session > 1) {
          var newSession = this.state.session;
           newSession -= 1;
           this.setState({
           session: newSession
           });}}
  render(){
    return(
      <div id="pomodoro">Pomodoro Timer
<div id="timer-label">Session</div>
<div id="time-left">25 00</div>
        <button id="start_stop" onClick={this.startTimer}>Start/stop</button>
        <button id="reset" onClick={this.resetTimer}>Reset</button>      
      <div id="container">
         
<div>
<div onClick={this.incBreak}>
<i id="break-increment" class="fas fa-chevron-up"></i>
</div> 
<div onClick={this.decBreak}>
<i id="break-decrement"  class="fas fa-chevron-down"></i>
</div>
</div> 
<div>      
<div id="break-label">Break Length</div>
<div id="break-length">{this.state.break}</div>   
</div>        
</div>       
<div id="container"><div>      
<div onClick={this.incSession}>
<i id="session-increment"  class="fas fa-chevron-up"></i>
</div>
<div onClick={this.decSession}>
<i id="session-decrement"  class="fas fa-chevron-down"></i>
</div>
</div><div>
<div id="session-label">Session Length</div>
<div id="session-length">{this.state.session}</div>
</div>
</div>
</div>)
  }
}


ReactDOM.render(<Pomodoro />,
    document.getElementById('track')
);
