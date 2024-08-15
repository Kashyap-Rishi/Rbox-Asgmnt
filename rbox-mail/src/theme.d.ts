import { PaletteOptions } from "@mui/material/styles/createPalette";

declare module "@mui/material/styles/createPalette" {
  interface Palette {
    navbar: {
      mainBackground: string;
      mainText: string;
      borderColor: string;
    };
    sidebar: {
      mainBackground: string;
      mainText: string;
      borderColor: string;
    };

    threads: {
      mainBackground: string;
      mainText: string;
      primaryText: string;
      borderColor: string;
      resetBackground: string;
      resetBorder: string;
      inboxText: string;
      searchBackground: string;
      secondaryText: string;
      campaignText: string;
      campaignBackground: string;
      datetext: string;
      borderBottom: string;
      headBackground: string;
      headText: string;
      detailsText: string;
      detailslabel: string;
    };
    campaign: {
      mainText: string;
      primaryText: string;
      secondaryText: string;
    };
    singleThreads: {
      mainText: string;
      primaryText: string;
      secondaryText: string;
      mainBackground: string;
      primaryBackground: string;
      secondaryBackground: string;
      mainBorder: string;
      primaryBorder: string;
      secondaryBorder: string;
    };
    threadCard: {
      mainText: string;
      primaryText: string;
      secondaryText: string;
      mainBackground: string;
      primaryBackground: string;
      secondaryBackground: string;
      mainBorder: string;
      primaryBorder: string;
      secondaryBorder: string;
      boxShadow: string;
      dateText: string;
    };
  }
  interface PaletteOptions {
    navbar?: {
      mainBackground?: string;
      mainText?: string;
      borderColor?: string;
    };
    sidebar?: {
      mainBackground?: string;
      mainText?: string;
      borderColor?: string;
    };
    threads?: {
      mainBackground?: string;
      primaryText?: string;
      mainText?: string;
      borderColor?: string;
      resetBackground?: string;
      resetBorder?: string;
      inboxText?: string;
      searchBackground?: string;
      secondaryText?: string;
      campaignText?: string;
      campaignBackground?: string;
      datetext?: string;
      borderBottom?: string;
      headBackground?: string;
      headText?: string;
      detailsText?: string;
      detailslabel?: string;
    };
    campaign?: {
      mainText?: string;
      primaryText?: string;
      secondaryText?: string;
    };
    singleThreads: {
      mainText?: string;
      primaryText?: string;
      secondaryText?: string;
      mainBackground?: string;
      primaryBackground?: string;
      secondaryBackground?: string;
      mainBorder?: string;
      primaryBorder?: string;
      secondaryBorder?: string;
    };
    threadCard: {
      mainText?: string;
      primaryText?: string;
      secondaryText?: string;
      mainBackground?: string;
      primaryBackground?: string;
      secondaryBackground?: string;
      mainBorder?: string;
      primaryBorder?: string;
      secondaryBorder?: string;
      boxShadow?: string;
      dateText?: string;
    };
  }
}
