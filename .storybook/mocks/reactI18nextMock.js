export const useTranslation = () => {
    return {
        t: (str) => str,
        i18n: {
            changeLanguage: () => new Promise(() => {}),
        },
    };
};

export const withTranslation = () => (Component) => {
    Component.defaultProps = { ...Component.defaultProps, t: () => "" };
    return Component;
};

export default {};
