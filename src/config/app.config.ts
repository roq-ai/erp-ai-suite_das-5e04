interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Administrator'],
  customerRoles: [],
  tenantRoles: ['Administrator', 'Security Analyst'],
  tenantName: 'Organization',
  applicationName: 'ERP-AI-Suite_dashboards',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
