import React from 'react'
import "./widgetSm.css"
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function WidgetSm() {
  return (
    <div className="widgetSm">
        <span className="widgetSmTitle">New Join Members</span>
        <ul className='widgetSmList'>
            <li className='widgetSmListItem'>
                <img src="https://www.interlinecenter.com/wp-content/uploads/2016/10/dummy-user-img.png"
                alt=""
                className="widgetSmImg"
                />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Asis Rai</span>
                    <span className="widgetSmUsertitle">New user</span>
                </div>
                <button className="widgetSmButton">
                    <VisibilityIcon className="widgetSmIcon"/> Display
                </button>
            </li>
            <li className='widgetSmListItem'>
                <img src="https://www.interlinecenter.com/wp-content/uploads/2016/10/dummy-user-img.png"
                alt=""
                className="widgetSmImg"
                />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Test 2</span>
                    <span className="widgetSmUsertitle">New user</span>
                </div>
                <button className="widgetSmButton">
                    <VisibilityIcon className="widgetSmIcon"/> Display
                </button>
            </li>
            <li className='widgetSmListItem'>
                <img src="https://www.interlinecenter.com/wp-content/uploads/2016/10/dummy-user-img.png"
                alt=""
                className="widgetSmImg"
                />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Test 3</span>
                    <span className="widgetSmUsertitle">New user</span>
                </div>
                <button className="widgetSmButton">
                    <VisibilityIcon className="widgetSmIcon"/> Display
                </button>
            </li>
            <li className='widgetSmListItem'>
                <img src="https://www.interlinecenter.com/wp-content/uploads/2016/10/dummy-user-img.png"
                alt=""
                className="widgetSmImg"
                />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Test 4</span>
                    <span className="widgetSmUsertitle">New user</span>
                </div>
                <button className="widgetSmButton">
                    <VisibilityIcon className="widgetSmIcon"/> Display
                </button>
            </li>
            <li className='widgetSmListItem'>
                <img src="https://www.interlinecenter.com/wp-content/uploads/2016/10/dummy-user-img.png"
                alt=""
                className="widgetSmImg"
                />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Test 5</span>
                    <span className="widgetSmUsertitle">New user</span>
                </div>
                <button className="widgetSmButton">
                    <VisibilityIcon className="widgetSmIcon"/> Display
                </button>
            </li>

        </ul>
    </div>
  )
}
