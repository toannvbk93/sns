import * as React from 'react';
import '../styles/css/top.css';
import news_1 from '../styles/image/news/new_1.jpg';
import news_2 from '../styles/image/news/news_right_1.jpg';
import news_3 from '../styles/image/news/news_right_2.jpg';
export const Top = () => {
    return (
        <div className="top-content">
            <div className="row">
                <div className="col-xs-10 col-md-7">
                    <div className="top-left-content">
                        <img src={news_1} />
                        <div>
                            <h4>2018 FIFA World Cup</h4>
                            <p>The 2018 FIFA World Cup will be the 21st FIFA World Cup, a quadrennial international football tournament contested by the men's national teams of the member associations of FIFA. It is scheduled to take place in Russia from 14 June to 15 July 2018,[2] after the country was awarded the hosting rights on 2 December 2010.</p>
                        </div>
                    </div>
                </div>
                <div className="col-xs-6 col-md-5">
                    <div className="top-right-content">
                        <div className="post-info-1">
                            <div className="image-post">
                                <img className="news-right-image" src={news_2} />
                            </div>
                            <div className="post-right-content">
                                <h4>Baseball From Wikipedia</h4>
                                <p>This article is about the sport. For the ball used in the sport, see Baseball (ball). For other uses, see Baseball (disambiguation)."Base ball" redirects here. For old time baseball, see vintage base ball.</p>
                            </div>
                        </div>
                        <div className="post-info">
                            <div className="image-post">
                                <img className="news-right-image" src={news_3} />
                            </div>
                            <div className="post-right-content">
                                <h4>Kawasaki Frontale beats winless Gamba Osaka in J-League</h4>
                                <p>TOKYO - Brazilian defender Eduardo Neto scored his first goal of the season on Saturday as defending champion Kawasaki Frontale beat winless Gamba Osaka 2-0 in the J-League.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-md-8">.col-xs-12 .col-md-8</div>
                <div className="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>
            </div>
        </div>
    );
}