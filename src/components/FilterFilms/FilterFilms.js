import React, { memo, useEffect, useState } from "react";
import DropList from "../DropList/DropList";
import "./FilterFilm.css";

const countries = [
    { id: 0, value: 'Страны' },
    { id: 1, value: 'США' },
    { id: 34, value: 'Россия' },
    { id: 33, value: 'СССР' },
    { id: 3, value: 'Франция' },
    { id: 5, value: 'Великобритания' },
    { id: 14, value: 'Канада' },
    { id: 9, value: 'Германия' },
    { id: 8, value: 'Испания' },
    { id: 106, value: 'Украина' },
    { id: 45, value: 'Бельгия' },
    { id: 10, value: 'Италия' },
    { id: 13, value: 'Австралия' },
    { id: 49, value: 'Южная Корея' },
    { id: 21, value: 'Китай' },
    { id: 16, value: 'Япония' },
    { id: 6, value: 'Индия' },
    { id: 17, value: 'Дания' },
    { id: 22, value: 'Норвегия' },
]
//{ id: 28, value: 'для взрослых' },
const genres = [
    { id: 0, value: 'Все жанры' },
    { id: 1, value: 'триллер' },
    { id: 2, value: 'драма' },
    { id: 3, value: 'криминал' },
    { id: 4, value: 'мелодрама' },
    { id: 5, value: 'детектив' },
    { id: 6, value: 'фантастика' },
    { id: 7, value: 'приключения' },
    { id: 8, value: 'биография' },
    { id: 9, value: 'фильм-нуар' },
    { id: 10, value: 'вестерн' },
    { id: 11, value: 'боевик' },
    { id: 12, value: 'фэнтези' },
    { id: 13, value: 'комедия' },
    { id: 14, value: 'военный' },
    { id: 15, value: 'история' },
    { id: 16, value: 'музыка' },
    { id: 17, value: 'ужасы' },
    { id: 18, value: 'мультфильм' },
    { id: 19, value: 'семейный' },
    { id: 20, value: 'мюзикл' },
    { id: 21, value: 'спорт' },
    { id: 22, value: 'документальный' },
    { id: 23, value: 'короткометражка' },
    { id: 24, value: 'аниме' },
    { id: 26, value: 'новости' },
    { id: 27, value: 'концерт' },
    { id: 29, value: 'церемония' },
    { id: 30, value: 'реальное ТВ' },
    { id: 31, value: 'игра' },
    { id: 32, value: 'ток-шоу' },
    { id: 33, value: 'детский' },
]
const sort = [
    { id: "RATING", value: "по рейтингу" },
    { id: "YEAR", value: "по году" },
]

const FilterFilms = memo(({ Filters, setFilters }) => {
    const [ActiveGenres, setActiveGenres] = useState({ id: 0, value: 'Жанры' });
    const [ActiveCountries, setActiveCountries] = useState({ id: 0, value: 'Страны' });
    const [MaxYear, setMaxYear] = useState('');
    const [MinYear, setMinYear] = useState('');
    const [Error, setError] = useState(null);
    const [IsApply, setIsApply] = useState(true);
    const [Sort, setSort] = useState(sort[0]);

    useEffect(() => {
        try {
            const MinYearNoSpace = MinYear.trim();
            const MaxYearNoSpace = MaxYear.trim();

            [MinYearNoSpace, MaxYearNoSpace].forEach(item => {
                if (/\D/g.test(item)) {
                    throw 'Не правильный год. Запишите цифрами';
                } else if (item < 0) {
                    throw 'Год должен быть положительным числом.';
                } else if (item > new Date().getFullYear()) {
                    throw `Год должен быть не больше текущего.(${new Date().getFullYear()})`;
                }
            });
            setError(null);
        } catch (error) {
            setError(error);
        }
    }, [MaxYear, MinYear]);

    useEffect(() => {
        setIsApply(false);
    }, [ActiveGenres, ActiveCountries, MaxYear, MinYear]);

    const condition = [ActiveGenres, ActiveCountries, MaxYear, MinYear]
        .filter(item => item !== '' && item.id !== 0 ? true : false)
        .length === 0;
    const getAllFilters = () => {
        return { ActiveGenres, ActiveCountries, MaxYear, MinYear, Sort };
    }

    useEffect(() => {
        setIsApply(true);
    }, []);

    const applyFilters = () => {
        setFilters(getAllFilters())
        setIsApply(true);
    };

    useEffect(() => {
        setFilters(getAllFilters())
    }, [Sort]);

    const clear = () => {
        setActiveGenres({ id: 0, value: 'Жанры' });
        setActiveCountries({ id: 0, value: 'Страны' });
        setMaxYear('');
        setMinYear('');
    }
    return (
        <div className="filter-wrapper">
            <div className="filters">
                <DropList ListArray={genres} ActiveItem={ActiveGenres} setActiveItem={setActiveGenres} />
                <DropList ListArray={countries} ActiveItem={ActiveCountries} setActiveItem={setActiveCountries} />
                <input type='text' value={MinYear} onChange={e => setMinYear(e.target.value)} placeholder="Min year" />
                <input type='text' value={MaxYear} onChange={e => setMaxYear(e.target.value)} placeholder="Max year" />
            </div>
            {
                Error ? <h5 className="Error">{Error}</h5> : <></>
            }

            <div className="buttons-and-sort">
                <DropList ListArray={sort} ActiveItem={Sort} setActiveItem={setSort} />
                <div className="set-buttons-box">
                    <button className="apply" disabled={!!Error || IsApply} onClick={applyFilters}>Применить</button>
                    <button className="clear" onClick={clear} disabled={condition}>Очистить</button>
                </div>

            </div>
        </div>
    )
})



export default FilterFilms;