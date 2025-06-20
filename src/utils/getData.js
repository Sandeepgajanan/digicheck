import { navItems as navItemsEn } from "../data/english/navdata";
import { navItems as navItemsEs } from "../data/spanish/navdata";
import { navHeading as navHeadingEn } from "../data/english/navdata";
import { navHeading as navHeadingEs } from "../data/spanish/navdata";
import { landingPageContent as landingEn } from "../data/english/landingdata";
import { landingPageContent as landingEs } from "../data/spanish/landingdata";
import { brandHeading as brandHeadingEn } from "../data/english/branddata";
import { brandHeading as brandHeadingEs } from "../data/spanish/branddata";
import {
  featureHeading as featureHeadingEn,
  featureData as featureDataEn,
  featurecardData as featurecardDataEn,
} from "../data/english/featuredata";
import {
  featureHeading as featureHeadingEs,
  featureData as featureDataEs,
  featurecardData as featurecardDataEs,
} from "../data/spanish/featuredata";
import {
  highlightHeading as highlightHeadingEn,
  highlightData as highlightDataEn,
} from "../data/english/highlightdata";
import {
  highlightHeading as highlightHeadingEs,
  highlightData as highlightDataEs,
} from "../data/spanish/highlightdata";
import {
  priceHeading as priceHeadingEn,
  priceData as priceDataEn,
  priceToggleData as priceToggleDataEn,
  priceData2 as priceData2En,
} from "../data/english/pricedata";
import {
  priceHeading as priceHeadingEs,
  priceData as priceDataEs,
  priceToggleData as priceToggleDataEs,
  priceData2 as priceData2Es,
} from "../data/spanish/pricedata";
import { minipriceData as minipriceDataEn } from "../data/english/minipricedata";
import { minipriceData as minipriceDataEs } from "../data/spanish/minipricedata";
import { compareData as compareDataEn } from "../data/english/comparedata";
import { compareData as compareDataEs } from "../data/spanish/comparedata";
import {
  whyusHeading as whyusHeadingEn,
  whyusData as whyusDataEn,
  whyuscardData as whyuscardDataEn,
} from "../data/english/whyusdata";
import {
  whyusHeading as whyusHeadingEs,
  whyusData as whyusDataEs,
  whyuscardData as whyuscardDataEs,
} from "../data/spanish/whyusdata";
import {
  liveproductHeading as liveproductHeadingEn,
  liveproductData as liveproductDataEn,
} from "../data/english/liveproductdata";
import {
  liveproductHeading as liveproductHeadingEs,
  liveproductData as liveproductDataEs,
} from "../data/spanish/liveproductdata";
import {
  contactHeading as contactHeadingEn,
  contactData as contactDataEn,
  formLabels as formLabelsEn,
  subjectOptions as subjectOptionsEn,
} from "../data/english/contactdata";
import {
  contactHeading as contactHeadingEs,
  contactData as contactDataEs,
  formLabels as formLabelsEs,
  subjectOptions as subjectOptionsEs,
} from "../data/spanish/contactdata";
import {
  faqData as faqDataEn,
  faqPageData as faqPageDataEn,
} from "../data/english/faqdata";
import {
  faqData as faqDataEs,
  faqPageData as faqPageDataEs,
} from "../data/spanish/faqdata";
import {
  socialLinks as socialLinksEn,
  columns as columnsEn,
  companyInfo as companyInfoEn,
  legalLinks as legalLinksEn,
} from "../data/english/footerdata";
import {
  socialLinks as socialLinksEs,
  columns as columnsEs,
  companyInfo as companyInfoEs,
  legalLinks as legalLinksEs,
} from "../data/spanish/footerdata";

const dataMap = {
  english: {
    navItems: navItemsEn,
    navHeading: navHeadingEn,
    landingPageContent: landingEn,
    brandHeading: brandHeadingEn,
    featureHeading: featureHeadingEn,
    featureData: featureDataEn,
    featurecardData: featurecardDataEn,
    highlightHeading: highlightHeadingEn,
    highlightData: highlightDataEn,
    whyusHeading: whyusHeadingEn,
    whyusData: whyusDataEn,
    whyuscardData: whyuscardDataEn,
    liveproductHeading: liveproductHeadingEn,
    liveproductData: liveproductDataEn,
    priceHeading: priceHeadingEn,
    priceData: priceDataEn,
    priceToggleData: priceToggleDataEn,
    priceData2: priceData2En,
    minipriceData: minipriceDataEn,
    compareData: compareDataEn,
    contactHeading: contactHeadingEn,
    contactData: contactDataEn,
    formLabels: formLabelsEn,
    subjectOptions: subjectOptionsEn,
    faqData: faqDataEn,
    faqPageData: faqPageDataEn,
    socialLinks: socialLinksEn,
    columns: columnsEn,
    companyInfo: companyInfoEn,
    legalLinks: legalLinksEn,
  },
  spanish: {
    navItems: navItemsEs,
    navHeading: navHeadingEs,
    landingPageContent: landingEs,
    brandHeading: brandHeadingEs,
    featureHeading: featureHeadingEs,
    featureData: featureDataEs,
    featurecardData: featurecardDataEs,
    highlightHeading: highlightHeadingEs,
    highlightData: highlightDataEs,
    whyusHeading: whyusHeadingEs,
    whyusData: whyusDataEs,
    whyuscardData: whyuscardDataEs,
    liveproductHeading: liveproductHeadingEs,
    liveproductData: liveproductDataEs,
    priceHeading: priceHeadingEs,
    priceData: priceDataEs,
    minipriceData: minipriceDataEs,
    compareData: compareDataEs,
    priceToggleData: priceToggleDataEs,
    priceData2: priceData2Es,
    contactHeading: contactHeadingEs,
    contactData: contactDataEs,
    formLabels: formLabelsEs,
    subjectOptions: subjectOptionsEs,
    faqData: faqDataEs,
    faqPageData: faqPageDataEs,
    socialLinks: socialLinksEs,
    columns: columnsEs,
    companyInfo: companyInfoEs,
    legalLinks: legalLinksEs,
  },
};

export const getData = (language, dataKey) => {
  return dataMap[language]?.[dataKey] || dataMap.english[dataKey];
};
