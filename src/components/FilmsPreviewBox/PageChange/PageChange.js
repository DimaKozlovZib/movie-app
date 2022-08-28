import React from "react";
import "./PageChange.css";

function PageChange(props) {
    const pagesCount = props.pageCount;
    const pageNum = props.pageNum;
    const setPagefunc = props.setPageFunc;

    function changePage(newValue) {
        props.toScrollElement.current.scrollIntoView({ block: "center" });
        setPagefunc(newValue);
    }

    function createPageChangeButtons() {
        let lastPages = [],
            nextPages = [];
        for (let index = pageNum + 1; (index <= pageNum + 4 && index <= pagesCount); index++) {
            nextPages.push(index)
        }
        for (let index = pageNum - 1; (0 < index && index >= pageNum - 4); index--) {
            lastPages.unshift(index)
        }

        return (
            <div className="page-num-buttons">
                {lastPages.map((item) => {
                    return (
                        <PageNumberButton changePage={changePage} buttonNum={item} key={item} />
                    )
                })}
                <button className="active-page">{pageNum}</button>
                {nextPages.map((item) => {
                    return (
                        <PageNumberButton changePage={changePage} buttonNum={item} key={item} />
                    )
                })}
            </div>
        )
    }

    return (
        <div className={"page-change-wrapper " + (pagesCount > 1 ? "" : "noVisible")}>
            <button className="last-page change-page-arrowButton"
                onClick={() => { changePage(pageNum - 1) }}
                disabled={pageNum === 1}
            ><div className="arrowBox"><span></span></div></button>

            {createPageChangeButtons()}

            <button className="next-page change-page-arrowButton"
                onClick={() => { changePage(pageNum + 1) }}
                disabled={pageNum === pagesCount}
            ><div className="arrowBox"><span></span></div></button>

        </div>
    )
}

function PageNumberButton(propsOnclickFunc) {
    const changePage = propsOnclickFunc.changePage;
    return (
        <button className="PageNumberButton" onClick={() => { changePage(propsOnclickFunc.buttonNum) }}>{propsOnclickFunc.buttonNum}</button>
    )
}

export default PageChange;

