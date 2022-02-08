import React, { useState, useCallback, useMemo } from 'react';

function Carousel({ imgSrcList, height = "400px", autoflow = 2000 }) {
    const [ currentLoopIndex, setCurrentLoopIndex ] = useState(0);
    const size = useMemo(()=>imgSrcList.length, [imgSrcList])
    const getIndex = useCallback(
        loopIndex => {
            let rest = loopIndex % size;
            if (rest < 0) {
                rest += size;
            }
            return rest;
        },
        [size]
    )

    return (
        <div>
            
        </div>
    );
}

export default Carousel;