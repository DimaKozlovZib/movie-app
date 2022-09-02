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
    const filmItemsBox = useRef();
    const [slidesToShow, setslidesToShow] = useState(5);
    const [scrollSlides, setscrollSlides] = useState(3);
    const [GapItemsBox, setGapItemsBox] = useState(20);

    useEffect(() => {
        window.addEventListener('resize', getWidth);
        setBoxWidth();
        return () => {
            window.removeEventListener("resize", getWidth);
        };
    }, []);



    function getWidth() {
        let width = filmItemsBox.current.clientWidth;
        //width films box
        setBoxWidth(width);

        if (width > 775) {
            setGapItemsBox(20);
            setslidesToShow(5);
            setscrollSlides(3);

        } else if (width < 775 && width > 560) {
            setGapItemsBox(20);
            setslidesToShow(4);
            setscrollSlides(2);

        } else if (width < 560 && width > 430) {
            setGapItemsBox(10);
            setscrollSlides(2);
            setslidesToShow(3);

        } else if (width < 430) {
            setGapItemsBox(10);
            setslidesToShow(2);
            setscrollSlides(2);
        }
    }

    useEffect(() => {
        getWidth()
    }, [filmItemsBox]);

    useEffect(() => {
        let width = ((BoxWidth - (slidesToShow + 1) * GapItemsBox) / slidesToShow);
        //width film item
        setfilmItemWidth(width);

        const x = (width * scrollSlides + scrollSlides * GapItemsBox) * scrollCounter;
        setX(x);
        setScroll({ transform: `translate(${-x}px, 0px)`, WebkitTransform: `translate(${-x}px, 0px)`, gap: GapItemsBox + 'px' })

        setStyle({ width: width + 'px', maxWidth: width + "px", minWidth: width + 'px' });
    }, [BoxWidth, slidesToShow, scrollSlides, scrollCounter, GapItemsBox]);

    function scrollFunction(scrollToBack = false) {
        const condition = (films.length - (scrollToBack ? scrollCounter - 1 : scrollCounter) * scrollSlides) - slidesToShow;
        const Counter = scrollToBack ? scrollCounter - 1 : scrollCounter + 1;

        setscrollCounter(Counter);

        const scrollWidth = condition < scrollSlides && condition > 0 ?
            condition * (filmItemWidth + GapItemsBox) :
            scrollSlides * (filmItemWidth + GapItemsBox);

        let x = scrollToBack ? X - scrollWidth : X + scrollWidth;
        x = x < 0 ? 0 : x;
        setX(x);
        setScroll({ transform: `translate(${-x}px, 0px)`, WebkitTransform: `translate(${-x}px, 0px)`, gap: GapItemsBox + 'px' })
    }

    return (
        <div className="SequelsAndPrequels_Similars" ref={filmItemsBox}>
            <ArrowButton
                direction={'last'}
                clickFunc={() => scrollFunction(!0)}
                disabled={X === 0} />
            <div className="items-box" style={Scroll}>
                {
                    films ? <FilmListItems films={films} style={Style} /> : <Loader />
                }
            </div>
            <ArrowButton
                direction={'next'}
                clickFunc={() => scrollFunction()}
                disabled={films ? (((films.length - scrollCounter * scrollSlides) - slidesToShow) <= 0) : false}
            />
        </div>
    )
});
export default FilmsSlider;