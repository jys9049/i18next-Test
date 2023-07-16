import { fileURLToPath } from "url";
import path from "path";

const COMMON_EXTENSIONS = "/**/*.{js,jsx,mjs,ts,tsx,vue,html}";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const i18nScanner = {
  input: [`./src${COMMON_EXTENSIONS}`],
  options: {
    defaultLng: "ko-KR",
    lngs: ["ko-KR", "en-US"],
    func: {
      list: ["i18next.t", "i18n.t", "$i18n.t"],
      extensions: [".js", ".jsx", "mjs", ".ts", ".tsx", ".html"],
    },
    resource: {
      loadPath: path.join(
        __dirname,
        "./src/translation/languages/{{lng}}/{{ns}}.json"
      ),
      savePath: path.join(
        __dirname,
        "./src/translation/languages/{{lng}}/{{ns}}.json"
      ),
    },
    defaultValue(lng, ns, key) {
      const keyAsDefaultValue = ["ko-KR"];
      if (keyAsDefaultValue.includes(lng)) {
        const separator = "~~";
        const value = key.includes(separator) ? key.split(separator)[1] : key;

        return value;
      }
      return "";
    },
    keySeparator: false,
    nsSeparator: false,
    prefix: "%{",
    suffix: "}",
  },
};

export default i18nScanner;
