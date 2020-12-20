import { useSelector, useDispatch } from 'react-redux';
import firebase from 'firebase';

export const AlreadyCondition = (props: any) => {
    const state = useSelector((state: any) => state);
    const measurment = state.Condition[props.client][1];

    return (
        <div id="condition" className="mt-5 ml-5">
            <div>
                <p>
                    {
                        measurment.Stitch > 0 ?
                            ` پہلے ${measurment.Stitch} سوٹ سلائی ہیں ` : null
                    }
                </p>
                <p>
                    {
                        measurment.UnStitch > 0 ?
                            ` پہلے ${measurment.UnStitch} سوٹ بغیر سلی ہیں `
                            : null
                    }
                </p>
                <p>
                    {
                        measurment.OutOfOrder > 0 ?
                            ` پہلے ${measurment.OutOfOrder} خراب سلائی ہیں `
                            : null
                    }
                </p>
                <p>
                    {
                        measurment.Lost > 0 ?
                            ` پہلے ${measurment.Lost} کھو چکے ہیں `
                            : null
                    }
                </p>
                <p>
                    {
                        measurment.Delivered > 0 ?
                            ` پہلے ${measurment.Delivered} پہنچا دیئے گئے ہیں `
                            : null
                    }
                </p>
            </div>
        </div>
    )
}