import { FieldState } from '../../store/Field';
import * as React from "react";
import { RouteComponentProps } from 'react-router-dom';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';


// default class Field extends React.Component<RouteComponentProps<{}>, {}> {

//}

interface FieldGridProps {
    width: number,
    height: number,
}

class FieldGrid extends React.Component<FieldGridProps> {
    constructor(props: FieldGridProps) {
        super(props);
    }

    
    render() {
        const { width, height } = this.props;
        return <table>
        </table>;
    }
}

const mapStateToProps = (state: any) => ({
    width: state.field.width,
    height: state.field.height,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => bindActionCreators({
    //onIncrement: countersActions.increment,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FieldGrid);
