import React, { memo, useEffect, useState } from "react";
import './DropList.css';

const DropList = memo(({ ListArray, ActiveItem, setActiveItem }) => {
    const [Visible, setVisible] = useState(false);

    const open = (e) => {
        e.stopPropagation();
        setVisible(Visible ? false : true);
    }
    const closeList = (e) => setVisible(false);
    const changeItem = (id, value) => {
        if (ActiveItem.id !== id) setActiveItem({ id: id, value: value });
    }

    useEffect(() => {
        if (Visible) window.addEventListener('click', closeList);
        else window.removeEventListener('click', closeList);
    }, [Visible]);

    return (
        <div className={`DropList ${Visible ? 'active' : ''}`} onClick={open}>
            <div className="DropList__items-box">
                {
                    ListArray.map(({ id, value }) =>
                        <FilterListItem
                            key={id}
                            value={value}
                            id={id}
                            clickFunc={changeItem} />)
                }
            </div>
            <button className="DropList__title">
                <h5>{ActiveItem.value}</h5>
                <div className="Arrow"></div>
            </button>



        </div>
    )
})

const FilterListItem = memo(({ value, id, clickFunc }) => {
    const func = () => { clickFunc(id, value) };

    return (
        <button onClick={func}>{value}</button>
    )
})

export default DropList;