import { Action } from 'redux';
import { Point } from '../struct/Point';

interface MoveBallAction { type: 'MOVE_BALL', value: Point}

export type KnownAction = MoveBallAction; // | etc;

export const actionCreators = {
    moveBall: () => <MoveBallAction>{ type: 'MOVE_BALL' },
};
