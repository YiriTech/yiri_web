import React, { useState } from 'react';
import Link from 'next/link';
import EventsData from '@/components/data/evenements-data';

const showPortfolioItem = 4;

const TwoColumns = () => {
    const EventItem = EventsData;
    const [items, setItems] = useState(EventItem);
    const [next, setNext] = useState(showPortfolioItem);
    const handleLoadData = () => {
        setNext(value => value + 2)
    }
    return (
        <div className="portfolio__two section-padding">
            <div className="container">
                <div className="row">
                    {EventItem?.slice(0, next)?.map((data, id) => (
                        <div className="col-lg-6" key={id}>
                            <div className="portfolio__two-single-item">
                                <div className="portfolio__two-single-item-img-wrapper">
                                    <img src={data.image.src} alt="image" />
                                </div>
                                <div className="portfolio__two-single-item-content">
                                    <div className="portfolio__two-single-item-content-left">
                                        <h3>{data.title}</h3>
                                        <p>{data.subtitle}</p>
                                    </div>
                                    <div className="portfolio__two-single-item-content-right">
                                        <Link href={`/portfolio/${data.id}`}><i className="fas fa-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {next < items.length && (
                    <div className="row mt-70">
                        <div className="col-xl-12 t-center">
                            <button onClick={handleLoadData} className="btn-one">Load More</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TwoColumns;