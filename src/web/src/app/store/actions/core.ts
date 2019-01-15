import {ofType, unionize} from "@vladimiry/unionize";

export const CORE_ACTIONS = unionize({
        Fail: ofType<Error>(),
        RemoveError: ofType<Error>(),
        UpdateOverlayIcon: ofType<{ hasLoggedOut: boolean, unread: number; unreadBgColor?: string; }>(),
    },
    {
        tag: "type",
        value: "payload",
        tagPrefix: "core:",
    },
);
