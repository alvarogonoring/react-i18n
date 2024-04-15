import React from 'react';
import './styles.css';
import { Home } from 'react-feather';
import { T } from '../../i18n';

export default function Footer() {
    const translate = T();

    return (
        <div>
            <div className="fixed-footer-container">
                <div style={{ marginTop: 15, display: 'flex' }}>
                    <div>
                        <Home style={{ height: 15, width: 15, color: 'rgba(24, 56, 132, 0.85)', cursor: 'pointer' }} />
                        <a className="link" style={{ color: '#01579B' }}>{translate('IAM_CONSUMER')}</a>
                        <a className="link" style={{ color: '#0288D1' }}>{translate('INSURED_BROKER')}</a>
                        <a className="link" style={{ color: '#E37907' }}>{translate('SHOPKEEPER_WORKSHOP')}</a>
                        <a className="link" style={{ color: '#0288D1' }}>{translate('ISSUE_INVOICE')}</a>
                    </div>
                    <div style={{ marginLeft: 250 }}>
                        <span style={{ fontSize: 14, color: '#01579b' }}>Inc. 2020 ©</span>
                    </div>
                </div>
            </div>
            <div className="footer-container">
                <div style={{ fontSize: 14, marginRight: '25%' }}>{translate('AUTOGLASS_POLITICS_FOOTER_MESSAGE')}</div>
                <div className="personal-data-protection"><div style={{ marginTop: 6 }}></div>{translate('PERSONAL_DATA_PROTECTION')}</div>
            </div>
        </div>
    )
}