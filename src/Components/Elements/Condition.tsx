import { useSelector } from 'react-redux';

export const Condition = () => {
    const state = useSelector((state: any) => state);
    const client: any = state.Customers[0];
    return (<div id=" Condition">
        { state.Order.length > 0 ?
            state.Order.map((order: any[], index: number) => {
                if (order[0].toUpperCase() === client.toUpperCase()) {
                    return (
                        <div className="condition ml-5" key={index}>
                            <h2 className="h2 text-muted">آرڈر کی موجودہ حالت</h2>
                            <p className="text-muted"> : اگر آپ حالت شامل کرنا چاہتے ہیں</p>
                            <input type="number" placeholder=" سلائی ہیں  " />
                            <input className=" mt-1 " type="number" placeholder=" پہنچا دیا گیا  " />
                            <input className=" mt-1 " type="number" placeholder=" غیر سلی لباس  " />
                            <input className=" mt-1 " type="number" placeholder=" کھو دیا  " />
                            <input className=" mt-1 " type="number" placeholder=" خراب سلائی  " />
                        </div>
                    )
                }
            }) :
            null
        }
    </div>
    )
}
