import React, { memo, useEffect, useRef, useState } from "react";
import ArrowButton from "../ArrowButton/ArrowButton";
import FilmListItems from "../FilmListItems/FilmListItems";
import "./FilmsSlider.css";
import Loader from "../Loader/Loader";

const FilmsSlider = memo(({ films }) => {
    const [Scroll, setScroll] = useState({ transform: 'translate(0px, 0px)' });
    const [Style, setStyle] = useState(null);
    const [BoxWidth, setBoxWidth] = useState(null);
    const [filmItemWidth, setfilmItemWidth] = useState(null);
    const [scrollCounter, setscrollCounter] = useState(0);
    const [X, setX] = useState(0);
    const [slidesToShow, setslidesToShow] = useState(5);
    const [scrollSlides, setscrollSlides] = useState(3);
    const [GapItemsBox, setGapItemsBox] = useState(20);

    const filmItemsBox = useRef();
    const filmItemsBoxPointers = [775, 560, 430];

    useEffect(() => {
        window.addEventListener('resize', getWidth);
        setBoxWidth();
        return () => {
            window.removeEventListener("resize", getWidth);
        };
    }, []);

    function getWidth() {

        const setStates = (gap, toShow, toScroll) => {
            setGapItemsBox(gap);
            setslidesToShow(toShow);
            setscrollSlides(toScroll);
        }
        let width = filmItemsBox.current.clientWidth;
        //width films box
        setBoxWidth(width);

        const wp = filmItemsBoxPointers;

        if (width > wp[0]) {
            setStates(20, 5, 3);

        } else if (width < wp[0] && width > wp[1]) {
            setStates(20, 4, 2);

        } else if (width < wp[1] && width > wp[2]) {
            setStates(10, 3, 2);

        } else if (width < wp[2]) {
            setStates(10, 2, 2);
        }
    }

    useEffect(() => {
        getWidth()
    }, [filmItemsBox]);

    useEffect(() => {
        let width = (BoxWidth - (slidesToShow + 1) * GapItemsBox) / slidesToShow;
        //width film item
        setfilmItemWidth(width);
        setStyle({ width: width + 'px', maxWidth: width + "px", minWidth: width + 'px' });

        const x = scrollSlides * (width + GapItemsBox) * scrollCounter;
        setX(x);
        setScroll({ transform: `translate(${-x}px, 0px)`, WebkitTransform: `translate(${-x}px, 0px)`, gap: GapItemsBox + 'px' })
    }, [BoxWidth, slidesToShow, scrollSlides, GapItemsBox]);

    function scrollFunction(scrollToBack = false) {
        const condition = (films.length - (scrollToBack ? scrollCounter - 1 : scrollCounter) * scrollSlides) - slidesToShow;
        const Counter = scrollToBack ? scrollCounter - 1 : scrollCounter + 1;
        console.log(condition, condition < scrollSlides && condition > 0)
        setscrollCounter(Counter);

        const scrollWidth = condition < scrollSlides && condition > 0 ?
            condition * (filmItemWidth + GapItemsBox) :
            scrollSlides * (filmItemWidth + GapItemsBox);

        let x = scrollToBack ? X - scrollWidth : X + scrollWidth;
        x = x < 0 ? 0 : x;
        setX(x);
        setScroll({ transform: `translate(${-x}px, 0px)`, WebkitTransform: `translate(${-x}px, 0px)`, gap: GapItemsBox + 'px' })

    }

    const scrollForward = () => { scrollFunction() };
    const scrollBack = () => { scrollFunction(true) };

    return (
        <div className="SequelsAndPrequels_Similars" ref={filmItemsBox}>
            <ArrowButton
                direction={'last'}
                clickFunc={scrollBack}
                disabled={X === 0} />
            <div className="items-box" style={Scroll}>
                {
                    films ? <FilmListItems films={films} style={Style} /> : <Loader />
                }
            </div>
            <ArrowButton
                direction={'next'}
                clickFunc={scrollForward}
                disabled={films ? (((films.length - scrollCounter * scrollSlides) - slidesToShow) <= 0) : false}
            />
        </div>
    )
});
export default FilmsSlider;