"use strict";

import { objectNoId } from '../reducers/object'

export const WORKSPACE_INITIALSTATE = {
    g0Rate: 1000,
    simTime: 1e10,
    cursorPos: [0, 0, 0],
    showGcode: true,
    showLaser: true,
    showDocuments: true,
    showCursor: true,
    showWebcam: false,
    workOffsetX: 0,
    workOffsetY: 0,
}

export const workspace = objectNoId('workspace', WORKSPACE_INITIALSTATE);
