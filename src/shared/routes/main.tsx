import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../../components/Layout";
import { HomePage } from "../../pages/home/HomePage";
import { ErrorPage } from "../../pages/error/ErrorPage";
import { BalanceCard } from "../../components/BalanceCard";
import { Calendar } from "../../components/Calendar";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <HomePage />
      </Layout>
    ),
    children: [
        { 
            path: "/",
            element: <BalanceCard />,
        },
        {
            path: "/expenses",
            element: <Calendar />,
        },
    ],
    errorElement: <ErrorPage />,
  },
]);

router.routes.forEach((route) => {
    console.log(route.path);
})
