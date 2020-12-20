import { useSelector, useDispatch } from 'react-redux';
import firebase from 'firebase';

export const AlreadyCondition = (props: any) => {
    const state = useSelector((state: any) => state);
    const condition = state.Condition[props.client][1];

    return (
        <div id="condition" className="mt-5 ml-5">
            <div>
                <p>
                    {
                        condition.Stitch > 0 ?
                            ` پہلے ${condition.Stitch} سوٹ سلائی ہیں ` : null
                    }
                </p>
                <p>
                    {
                        condition.UnStitch > 0 ?
                            ` پہلے ${condition.UnStitch} سوٹ بغیر سلی ہیں `
                            : null
                    }
                </p>
                <p>
                    {
                        condition.OutOfOrder > 0 ?
                            ` پہلے ${condition.OutOfOrder} خراب سلائی ہیں `
                            : null
                    }
                </p>
                <p>
                    {
                        condition.Lost > 0 ?
                            ` پہلے ${condition.Lost} کھو چکے ہیں `
                            : null
                    }
                </p>
                <p>
                    {
                        condition.Delivered > 0 ?
                            ` پہلے ${condition.Delivered} پہنچا دیئے گئے ہیں `
                            : null
                    }
                </p>
            </div>
        </div>
    )
}