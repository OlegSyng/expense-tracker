import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../../pages/home/HomePage";
import { ExpensesPage } from "../../pages/expenses/ExpensesPage";
import { Layout } from "../../components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <HomePage />
      </Layout>
    ),
  },
  {
    path: "/expenses",
    element: (
      <Layout>
        <ExpensesPage />
      </Layout>
    ),
  },
]);
