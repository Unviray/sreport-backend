import { Request, Response } from "express";
import { Get } from "tsoa";

import {
  getAllPreacher,
  getPreacher,
  getReturnedInfo,
  updatePreacher,
  createPreacher,
} from "./handlers/preacher";
import {
  mainBoard,
  getServiceYear,
  summary,
  getReturnedService,
  getReport,
  setReport,
} from "./handlers/report";
import { getTags } from "./handlers/tags";
import {
  prettieWorkingMonth,
  workingMonth,
  workingMonthSet,
  unprettifyWorkingMonth,
} from "./handlers/working-month";

interface Routes {
  [path: string]: {
    get?: (req: Request<any, any, any, any>, res: Response) => void;
    post?: (req: Request<any, any, any, any>, res: Response) => void;
  };
}

const routes: Routes = {
  "/main-board": { get: mainBoard },
  "/preacher": { get: getAllPreacher },
  "/preacher/new": { post: createPreacher },
  "/preacher/:id": { get: getPreacher, post: updatePreacher },
  "/report/:preacherId": { get: getReport, post: setReport },
  "/returned-info": { get: getReturnedInfo },
  "/returned-service/:id": { get: getReturnedService },
  "/service-year": { get: getServiceYear },
  "/summary": { get: summary },
  "/tags": { get: getTags },
  "/unprettify-working-month": { get: unprettifyWorkingMonth },
  "/working-month": { get: workingMonth, post: workingMonthSet },
  "/working-month-prettie": { get: prettieWorkingMonth },
};

export default routes;
