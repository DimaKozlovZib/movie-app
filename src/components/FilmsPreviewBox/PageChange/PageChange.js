import React, { memo } from "react";
import ArrowButton from "../../ArrowButton/ArrowButton";
import "./PageChange.css";

const PageChange = ({ pageNum, pagesCount, setPageFunc, toScrollElement }) => {
    console.log(toScrollElement)
    function changePage(newValue) {
        toScrollElement.current.scrollIntoView({ block: "center" });
        setPageFunc(newValue);
    }

    function createPageChangeButtons() {
        let lastPages = [],
            nextPages = [];

        for (let index = pageNum + 1; (index <= pageNum + 4 && index <= pagesCount); index++) nextPages.push(index);

        for (let index = pageNum - 1; (0 < index && index >= pageNum - 4); index--) lastPages.unshift(index);

        return (
            <div className="page-num-buttons">
                {lastPages.map((item) => <PageNumberButton changePage={changePage} buttonNum={item} key={item} />)}

                <button className="active-page">{pageNum}</button>

                {nextPages.map((item) => <PageNumberButton changePage={changePage} buttonNum={item} key={item} />)}
            </div>
        )
    }

    return (
        <div className={"page-change-wrapper " + (pagesCount > 1 ? "" : "noVisible")}>
            <ArrowButton direction={'last'} clickFunc={() => changePage(pageNum - 1)} disabled={pageNum === 1} />

            {createPageChangeButtons()}

            <ArrowButton direction={'next'} clickFunc={() => changePage(pageNum + 1)} disabled={pageNum === pagesCount} />
        </div>
    )
}

const PageNumberButton = memo(({ changePage, buttonNum }) =>
    <button className="PageNumberButton" onClick={() => { changePage(buttonNum) }}> {buttonNum} </button>)

export default PageChange;

