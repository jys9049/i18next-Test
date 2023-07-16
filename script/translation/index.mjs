import { GoogleSpreadsheet } from "google-spreadsheet";
import i18nextConfig from "../../i18next-scanner.config.js";
import { JWT } from "google-auth-library";

const spreadsheetDocId = process.env.GOOGLE_SPREAD_DOC_ID; // 구글 스프레드 DocId
const ns = "translation";
const lngs = i18nextConfig.options.lngs;
const loadPath = i18nextConfig.options.resource.loadPath;
const localesPath = loadPath.replace("/{{lng}}/{{ns}}.json", "");
const rePluralPostfix = new RegExp(/_plural|_[\d]/g);
const sheetId = 0; // your sheet id
const NOT_AVAILABLE_CELL = "_N/A";
const columnKeyToHeader = {
  key: "key",
  "ko-KR": "ko-KR",
  "en-US": "en-US",
};

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];

// const jwt = new JWT({
//   email: process.env.GOOGLE_SERVICE_EMAIL,
//   key: process.env.GOOGLE_PRIVATE_KEY,
// });

async function loadSpreadsheet() {
  const doc = new GoogleSpreadsheet(
    spreadsheetDocId,
    // jwt
    {
      apiKey: process.env.GOOGLE_API_KEY,
    }
  );

  await doc.loadInfo();

  return doc;
}

function getPureKey(key = "") {
  return key.replace(rePluralPostfix, "");
}

export {
  localesPath,
  loadSpreadsheet,
  getPureKey,
  ns,
  lngs,
  sheetId,
  columnKeyToHeader,
  NOT_AVAILABLE_CELL,
};
