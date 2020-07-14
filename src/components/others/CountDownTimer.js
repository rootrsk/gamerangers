import React from 'react'

class CountDownTimer extends React.Component{
    state = {days:'',hours:'',minutes:'',seconds:'',id:this.props.match}
    componentDidMount = () =>{
    }
    render(){
        return(
            <div key={this.props.time} id={this.props.time} className='time'>
                {(()=>{
                    var countDownDate = new Date(this.props.time)
                    var x = setInterval(() =>{
                        var now = new Date()
                        var distance = countDownDate - now;
                        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                        this.setState({
                            days,hours,minutes,seconds
                        })
                        if (distance < 0) {
                            clearInterval(x)
                        }
                    }, 1000);
                })()}
                <div><span className='timer-text'>Starts in  :</span>{`${this.state.days}d:${this.state.hours}h:${this.state.minutes}m:${this.state.seconds}s`} </div>
            </div>
        )
    }
}



// const CountDown = (props) =>{
//     console.log(props.time)
//     var time = props.time
//     var countDownDate = new Date("Jul 15, 2020 15:37:25").getTime();
//     var x = setInterval(() =>{
//         var now = new Date().getTime()
//         var distance = countDownDate - now;
//         var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//         var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//         var seconds = Math.floor((distance % (1000 * 60)) / 1000);
//         document.getElementById(`time`).innerHTML = days + "d " + hours + "h "+ minutes + "m " + seconds + "s ";
    
//         if (distance < 0) {
//             clearInterval(x);
//             document.getElementById("time").innerHTML = "FINISHED";
//         }
//     }, 1000);
// }

export default CountDownTimer