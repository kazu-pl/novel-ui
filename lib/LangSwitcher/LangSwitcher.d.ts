/// <reference types="react" />
export interface LangSwitcherProps<Lang> {
    langs: {
        icon: React.ReactNode;
        to: string;
        lang: Lang;
        label: string;
    }[];
    activeLang: Lang;
}
declare const LangSwitcher: <Lang>({ langs, activeLang, }: LangSwitcherProps<Lang>) => JSX.Element;
export default LangSwitcher;
