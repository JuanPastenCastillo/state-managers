type PathObject = { [key: string]: string | PathObject }

const notAccepted = ["index", "home"]

export const flatRoutes = (
  paths: PathObject
): { path: string; children?: { path: string }[] }[] => {
  const routes = []

  for (const key in paths) {
    const value = paths[key]

    if (notAccepted.includes(key.toLowerCase())) continue

    if (typeof value === "string") {
      // Simple path, add directly
      routes.push({ path: value })
    } else if (typeof value === "object") {
      // Nested object, recurse and create children array
      routes.push({
        path: key,
        children: flatRoutes(value)
      })
    }
  }

  return routes
}
