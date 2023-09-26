import { createContext } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { blendColors } from "./utils/colors";
import { GlobalStyles } from "@mui/material";

declare module "@mui/material/styles" {
    // allow configuration using `createTheme`

    interface PaletteOptions {
        sc?: {
            jiro: string;
            zudi: string;
            lota: string;
            nurik: string;
            korsa: string;
            fila: string;
            voka: string;
            whata: string;
            gold: string;
            gold_dark: string;
            green: string;
            green_dark: string;
            gray: string;
            gray_dark: string;
        };
        isDark?: boolean;
        aspectRatio?: number;
    }
}

const setGlobalStyles = (theme: any) => (
    <GlobalStyles
        styles={{
            ":root": {
                "--primary": theme.palette.primary.main,
                "--secondary": theme.palette.secondary.main,
                "--jiro": theme.palette.sc.jiro,
                "--zudi": theme.palette.sc.zudi,
                "--lota": theme.palette.sc.lota,
                "--nurik": theme.palette.sc.nurik,
                "--fila": theme.palette.sc.fila,
                "--voka": theme.palette.sc.voka,
                "--whata": theme.palette.sc.whata,
                "--korsa": theme.palette.sc.korsa,
                "--aspect-ratio": theme.palette.aspectRatio,
                "--gold": theme.palette.sc.gold,
                "--gold-dark": theme.palette.sc.gold_dark,
                "--green": theme.palette.sc.green,
                "--green-dark": theme.palette.sc.green_dark,
                "--gray": theme.palette.sc.gray,
                "--gray-dark": theme.palette.sc.gray_dark,
            },
        }}
    />
);

type Env = {
    S3_BUCKET: string;
};

export const EnvContext = createContext<Env>({
    S3_BUCKET: "https://sportchamp-dev.s3.eu-central-1.amazonaws.com",
});

const ScThemeProvider = ({
                             env,
                             theme,
                             children,
                         }: React.PropsWithChildren<{
    theme: {
        primary: string;
        accent: string;
        isDark?: boolean;
    };
    env: Env;
}>) => {
    const scLightPalette = {
        jiro: blendColors("#373737", theme.accent, 0.05),
        zudi: blendColors("#939393", theme.accent, 0.1),
        lota: blendColors("#bdbdbd", theme.accent, 0.1),
        nurik: blendColors("#d9d9d9", theme.accent, 0.15),
        korsa: blendColors("#e9e9e9", theme.accent, 0.05),
        fila: blendColors("#f8f8f8", theme.accent, 0.03),
        voka: blendColors("#fafafa", theme.accent, 0.02),
        whata: blendColors("#ffffff", theme.accent, 0.01),
    };

    const scDarkPalette = {
        jiro: blendColors("#F6F6F6", theme.accent, 0.03),
        zudi: blendColors("#AEAEAE", theme.accent, 0.03),
        lota: blendColors("#8E8E8E", theme.accent, 0.03),
        nurik: blendColors("#545454", theme.accent, 0.03),
        korsa: blendColors("#3F3F3F", theme.accent, 0.03),
        fila: blendColors("#2C2C2C", theme.accent, 0.03),
        voka: blendColors("#333333", theme.accent, 0.03),
        whata: blendColors("#282828", theme.accent, 0.03),
    };

    const gold = "#EBDBBD";
    const gold_dark = "#99843B";
    const green = "#C3EBBD";
    const green_dark = "#48993B";
    const gray = "#ECEEF1";
    const gray_dark = "#8A91A5";

    const scPalette = theme.isDark ? scDarkPalette : scLightPalette;

    const muitheme = createTheme({
        breakpoints: {
            values: {
                xs: 415,
                sm: 600, // tablets
                md: 960, // small laptop
                lg: 1440, // desktop
                xl: 1920, // large screens
            },
        },
        // aspectRatio: 3.01868,
        typography: {
            fontFamily: ["Inter", "Roboto"].join(","),
        },
        // custom: {
        //   isDark: theme.isDark,
        // },
        components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        padding: "8px 24px",
                        height: 40,
                        textTransform: "none",
                        borderRadius: "12px",
                    },
                    text: {
                        color: "inherit",
                    },
                    outlined: {
                        border: "2px solid",
                        color: "inherit",
                        "&:hover": {
                            border: "2px solid",
                            color: "inherit",
                        },
                    },
                    outlinedPrimary: {
                        borderColor: theme.primary,
                        "&:hover": {
                            borderColor: theme.primary,
                        },
                    },
                    textSecondary: {
                        color: theme.accent,
                    },
                    outlinedSecondary: {
                        borderColor: theme.accent,
                        "&:hover": {
                            borderColor: theme.accent,
                        },
                    },
                },
            },
            MuiFormControl: {
                styleOverrides: {
                    root: {
                        width: "100%",
                    },
                },
            },
            MuiPaper: {
                styleOverrides: {
                    root: {
                        borderRadius: "16px",
                    },
                },
            },
        },
        palette: {
            primary: {
                main: theme.primary,
            },
            secondary: {
                main: theme.accent,
            },
            sc: {
                ...scPalette,
                gold,
                gold_dark,
                green,
                green_dark,
                gray,
                gray_dark,
            },
            isDark: theme.isDark,
            aspectRatio: 16 / 9,
        },
    });

    return (
        <EnvContext.Provider value={env}>
            <ThemeProvider theme={muitheme}>
                {setGlobalStyles(muitheme)}
                {children}
            </ThemeProvider>
        </EnvContext.Provider>
    );
};

export default ScThemeProvider;
