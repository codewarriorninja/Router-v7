import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";


export default [
    index("routes/home.tsx"), 
    route("about","routes/about.tsx"),
    route("service", "pages/service.tsx"),
    route("post/:postId", "pages/post.tsx"),

    //Nested routes
    // route("dashboard", "pages/dashboard.tsx", [
    //     route("finance", "pages/finances.tsx"),
    //     route("profile", "pages/personal-info.tsx")
    // ]),
    
    //Other way of implementing Nested Layout
    layout("pages/dashboard.tsx", [
        route("finance", "pages/finances.tsx"),
        route("profile", "pages/personal-info.tsx")
    ])

] satisfies RouteConfig;
