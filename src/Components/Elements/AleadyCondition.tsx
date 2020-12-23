import { useSelector, useDispatch } from 'react-redux';

export const AlreadyCondition = (props: any) => {
    const state = useSelector((state: any) => state);
    console.log(state.Condition);
    
    return (
        <div>
            {state.Condition.length > 0 ?
                state.Condition.map((condition: any[]) => {
                    if (condition[0].toUpperCase() === state.Client.toUpperCase()) {
                        return (
                            <div>
                                <div id="condition" className="ml-5 mt-5 text-dark">
                                    <div>
                                        <h5>
                                            {
                                                condition[1].Stitched > 0 ?
                                                    ` پہلے ${condition[1].Stitched} سوٹ سلائی ہیں ` : null
                                            }
                                        </h5>
                                        <h5>
                                            {
                                                condition[1].UnStitched > 0 ?
                                                    ` پہلے ${condition[1].UnStitched} سوٹ بغیر سلی ہیں `
                                                    : null
                                            }
                                        </h5>
                                        <h5>
                                            {
                                                condition[1].OutOfOrder > 0 ?
                                                    ` پہلے ${condition[1].OutOfOrder} خراب سلائی ہیں `
                                                    : null
                                            }
                                        </h5>
                                        <h5>
                                            {
                                                condition[1].Lost > 0 ?
                                                    ` پہلے ${condition[1].Lost} کھو چکے ہیں `
                                                    : null
                                            }
                                        </h5>
                                        <h5>
                                            {
                                                condition[1].Delivered > 0 ?
                                                    ` پہلے ${condition[1].Delivered} پہنچا دیئے گئے ہیں `
                                                    : null
                                            }
                                        </h5>
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