import type { ReactElement } from "react";
import ChildrenPatternPage from "../children/pages/ChildrenPatternPage";
import ChildrenPatternPage2 from "../children/pages/ChildrenPatternPage2";
import ChildrenPatternPage3 from "../children/pages/ChildrenPatternPage3";

interface AppRoute {
    path: string,
    element: ReactElement;
}

export const routes: AppRoute[] = [
    { path: "/children-pattern", element: <ChildrenPatternPage/>},
    { path: "/children-pattern2", element: <ChildrenPatternPage2/>},
    { path: "/children-pattern3", element: <ChildrenPatternPage3/>},
]