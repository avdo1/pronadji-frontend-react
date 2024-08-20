const generateRoute = (
  unsafeRoute: string,
  params: Record<string, string | null> = {},
) => {
  let route = unsafeRoute;
  Object.keys(params).forEach((key) => {
    if (!params[key]) route = route.replace(`/:${key}`, "");
    else route = route.replace(`:${key}`, params[key] as string);
  });

  return route;
};
const routeNames = {
  home: (params?: Record<string, string>): string =>
    generateRoute("/naslovna", params),
  admin: (params?: Record<string, string>): string =>
    generateRoute("/admin", params),
  eventi: (params?: Record<string, string>): string =>
    generateRoute("/eventi", params),
  oNama: (params?: Record<string, string>): string =>
    generateRoute("/oNama", params),
  usluge: (params?: Record<string, string>): string =>
    generateRoute("/usluge", params),
  kontakt: (params?: Record<string, string>): string =>
    generateRoute("/kontakt", params),
  example: (params?: Record<string, string>): string =>
    generateRoute("/example", params),
  pageNotFound: (params?: Record<string, string>): string =>
    generateRoute("*", params),
};

export default routeNames;
