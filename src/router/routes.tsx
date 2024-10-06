import Page from "../layout/Page";
import PostsPage from "../posts/PostsPage";
import UserDetailsPage from "../users/UserDetailsPage";
import { Navigate } from "react-router-dom";

export const routes = [
  {
    path: "/",
    element: <Page />,
    title: "Posts",
    children: [
      {
        path: "/",
        index: true,
        title: "Posts",
        element: <Navigate to="/posts" replace />,
      },
      {
        path: "/posts",
        title: "Posts",
        element: <PostsPage />,
      },
      {
        path: "/active-user",
        title: "User Details",
        element: <UserDetailsPage />,
      },
    ],
  },
];

const [mainRoute] = routes;
export const routeTitleMap = mainRoute.children.reduce(
  (acc: Record<string, string>, route) => {
    acc[route.path] = route.title;
    return acc;
  },
  {}
);
