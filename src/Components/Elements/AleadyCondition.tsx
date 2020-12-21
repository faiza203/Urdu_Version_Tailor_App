import { useSelector, useDispatch } from 'react-redux';

export const AlreadyCondition = (props: any) => {
    const state = useSelector((state: any) => state);
    return (
        <div>
            {state.Condition.length > 0 ?
                state.Condition.map((condition: any[], index: number) => {
                    if (condition[0].toUpperCase() === state.Client[0].toUpperCase()) {
                        return (
                            <div>
                                <div id="condition" className="ml-5">
                                    <div>
                                        <p>
                                            {
                                                condition[1].Stitched > 0 ?
                                                    ` پہلے ${condition[1].Stitched} سوٹ سلائی ہیں ` : null
                                            }
                                        </p>
                                        <p>
                                            {
                                                condition[1].UnStitched > 0 ?
                                                    ` پہلے ${condition[1].UnStitched} سوٹ بغیر سلی ہیں `
                                                    : null
                                            }
                                        </p>
                                        <p>
                                            {
                                                condition[1].OutOfOrder > 0 ?
                                                    ` پہلے ${condition[1].OutOfOrder} خراب سلائی ہیں `
                                                    : null
                                            }
                                        </p>
                                        <p>
                                            {
                                                condition[1].Lost > 0 ?
                                                    ` پہلے ${condition[1].Lost} کھو چکے ہیں `
                                                    : null
                                            }
                                        </p>
                                        <p>
                                            {
                                                condition[1].Delivered > 0 ?
                                                    ` پہلے ${condition[1].Delivered} پہنچا دیئے گئے ہیں `
                                                    : null
                                            }
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                }) :
                null
            }
        </div>
    )
}