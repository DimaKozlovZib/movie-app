import React, { memo } from "react";
import "./PageChange.css";

const PageChange = ({ pageNum, pagesCount, toScrollElement, setPageFunc }) => {

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

    const arrowButtonChildrenElements = <div className="arrowBox"><span></span></div>

    return (
        <div className={"page-change-wrapper " + (pagesCount > 1 ? "" : "noVisible")}>

            <button className="last-page change-page-arrowButton"
                onClick={() => { changePage(pageNum - 1) }}
                disabled={pageNum === 1}
            > {arrowButtonChildrenElements} </button>

            {createPageChangeButtons()}

            <button className="next-page change-page-arrowButton"
                onClick={() => { changePage(pageNum + 1) }}
                disabled={pageNum === pagesCount}
            > {arrowButtonChildrenElements} </button>

        </div>
    )
}

const PageNumberButton = memo(({ changePage, buttonNum }) =>
    <button className="PageNumberButton" onClick={() => { changePage(buttonNum) }}> {buttonNum} </button>)

export default PageChange;

