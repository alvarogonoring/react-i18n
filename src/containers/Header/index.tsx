import React, { useState, useEffect, useRef } from 'react';
import './styles.css'
import { ChevronDown } from 'react-feather';
import { T, useLang, useSetLang } from '../../i18n';
import Brazil from '../../images/brazil.png';
import Colombia from '../../images/colombia.png';

export default function Header() {
    const translate = T();
    const setLang = useSetLang();

    const [dropdownVisible, setDropdownVisible] = useState(false);

    function toggleDropdown() {
        setDropdownVisible(prevState => !prevState);
    }

    useEffect(() => {
        function handleClickOutside(event) {
            const dropdownContainer = document.querySelector('.dropdown-container');
            if (dropdownContainer && !dropdownContainer.contains(event.target)) {
                setDropdownVisible(false);
            }
        }

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const changeLang = (lang: any) => {
        setLang(lang);
        setDropdownVisible(false);
    }

    return (
        <div style={{ display: 'flex' }}>
            <div className="header-ghost-container"></div>
            <div className="header-container">
                <div style={{ display: 'flex', marginLeft: 'auto' }}>
                    <div style={{ padding: 5, cursor: 'pointer' }}>
                        <img src="https://cdn-icons-png.flaticon.com/512/6145/6145601.png" style={{ height: 40, width: 40 }} />
                    </div>
                    <b className="shop-now">{translate('SHOP_NOW')}</b>
                    <p className="header-message">
                        {translate('HEADER_MESSAGE')}
                    </p>
                </div>
                <div className="dropdown-container">
                    <div className="dropdown-button" onClick={toggleDropdown}>
                        <img src={useLang() === 'ptBR' ? Brazil : Colombia} style={{ height: 30, width: 30 }} />
                        <ChevronDown style={{ color: '#FFFFFF', margin: '0 0 3px 3px' }} />
                    </div>
                    {dropdownVisible && (
                        <div className="dropdown-content">
                            <div className="flags" onClick={() => changeLang('ptBR')}>
                                <div style={{ padding: 7 }}>
                                    <img src={Brazil} style={{ height: 30, width: 30 }} />
                                </div>
                                <span style={{ alignSelf: 'center' }}>PT - BR</span>
                            </div>
                            <div className="flags" onClick={() => changeLang('es')}>
                                <div style={{ padding: 7 }}>
                                    <img src={Colombia} style={{ height: 30, width: 30 }} />
                                </div>
                                <span style={{ alignSelf: 'center' }}>ES - CO</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}