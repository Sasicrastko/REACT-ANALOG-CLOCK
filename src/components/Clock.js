import React, { Component } from 'react';

class Clock extends Component {
    state = {  }
    render() { 
        return (
            <div id="container">
                <div id="outer-circle">
                    <div id="inner-circle">
                        <div id="minute-hand">
                        <div class="visible" id="min"></div>
                        </div>
                        <div id="hour-hand">
                        <div class="visible" id="hour"></div>
                        </div>
                        <div id="second-hand">
                        <div class="visible" id="sec"></div>
                        </div>
                        <div id="center-dot"></div>
                    </div>
                </div>
          </div>
        );
    }
}
 
export default Clock;