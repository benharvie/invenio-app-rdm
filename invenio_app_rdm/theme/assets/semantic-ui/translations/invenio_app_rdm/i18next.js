// This file is part of React-Invenio-Deposit
// Copyright (C) 2021 Graz University of Technology.
//
// Invenio-app-rdm is free software; you can redistribute it and/or modify it
// under the terms of the MIT License; see LICENSE file for more details.

import i18n from "i18next";

import LanguageDetector from "i18next-browser-languagedetector";
import { translations } from "./messages";

const options = {
  fallbackLng: "en", // fallback keys
  returnEmptyString: false,
  debug: process.env.NODE_ENV === "development",
  resources: translations,
  keySeparator: false,
  nsSeparator: false,
  // specify language detection order
  detection: {
    order: ["htmlTag"],
    // cache user language off
    caches: [],
  },
};

const i18next = i18n.createInstance();
i18next.use(LanguageDetector).init(options);

export { i18next };