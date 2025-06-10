// enum - объекты в ts, которые позволяют делать некоторые ассоциации.
export const AppRoutes = {
    HOME: "/",
    MOVIE: "/movie/:id",
    NOT_FOUND: "*",
    FAVORITE: "/favorite",
}  as const;