import React, {useEffect, memo, useCallback, useState} from 'react';
import {connect, useDispatch, useSelector} from 'react-redux';
import MainLayout from "../../layouts/MainLayout";
import Preloader from "../../components/Ui/Preloader";
import {getRestaurants} from '../../store/actions/restaurants';
import {restaurantsListSelector, restaurantsLoadingSelector} from '../../store/selectors';
import Image from '../../image/image.png';
import './Restaurants.scss'

const Restaurants = () => {
    const dispatch = useDispatch();
    const restaurants = useSelector(restaurantsListSelector);
    const loading = useSelector(restaurantsLoadingSelector);

    const [showPhone, setShowPhone] = useState(false);
    const [testList, setTestList] = useState(restaurants);

    const fetchRestaurants = useCallback(() => {
        dispatch(getRestaurants());
    }, [dispatch, getRestaurants]);


    const showPhoneHandler = useCallback((e) => {
        setShowPhone(!showPhone)
    }, [showPhone]);

    useEffect(() => {
        fetchRestaurants();
    }, [fetchRestaurants]);

    useEffect(() => {
        setTestList(restaurants);
    }, [restaurants]);


    if (loading) return (<Preloader/>);

    console.log(testList);


    return (
        <MainLayout>
            <button onClick={showPhoneHandler}>
                показати телефон
                {testList.length && testList[0].name}
            </button>

            {showPhone && (
                <div>
                    0997437437438348743
                </div>
            )}

            <div className="restaurants-item-wrap">
                {restaurants.map(item => (
                    <div className="item" key={item.id}>
                        <div className="item__img-wrap">
                            <img src={Image} alt=""/>
                        </div>
                        <div className="item__title">
                            <div className="title">
                                McDonald's®
                            </div>
                            <div className="street">
                                (St Martin's Lane)
                            </div>
                        </div>
                        <div className="item__category">
                            <div className="single-category">£</div>
                            <div className="single-category">Burger</div>
                            <div className="single-category">Breakfast and brunch</div>
                        </div>
                        <div className="item__time">
                            15 - 25 min
                        </div>
                    </div>
                ))}
            </div>
        </MainLayout>
    )
};

export default memo(Restaurants);