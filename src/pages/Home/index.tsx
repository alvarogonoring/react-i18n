import React, { useState } from 'react';
import {
    Truck,
    PhoneCall,
    Package,
    ChevronRight
} from 'react-feather'
import BrasilMap from '../../svg/brazil-map.svg';
import { T } from '../../i18n';

export default function Home() {
    const translate = T();

    const [hoverVidro, setHoverVidro] = useState<Boolean>(false);
    const [hoverFarol, setHoverFarol] = useState<Boolean>(false);
    const [hoverLanterna, setHoverLanterna] = useState<Boolean>(false);
    const [hoverRetrovisor, setHoverRetrovisor] = useState(false);
    const [hoverParaChoque, setHoverParaChoque] = useState<Boolean>(false);

    return (
        <div>
            <div>
                <div>
                    <b className="main-question">{translate('WHAT_DO_YOU_NEED')}</b>
                </div>
                <div className="divider"></div>
                <div className="service-options-container">
                    <div className="service" onMouseEnter={() => setHoverVidro(true)} onMouseLeave={() => setHoverVidro(false)}>
                        <span className="service-text" style={{ color: hoverVidro ? '#e7edf4' : '#183884' }}>
                            {translate('GLASS')}
                        </span>
                    </div>
                    <div className="service" onMouseEnter={() => setHoverFarol(true)} onMouseLeave={() => setHoverFarol(false)}>
                        <span className="service-text" style={{ color: hoverFarol ? '#e7edf4' : '#183884' }}>
                            {translate('HEADLIGHT')}
                        </span>
                    </div>
                    <div className="service" onMouseEnter={() => setHoverLanterna(true)} onMouseLeave={() => setHoverLanterna(false)}>
                        <span className="service-text" style={{ color: hoverLanterna ? '#e7edf4' : '#183884' }}>
                            {translate('TAILLIGHT')}
                        </span>
                    </div>
                    <div className="service" onMouseEnter={() => setHoverRetrovisor(true)} onMouseLeave={() => setHoverRetrovisor(false)}>
                        <span className="service-text" style={{ color: hoverRetrovisor ? '#e7edf4' : '#183884' }}>
                            {translate('REARVIEW')}
                        </span>
                    </div>
                    <div className="service" onMouseEnter={() => setHoverParaChoque(true)} onMouseLeave={() => setHoverParaChoque(false)}>
                        <span className="service-text" style={{ color: hoverParaChoque ? '#e7edf4' : '#183884' }}>
                            {translate('BUMPER')}
                        </span>
                    </div>
                </div>
            </div>
            <div>
                <img src="https://freepngimg.com/save/36659-audi-car-real/1920x792" style={{ width: 1400 }} />
            </div>
            <div className="user-type-container">
                <div className="user-type" style={{ display: 'flex', backgroundColor: '#265D9B', width: '38%', justifyContent: 'right' }}>
                    <div style={{ padding: 20 }}>
                        <Truck style={{ height: 70, width: 80, color: '#B6C6D9' }} />
                    </div>
                    <div style={{ textAlign: 'left', alignSelf: 'center' }}>
                        <h5 style={{ fontSize: 18, margin: 0, textAlign: 'left', fontWeight: 'bold' }}>
                            {translate('IAM_CONSUMER')}
                        </h5>
                        <p style={{ fontSize: 10 }}>{translate('CONSUMER_INFO')}</p>
                        <div style={{ display: 'flex', fontSize: 15, marginTop: 5 }}>
                            <div className="user-type-button-container">
                                <div style={{ marginTop: 5 }}>{translate('MEET')}</div>
                            </div>
                            <div className="user-type-button-container">
                                <div style={{ marginTop: 5 }}>{translate('BUY')}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="user-type-2" style={{ background: 'rgba(28,130,26,0.85)', width: '24%', display: 'flex', cursor: 'pointer' }}>
                    <div style={{ padding: 30 }}>
                        <PhoneCall style={{ height: 50, width: 60, color: '#FFF', opacity: 0.8 }} />
                    </div>
                    <div style={{ textAlign: 'left', alignSelf: 'center' }}>
                        <h5 style={{ fontSize: 18, margin: 0, textAlign: 'left', fontWeight: 'bold' }}>
                            {translate('INSURED_BROKER')}
                        </h5>
                        <p style={{ fontSize: 10, margin: 0 }}>
                            {translate('INSURED_BROKER_INFO')}
                        </p>
                    </div>
                </div>
                <div className="user-type-3" style={{ background: 'rgba(227,118,0,0.85)', width: '38%', display: 'flex', cursor: 'pointer' }}>
                    <div style={{ padding: 20 }}>
                        <Package style={{ height: 70, width: 80, color: '#FFF', opacity: 0.8 }} />
                    </div>
                    <div style={{ textAlign: 'left', alignSelf: 'center' }}>
                        <h5 style={{ fontSize: 18, margin: 0, textAlign: 'left', fontWeight: 'bold' }}>
                            {translate('SHOPKEEPER_WORKSHOP')}
                        </h5>
                        <p style={{ fontSize: 10, margin: 0 }}>
                            {translate('SHOPKEEPER_WORKSHOP_INFO')}
                        </p>
                    </div>
                </div>
            </div>
            <div className="stores-input-cotainer">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div>
                        <h2 style={{ fontSize: 26, color: '#084fa1', fontWeight: 'bold', margin: 0 }}>
                            {translate('STORES_ALL_OVER')}
                        </h2>
                        <h3 style={{ fontSize: 16, color: '#1bb7df', textAlign: 'left', margin: 0, fontWeight: 'normal' }}>
                            {translate('FIND_CLOSEST')}
                        </h3>
                    </div>
                    <div style={{ margin: '0 30px 0 15px' }}>
                        <img src={BrasilMap} style={{ height: 45, width: 45 }} />
                    </div>
                    <div style={{ marginBottom: 20 }}>
                        <input type="text" className="input" placeholder="Ex. Loja em Belo Horizonte" />
                    </div>
                    <button className="track-button">
                        LOCALIZAR
                        <div>
                            <ChevronRight style={{ height: 15, width: 15 }} />
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}