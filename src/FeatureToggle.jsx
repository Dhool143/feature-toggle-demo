

function FeatureToggle(props) {

    if (props.isEnabled) {
        return <h2>{props.featureName}</h2>;
    }

    return <h2>The Feature {props.featureName} is disabled</h2>;

}

export default FeatureToggle;                                                                                                                                     