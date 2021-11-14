import React from 'react'
import {MyContext} from '../App';


function ComponentB() {
    return (
        <div>
            
            <MyContext.Consumer>
                {
                    data => {
                        return <h2>수정 중</h2>
                    }
                }
            </MyContext.Consumer>

        </div>
    )
}

export default ComponentB
