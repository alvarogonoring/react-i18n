import React, { useCallback, useMemo, useContext, createContext, memo } from "react";
import LanguageKeysEs, { LangProps } from "./es";
import LanguageKeysPtBR from "./ptBR";

const ptBR = new LanguageKeysPtBR();
const es = new LanguageKeysEs();

type State = { defaultLanguage: string; keys: LanguageKeysPtBR };

const LangStateContext = createContext<State | undefined>(undefined);
const LangUpdaterContext = createContext<
    React.Dispatch<React.SetStateAction<"ptBR" | "es">> | undefined
>(undefined);

export function TranslatorContext({ children }) {

    const language = window.navigator.language;

    const [defaultLanguage, setDefaultLanguage] = React.useState<"ptBR" | "es">("ptBR");

    const value = useMemo(() => {
        return {
            defaultLanguage,
            keys: language.includes('es') || defaultLanguage === 'es' ? es : ptBR
        };
    }, [defaultLanguage]);

    return (
        <LangStateContext.Provider value={value}>
            <LangUpdaterContext.Provider value={setDefaultLanguage}>
                {children}
            </LangUpdaterContext.Provider>
        </LangStateContext.Provider>
    );
};

export function useLangState() {
    const langState = useContext(LangStateContext);

    if (langState === undefined) {
        throw new Error();
    }

    return langState;
}

export function T() {
    const langState = useLangState();

    const t = useCallback(
        (id: LangProps, data?: any): string => {
            const textItem: any = (langState.keys as any)[id];
            const str: string = textItem || id;

            return textItem instanceof Function ? textItem(data) : str;
        },
        [langState]
    );

    return t;
}

export function useLang() {
    const langState = useLangState();

    return langState.defaultLanguage;
}

export function useSetLang() {
    const setLang = useContext(LangUpdaterContext);

    if (setLang === undefined) {
        throw new Error();
    }

    return setLang;
}