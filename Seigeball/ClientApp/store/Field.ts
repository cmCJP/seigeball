import { Action, Reducer } from 'redux';
import { Point } from 'ClientApp/struct/Point';

export interface FieldState {
    gridX: number;
    gridY: number;
    goalWidth: number;
    ballPoint: Point;
    time: number;
}

const defaultFieldState: FieldState = {
    gridX: 60,
    gridY: 35,
    goalWidth: 3,
    ballPoint: new Point(30, 18),
    time:0,
}

interface MoveBallAction { type: 'MOVE_BALL', value: Point}

type KnownAction = MoveBallAction; // | etc;


export const actionCreators = {
    moveBall: () => <MoveBallAction>{ type: 'MOVE_BALL' },
};


export const reducer: Reducer<FieldState>= (state:FieldState, incomingAction: KnownAction) => {
    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'MOVE_BALL':
            //return {...state, ballPoint : action.value };
        default:
    }
    return state || defaultFieldState;
};
