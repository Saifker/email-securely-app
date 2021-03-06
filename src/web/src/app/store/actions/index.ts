import {MonoTypeOperatorFunction} from "rxjs";
import {filter} from "rxjs/operators";

import {ACCOUNTS_ACTIONS} from "./accounts";
import {CORE_ACTIONS} from "./core";
import {DB_VIEW_ACTIONS} from "./db-view";
import {NAVIGATION_ACTIONS} from "./navigation";
import {OPTIONS_ACTIONS} from "./options";
import {ROOT_ACTIONS} from "./root";

export {
    ACCOUNTS_ACTIONS,
    CORE_ACTIONS,
    DB_VIEW_ACTIONS,
    NAVIGATION_ACTIONS,
    OPTIONS_ACTIONS,
    ROOT_ACTIONS,
};

export function unionizeActionFilter<P>(
    predicate: (action: any) => action is { type: string, payload: P },
): MonoTypeOperatorFunction<{ type: string, payload: P }> {
    return filter((predicate));
}
