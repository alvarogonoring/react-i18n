import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Home as HomeIcon,
    MapPin,
    Feather,
    Airplay,
    ChevronRight,
    Facebook,
    Instagram,
    Youtube,
    Linkedin
} from 'react-feather';
import './styles.css';
import { T } from '../../i18n';
import CustomRoutes from '../../routes';

interface Route {
    name: string;
    icon: any;
    route: string;
}

export default function Main() {
    const translate = T();
    const navigate = useNavigate();

    const routes: Route[] = [
        { name: 'Home', icon: HomeIcon, route: '/' },
        { name: translate('STORES'), icon: MapPin, route: 'stores' },
        { name: 'Instituto', icon: Feather, route: 'institute' },
        { name: 'Portal', icon: Airplay, route: 'portal' }
    ]

    return (
        <div>
            <div className="communication-channels-container">
                <div style={{ marginRight: 150, cursor: 'pointer', display: 'flex', flexDirection: 'column' }}>
                    <img src="https://png.pngtree.com/png-vector/20220711/ourmid/pngtree-automotive-car-logo-png-image_5837187.png" style={{ height: 100, width: 130 }} />
                    <span style={{fontSize: 14, color: 'black', fontWeight: 'bold'}}>COMPANY NAME</span>
                </div>
                <div className="route-container">
                    {
                        routes.map((route: Route, index: number) => (
                            <div className='route' key={index} onClick={() => navigate(route.route)}>
                                <route.icon className="icon" />
                                <span style={{ fontSize: 15, color: '#424242' }}>{route.name}</span>
                            </div>
                        ))
                    }
                </div>
                <div className="communication-channels">
                    <div className="communication-channels-option">
                        {translate('CONTACT_US')}
                    </div>
                    <div className="communication-channels-option">
                        {translate('WORK_WITH_US')}
                    </div>
                    <div className="communication-channels-option">
                        {translate('ETHICS_CHANNEL')}
                    </div>
                </div>
            </div>
            <CustomRoutes />
            <div className="social-media-container">
                <div className="social-media-contents" style={{ display: 'flex', flexDirection: 'column' }}>
                    <h2 style={{ fontSize: 21, color: '#084fa1', fontWeight: 'bold', margin: 0, textAlign: 'left' }}>
                        {translate('WHAT_ARE_YOU_LOOKING_FOR')}
                    </h2>
                    <input type="text" className="input-2" placeholder="Ex: Retrovisor, farol, etc." />
                    <button className="track-button-2">
                        LOCALIZAR
                        <div>
                            <ChevronRight style={{ height: 15, width: 15 }} />
                        </div>
                    </button>
                </div>
                <div className="social-media-contents" style={{ margin: '39px 150px 0 150px' }}>
                    <div style={{ fontSize: 21, color: '#084fa1', fontWeight: 'bold', margin: 0, textAlign: 'left', width: 240 }}>
                        {translate('FOLLOW_AUTOGLASS')}
                    </div>
                    <div style={{ display: 'flex', marginTop: 15 }}>
                        <div className="social-media-icon-box" style={{ backgroundColor: '#4F76BB' }}>
                            <div style={{ marginTop: 10 }}>
                                <Facebook />
                            </div>
                        </div>
                        <div className="social-media-icon-box" style={{ backgroundColor: '#B73EAC' }}>
                            <div style={{ marginTop: 10 }}>
                                <Instagram />
                            </div>
                        </div>
                        <div className="social-media-icon-box" style={{ backgroundColor: '#E8100C' }}>
                            <div style={{ marginTop: 10 }}>
                                <Youtube />
                            </div>
                        </div>
                        <div className="social-media-icon-box" style={{ backgroundColor: '#2086C8' }}>
                            <div style={{ marginTop: 10 }}>
                                <Linkedin />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="social-media-contents" style={{ margin: '39px 150px 0 150px' }}>
                    <h2 style={{ fontSize: 21, color: '#084fa1', fontWeight: 'bold', margin: 0, textAlign: 'left' }}>
                        {translate('TALK_TO_AUTOGLASS')}
                    </h2>
                    <div style={{ textAlign: 'left', marginTop: 10 }}>
                        <div className="sac-number-box" style={{ backgroundColor: '#1565C0' }}>
                            <div style={{ padding: 5, display: 'flex' }}><div style={{ fontWeight: 'bold', marginRight: 3 }}>0800 025 6313</div> | <div style={{ fontWeight: 'normal', fontStyle: 'italic', marginLeft: 2, marginRight: 5 }}>Consumidor</div></div>
                        </div>
                        <div className="sac-number-box" style={{ backgroundColor: '#2E7D32' }}>
                            <div style={{ padding: 5, display: 'flex' }}><div style={{ fontWeight: 'bold', marginRight: 3 }}>0800 707 5150</div> | <div style={{ fontWeight: 'normal', fontStyle: 'italic', marginLeft: 2, marginRight: 5 }}>{translate('INSURED')}</div></div>
                        </div>
                        <div className="sac-number-box" style={{ backgroundColor: '#F57C00' }}>
                            <div style={{ padding: 5, display: 'flex' }}><div style={{ fontWeight: 'bold', marginRight: 3 }}>0800 979 3828</div> | <div style={{ fontWeight: 'normal', fontStyle: 'italic', marginLeft: 2, marginRight: 5 }}>{translate('DEALER')}</div></div>
                        </div>
                        <div className="sac-number-box" style={{ backgroundColor: '#EF6C00' }}>
                            <div style={{ padding: 5, display: 'flex' }}><div style={{ fontWeight: 'bold', marginRight: 3 }}>0800 701 5222</div> | <div style={{ fontWeight: 'normal', fontStyle: 'italic', marginLeft: 2, marginRight: 5 }}>{translate('WORKSHOP')}</div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}