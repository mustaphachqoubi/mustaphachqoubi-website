import type { CSSProperties } from "react";
type Theme = "dark" | "light";
export type EmbedThemeConfig = Theme | "auto";
export type UiConfig = {
    hideEventTypeDetails?: boolean;
    theme?: EmbedThemeConfig;
    styles?: EmbedStyles & EmbedNonStylesConfig;
    cssVarsPerTheme?: Record<Theme, Record<string, string>>;
};
type SetStyles = React.Dispatch<React.SetStateAction<EmbedStyles>>;
type setNonStylesConfig = React.Dispatch<React.SetStateAction<EmbedNonStylesConfig>>;
declare const embedStore: {
    styles: EmbedStyles | undefined;
    nonStyles: EmbedNonStylesConfig | undefined;
    namespace: string | null;
    embedType: string | null | undefined;
    reactStylesStateSetters: Record<keyof EmbedStyles, SetStyles>;
    reactNonStylesStateSetters: Record<keyof EmbedNonStylesConfig, setNonStylesConfig>;
    parentInformedAboutContentHeight: boolean;
    windowLoadEventFired: boolean;
    setTheme: ((arg0: EmbedThemeConfig) => void) | undefined;
    theme: EmbedThemeConfig | undefined;
    uiConfig: Omit<UiConfig, "theme" | "styles"> | undefined;
    setUiConfig: ((arg0: UiConfig) => void) | undefined;
};
declare global {
    interface Window {
        CalEmbed: {
            __logQueue?: unknown[];
            embedStore: typeof embedStore;
            applyCssVars: (cssVarsPerTheme: UiConfig["cssVarsPerTheme"]) => void;
        };
        CalComPageStatus: string;
        isEmbed?: () => boolean;
        resetEmbedStatus: () => void;
        getEmbedNamespace: () => string | null;
        getEmbedTheme: () => "dark" | "light" | null;
    }
}
interface EmbedStyles {
    body?: Pick<CSSProperties, "background">;
    eventTypeListItem?: Pick<CSSProperties, "background" | "color" | "backgroundColor">;
    enabledDateButton?: Pick<CSSProperties, "background" | "color" | "backgroundColor">;
    disabledDateButton?: Pick<CSSProperties, "background" | "color" | "backgroundColor">;
    availabilityDatePicker?: Pick<CSSProperties, "background" | "color" | "backgroundColor">;
}
interface EmbedNonStylesConfig {
    /** Default would be center */
    align?: "left";
    branding?: {
        brandColor?: string;
    };
}
export declare const useEmbedTheme: () => "light" | "dark" | "auto" | undefined;
export declare const useEmbedUiConfig: () => Omit<UiConfig, "theme" | "styles">;
export declare const useEmbedStyles: (elementName: keyof EmbedStyles) => Pick<CSSProperties, "background">;
export declare const useEmbedNonStylesConfig: (elementName: keyof EmbedNonStylesConfig) => "left" | {
    brandColor?: string | undefined;
};
export declare const useIsBackgroundTransparent: () => boolean;
export declare const useBrandColors: () => {
    brandColor?: string | undefined;
};
export declare const useIsEmbed: (embedSsr?: boolean) => boolean | undefined;
export declare const useEmbedType: () => string | null | undefined;
declare const methods: {
    ui: (uiConfig: UiConfig) => void;
    parentKnowsIframeReady: (_unused: unknown) => void;
};
export type InterfaceWithParent = {
    [key in keyof typeof methods]: (firstAndOnlyArg: Parameters<(typeof methods)[key]>[number]) => void;
};
export declare const interfaceWithParent: InterfaceWithParent;
export {};
//# sourceMappingURL=embed-iframe.d.ts.map