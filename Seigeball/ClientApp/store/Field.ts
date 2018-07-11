import { Action, Reducer } from 'redux';
import { Point } from '../struct/Point';
import { KnownAction } from '../actions/FieldActions'

export interface FieldState {
    width: number;
    height: number;
    goalWidth: number;
    ballPoint: Point;
    time: number;
}

const defaultFieldState: FieldState = {
    width: 60,
    height: 35,
    goalWidth: 3,
    ballPoint: new Point(30, 18),
    time:0,
}

export const reducer: Reducer<FieldState> = (state: FieldState, inAction: Action) => {
    let action = inAction as KnownAction;
    switch (action.type) {
        case 'MOVE_BALL':
            //return {...state, ballPoint : action.value };
        default:
    }
    return state || defaultFieldState;
};
