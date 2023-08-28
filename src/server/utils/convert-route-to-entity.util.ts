const mapping: Record<string, string> = {
  configurations: 'configuration',
  'data-privacies': 'data_privacy',
  landscapes: 'landscape',
  organizations: 'organization',
  securities: 'security',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
