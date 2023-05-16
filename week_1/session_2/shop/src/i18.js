import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .init({
        // we init with resources
        resources: {
            en: {
                translations: {
                    "Hello": "Hello world.",
                    "i18n": "This is I18n",
                    "Size": "Size",
                    "Type": "Type",
                    "Price": "Price",
                    "Total": "Total",
                    "Add to card": "Add to card",
                    "Available options": "Available options",
                    "Add": "Add"
                }
            },
            vn: {
                translations: {
                    "Hello": "Chào bạn",
                    "i18n": "Đây là I18n",
                    "Size": "Kích cỡ",
                    "Type": "Loại",
                    "Price": "Giá",
                    "Total": "Tổng cộng",
                    "Add to card": "Thêm vào giỏ hàng",
                    "Available options": "Các tuỳ chọn",
                    "Add": "Thêm"
                }
            }
        },
        fallbackLng: 'en',

        // have a common namespace used around the full app
        ns: ['translations'],
        defaultNS: 'translations',

        keySeparator: false, // we use content as keys

        interpolation: {
            escapeValue: false, // not needed for react!!
            formatSeparator: ','
        },

        react: {
            wait: true
        }
    });

export default i18n;