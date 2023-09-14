export class ContactDetails {
  siteName!: string;
  siteUrl!: string;
  accName!: string;
  logoUrl!: string;

  constructor(
    siteName: string,
    siteUrl: string,
    accName: string,
    logoUrl: string
  ) {
    this.siteName = siteName;
    this.siteUrl = siteUrl;
    this.accName = accName;
    this.logoUrl = logoUrl;
  }
}
