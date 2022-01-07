import React, { PureComponent } from 'react'
import './escript.js'
import './eventStyle.css'
import $ from 'jquery';
class Events extends React.Component {
    render() {
        return <div>
            <div className="events-box">
                <h3 id='event-header'> News & Events </h3>
                <div class="list-group scrol">
                    <a href="#" class="list-group-item list-group-item-action flex-column align-items-start article">
                        <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1">Event</h5>
                            <small>3 days ago</small>
                        </div>
                        <p class="mb-1">Donec id elit non mi porta gravida at eget metus</p>
                      
                    </a>
                    <a href="#" class="list-group-item list-group-item-action flex-column align-items-start article">
                        <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1">Event</h5>
                            <small>3 days ago</small>
                        </div>
                        <p class="mb-1">Donec id elit non mi porta gravida at eget metus</p>
                      
                    </a>
                    <a href="#" class="list-group-item list-group-item-action flex-column align-items-start article">
                        <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1">Event</h5>
                            <small>3 days ago</small>
                        </div>
                        <p class="mb-1">Donec id elit non mi porta gravida at eget metus</p>
                      
                    </a>
                    <a href="#" class="list-group-item list-group-item-action flex-column align-items-start article">
                        <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1">Event</h5>
                            <small>3 days ago</small>
                        </div>
                        <p class="mb-1">Donec id elit non mi porta gravida at eget metus</p>
                      
                    </a>
                  
                </div>
            </div>
        </div>;
    }
}


export default Events;