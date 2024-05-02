/// <reference types="react" />
export declare const LangSwitcherBthWithCurrLangTestId = "LangSwitcher-wrapper";
export declare const LangSwitcherMenuTestId = "LangSwitcher_menuPaper";
export declare const LangSwtchingMenuItemTestIdPrefix = "LangSwitcher_LangMenuLink-";
export declare const LangSwtchingLinkTestIdPrefix = "LangSwitcher_LangLink-";
export interface LangSwitcherProps<Lang> {
    langs: {
        icon: React.ReactNode;
        to: string;
        lang: Lang;
        label: string;
    }[];
    activeLang: Lang;
}
declare const LangSwitcher: <Lang extends string>({ langs, activeLang, }: LangSwitcherProps<Lang>) => JSX.Element;
export default LangSwitcher;
