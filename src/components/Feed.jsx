import React, { useContext, useEffect } from 'react'
import LeftNav from './LeftNav'

import { Context } from '../context/contextApi'
import LeftNavMenuitem from './LeftNavMenuItem'

import { categories } from "../utils/constants";

const Feed = () => {
    return (
        <div className='flex flex-row h-[calc(100%-56px)] '>
            <LeftNav />
        </div>
    )
}

export default Feed