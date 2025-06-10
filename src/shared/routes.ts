// enum - объекты в ts, которые позволяют делать некоторые ассоциации.
enum AppRoutes {
    HOME = "/",
    MOVIE="/movie/:id",
    NOT_FOUND="*",
    FAVORITE="/favorite",
}
export default AppRoutes;