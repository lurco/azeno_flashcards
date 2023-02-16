import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Learning from "./components/Learning/Learning";
import Layout from "./components/Layout/Layout";
import Decks from "./components/Decks/Decks";
import FinishLearning from "./components/FinishLearning/FinishLearning";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import {AuthProvider} from "./context/AuthProvider";
import Flashcards from "./components/Flashcards/Flashcards";
import RequireAuth from "./components/RequireAuth/RequireAuth";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "",
                element: <RequireAuth />,
                children: [
                    {
                        path: '',
                        element: <Decks />
                    },
                    {
                        path: 'end',
                        element: <FinishLearning />
                    },
                    {
                        path: 'flashcards',
                        element: <Flashcards />
                    }
                ]
            },
            {
                path: 'register',
                element: <Register />
            },
            {
                path: 'login',
                element: <Login />
            },
        ]
    },
    {
        path: "/decks/:id/",
        element: <Learning />,
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
