import React, { Component } from 'react';
import "./styles.css" ;

class CalendarFrame extends Component {
  constructor(props){
    super(props);
    this.state = {
      width : parseInt(window.innerWidth*.75, 10),
      height: parseInt(window.innerHeight*.7, 10),
      mobile: (window.innerWidth < 576 ? true : false)
    }
  }


  render() {
		if (this.state.mobile) {
			return (
				<div>
					<iframe
            src="https://calendar.google.com/calendar/embed?showNav=0&amp;showDate=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;mode=AGENDA&amp;height=600&amp;wkst=1&amp;bgcolor=%23e3e9ff&amp;src=en.usa%23holiday%40group.v.calendar.google.com&ctz=America%2FLos_Angelesamp;color=%235A6986&amp;"
            width={this.state.width}
            height={this.state.height}
            frameBorder="0"
            scrolling="no"
            title="icalframe"/>
				</div>
			);
		} else {
			return (
				<div>
					<iframe
            src="https://calendar.google.com/calendar/embed?height=800&amp;wkst=1&amp;bgcolor=%23e3e9ff&amp;src=en.usa%23holiday%40group.v.calendar.google.com&ctz=America%2FLos_Angelesamp;color=%235A6986&amp;"
            width={this.state.width}
            height={this.state.height}
            frameBorder="0"
            scrolling="no"
            title="icalframe"/>
				</div>
			)
		}
  }
}

export default CalendarFrame;
