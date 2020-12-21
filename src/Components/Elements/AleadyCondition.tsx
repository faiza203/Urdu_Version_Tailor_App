import { useSelector, useDispatch } from 'react-redux';

export const AlreadyCondition = (props: any) => {
    const state = useSelector((state: any) => state);
    const condition = state.Condition[props.client][1];
    return (
        <div id="condition" className="ml-5">
            <div>
                <p>
                    {
                        condition.Stitched > 0 ?
                            ` پہلے ${condition.Stitched} سوٹ سلائی ہیں ` : null
                    }
                </p>
                <p>
                    {
                        condition.UnStitched > 0 ?
                            ` پہلے ${condition.UnStitched} سوٹ بغیر سلی ہیں `
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